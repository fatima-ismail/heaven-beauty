"use client";

import Image from "next/image";
import type { CSSProperties, MouseEvent } from "react";
import { assets, stats } from "@/lib/content";
import { Nav } from "./Nav";
import { HeroProductCarousel } from "./HeroProductCarousel";
import { SocialRail } from "./SocialRail";
import { Stat } from "./Stat";

export function Hero() {
  const handleTintMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--tint-x", `${x * 18}px`);
    event.currentTarget.style.setProperty("--tint-y", `${y * 12}px`);
  };

  const resetTintMove = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--tint-x", "0px");
    event.currentTarget.style.setProperty("--tint-y", "0px");
  };

  return (
    <section
      className="hero section-sky"
      aria-label="Heaven Beauty landing hero"
      style={{ "--tint-x": "0px", "--tint-y": "0px" } as CSSProperties}
      onMouseMove={handleTintMove}
      onMouseLeave={resetTintMove}
    >
      <Image className="hero__light" src="/images/light.svg" alt="" width={779} height={548} priority aria-hidden="true" />

      <div className="hero__bottom-shade" aria-hidden="true" />
      <Nav />
      <div className="hero__content">
        <h1>
          Your Beauty,{" "}
          <span className="hero__mobile-elevated">Elevated.</span>
        </h1>
        <div className="hero__product">
          <Image src={assets.product} alt="Heaven Beauty tint bottle resting on a pink cloud" width={920} height={1152} priority />
        </div>
        <div className="hero__meta">
          <div className="stats" aria-label="Store statistics">
            {stats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
          <div className="hero__cta">
            <a className="button button--solid" href="/products">Shop Now</a>
            <p>your glow speaks for itself, we simply enhance it</p>
          </div>
          <HeroProductCarousel />
        </div>
      </div>
      <SocialRail />
    </section>
  );
}
