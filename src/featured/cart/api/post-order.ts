'use server';

import sgMail from '@sendgrid/mail';

import { FROM_EMAIL, SENDGRID_API_KEY, SERVER_URL } from '@/shared/config/env';

import type { CheckoutFormSchema } from '../model/schema';
import type { CartItem } from '../model/types';

import { orderConfirmBody } from '@/featured/email-letters/order-confirm-body';

sgMail.setApiKey(SENDGRID_API_KEY);

export const postOrder = async (data: CheckoutFormSchema, total: number, cart: CartItem[]) => {
  console.log('Cart items received:', cart);
  console.log(
    'Cart item IDs:',
    cart.map((item) => ({ id: item.id, name: item.name }))
  );

  let userId = null;
  const existingUser = await fetchUserByEmail(data.email);

  if (existingUser) {
    userId = existingUser.id;
  } else {
    const password = Math.random().toString(36).slice(-8);

    const newUser = await createUser(data, password);

    console.log('newUser', newUser);

    userId = newUser.doc.id;
  }

  // Validate and process cart items
  const items = await Promise.all(
    cart.map(async (item) => {
      try {
        // First, validate that the product exists and get its details
        const productDetails = await validateAndGetProductDetails(item.id);

        if (!productDetails) {
          throw new Error(`Product with ID ${item.id} not found`);
        }

        const { fileurl, filename } = await getFileUrlForProduct(item.id);

        return {
          product: productDetails.id, // Use the validated product ID
          quantity: item.quantity,
          price: item.price,
          file_url: fileurl,
          file_name: filename,
        };
      } catch (error) {
        console.error(`Error processing item ${item.id}:`, error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        throw new Error(`Invalid product: ${item.id} - ${errorMessage}`);
      }
    })
  );

  const orderNumber = `ORD_${Math.floor(Math.random() * 900000) + 100000}`;

  const orderData = {
    orderNumber,
    user: userId,
    items: items.map((item) => ({
      product: item.product,
      quantity: item.quantity,
      price: item.price,
      file_url: item.file_url,
      file_name: item.file_name,
    })),
    total: total,
    status: 'pending',
    paymentMethod: 'bank_transfer',
    billingAddress: {
      address1: data.address1,
      address2: data.address2,
      city: data.city,
      zip: data.zip,
      country: data.country,
    },
    orderNotes: data.orderNotes || '',
  };

  if (!userId) {
    throw new Error('User ID is required to create an order');
  }

  if (!items || items.length === 0) {
    throw new Error('Order must contain at least one item');
  }

  console.log('Sending order data:', JSON.stringify(orderData, null, 2));

  const response = await fetch(`${SERVER_URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });

  const userMsg = {
    to: data.email,
    from: FROM_EMAIL,
    subject: `Your Order is On! Let’s Get This Party Started – ${orderNumber}`,
    html: orderConfirmBody({
      username: data.firstName,
      orderNumber,
      description: cart.map((item) => item.name).join(', '),
      total: String(total),
      orderDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    }),
  };

  await sgMail.send(userMsg);

  if (!response.ok) {
    console.error(`Order creation failed with status: ${response.status}`);
    const errorText = await response.text();
    console.error('Error response:', errorText);
    throw new Error(`Failed to create order: ${response.status} - ${errorText}`);
  }

  return response.json();
};

export const fetchUserByEmail = async (email: string) => {
  const response = await fetch(`${SERVER_URL}/api/users?where[email][equals]=${email}`);

  if (!response.ok) {
    console.error(`Failed to fetch user by email: ${response.status}`);
    return null;
  }

  const data = await response.json();
  return data.docs && data.docs.length > 0 ? data.docs[0] : null;
};

export const createUser = async (data: CheckoutFormSchema, password: string) => {
  const userData = {
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    password: password,
  };

  console.log('Creating user with data:', JSON.stringify(userData, null, 2));

  const response = await fetch(`${SERVER_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    console.error(`Failed to create user: ${response.status}`);
    const errorText = await response.text();
    console.error('User creation error:', errorText);
    throw new Error(`Failed to create user: ${response.status} - ${errorText}`);
  }

  return response.json();
};

const validateAndGetProductDetails = async (productId: string) => {
  try {
    console.log(`Validating product ID: "${productId}" (type: ${typeof productId})`);

    // Sanitize the product ID - remove any extra spaces or invalid characters
    const sanitizedProductId = productId.trim();
    console.log(`Sanitized product ID: "${sanitizedProductId}"`);

    // Encode the product ID to handle special characters
    const encodedProductId = encodeURIComponent(sanitizedProductId);
    const url = `${SERVER_URL}/api/products/${encodedProductId}`;

    console.log('Validating product details from:', url);

    const res = await fetch(url);

    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status} for product id: ${productId}`);

      // If the direct ID lookup fails, try to search by title
      console.log('Trying to search by title as fallback...');
      const searchUrl = `${SERVER_URL}/api/products?where[title][equals]=${encodeURIComponent(sanitizedProductId)}`;
      console.log('Searching by title:', searchUrl);

      const searchRes = await fetch(searchUrl);

      if (!searchRes.ok) {
        return null;
      }

      const searchData = await searchRes.json();

      if (!searchData.docs || searchData.docs.length === 0) {
        return null;
      }

      const productData = searchData.docs[0];
      console.log('Found product by title search:', productData);

      return {
        id: productData.id,
        title: productData.title,
        price: productData.price,
      };
    }

    const productData = await res.json();
    console.log('Found product by ID:', productData);

    return {
      id: productData.id,
      title: productData.title,
      price: productData.price,
    };
  } catch (error) {
    console.error(`Error validating product ${productId}:`, error);
    return null;
  }
};

const getFileUrlForProduct = async (productId: string) => {
  // Sanitize the product ID - remove any extra spaces or invalid characters
  const sanitizedProductId = productId.trim();

  // Encode the product ID to handle special characters
  const encodedProductId = encodeURIComponent(sanitizedProductId);
  const url = `${SERVER_URL}/api/products/${encodedProductId}`;

  console.log('Fetching product details from:', url);

  const res = await fetch(url);

  if (!res.ok) {
    console.error(`HTTP error! status: ${res.status} for product id: ${sanitizedProductId}`);

    // If the direct ID lookup fails, try to search by title
    console.log('Trying to search by title as fallback...');
    const searchUrl = `${SERVER_URL}/api/products?where[title][equals]=${encodeURIComponent(sanitizedProductId)}`;
    console.log('Searching by title:', searchUrl);

    const searchRes = await fetch(searchUrl);

    if (!searchRes.ok) {
      throw new Error(`Failed to fetch product details for product id: ${sanitizedProductId}`);
    }

    const searchData = await searchRes.json();

    if (!searchData.docs || searchData.docs.length === 0) {
      throw new Error(`Product not found: ${sanitizedProductId}`);
    }

    const productData = searchData.docs[0];
    console.log('Found product by title search:', productData);

    const fileurl =
      productData?.filesurl && productData.filesurl.length > 0
        ? productData.filesurl[0].fileurl
        : null;

    const filename =
      productData?.filesurl && productData.filesurl.length > 0
        ? productData.filesurl[0].filename
        : null;

    return { fileurl, filename };
  }

  const productData = await res.json();

  console.log('productData', productData);

  const fileurl =
    productData?.filesurl && productData.filesurl.length > 0
      ? productData.filesurl[0].fileurl
      : null;

  const filename =
    productData?.filesurl && productData.filesurl.length > 0
      ? productData.filesurl[0].filename
      : null;

  return { fileurl, filename };
};
