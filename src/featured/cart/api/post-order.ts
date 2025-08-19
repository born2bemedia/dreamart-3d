import { SERVER_URL } from '@/shared/config/env';

import type { CheckoutFormSchema } from '../model/schema';
import type { CartItem } from '../model/types';

export const postOrder = async (data: CheckoutFormSchema, total: number, cart: CartItem[]) => {
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

  const items = await Promise.all(
    cart.map(async (item) => {
      try {
        const { fileurl, filename } = await getFileUrlForProduct(item.id);
        return {
          product: item.id,
          quantity: item.quantity,
          price: item.price,
          file_url: fileurl,
          file_name: filename,
        };
      } catch (error) {
        console.error(`Error processing item ${item.id}:`, error);
        // Return the item without file details if the product can't be found
        return {
          product: item.id,
          quantity: item.quantity,
          price: item.price,
          file_url: null,
          file_name: null,
        };
      }
    })
  );

  const orderData = {
    orderNumber: `ORD_${Math.floor(Math.random() * 900000) + 100000}`,
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

  // Validate order data before sending
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

const getFileUrlForProduct = async (productId: string) => {
  // Encode the product ID to handle special characters
  const encodedProductId = encodeURIComponent(productId);
  const url = `${SERVER_URL}/api/products/${encodedProductId}`;

  console.log('Fetching product details from:', url);

  const res = await fetch(url);

  if (!res.ok) {
    console.error(`HTTP error! status: ${res.status} for product id: ${productId}`);

    // If the direct ID lookup fails, try to search by title
    console.log('Trying to search by title as fallback...');
    const searchUrl = `${SERVER_URL}/api/products?where[title][equals]=${encodeURIComponent(productId)}`;
    console.log('Searching by title:', searchUrl);

    const searchRes = await fetch(searchUrl);

    if (!searchRes.ok) {
      throw new Error(`Failed to fetch product details for product id: ${productId}`);
    }

    const searchData = await searchRes.json();

    if (!searchData.docs || searchData.docs.length === 0) {
      throw new Error(`Product not found: ${productId}`);
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
