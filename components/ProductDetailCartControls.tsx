"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

type ProductDetailCartControlsProps = {
  image?: string;
  name: string;
  price: string;
};

export function ProductDetailCartControls({ image, name, price }: ProductDetailCartControlsProps) {
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const decreaseQuantity = () => setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
  const increaseQuantity = () => setQuantity((currentQuantity) => currentQuantity + 1);

  const handleAddToCart = () => {
    addItem({ image, name, price }, quantity);
    setIsAdded(true);
    window.setTimeout(() => setIsAdded(false), 900);
  };

  return (
    <div className="single-product__buy-row">
      <div className="single-product__stepper" aria-label="Quantity">
        <button type="button" aria-label="Increase quantity" onClick={increaseQuantity}>
          +
        </button>
        <span aria-live="polite">{quantity}</span>
        <button type="button" aria-label="Decrease quantity" onClick={decreaseQuantity} disabled={quantity === 1}>
          -
        </button>
      </div>
      <button className={`single-product__cart ${isAdded ? "is-added" : ""}`} type="button" onClick={handleAddToCart} onAnimationEnd={() => openCart()}>
        <span>{isAdded ? "Added" : "Add to cart"}</span>
      </button>
    </div>
  );
}
