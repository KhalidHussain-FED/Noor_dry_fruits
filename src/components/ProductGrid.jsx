import { useEffect, useMemo, useState } from 'react';
import { Search, Star, SlidersHorizontal, X } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';

const ITEMS_PER_PAGE = 8; // items shown per "page"

const ProductGrid = ({ hideHeader = false }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Reset visible count whenever filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [search, activeCategory, sortBy]);

  // Unique categories
  const categories = useMemo(() => {
    const set = new Set(PRODUCTS.map((p) => p.category).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, []);

  // Precompute per-category counts once
  const categoryCounts = useMemo(() => {
    const counts = { All: PRODUCTS.length };
    PRODUCTS.forEach((p) => {
      if (p.category) {
        counts[p.category] = (counts[p.category] || 0) + 1;
      }
    });
    return counts;
  }, []);

  // Filter + search + sort
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    const q = search.trim().toLowerCase();
    if (q) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.urdu && p.urdu.includes(search.trim())) ||
          (p.category && p.category.toLowerCase().includes(q)) ||
          (p.tag && p.tag.toLowerCase().includes(q))
      );
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [search, activeCategory, sortBy]);

  // Visible slice
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;
  const remaining = filteredProducts.length - visibleCount;

  const clearFilters = () => {
    setSearch('');
    setActiveCategory('All');
    setSortBy('featured');
  };

  const hasActiveFilters =
    search !== '' || activeCategory !== 'All' || sortBy !== 'featured';

  return (
    <section
      id="products"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
    >
      {/* Header (hidden on /shop) */}
      {!hideHeader && (
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800">
              Our Bestsellers
            </h2>
            <p className="text-stone-500 mt-1">
              Freshly sourced, carefully packed
            </p>
          </div>
          <Star
            size={40}
            className="text-amber-400 fill-amber-400 hidden sm:block"
          />
        </div>
      )}

      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search almonds, dates, بادام..."
            className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
            >
              <X size={14} className="text-stone-600" />
            </button>
          )}
        </div>

        <div className="relative">
          <SlidersHorizontal
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none hidden sm:block"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none w-full sm:w-52 pl-4 sm:pl-10 pr-9 py-3 rounded-full bg-white border border-stone-200 text-stone-700 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="name">Name (A–Z)</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 text-xs">
            ▼
          </span>
        </div>
      </div>

      {/* Category pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 -mx-1 px-1">
        {categories.map((cat) => {
          const count = categoryCounts[cat] || 0;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-colors flex items-center gap-2 ${
                activeCategory === cat
                  ? 'bg-stone-800 text-amber-50 border-stone-800'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:text-stone-900'
              }`}
            >
              {cat}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-stone-900'
                    : 'bg-stone-100 text-stone-500'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Result count + clear */}
      <div className="flex items-center justify-between mb-6 text-sm">
        <p className="text-stone-500">
          {filteredProducts.length === 0 ? (
            'No products'
          ) : (
            <>
              Showing{' '}
              <span className="font-semibold text-stone-800">
                {visibleProducts.length}
              </span>{' '}
              of{' '}
              <span className="font-semibold text-stone-800">
                {filteredProducts.length}
              </span>{' '}
              {filteredProducts.length === 1 ? 'product' : 'products'}
              {activeCategory !== 'All' && (
                <>
                  {' '}
                  in{' '}
                  <span className="font-medium text-stone-700">
                    {activeCategory}
                  </span>
                </>
              )}
            </>
          )}
        </p>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-amber-700 hover:text-amber-800 font-medium flex items-center gap-1 transition-colors"
          >
            <X size={14} /> Clear filters
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Load more / All loaded */}
          <div className="flex flex-col items-center justify-center mt-12 gap-3">
            {hasMore ? (
              <button
                onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
                className="bg-stone-800 hover:bg-stone-700 text-amber-50 px-8 py-3 rounded-full font-medium text-sm transition-colors shadow-sm"
              >
                Load More ({remaining} remaining)
              </button>
            ) : (
              filteredProducts.length > ITEMS_PER_PAGE && (
                <p className="text-sm text-stone-400 flex items-center gap-2">
                  <span className="w-12 h-px bg-stone-200" />
                  You've viewed all {filteredProducts.length} products
                  <span className="w-12 h-px bg-stone-200" />
                </p>
              )
            )}
          </div>
        </>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center mb-4">
            <Search size={32} className="text-stone-400" />
          </div>
          <h3 className="text-lg font-semibold text-stone-800 mb-1">
            No products found
          </h3>
          <p className="text-stone-500 text-sm mb-6 max-w-sm">
            Try a different keyword or reset your filters to browse all
            products.
          </p>
          <button
            onClick={clearFilters}
            className="bg-stone-800 hover:bg-stone-700 text-amber-50 px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            Reset filters
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;