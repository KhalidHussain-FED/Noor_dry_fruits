
import { useState } from 'react';
import { Plus, Minus, X, ImageOff } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeItem } = useCart();
  const [imgError, setImgError] = useState(false);

  const Icon = item.icon || ImageOff;

  const price = Number(item.price) || 0;
  const originalPrice = Number(item.originalPrice) || 0;
  const quantity = Number(item.quantity) || 0;

  const lineTotal = price * quantity;

  const hasDiscount =
    originalPrice > 0 && originalPrice > price;

  const showIcon = !item.image || imgError;

  const formatPrice = (amount) =>
    Number(amount).toLocaleString('en-PK');

  return (
    <div className="flex w-full min-w-0 items-start gap-2.5 rounded-2xl bg-stone-50 p-2.5 sm:gap-3 sm:p-3">

      {/* Product Image / Icon */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm sm:h-14 sm:w-14">
        {showIcon ? (
          <Icon
            size={22}
            strokeWidth={1.7}
            className="text-stone-500"
            aria-hidden="true"
          />
        ) : (
          <img
            src={item.image}
            alt={item.name || 'Product'}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Product Details */}
      <div className="min-w-0 flex-1">
        <p
          className="break-words text-sm font-semibold leading-snug text-stone-800"
          title={item.name}
        >
          {item.name}
        </p>

        {/* Urdu Name */}
        {item.urdu && (
          <p
            dir="rtl"
            className="mt-0.5 truncate text-xs text-stone-500"
            style={{
              fontFamily: "'Noto Nastaliq Urdu', serif",
            }}
            title={item.urdu}
          >
            {item.urdu}
          </p>
        )}

        {/* Unit Price */}
        <div className="mt-1 flex flex-wrap items-baseline gap-x-1 gap-y-0.5 text-xs leading-relaxed">
          <span
            className={`font-semibold ${
              hasDiscount
                ? 'text-amber-700'
                : 'text-stone-600'
            }`}
          >
            Rs {formatPrice(price)}
          </span>

          {hasDiscount && (
            <span className="text-stone-400 line-through">
              Rs {formatPrice(originalPrice)}
            </span>
          )}

          {item.unit && (
            <span className="text-stone-500">
              / {item.unit}
            </span>
          )}
        </div>

        {/* Line Total */}
        <p className="mt-1 text-xs font-bold text-stone-800">
          Total: Rs {formatPrice(lineTotal)}
        </p>
      </div>

      {/* Remove Button */}
      <button
        type="button"
        onClick={() => removeItem(item.id)}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-stone-400 transition-colors hover:bg-red-100 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1"
        aria-label={`Remove ${item.name} from cart`}
        title="Remove item"
      >
        <X size={16} />
      </button>

      {/* Quantity Controls */}
      <div className="flex shrink-0 items-center gap-1 rounded-full border border-stone-200 bg-white p-0.5 sm:gap-1.5">
        <button
          type="button"
          onClick={() => decreaseQty(item.id)}
          disabled={quantity <= 1}
          className="flex h-7 w-7 items-center justify-center rounded-full text-stone-700 transition-colors hover:bg-stone-800 hover:text-amber-50 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400"
          aria-label={`Decrease quantity of ${item.name}`}
        >
          <Minus size={12} />
        </button>

        <span
          className="min-w-5 text-center text-sm font-bold tabular-nums text-stone-800"
          aria-label={`Quantity ${quantity}`}
        >
          {quantity}
        </span>

        <button
          type="button"
          onClick={() => increaseQty(item.id)}
          className="flex h-7 w-7 items-center justify-center rounded-full text-stone-700 transition-colors hover:bg-stone-800 hover:text-amber-50 focus:outline-none focus:ring-2 focus:ring-stone-400"
          aria-label={`Increase quantity of ${item.name}`}
        >
          <Plus size={12} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;