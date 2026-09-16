"use client";

import Image from "next/image";
import Link from "next/link";
import { createContext, type ReactNode, useContext, useMemo, useState } from "react";
import { useCurrency } from "./CurrencyProvider";

type CartProduct = {
  name: string;
  price: string;
  image?: string;
};

type CartItem = CartProduct & {
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  addItem: (product: CartProduct, quantity?: number) => void;
  decreaseItem: (name: string) => void;
  increaseItem: (name: string) => void;
  removeItem: (name: string) => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  cartPulseKey: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartPulseKey, setCartPulseKey] = useState(0);

  const addItem = (product: CartProduct, quantity = 1) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.name === product.name);

      if (existingItem) {
        return currentItems.map((item) => (item.name === product.name ? { ...item, quantity: item.quantity + quantity } : item));
      }

      return [...currentItems, { ...product, quantity }];
    });
    setCartPulseKey((currentKey) => currentKey + 1);
  };

  const decreaseItem = (name: string) => {
    setItems((currentItems) =>
      currentItems
        .map((item) => (item.name === name ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const increaseItem = (name: string) => {
    setItems((currentItems) => currentItems.map((item) => (item.name === name ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const removeItem = (name: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.name !== name));
  };

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  const contextValue = useMemo(
    () => ({
      items,
      itemCount,
      addItem,
      decreaseItem,
      increaseItem,
      removeItem,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      cartPulseKey
    }),
    [cartPulseKey, isCartOpen, itemCount, items]
  );

  return (
    <CartContext.Provider value={contextValue}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}

function CartDrawer() {
  const { closeCart, decreaseItem, increaseItem, isCartOpen, itemCount, items, removeItem } = useCart();
  const { formatPrice } = useCurrency();

  return (
    <>
      <button
        className={`cart-scrim ${isCartOpen ? "is-open" : ""}`}
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
      />
      <aside className={`cart-drawer ${isCartOpen ? "is-open" : ""}`} aria-label="Shopping cart" aria-hidden={!isCartOpen}>
        <div className="cart-drawer__header">
          <h2>
            Cart <span>{itemCount}</span>
          </h2>
          <button type="button" aria-label="Close cart" onClick={closeCart}>
            x
          </button>
        </div>

        <div className="cart-drawer__items">
          {items.length ? (
            items.map((item) => (
              <article className="cart-drawer__item" key={item.name}>
                <div className="cart-drawer__image">
                  {item.image ? <Image src={item.image} alt={`${item.name} Heaven Beauty tint`} fill sizes="44px" /> : null}
                </div>
                <div className="cart-drawer__details">
                  <div className="cart-drawer__line">
                    <h3>{item.name}</h3>
                    <strong>{formatPrice(item.price)}</strong>
                  </div>
                  <div className="cart-drawer__controls">
                    <span>{formatPrice(item.price)}</span>
                    <div className="cart-drawer__stepper" aria-label={`${item.name} quantity`}>
                      <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => increaseItem(item.name)}>
                        +
                      </button>
                      <span aria-live="polite">{item.quantity}</span>
                      <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => decreaseItem(item.name)}>
                        -
                      </button>
                    </div>
                    <button className="cart-drawer__remove" type="button" aria-label={`Remove ${item.name}`} onClick={() => removeItem(item.name)}>
                      <span aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="cart-drawer__empty">
              <p>Your cart is having a quiet little spa day.</p>
              <Link href="/products" onClick={closeCart}>
                Shop Now
              </Link>
            </div>
          )}
        </div>

        {itemCount > 0 ? (
          <Link className="cart-drawer__checkout" href="/checkout" onClick={closeCart}>
            Checkout
          </Link>
        ) : (
          <button className="cart-drawer__checkout cart-drawer__checkout--disabled" type="button" disabled>
            Checkout
          </button>
        )}
      </aside>
    </>
  );
}
