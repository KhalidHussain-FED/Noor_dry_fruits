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

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[998] transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[440px] bg-amber-50/95 backdrop-blur-md shadow-2xl z-[999] flex flex-col transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <ShoppingBag size={22} className="text-stone-800" />
            <h2 className="text-xl font-bold text-stone-800">Your Cart</h2>
            <span className="bg-stone-800 text-amber-50 text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="w-9 h-9 rounded-full hover:bg-red-100 text-stone-500 hover:text-red-600 flex items-center justify-center transition-colors"
                aria-label="Clear cart"
                title="Clear cart"
              >
                <Trash2 size={16} />
              </button>
            )}
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-9 h-9 rounded-full hover:bg-stone-200 flex items-center justify-center transition-colors"
              aria-label="Close cart"
            >
              <X size={20} className="text-stone-600" />
            </button>
          </div>
        </div>

        {/* Free shipping progress bar */}
        {cart.length > 0 && (
          <div className="px-6 pt-4 pb-2">
            <div className="bg-white rounded-xl p-3 border border-stone-200">
              {shippingFree ? (
                <div className="flex items-center gap-2 text-green-700">
                  <Truck size={16} className="shrink-0" />
                  <p className="text-xs font-semibold">
                    🎉 You've unlocked FREE delivery!
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <Truck size={16} className="text-stone-600 shrink-0" />
                    <p className="text-xs text-stone-600">
                      Add{' '}
                      <span className="font-bold text-stone-800">
                        Rs {remainingForFree.toLocaleString('en-PK')}
                      </span>{' '}
                      more for <span className="font-semibold">free delivery</span>
                    </p>
                  </div>
                  <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-stone-400">
              <ShoppingBag size={64} strokeWidth={1} className="mb-4" />
              <p className="text-lg font-medium text-stone-600">
                Your cart is empty
              </p>
              <p className="text-sm">Add some delicious dry fruits!</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-6 bg-stone-800 hover:bg-stone-700 text-amber-50 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-stone-200 bg-white/50">
            <div className="flex justify-between items-center mb-2 text-sm text-stone-600">
              <span>Subtotal</span>
              <span className="font-medium">
                Rs {cartTotal.toLocaleString('en-PK')}
              </span>
            </div>

            <div className="flex justify-between items-center mb-4 text-sm text-stone-600">
              <span>Shipping</span>
              {shippingFree ? (
                <span className="text-green-600 font-semibold">Free</span>
              ) : (
                <span className="text-stone-500 text-xs">
                  Calculated at checkout
                </span>
              )}
            </div>

            <div className="flex justify-between items-center mb-5 pt-3 border-t border-stone-200">
              <span className="text-lg font-bold text-stone-800">Total</span>
              <span className="text-2xl font-bold text-stone-800">
                Rs {cartTotal.toLocaleString('en-PK')}
              </span>
            </div>

            {/* COD badge */}
            <div className="flex items-center gap-2 mb-3 text-xs text-stone-600 bg-amber-100/60 rounded-xl px-3 py-2 border border-amber-200">
              <Banknote size={14} className="text-amber-700 shrink-0" />
              <span>
                <strong className="text-stone-800">COD available</strong> across
                Pakistan · EasyPaisa · JazzCash · Card
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-stone-800 hover:bg-stone-700 text-amber-50 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-stone-800/20"
            >
              <CreditCard size={18} /> Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;