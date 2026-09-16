"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { assets } from "@/lib/content";
import { useCart } from "./CartProvider";
import { CurrencyDropdown } from "./CurrencyDropdown";
import { Icon } from "./Icon";

type NavProps = {
  variant?: "hero" | "light";
};

export function Nav({ variant = "hero" }: NavProps) {
  const isLight = variant === "light";
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState(pathname === "/products" ? "/products" : pathname === "/story" ? "/story" : "/#top");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartPulseKey, itemCount, openCart } = useCart();
  const links = [
    { href: "/#top", label: "Home", isActive: pathname === "/" && activeHref !== "/#story" },
    { href: "/products", label: "Shop", isActive: pathname?.startsWith("/products") },
    { href: "/story", label: "Our Story", isActive: pathname === "/story" || (pathname === "/" && activeHref === "/story") }
  ];
  const mobileLinks = [
    { href: "/search", label: "Search", icon: "search" as const },
    { href: "/products", label: "Shop" },
    { href: "/story", label: "Story" }
  ];
  const mobileActionLinks = [
    { href: "#", label: "Login" },
  ];

  useEffect(() => {
    if (pathname?.startsWith("/products")) {
      setActiveHref("/products");
      return;
    }

    if (pathname === "/search") {
      setActiveHref("/search");
      return;
    }

    if (pathname === "/story") {
      setActiveHref("/story");
      return;
    }

    setActiveHref("/#top");
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("has-mobile-menu-open", isMenuOpen);

    return () => {
      document.body.classList.remove("has-mobile-menu-open");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`site-header ${isLight ? "site-header--light" : ""}`}>
        <a className="brand" href="/" aria-label="Heaven Beauty home">
          <Image src={isLight ? assets.logoBlue : assets.logoWhite} alt="Heaven Beauty" width={147} height={43} priority />
        </a>
        <nav aria-label="Primary navigation">
          {links.map((link) => (
            <a
              className={link.isActive ? "is-active" : ""}
              href={link.href}
              key={link.href}
              aria-current={link.isActive ? "page" : undefined}
              onClick={() => setActiveHref(link.href)}
            >
              {link.label}
            </a>
          ))}
          <CurrencyDropdown />
        </nav>
        <div className="header-actions" aria-label="Account and shopping actions">
          <a className="header-action-link" href="#" aria-label="Account">
            {isLight ? <Image src={assets.navIcons.userDark} alt="" width={28} height={28} /> : <Image src={assets.navIcons.user} alt="" width={32} height={32} />}
          </a>
          <a className="header-action-link" href="/search" aria-label="Search">
            {isLight ? <Image src={assets.navIcons.searchDark} alt="" width={28} height={28} /> : <Image src={assets.navIcons.search} alt="" width={24} height={24} />}
          </a>
          <button className="header-action" type="button" aria-label={`Open cart with ${itemCount} item${itemCount === 1 ? "" : "s"}`} onClick={openCart}>
            {isLight ? <Image src={assets.navIcons.cartDark} alt="" width={28} height={28} /> : <Image src={assets.navIcons.cart} alt="" width={24} height={24} />}
            {itemCount > 0 ? (
              <span className="cart-badge" key={cartPulseKey}>
                {itemCount}
              </span>
            ) : null}
          </button>
          <button className="mobile-menu" type="button" aria-label="Open menu" aria-expanded={isMenuOpen} aria-controls="mobile-nav-drawer" onClick={() => setIsMenuOpen(true)}>
            {isLight ? <Icon name="menu" /> : <Image src={assets.navIcons.menu} alt="" width={24} height={24} />}
          </button>
        </div>
      </header>

      <button className={`mobile-nav-scrim ${isMenuOpen ? "is-open" : ""}`} type="button" aria-label="Close menu" onClick={() => setIsMenuOpen(false)} />
      <aside className={`mobile-nav-drawer ${isMenuOpen ? "is-open" : ""}`} id="mobile-nav-drawer" aria-hidden={!isMenuOpen}>
        <div className="mobile-nav-drawer__header">
          <Image src={assets.logoBlue} alt="Heaven Beauty" width={132} height={39} />
          <button type="button" aria-label="Close menu" onClick={() => setIsMenuOpen(false)}>
            x
          </button>
        </div>
        <nav className="mobile-nav-drawer__links" aria-label="Mobile navigation">
          {mobileLinks.map((link) => (
            <a className={link.icon ? "mobile-nav-drawer__link--icon" : undefined} href={link.href} key={link.label} onClick={() => setIsMenuOpen(false)}>
              {link.icon ? <Icon name={link.icon} /> : null}
              {link.label}
            </a>
          ))}
          <div className="mobile-nav-drawer__currency">
            <span>Currency</span>
            <CurrencyDropdown />
          </div>
          {mobileActionLinks.map((link) => (
            <a href={link.href} key={link.label} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
