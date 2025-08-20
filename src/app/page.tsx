import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';

export default function Home() {
  return (
    <>
      <Hero />
      <section id="products" className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
