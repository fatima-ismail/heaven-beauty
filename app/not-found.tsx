"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="not-found-page" id="top">
      <Nav />
      <section className="not-found-hero" aria-labelledby="not-found-title">
        <Image
          src="/images/optimized/404.png"
          alt="404 Not Found"
          className="not-found-image"
          width={600}
          height={400}
          priority
        />
        <div className="not-found-hero__content">
          <p id="not-found-title">Looks like you&apos;re lost in the clouds...</p>
          <button
            type="button"
            className="not-found-hero__button"
            onClick={() => router.push("/")}
          >
            Lets go back to heaven
          </button>
        </div>
      </section>
    </main>
  );
}
