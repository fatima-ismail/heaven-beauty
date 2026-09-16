"use client";

import Image from "next/image";
import { useState } from "react";
import { assets } from "@/lib/content";
import { useCart } from "./CartProvider";
import { useCurrency } from "./CurrencyProvider";

export function FeaturedProduct() {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { formatPrice } = useCurrency();
  const decreaseQuantity = () => setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
  const increaseQuantity = () => setQuantity((currentQuantity) => currentQuantity + 1);
  const buyFeaturedTint = () => {
    addItem({ name: "Heavenly tint - Kind", price: "26$", image: assets.kind }, quantity);
    window.location.href = "/checkout";
  };

  return (
    <section className="feature section-sky">
      <article className="feature-card">
        <div className="feature-card__image">
          <Image src={assets.skin} alt="Close-up of soft pink Heaven Beauty tint on skin" fill sizes="(max-width: 500px) 90vw, 450px" />
        </div>
        <Image className="feature-card__bottle" src={assets.kind} alt="" width={300} height={376} />
        <div className="feature-card__copy">
          <p className="eyebrow">the first of its kind</p>
          <h2>Heavenly tint - Kind</h2>
          <p>A soft kind tint that blends into your skin for a fresh radiant glow.</p>
          <div className="price-row">
            <span>{formatPrice("26$")}</span>
            <small> - One shade, multi- use</small>
          </div>
          <div className="buy-row">
            <div className="stepper" aria-label="Choose quantity">
              <button type="button" onClick={decreaseQuantity} aria-label="Decrease quantity" disabled={quantity === 1}>
                -
              </button>
              <span aria-live="polite">{quantity}</span>
              <button type="button" onClick={increaseQuantity} aria-label="Increase quantity">
                +
              </button>
            </div>
            <button className="button button--outline" type="button" onClick={buyFeaturedTint}>
              Buy It Now
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
