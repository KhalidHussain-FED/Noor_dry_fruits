import ProductGrid from '../components/ProductGrid';
import Features from '../components/Features';

const Shop = () => {
  return (
    <>
      {/* Page banner */}
      <section className="bg-gradient-to-br from-amber-100 to-amber-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-amber-700 font-semibold text-sm uppercase tracking-widest mb-2">
            Our Collection
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-3">
            Shop All Products
          </h1>
          <p className="text-stone-600 max-w-xl mx-auto">
            Browse our complete range of premium dry fruits, nuts, seeds, and
            mixes — delivered fresh across Pakistan.
          </p>
        </div>
      </section>

      <div className="py-12">
        <ProductGrid />
        <Features />
      </div>
    </>
  );
};

export default Shop;