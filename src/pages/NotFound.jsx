import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] w-full items-center justify-center bg-amber-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-md text-center">

        {/* 404 */}
        <p
          className="mb-2 text-6xl font-bold leading-none text-amber-500 sm:text-7xl md:text-8xl"
          aria-label="404"
        >
          404
        </p>

        {/* Heading */}
        <h1 className="mb-3 text-2xl font-bold leading-tight text-stone-800 sm:text-3xl">
          Page not found
        </h1>

        {/* Description */}
        <p className="mx-auto mb-7 max-w-sm text-sm leading-6 text-stone-500 sm:mb-8 sm:text-base sm:leading-7">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-stone-800 px-6 py-3 text-sm font-semibold text-amber-50 transition-colors hover:bg-stone-700 sm:w-auto"
          >
            <Home
              size={17}
              className="shrink-0"
            />
            <span>Go Home</span>
          </Link>

          <Link
            to="/shop"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-100 sm:w-auto"
          >
            <Search
              size={17}
              className="shrink-0"
            />
            <span>Browse Shop</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;