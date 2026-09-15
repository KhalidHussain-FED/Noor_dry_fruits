import { useState } from 'react';
import { Plus, Minus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeItem } = useCart();
  const Icon = item.icon;
  const [imgError, setImgError] = useState(false);

  const lineTotal = item.price * item.quantity;
  const hasDiscount =
    item.originalPrice && item.originalPrice > item.price;

  // Show icon if no image OR image failed to load
  const showIcon = !item.image || imgError;

  return (
    <div className="flex items-center gap-3 bg-stone-50 rounded-2xl p-3">
      {/* Image or icon */}
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
        {showIcon ? (
          <Icon size={20} className="text-stone-600" />
        ) : (
          <img
            src={item.image}
            alt={item.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Name + price info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-stone-800 text-sm truncate">
          {item.name}
        </p>

        {item.urdu && (
          <p
            dir="rtl"
            className="text-xs text-stone-500 truncate"
            style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
          >
            {item.urdu}
          </p>
        )}

        {/* Unit price (with strikethrough if on sale) */}
        <p className="text-xs text-stone-500 mt-0.5">
          {hasDiscount ? (
            <>
              <span className="font-semibold text-amber-700">
                Rs {item.price.toLocaleString('en-PK')}
              </span>{' '}
              <span className="line-through text-stone-400">
                Rs {item.originalPrice.toLocaleString('en-PK')}
              </span>{' '}
              / {item.unit}
            </>
          ) : (
            <>
              Rs {item.price.toLocaleString('en-PK')} / {item.unit}
            </>
          )}
        </p>

        {/* Line total */}
        <p className="text-xs font-bold text-stone-800 mt-1">
          Total: Rs {lineTotal.toLocaleString('en-PK')}
        </p>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => decreaseQty(item.id)}
          className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-stone-800 hover:text-amber-50 hover:border-stone-800 transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus size={12} />
        </button>
        <span className="w-6 text-center font-bold text-sm text-stone-800">
          {item.quantity}
        </span>
        <button
          onClick={() => increaseQty(item.id)}
          className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-stone-800 hover:text-amber-50 hover:border-stone-800 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={12} />
        </button>
      </div>

      {/* Remove button */}
      <button
        onClick={() => removeItem(item.id)}
        className="text-stone-400 hover:text-red-500 transition-colors ml-1 shrink-0"
        aria-label={`Remove ${item.name} from cart`}
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default CartItem;