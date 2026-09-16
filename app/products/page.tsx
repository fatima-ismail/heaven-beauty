import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ProductSection } from "@/components/ProductSection";
import { ScrollAnimator } from "@/components/ScrollAnimator";

export default function ProductsPage() {
  return (
    <main id="top">
      <ScrollAnimator />
      <Nav variant="light" />
      <ProductSection variant="page" />
      <Footer />
    </main>
  );
}
