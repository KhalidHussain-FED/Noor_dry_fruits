import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ShoppingBag,
  Leaf,
  Menu,
  X,
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavigation = () => {
    setMobileMenu(false);
  };

  const desktopLinkClass = ({ isActive }) =>
    `relative whitespace-nowrap py-2 text-sm font-medium transition-colors duration-200 lg:text-base ${
      isActive
        ? 'text-stone-900'
        : 'text-stone-600 hover:text-stone-900'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex min-h-12 w-full items-center rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-stone-800 text-amber-50'
        : 'text-stone-700 hover:bg-white hover:text-stone-900'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-amber-50/95 shadow-sm backdrop-blur-md">
      <nav className="w-full">
        {/* Desktop / Mobile Header */}
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-8">
          <div
            className="
              grid min-h-16
              grid-cols-[minmax(0,1fr)_auto]
              items-center
              gap-2
              py-2
              md:grid-cols-[1fr_auto_1fr]
            "
          >
            {/* Logo */}
            <div className="min-w-0 justify-self-start">
              <Link
                to="/"
                onClick={handleNavigation}
                className="flex min-w-0 items-center gap-2"
                aria-label="Noor Dry Fruits Home"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-800 text-amber-50 shadow-sm sm:h-11 sm:w-11">
                  <Leaf
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="min-w-0">
                  <span className="block truncate text-base font-bold leading-tight text-stone-900 sm:text-lg lg:text-xl">
                    Noor Dry Fruits
                  </span>

                  <span className="hidden text-[10px] font-medium uppercase tracking-[0.16em] text-amber-700 sm:block">
                    Premium Quality
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Mathematically Centered */}
            <div className="hidden items-center justify-center gap-5 md:flex lg:gap-8">
              <NavLink to="/" className={desktopLinkClass}>
                Home
              </NavLink>

              <NavLink to="/shop" className={desktopLinkClass}>
                Shop
              </NavLink>

              <NavLink to="/about" className={desktopLinkClass}>
                About
              </NavLink>

              <NavLink to="/contact" className={desktopLinkClass}>
                Contact
              </NavLink>
            </div>

            {/* Right Actions */}
            <div className="flex shrink-0 items-center justify-self-end gap-1.5 sm:gap-2 md:gap-3">
              {/* Cart */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="
                  relative
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-stone-700
                  transition-colors
                  duration-200
                  hover:bg-white
                  hover:text-stone-900
                  focus:outline-none
                  focus:ring-2
                  focus:ring-amber-400
                  focus:ring-offset-2
                  sm:h-11
                  sm:w-11
                "
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <ShoppingBag
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  strokeWidth={1.8}
                />

                {cartCount > 0 && (
                  <span
                    className="
                      absolute
                      -right-0.5
                      -top-0.5
                      flex
                      min-h-5
                      min-w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-amber-500
                      px-1
                      text-[10px]
                      font-bold
                      leading-none
                      text-stone-900
                      ring-2
                      ring-amber-50
                    "
                  >
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenu((prev) => !prev)}
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-stone-700
                  transition-colors
                  duration-200
                  hover:bg-white
                  hover:text-stone-900
                  focus:outline-none
                  focus:ring-2
                  focus:ring-amber-400
                  focus:ring-offset-2
                  md:hidden
                  sm:h-11
                  sm:w-11
                "
                aria-label={mobileMenu ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenu}
              >
                {mobileMenu ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
              overflow-hidden
              transition-all
              duration-300
              ease-in-out
              md:hidden
              ${
                mobileMenu
                  ? 'max-h-[420px] pb-3 opacity-100'
                  : 'max-h-0 pb-0 opacity-0'
              }
            `}
          >
            <div className="rounded-2xl border border-stone-200 bg-white p-2 shadow-sm">
              <div className="flex flex-col gap-1">
                <NavLink
                  to="/"
                  onClick={handleNavigation}
                  className={mobileLinkClass}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/shop"
                  onClick={handleNavigation}
                  className={mobileLinkClass}
                >
                  Shop
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={handleNavigation}
                  className={mobileLinkClass}
                >
                  About
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={handleNavigation}
                  className={mobileLinkClass}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;