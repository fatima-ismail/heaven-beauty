import { CommunitySection } from "@/components/CommunitySection";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import { StorySection } from "@/components/StorySection";

export default function Home() {
  return (
    <main>
      <ScrollAnimator />
      <Hero />
      <StorySection />
      <ProductSection />
      <FeaturedProduct />
      <CommunitySection />
      <Footer />
    </main>
  );
}
