"use client";

import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { useCart } from "@/components/CartProvider";
import { useCurrency } from "@/components/CurrencyProvider";

const deliveryFields = [
  { label: "Country/Region", className: "checkout-field--wide" },
  { label: "First name" },
  { label: "Last name" },
  { label: "Address", className: "checkout-field--wide" },
  { label: "Apartment, suite, etc. (optional)", className: "checkout-field--wide" },
  { label: "City" },
  { label: "Postal code (optional)" },
  { label: "Phone", className: "checkout-field--wide" }
];

const shippingPrice = 4;

function getPriceValue(price: string) {
  const numericPrice = Number.parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(numericPrice) ? numericPrice : 0;
}

export default function CheckoutPage() {
  const { itemCount, items } = useCart();
  const { formatPrice } = useCurrency();
  const subtotal = items.reduce((total, item) => total + getPriceValue(item.price) * item.quantity, 0);
  const total = subtotal + shippingPrice;

  return (
    <main id="top" className="checkout-page">
      <Nav variant="light" />

      {itemCount === 0 ? (
        <section className="checkout-empty" aria-labelledby="empty-checkout-title">
          <h1 id="empty-checkout-title">Your cart is empty</h1>
          <p>Add your favorite Heaven Beauty tint before continuing to checkout.</p>
          <Link href="/products">Shop products</Link>
        </section>
      ) : (
        <section className="checkout" aria-labelledby="checkout-title">
          <h1 id="checkout-title" className="checkout__title">
            Checkout
          </h1>

          <form className="checkout__form">
            <section className="checkout-panel" aria-labelledby="contact-title">
              <h2 id="contact-title">Contact</h2>
              <label className="checkout-field checkout-field--wide">
                <input type="text" name="contact" aria-label="Email or mobile phone number" placeholder="Email or mobile phone number" />
              </label>
              <label className="checkout-check">
                <input type="checkbox" name="offers" />
                <span>Email me with news and offers</span>
              </label>
            </section>

            <section className="checkout-panel" aria-labelledby="delivery-title">
              <h2 id="delivery-title">Delivery</h2>
              <div className="checkout-grid">
                {deliveryFields.map((field) => (
                  <label className={`checkout-field ${field.className ?? ""}`} key={field.label}>
                    <input type="text" name={field.label.toLowerCase().replaceAll(" ", "-")} aria-label={field.label} placeholder={field.label} />
                  </label>
                ))}
              </div>
              <label className="checkout-check">
                <input type="checkbox" name="save-information" />
                <span>Save this information for next time</span>
              </label>
            </section>

            <section className="checkout-panel" aria-labelledby="shipping-title">
              <h2 id="shipping-title">Shipping method</h2>
              <label className="checkout-option">
                <input type="radio" name="shipping-method" defaultChecked />
                <span>Lebanon</span>
              </label>
            </section>

            <section className="checkout-panel" aria-labelledby="payment-title">
              <h2 id="payment-title">Payment</h2>
              <p>All transactions are secure and encrypted</p>
              <label className="checkout-option">
                <input type="radio" name="payment-method" defaultChecked />
                <span>Cash on Delivery (COD)</span>
              </label>
            </section>

            <section className="checkout-panel" aria-labelledby="billing-title">
              <h2 id="billing-title">Billing address</h2>
              <label className="checkout-option">
                <input type="radio" name="billing-address" defaultChecked />
                <span>Same as shipping address</span>
              </label>
              <label className="checkout-option">
                <input type="radio" name="billing-address" />
                <span>Use a different billing address</span>
              </label>
            </section>

            <button className="checkout-submit" type="submit">
              Complete Checkout
            </button>
          </form>

          <aside className="checkout-summary" aria-labelledby="summary-title">
            <h2 id="summary-title">Order Summary</h2>
            <div className="checkout-summary__divider" />

            <div className="checkout-summary__items">
              {items.map((item) => (
                <article className="checkout-item" key={item.name}>
                  <div className="checkout-item__image">
                    {item.image ? <Image src={item.image} alt={`${item.name} Heaven Beauty tint`} fill sizes="96px" /> : null}
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <strong>{formatPrice(getPriceValue(item.price) * item.quantity)}</strong>
                </article>
              ))}
            </div>

            <div className="checkout-summary__divider" />

            <div className="checkout-discount">
              <label className="checkout-discount__field">
                <input type="text" name="discount-code" aria-label="Gift or discount code" placeholder="Gift or discount code" />
              </label>
              <button type="button" disabled>
                Apply
              </button>
            </div>

            <div className="checkout-summary__divider" />

            <dl className="checkout-totals">
              <div>
                <dt>Subtotal</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
              <div>
                <dt>Shipping</dt>
                <dd>{formatPrice(shippingPrice)}</dd>
              </div>
            </dl>

            <div className="checkout-summary__divider" />

            <div className="checkout-total">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>
          </aside>
        </section>
      )}
    </main>
  );
}
