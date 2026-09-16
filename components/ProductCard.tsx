"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "./CartProvider";
import { useCurrency } from "./CurrencyProvider";

type ProductCardProps = {
  slug: string;
  name: string;
  price: string;
  image?: string;
  hoverImage?: string;
};

export function ProductCard({ slug, name, price, image, hoverImage }: ProductCardProps) {
  const { addItem, openCart } = useCart();
  const { formatPrice } = useCurrency();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({ name, price, image });
    setIsAdded(true);
    window.setTimeout(() => setIsAdded(false), 900);
  };

  return (
    <article className="product-card">
      <a className="product-card__link" href={`/products/${slug}`} aria-label={`View ${name}`}>
        <div className="product-card__image">
          {image ? (
            <>
              <Image className="product-card__primary-image" src={image} alt={`${name} Heaven Beauty tint`} fill sizes="(max-width: 900px) 55vw, 260px" />
              {hoverImage ? (
                <Image className="product-card__hover-image" src={hoverImage} alt="" fill sizes="(max-width: 900px) 55vw, 260px" />
              ) : null}
            </>
          ) : null}
        </div>
        <div className="product-card__info">
          <span>{name}</span>
          <strong>{formatPrice(price)}</strong>
        </div>
      </a>
      <button className={isAdded ? "is-added" : ""} type="button" onClick={handleAddToCart} onAnimationEnd={() => openCart()}>
        <span>{isAdded ? "Added" : "Add to cart"}</span>
      </button>
    </article>
  );
}
