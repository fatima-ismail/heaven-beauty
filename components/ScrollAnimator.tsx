"use client";

import { useEffect } from "react";

const scrollTargets = [
  ".section-story .story__copy",
  ".section-story .story__gallery",
  ".products__header",
  ".filters",
  ".product-card",
  ".feature-card",
  ".story-hero__copy",
  ".story-founder",
  ".story-inspiration",
  ".story-values h2",
  ".story-value-cloud",
  ".return-page h1",
  ".return-policy-card",
  ".community .eyebrow",
  ".community__grid",
  ".community-cloud",
  ".footer__inner"
].join(",");

export function ScrollAnimator() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(scrollTargets));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("scroll-reveal", "is-visible"));
      return;
    }

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--scroll-delay", `${Math.min(index * 45, 260)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.14 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
