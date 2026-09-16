"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroCarouselProducts } from "@/lib/content";

const INTERVAL = 2800;

export function HeroProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const advance = () => {
      setIsTransitioning(true);
      setPrevIndex(activeIndex);

      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % heroCarouselProducts.length);
        setIsTransitioning(false);
      }, 500);
    };

    timeoutRef.current = setTimeout(advance, INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex]);

  const getImageClass = (index: number) => {
    if (index === activeIndex && !isTransitioning) return "carousel-slide carousel-slide--active";
    if (index === activeIndex && isTransitioning) return "carousel-slide carousel-slide--active carousel-slide--exiting";
    if (index === prevIndex && isTransitioning) return "carousel-slide carousel-slide--entering";
    return "carousel-slide";
  };

  return (
    <div className="hero-carousel" aria-label="Featured products carousel">
      <div className="hero-carousel__frame">
        {heroCarouselProducts.map((product, index) => (
          <Image
            className={getImageClass(index)}
            key={product.image}
            src={product.image}
            alt={`${product.name} Heaven Beauty tint`}
            fill
            priority={index === 0}
            sizes="(max-width: 700px) 31vw, 190px"
          />
        ))}
      </div>
      <div className="hero-carousel__dots" aria-hidden="true">
        {heroCarouselProducts.map((product, index) => (
          <span
            className={index === activeIndex ? "is-active" : ""}
            key={product.name}
          />
        ))}
      </div>
    </div>
  );
}
