import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import type { CSSProperties } from "react";

const faqs = [
  {
    title: "How do I choose the right shade?",
    body: "Our tints are designed to feel soft and wearable. If you are unsure, choose the shade closest to your everyday lip tone for the most natural finish."
  },
  {
    title: "How long does delivery take?",
    body: "Delivery timing depends on your location and courier availability. After your order is confirmed, our team will prepare it and share updates when it is on the way."
  },
  {
    title: "Can I change my order after placing it?",
    body: "Please contact us as soon as possible after placing your order. Once an order has been processed or shipped, changes may no longer be available."
  },
  {
    title: "Are Heaven Beauty products cruelty free?",
    body: "Yes. Heaven Beauty is made with a cruelty-free approach and created for soft, everyday beauty."
  }
];

export default function FAQPage() {
  return (
    <main id="top">
      <ScrollAnimator />
      <Nav variant="light" />
      <section className="return-page" aria-labelledby="faq-title">
        <div className="return-page__inner">
          <h1 id="faq-title" className="scroll-reveal">
            FAQ
          </h1>
          <div className="return-policy-list" aria-label="Frequently asked questions">
            {faqs.map((faq, index) => (
              <article
                className="return-policy-card scroll-reveal"
                key={faq.title}
                style={{ "--scroll-delay": `${index * 80}ms` } as CSSProperties}
              >
                <h2>{faq.title}</h2>
                <p>{faq.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
