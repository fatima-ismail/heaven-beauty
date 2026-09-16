import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import type { CSSProperties } from "react";

const returnPolicies = [
  {
    title: "Returns & Exchanges",
    body: "For hygiene and safety reasons we do not accept returns or exchanges on any products once purchased."
  },
  {
    title: "Order Cancellations",
    body: "Orders may only be canceled within short time after being placed. Once an order has been processed or shipped it can no longer be canceled."
  },
  {
    title: "Damaged or Incorrect Orders",
    body: "If you receive damaged or incorrect item please contact us within 48 hours of delivery. Our team will review your request and assist you accordingly."
  }
];

export default function ReturnPage() {
  return (
    <main id="top">
      <ScrollAnimator />
      <Nav variant="light" />
      <section className="return-page" aria-labelledby="return-title">
        <div className="return-page__inner">
          <h1 id="return-title" className="scroll-reveal">
            Return & Cancellation
          </h1>
          <div className="return-policy-list" aria-label="Return and cancellation policies">
            {returnPolicies.map((policy, index) => (
              <article
                className="return-policy-card scroll-reveal"
                key={policy.title}
                style={{ "--scroll-delay": `${index * 80}ms` } as CSSProperties}
              >
                <h2>{policy.title}</h2>
                <p>{policy.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
