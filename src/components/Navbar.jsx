import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Leaf, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [mobileMenu, setMobileMenu] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-medium transition-colors ${
      isActive
        ? 'text-stone-900'
        : 'text-stone-600 hover:text-stone-900'
    }`;

  return (
    <nav className="sticky top-0 z-40 bg-amber-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Leaf size={28} className="text-stone-800" />
            <span className="text-2xl font-bold text-stone-800 tracking-tight">
              Noor Dry Fruits
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>
            <NavLink to="/shop" className={linkClass}>
              Shop
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-stone-800 hover:bg-stone-700 text-amber-50 px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              <span className="hidden sm:inline font-medium text-sm">Cart</span>
              {cartCount > 0 && (
                <span className="bg-amber-400 text-stone-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenu ? (
                <X size={20} className="text-stone-700" />
              ) : (
                <Menu size={20} className="text-stone-700" />
              )}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="md:hidden py-4 border-t border-stone-200 flex flex-col gap-3">
            <NavLink
              to="/"
              end
              className="text-stone-600 font-medium px-2 py-1.5"
              onClick={() => setMobileMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className="text-stone-600 font-medium px-2 py-1.5"
              onClick={() => setMobileMenu(false)}
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className="text-stone-600 font-medium px-2 py-1.5"
              onClick={() => setMobileMenu(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-stone-600 font-medium px-2 py-1.5"
              onClick={() => setMobileMenu(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;