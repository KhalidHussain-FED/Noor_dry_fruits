import { useState } from 'react';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const TAG_STYLES = {
  Sale: 'bg-red-100 text-red-700 border border-red-200',
  Premium: 'bg-amber-100 text-amber-800 border border-amber-200',
  Organic: 'bg-green-100 text-green-700 border border-green-200',
  Bestseller: 'bg-stone-100 text-stone-700 border border-stone-200',
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const Icon = product.icon;
  const [imgError, setImgError] = useState(false);

  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;

  // Show icon if no image OR image failed to load
  const showIcon = !product.image || imgError;

  return (
    <div className="group bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative">
      {/* Tag badge */}
      {product.tag && (
        <span
          className={`absolute top-4 left-4 z-10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
            TAG_STYLES[product.tag] || 'bg-stone-100 text-stone-700'
          }`}
        >
          {product.tag}
        </span>
      )}

      {/* Image or icon */}
      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber-50 to-stone-100 flex items-center justify-center mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
        {showIcon ? (
          <Icon size={48} className="text-stone-600" strokeWidth={1.5} />
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* English name */}
      <h3 className="text-lg font-semibold text-stone-800 mb-0.5 leading-tight">
        {product.name}
      </h3>

      {/* Urdu name */}
      {product.urdu && (
        <p
          dir="rtl"
          className="text-sm text-stone-500 mb-2 font-medium"
          style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
        >
          {product.urdu}
        </p>
      )}

      {/* Rating + unit */}
      <div className="flex items-center gap-1 mb-3">
        <Star size={14} className="fill-amber-400 text-amber-400" />
        <span className="text-xs text-stone-500 font-medium">
          {product.rating} · {product.unit}
        </span>
      </div>

      {/* Price */}
      <div className="mb-4">
        {hasDiscount ? (
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-2xl font-bold text-amber-700">
              Rs {product.price.toLocaleString('en-PK')}
            </span>
            <span className="text-sm text-stone-400 line-through">
              Rs {product.originalPrice.toLocaleString('en-PK')}
            </span>
          </div>
        ) : (
          <span className="text-2xl font-bold text-stone-800">
            Rs {product.price.toLocaleString('en-PK')}
          </span>
        )}
      </div>

      {/* Add to cart */}
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-stone-800 hover:bg-amber-400 hover:text-stone-900 text-amber-50 py-2.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors duration-200 text-sm"
      >
        <Plus size={16} /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;