import Image from "next/image";
import { values } from "@/lib/content";

export function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Brand values">
      {values.map((value) => (
        <span title={value.label} key={value.label}>
          <Image src={value.icon} alt={value.label} width={32} height={33} />
        </span>
      ))}
    </aside>
  );
}
