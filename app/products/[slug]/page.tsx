import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ProductPrice } from "@/components/ProductPrice";
import { ProductDetailCartControls } from "@/components/ProductDetailCartControls";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import { getProductBySlug, getRelatedProducts, productIngredients, products } from "@/lib/content";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const recommendations = getRelatedProducts(product.slug);

  return (
    <main id="top">
      <ScrollAnimator />
      <Nav variant="light" />
      <section className="single-product">
        <div className="single-product__inner">
          <div className="single-product__hero">
            <ProductImageGallery displayName={product.displayName} productImage={product.image} skinImage={product.skinImage} />

            <div className="single-product__copy">
              <h2>{product.displayName}</h2>
              <p>{product.description}</p>

              <div className="single-product__price-row">
                <strong>
                  <ProductPrice price={product.price} />
                </strong>
                <span />
                <small>One shade, multi- use</small>
              </div>

              <ProductDetailCartControls image={product.image} name={product.displayName} price={product.price} />
            </div>
          </div>

          <section className="single-product__ingredients" aria-labelledby="ingredients-title">
            <h2 id="ingredients-title">Ingredients</h2>
            <p>{productIngredients}</p>
          </section>

          <section className="single-product__recommendations" aria-labelledby="recommended-title">
            <h2 id="recommended-title">You May Also Like</h2>
            <div className="single-product__cards">
              {recommendations.map((item) => (
                <a className="single-product-card" href={`/products/${item.slug}`} key={item.name}>
                  <div className="single-product-card__image">
                    <Image src={item.image} alt={`${item.name} Heaven Beauty tint`} fill sizes="(max-width: 700px) 48vw, 260px" />
                  </div>
                  <div className="single-product-card__info">
                    <span>{item.shade}</span>
                    <strong>
                      <ProductPrice price={item.price} />
                    </strong>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
