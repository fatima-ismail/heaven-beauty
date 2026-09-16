import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ScrollAnimator } from "@/components/ScrollAnimator";

export default function OrderTrackPage() {
  return (
    <main id="top">
      <ScrollAnimator />
      <Nav variant="light" />
      <section className="return-page order-track-page" aria-labelledby="order-track-title">
        <div className="return-page__inner order-track-page__inner">
          <h1 id="order-track-title" className="scroll-reveal">
            Track Your Order
          </h1>
          <form className="order-track-form scroll-reveal" action="#" aria-label="Track your order">
            <label htmlFor="order-number">Order number</label>
            <div className="order-track-form__row">
              <input id="order-number" name="orderNumber" type="text" placeholder="Enter your order number" autoComplete="off" />
              <button type="submit">Track order</button>
            </div>
            <p>Enter the order number from your confirmation message to check your order status.</p>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
