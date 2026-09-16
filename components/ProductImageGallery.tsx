"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = {
  alt: string;
  kind: "product" | "skin";
  src: string;
};

type ProductImageGalleryProps = {
  displayName: string;
  productImage: string;
  skinImage?: string;
};

export function ProductImageGallery({ displayName, productImage, skinImage }: ProductImageGalleryProps) {
  const images: GalleryImage[] = [
    {
      alt: `${displayName} bottle`,
      kind: "product",
      src: productImage,
    },
    ...(skinImage
      ? [
          {
            alt: `${displayName} skin finish`,
            kind: "skin" as const,
            src: skinImage,
          },
        ]
      : []),
  ];
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="single-product__gallery">
      <div className={`single-product__main-image single-product__main-image--${activeImage.kind}`}>
        <Image src={activeImage.src} alt={activeImage.alt} fill priority sizes="(max-width: 900px) 100vw, 560px" />
      </div>
      <div className="single-product__thumbs" aria-label="Product images">
        {images.map((image) => (
          <button
            className={`single-product__thumb single-product__thumb--${image.kind} ${activeImage.src === image.src ? "is-active" : ""}`}
            key={image.src}
            type="button"
            aria-label={image.alt}
            aria-pressed={activeImage.src === image.src}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image.src} alt="" fill sizes="140px" />
          </button>
        ))}
      </div>
    </div>
  );
}
