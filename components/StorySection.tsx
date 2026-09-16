"use client";

import Image from "next/image";
import { storyImages, values } from "@/lib/content";

export function StorySection() {
  const firstColumn = storyImages.filter((_, index) => index % 2 === 0);
  const secondColumn = storyImages.filter((_, index) => index % 2 === 1);

  return (
    <section className="story section-story" id="story">
      <div className="story__copy">
        <p className="eyebrow">Our vision</p>
        <h2 >
          Designed to <span className="font-accent">enhance</span>, not to mask your natural beauty.
        </h2>
        <p>Our long-lasting, easy to blend tints adapt to every tone, leaving a soft radiant glow for sensitive skin.</p>
        <div className="value-grid">
          {values.map((value) => (
            <span key={value.label}>
              <Image src={value.icon} alt="" width={32} height={33} />
              {value.label}
            </span>
          ))}
        </div>
        <a className="button button--light" href="/story">
          Discover more about our story
        </a>
      </div>
      <div className="story__gallery-wrap">
        <div className="story__gallery" aria-label="Heaven Beauty story photos">
          {[firstColumn, secondColumn].map((column, columnIndex) => (
            <div className="story__track" key={columnIndex}>
              {[...column, ...column].map((src, index) => (
                <figure key={`${src}-${index}`} className="story-card">
                  <Image src={src} alt="Heaven Beauty community member applying tint" fill sizes="(max-width: 700px) 44vw, 240px" />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
