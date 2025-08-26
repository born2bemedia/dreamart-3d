'use client';

import { Button } from '@/shared/ui/kit';

import { useCartStore } from '@/featured/cart/model/store';

export const AddToCart = ({
  id,
  title,
  price,
  image,
  button_text,
}: {
  id: number;
  title: string;
  price: number;
  image: string;
  button_text: string;
}) => {
  const { addToCart, setTotal, total, setIsCartFilled } = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      id: id.toString(),
      name: title,
      price,
      image: image,
      quantity: 1,
      subtotal: price,
    });
    setTotal(total + price);
    setIsCartFilled(true);
  };

  return <Button text={button_text} type="button" onClick={handleAddToCart} />;
};
