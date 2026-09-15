
import { useEffect } from 'react';
import {
  ShoppingBag,
  X,
  CreditCard,
  Truck,
  Banknote,
  Trash2,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

// Free shipping threshold in PKR
const FREE_SHIPPING_THRESHOLD = 3000;

const CartDrawer = () => {
  const {
    cart,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen,
    handleCheckout,
    clearCart,
  } = useCart();

  const shippingFree = cartTotal >= FREE_SHIPPING_THRESHOLD;

  const remainingForFree = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - cartTotal
  );

  const progress = Math.min(
    100,
    (cartTotal / FREE_SHIPPING_THRESHOLD) * 100
  );

  // Prevent background page scrolling while the drawer is open
  useEffect(() => {
    if (!isCartOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isCartOpen]);

  // Close drawer with the Escape key
  useEffect(() => {
    if (!isCartOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCartOpen, setIsCartOpen]);

  const formatPrice = (amount) =>
    `Rs ${Number(amount || 0).toLocaleString('en-PK')}`;

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen
            ? 'opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Cart Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className={`fixed inset-y-0 right-0 z-[999] flex h-full w-full max-w-full flex-col overflow-hidden bg-amber-50/95 shadow-2xl backdrop-blur-md transition-transform duration-300 ease-in-out sm:w-[440px] ${
          isCartOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-stone-200 px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex min-w-0 items-center gap-2">
            <ShoppingBag
              size={22}
              className="shrink-0 text-stone-800"
            />

            <h2
              id="cart-drawer-title"
              className="truncate text-lg font-bold text-stone-800 sm:text-xl"
            >
              Your Cart
            </h2>

            <span className="flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full bg-stone-800 px-1.5 text-xs font-bold text-amber-50">
              {cartCount}
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            {cart.length > 0 && (
              <button
                type="button"
                onClick={handleClearCart}
                className="flex h-9 w-9 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                aria-label="Clear cart"
                title="Clear cart"
              >
                <Trash2 size={17} />
              </button>
            )}

            <button
              type="button"
              onClick={closeCart}
              className="flex h-9 w-9 items-center justify-center rounded-full text-stone-600 transition-colors hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
              aria-label="Close cart"
            >
              <X size={21} />
            </button>
          </div>
        </div>

        {/* Free Shipping Progress */}
        {cart.length > 0 && (
          <div className="shrink-0 px-4 pt-3 sm:px-6 sm:pt-4">
            <div className="rounded-xl border border-stone-200 bg-white p-3 sm:p-4">
              {shippingFree ? (
                <div className="flex items-center gap-2 text-green-700">
                  <Truck size={17} className="shrink-0" />

                  <p className="text-xs font-semibold sm:text-sm">
                    🎉 You've unlocked FREE delivery!
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-2 flex items-start gap-2">
                    <Truck
                      size={17}
                      className="mt-0.5 shrink-0 text-stone-600"
                    />

                    <p className="text-xs leading-relaxed text-stone-600 sm:text-sm">
                      Add{' '}
                      <span className="font-bold text-stone-800">
                        {formatPrice(remainingForFree)}
                      </span>{' '}
                      more for{' '}
                      <span className="font-semibold text-stone-800">
                        free delivery
                      </span>
                    </p>
                  </div>

                  <div
                    className="h-2 w-full overflow-hidden rounded-full bg-stone-100"
                    role="progressbar"
                    aria-label="Progress toward free delivery"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(progress)}
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="mt-1.5 flex justify-between text-[10px] text-stone-400 sm:text-xs">
                    <span>{formatPrice(cartTotal)}</span>
                    <span>
                      {formatPrice(FREE_SHIPPING_THRESHOLD)}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Cart Items / Empty State */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-5">
          {cart.length === 0 ? (
            <div className="flex min-h-full flex-col items-center justify-center px-3 py-8 text-center text-stone-400">
              <ShoppingBag
                size={64}
                strokeWidth={1}
                className="mb-4"
              />

              <p className="text-lg font-medium text-stone-600">
                Your cart is empty
              </p>

              <p className="mt-1 text-sm text-stone-500">
                Add some delicious dry fruits!
              </p>

              <button
                type="button"
                onClick={closeCart}
                className="mt-6 rounded-full bg-stone-800 px-6 py-3 text-sm font-semibold text-amber-50 transition-colors hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="shrink-0 border-t border-stone-200 bg-white/70 px-4 pb-4 pt-4 sm:px-6 sm:pb-5 sm:pt-5">
            {/* Subtotal */}
            <div className="mb-2 flex items-center justify-between gap-3 text-sm text-stone-600">
              <span>Subtotal</span>

              <span className="shrink-0 font-medium text-stone-800">
                {formatPrice(cartTotal)}
              </span>
            </div>

            {/* Shipping */}
            <div className="mb-4 flex items-center justify-between gap-3 text-sm text-stone-600">
              <span>Shipping</span>

              {shippingFree ? (
                <span className="font-semibold text-green-600">
                  Free
                </span>
              ) : (
                <span className="text-right text-xs text-stone-500">
                  Calculated at checkout
                </span>
              )}
            </div>

            {/* Total */}
            <div className="mb-4 flex items-center justify-between gap-3 border-t border-stone-200 pt-3 sm:mb-5">
              <span className="text-lg font-bold text-stone-800">
                Total
              </span>

              <span className="text-xl font-bold text-stone-800 sm:text-2xl">
                {formatPrice(cartTotal)}
              </span>
            </div>

            {/* Payment Information */}
            <div className="mb-3 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-100/60 px-3 py-2.5 text-xs leading-relaxed text-stone-600">
              <Banknote
                size={16}
                className="mt-0.5 shrink-0 text-amber-700"
              />

              <span>
                <strong className="text-stone-800">
                  COD available
                </strong>{' '}
                across Pakistan · EasyPaisa · JazzCash · Card
              </span>
            </div>

            {/* Checkout Button */}
            <button
              type="button"
              onClick={handleCheckout}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-stone-800 px-4 py-3.5 text-sm font-bold text-amber-50 shadow-lg shadow-stone-800/20 transition-all duration-200 hover:bg-stone-700 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 sm:text-base"
            >
              <CreditCard size={18} className="shrink-0" />
              <span>Proceed to Checkout</span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;