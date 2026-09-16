"use client";

import { useState } from "react";
import { productFilters, products } from "@/lib/content";
import { ProductCard } from "./ProductCard";

type ProductSectionProps = {
  variant?: "home" | "page";
};

export function ProductSection({ variant = "home" }: ProductSectionProps) {
  const [activeFilter, setActiveFilter] = useState(productFilters[0]);
  const visibleProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.name.toLowerCase().includes(activeFilter.toLowerCase()));
  const isPage = variant === "page";

  return (
    <section className={`products ${isPage ? "products--page" : ""}`} id="shop">
      <div className="products__header">
        {isPage ? (
          <h1>Products</h1>
        ) : (
          <>
            <h2>Effortless skin friendly tints</h2>
            <p>Each tint adapts beautifully to every skin tone, leaving a soft, radiant glow that feels comfortable even on sensitive skin.</p>
          </>
        )}
      </div>
      <div className="filters" aria-label="Product filters">
        {productFilters.map((filter) => (
          <button
            className={filter === activeFilter ? "is-active" : ""}
            key={filter}
            type="button"
            aria-pressed={filter === activeFilter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.name} slug={product.slug} name={product.name} price={product.price} image={product.image} hoverImage={product.skinImage} />
        ))}
      </div>
    </section>
  );
}
