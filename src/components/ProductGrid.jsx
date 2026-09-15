import { useEffect, useMemo, useState } from 'react';
import {
  Search,
  Star,
  SlidersHorizontal,
  X,
} from 'lucide-react';

import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';

const ITEMS_PER_PAGE = 8;

const ProductGrid = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // ─── Categories ───────────────────────────
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        PRODUCTS
          .map((product) => product.category)
          .filter(Boolean)
      ),
    ];

    return ['All', ...uniqueCategories];
  }, []);

  // ─── Category Counts ──────────────────────
  const categoryCounts = useMemo(() => {
    const counts = {
      All: PRODUCTS.length,
    };

    PRODUCTS.forEach((product) => {
      if (product.category) {
        counts[product.category] =
          (counts[product.category] || 0) + 1;
      }
    });

    return counts;
  }, []);

  // ─── Filter + Sort ────────────────────────
  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = PRODUCTS.filter((product) => {
      const matchesCategory =
        category === 'All' ||
        product.category === category;

      const searchableText = [
        product.name,
        product.category,
        product.description,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      const matchesSearch =
        !query ||
        searchableText.includes(query);

      return (
        matchesCategory &&
        matchesSearch
      );
    });

    // Price: Low to High
    if (sort === 'price-low') {
      result = [...result].sort(
        (a, b) =>
          Number(a.price || 0) -
          Number(b.price || 0)
      );
    }

    // Price: High to Low
    if (sort === 'price-high') {
      result = [...result].sort(
        (a, b) =>
          Number(b.price || 0) -
          Number(a.price || 0)
      );
    }

    // Highest Rated
    if (sort === 'rating') {
      result = [...result].sort(
        (a, b) =>
          Number(b.rating || 0) -
          Number(a.rating || 0)
      );
    }

    return result;
  }, [search, category, sort]);

  // ─── Reset Pagination ─────────────────────
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [search, category, sort]);

  const visibleProducts =
    filteredProducts.slice(
      0,
      visibleCount
    );

  const hasMore =
    visibleCount <
    filteredProducts.length;

  return (
    <section className="w-full overflow-hidden bg-amber-50">
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-3
          sm:px-6
          lg:px-8
        "
      >

        {/* ─── Header ───────────────────────── */}
        <div className="mb-7 sm:mb-9 lg:mb-10">

          {/* Title + Search */}
          <div
            className="
              mb-5
              flex
              flex-col
              gap-5
              lg:mb-7
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            {/* Title */}
            <div className="min-w-0">
              <h2
                className="
                  text-2xl
                  font-bold
                  leading-tight
                  text-stone-800
                  sm:text-3xl
                "
              >
                Our Products
              </h2>

              <p className="mt-1.5 text-sm text-stone-500">
                {filteredProducts.length}{' '}
                products available
              </p>
            </div>

            {/* Search + Sort */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-3
                sm:flex-row
                lg:w-auto
              "
            >

              {/* Search */}
              <div
                className="
                  relative
                  w-full
                  sm:min-w-[260px]
                  lg:w-[300px]
                "
              >
                <Search
                  size={18}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-stone-400
                  "
                />

                <input
                  type="search"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search products..."
                  aria-label="Search products"
                  className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-stone-200
                    bg-white
                    pl-10
                    pr-10
                    text-base
                    text-stone-800
                    outline-none
                    transition
                    focus:border-amber-500
                    focus:ring-2
                    focus:ring-amber-100
                    sm:text-sm
                  "
                />

                {search && (
                  <button
                    type="button"
                    onClick={() =>
                      setSearch('')
                    }
                    aria-label="Clear search"
                    className="
                      absolute
                      right-2
                      top-1/2
                      flex
                      h-8
                      w-8
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-lg
                      text-stone-400
                      hover:bg-stone-100
                      hover:text-stone-700
                    "
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Sort */}
              <div
                className="
                  relative
                  w-full
                  sm:w-auto
                "
              >
                <SlidersHorizontal
                  size={17}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-stone-400
                  "
                />

                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(e.target.value)
                  }
                  aria-label="Sort products"
                  className="
                    h-11
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-stone-200
                    bg-white
                    pl-10
                    pr-9
                    text-base
                    text-stone-700
                    outline-none
                    transition
                    focus:border-amber-500
                    focus:ring-2
                    focus:ring-amber-100
                    sm:w-[190px]
                    sm:text-sm
                  "
                >
                  <option value="featured">
                    Featured
                  </option>

                  <option value="price-low">
                    Price: Low to High
                  </option>

                  <option value="price-high">
                    Price: High to Low
                  </option>

                  <option value="rating">
                    Highest Rated
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* ─── Mobile Category Dropdown ───── */}
          <div className="mb-1 block sm:hidden">

            <label
              htmlFor="mobile-category"
              className="
                mb-2
                block
                text-sm
                font-semibold
                text-stone-700
              "
            >
              Category
            </label>

            <select
              id="mobile-category"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="
                h-12
                w-full
                appearance-none
                rounded-xl
                border
                border-stone-200
                bg-white
                px-4
                text-base
                font-medium
                text-stone-700
                outline-none
                transition
                focus:border-amber-500
                focus:ring-2
                focus:ring-amber-100
              "
            >
              {categories.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item} (
                  {categoryCounts[item] || 0}
                  )
                </option>
              ))}
            </select>
          </div>

          {/* ─── Desktop Category Tabs ───────── */}
          <div
            className="
              hidden
              overflow-x-auto
              pb-1
              sm:block
            "
          >
            <div className="flex min-w-max gap-2">
              {categories.map((item) => {
                const active =
                  category === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setCategory(item)
                    }
                    className={`
                      inline-flex
                      min-h-10
                      items-center
                      gap-2
                      whitespace-nowrap
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-medium
                      transition
                      ${
                        active
                          ? 'bg-amber-700 text-white shadow-sm'
                          : 'border border-stone-200 bg-white text-stone-600 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800'
                      }
                    `}
                  >
                    <span>
                      {item}
                    </span>

                    <span
                      className={`
                        rounded-full
                        px-2
                        py-0.5
                        text-xs
                        ${
                          active
                            ? 'bg-white/20 text-white'
                            : 'bg-stone-100 text-stone-500'
                        }
                      `}
                    >
                      {categoryCounts[item] || 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ─── Products ─────────────────────── */}
        {visibleProducts.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              sm:gap-5
              lg:grid-cols-3
              lg:gap-6
              xl:grid-cols-4
            "
          >
            {visibleProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              )
            )}
          </div>
        ) : (
          /* ─── Empty State ────────────────── */
          <div
            className="
              rounded-2xl
              border
              border-stone-100
              bg-white
              px-5
              py-12
              text-center
              sm:rounded-3xl
              sm:px-8
              sm:py-16
            "
          >
            <div
              className="
                mx-auto
                mb-4
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-amber-50
              "
            >
              <Search
                size={24}
                className="text-amber-700"
              />
            </div>

            <h3
              className="
                text-lg
                font-bold
                text-stone-800
                sm:text-xl
              "
            >
              No products found
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-md
                text-sm
                leading-6
                text-stone-500
              "
            >
              Try changing your search or
              selecting a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch('');
                setCategory('All');
              }}
              className="
                mt-5
                min-h-11
                rounded-full
                bg-amber-700
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-amber-800
              "
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* ─── Load More ────────────────────── */}
        {hasMore && (
          <div
            className="
              flex
              justify-center
              pt-8
              sm:pt-10
            "
          >
            <button
              type="button"
              onClick={() =>
                setVisibleCount(
                  (current) =>
                    current + ITEMS_PER_PAGE
                )
              }
              className="
                min-h-11
                w-full
                rounded-full
                border
                border-amber-700
                bg-white
                px-6
                py-3
                text-sm
                font-semibold
                text-amber-700
                transition
                hover:bg-amber-50
                sm:w-auto
              "
            >
              Load More Products
            </button>
          </div>
        )}

        {/* ─── Results Info ─────────────────── */}
        {filteredProducts.length > 0 && (
          <div
            className="
              mt-6
              mb-8
              flex
              items-center
              justify-center
              gap-2
              pb-2
              text-xs
              text-stone-500
              sm:mt-8
              sm:mb-10
              sm:pb-0
              sm:text-sm
            "
          >
            <Star
              size={14}
              className="
                shrink-0
                fill-amber-500
                text-amber-500
              "
            />

            <span className="text-center">
              Showing {visibleProducts.length} of{' '}
              {filteredProducts.length} products
            </span>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductGrid;