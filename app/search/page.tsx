import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SearchClient } from "./SearchClient";

export default function SearchPage() {
  return (
    <main id="top">
      <Nav variant="light" />
      <SearchClient />
      <Footer />
    </main>
  );
}
