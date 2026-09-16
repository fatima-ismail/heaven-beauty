"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Icon } from "@/components/Icon";
import { products } from "@/lib/content";

export function SearchClient() {
  const [query, setQuery] = useState("");
  const trimmedQuery = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!trimmedQuery) {
      return products;
    }

    return products.filter((product) => {
      const searchableText = [product.name, product.displayName, product.finish, product.shade, product.description].join(" ").toLowerCase();

      return searchableText.includes(trimmedQuery);
    });
  }, [trimmedQuery]);

  return (
    <section className="search-page" aria-labelledby="search-title">
      <div className="search-page__inner">
        <div className="search-page__header">
          <p className="eyebrow">Find your tint</p>
          <h1 id="search-title">Search</h1>
        </div>

        <label className="search-field">
          <Icon name="search" />
          <input autoComplete="off" autoFocus name="search" onChange={(event) => setQuery(event.target.value)} placeholder="Search by shade or finish" type="search" value={query} />
        </label>

        <div className="search-page__summary" aria-live="polite">
          {trimmedQuery ? `${results.length} result${results.length === 1 ? "" : "s"} for "${query.trim()}"` : "All products"}
        </div>

        {results.length > 0 ? (
          <div className="product-grid search-page__grid">
            {results.map((product) => (
              <ProductCard image={product.image} key={product.slug} name={product.displayName} price={product.price} slug={product.slug} />
            ))}
          </div>
        ) : (
          <div className="search-empty">
            <Image src="/images/cloud.svg" alt="" width={170} height={86} />
            <h2>No results found</h2>
            <p>Try searching for Pure, Love, Kind, Sparkly, Heavenly, or Devotion.</p>
          </div>
        )}
      </div>
    </section>
  );
}
