import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-bold text-amber-500 mb-2">404</p>
        <h1 className="text-2xl font-bold text-stone-800 mb-2">
          Page not found
        </h1>
        <p className="text-stone-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="bg-stone-800 hover:bg-stone-700 text-amber-50 px-6 py-3 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-colors"
          >
            <Home size={16} /> Go Home
          </Link>
          <Link
            to="/shop"
            className="bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 px-6 py-3 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-colors"
          >
            <Search size={16} /> Browse Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;