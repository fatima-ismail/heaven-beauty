import Image from "next/image";
import { communityImages } from "@/lib/content";

export function CommunitySection() {
  const columns = [0, 1, 2].map((columnIndex) => {
    const column = communityImages.filter((_, index) => index % 3 === columnIndex);

    while (column.length < 4) {
      column.push(communityImages[(column.length + columnIndex) % communityImages.length]);
    }

    return column;
  });

  return (
    <section className="community">
      <p className="eyebrow">Community love</p>
      <div className="community__grid">
        {columns.map((column, columnIndex) => (
          <div className="community__track" key={`community-column-${columnIndex}`}>
            {[...column, ...column].map((src, imageIndex) => (
              <figure key={`${src}-${imageIndex}`} className="community-shot">
                <Image src={src} alt="Heaven Beauty customer review" fill sizes="(max-width: 700px) 30vw, 250px" />
              </figure>
            ))}
          </div>
        ))}
        <div className="community-cloud">
          <h2>Loved By 100+ Beauties</h2>
          <p>Real routines from real skin, shared by the people wearing Heavenly Tint every day.</p>
        </div>
      </div>
    </section>
  );
}
