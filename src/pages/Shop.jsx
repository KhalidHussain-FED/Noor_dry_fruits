import ProductGrid from '../components/ProductGrid';
import Features from '../components/Features';

const Shop = () => {
  return (
    <main className="w-full overflow-hidden bg-amber-50">

      {/* ─── Shop Hero ──────────────────────── */}
      <section className="border-b border-stone-200 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8 lg:py-16">

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 sm:text-sm sm:tracking-widest">
            Our Collection
          </p>

          <h1 className="mb-3 text-3xl font-bold leading-tight text-stone-800 sm:text-4xl md:text-5xl">
            Shop All Products
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-relaxed">
            Browse our complete range of premium dry fruits, nuts, seeds, and
            mixes — delivered fresh across Pakistan.
          </p>
        </div>
      </section>

      {/* ─── Product Section ────────────────── */}
      <section className="w-full py-8 sm:py-10 lg:py-12">
        <ProductGrid />
      </section>

      {/* ─── Features ──────────────────────── */}
      <section className="w-full pb-8 sm:pb-10 lg:pb-14">
        <Features />
      </section>

    </main>
  );
};

export default Shop;