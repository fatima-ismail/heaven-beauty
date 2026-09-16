"use client";

import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export default function StoryPage() {
  return (
    <main className="story-editorial-page" id="top">
      {/* Top Navigation */}
      <header className="story-editorial__header">
        <Nav variant="light" />
      </header>

      {/* Editorial Storytelling Layout */}
      <div className="story-editorial-wrapper">
        {/* Continuous Looping Thread SVG Line */}
        <svg
          className="story-editorial__thread"
          viewBox="0 0 1200 2400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 1040 180 
               C 920 300, 800 460, 740 580
               C 680 700, 710 800, 770 790
               C 830 780, 840 660, 730 670
               C 620 680, 440 840, 260 1040
               C 90 1220, 60 1400, 140 1460
               C 230 1520, 330 1440, 400 1380
               C 480 1310, 460 1540, 400 1730
               C 340 1920, 200 1980, 230 2110
               C 260 2230, 410 2270, 540 2180
               C 660 2090, 800 2120, 960 2240"
            stroke="rgba(85, 116, 176, 0.28)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* BLOCK 1: Our Story */}
        <section className="story-editorial-block story-editorial-block--1" aria-labelledby="story-title">
          <div className="story-editorial-card">
            <span className="story-editorial__badge">✨ The Story Behind The Glow</span>
            <h1 id="story-title" className="story-editorial-title">
              Born in the Clouds, <span className="font-accent">Made for Your Skin</span>
            </h1>

            <div className="story-editorial__founder-tag">
              <span className="founder-tag-label">Founded by Lebanese beauty creator</span>
              <span className="founder-tag-name">Sarah Hammoud</span>
            </div>

            <p>
              Heaven Beauty was born from years of testing, reviewing, and understanding what truly works — and what
              doesn&apos;t. Sarah set out to create makeup that delivers a flawless, effortless glow for a mindful generation.
            </p>
            <p>
              We craft weightless, skin-first tints created to celebrate your natural complexion with an effortless, lit-from-within radiance.
            </p>

            <div className="story-editorial__tags">
              <span>🌸 100% Cruelty Free</span>
              <span>💧 Weightless Hydration</span>
              <span>✨ Lit-From-Within Glow</span>
            </div>
          </div>

          <div className="story-editorial-media story-editorial-media--single">
            <div className="story-editorial-frame story-editorial-frame--tall">
              <Image
                src="/images/sara/imgi_89_IMG_5185.JPG-1-1-1-1-1-1-1-scaled 1.png"
                alt="Heaven Beauty natural radiance"
                width={700}
                height={920}
                priority
              />
            </div>
          </div>
        </section>

        {/* BLOCK 2: The Founder */}
        <section className="story-editorial-block story-editorial-block--2" aria-labelledby="founder-title">
          <div className="story-editorial-media story-editorial-media--dual">
            <div className="story-editorial-frame story-editorial-frame--main">
              <Image
                src="/images/sara/imgi_16_IMG_2407.JPG-scaled 1.png"
                alt="Sarah Hammoud, Founder of Heaven Beauty"
                width={650}
                height={840}
              />
            </div>
            <div className="story-editorial-frame story-editorial-frame--overlap-left">
              <Image
                src="/images/sara/imgi_8_heavenbeauty.lb_1760198427_3741138022361260167_65902285909-630x788 1.png"
                alt="Sarah showcasing Heaven Beauty tint"
                width={480}
                height={600}
              />
            </div>
          </div>

          <div className="story-editorial-card story-editorial-card--founder">
            <span className="story-editorial__badge">💖 Our Why</span>
            <h2 id="founder-title" className="story-editorial-title">
              The Heart <span className="font-accent">Behind It</span>
            </h2>

            <p className="story-editorial-lead">
              Heaven Beauty was created to redefine beauty as something effortless, intentional, and true to you.
            </p>
            <p>
              We believe makeup shouldn&apos;t feel like a mask. Our formulas are meticulously crafted to melt into your
              skin, enhancing your natural radiance and giving you that healthy, lit-from-within glow every single day.
            </p>
            <p>
              Formulated for all skin types, especially sensitive skin, every tint delivers breathable, nourishing hydration
              infused with self-love.
            </p>

            <div className="story-editorial-signature">
              <span>— Sarah Hammoud</span>
              <small>Founder &amp; Creator, Heaven Beauty</small>
            </div>

            <Link href="/products" className="story-editorial-btn">
              Explore Our Vision
            </Link>
          </div>
        </section>

        {/* BLOCK 3: Our Philosophy & The Inception */}
        <section className="story-editorial-block story-editorial-block--3" aria-labelledby="philosophy-title">
          <div className="story-editorial-card">
            <span className="story-editorial__badge">☁️ The Inception</span>
            <h2 id="philosophy-title" className="story-editorial-title">
              One Touch. <span className="font-accent">Endless Radiance.</span>
            </h2>

            <p className="story-editorial-lead">
              We started with multipurpose tints for lips and cheeks.
            </p>
            <p>
              Why? Because a single touch of the right color brings instant vitality, confidence, and natural charm to any
              look. No complicated routines — just swipe, blend, and glow.
            </p>

            <div className="story-editorial__features">
              <div className="story-editorial-pill">
                <span className="story-editorial-pill__icon">💋</span>
                <div>
                  <strong>Lip &amp; Cheek Harmony</strong>
                  <small>Seamlessly blends across lips and cheeks for cohesive warmth.</small>
                </div>
              </div>
              <div className="story-editorial-pill">
                <span className="story-editorial-pill__icon">☁️</span>
                <div>
                  <strong>Cloud-Light Feel</strong>
                  <small>Airy, non-sticky formula that lets your skin breathe all day long.</small>
                </div>
              </div>
              <div className="story-editorial-pill">
                <span className="story-editorial-pill__icon">🌿</span>
                <div>
                  <strong>Skin-First Actives</strong>
                  <small>Packed with hydration to soften and nourish while you wear it.</small>
                </div>
              </div>
            </div>

            <Link href="/products" className="story-editorial-btn">
              Shop All Tints
            </Link>
          </div>

          <div className="story-editorial-media story-editorial-media--trio">
            <div className="story-editorial-frame story-editorial-frame--trio-main">
              <Image
                src="/images/sara/imgi_43_Untitled_design_2 1.png"
                alt="Heaven Beauty tint application"
                width={620}
                height={800}
              />
            </div>
            <div className="story-editorial-frame story-editorial-frame--trio-sub-left">
              <Image
                src="/images/sara/imgi_74_heavenbeauty.lb_1762448458_3760012651565741825_65902285909-819x1024 1.png"
                alt="Dewy complexion finish"
                width={450}
                height={560}
              />
            </div>
            <div className="story-editorial-frame story-editorial-frame--trio-sub-right story-editorial-frame--product">
              <Image
                src="/images/optimized/story-product.png"
                alt="Heaven Beauty artisanal tint bottle"
                width={600}
                height={414}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Call to Action & Footer */}
      <div className="story-values-section-bg">
        <section className="story-values" aria-labelledby="story-values-title">
          <div className="story-cta-section">
            <div className="story-cta-card">
              <h2>Ready to experience <span className="font-accent">Heavenly</span> skin?</h2>
              <p>Discover our best-selling hydrating tints and find your signature shade.</p>
              <div className="story-cta-buttons">
                <Link className="button button--solid story-cta__btn" href="/products">
                  Shop All Tints
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
