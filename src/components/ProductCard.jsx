import { useState } from 'react';
import { Plus, Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const TAG_STYLES = {
  Sale: 'bg-red-100 text-red-700 border border-red-200',
  Premium: 'bg-amber-100 text-amber-800 border border-amber-200',
  Organic: 'bg-green-100 text-green-700 border border-green-200',
  Bestseller: 'bg-stone-100 text-stone-700 border border-stone-200',
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const Icon = product.icon || ShoppingBag;
  const [imgError, setImgError] = useState(false);

  const hasDiscount =
    product.originalPrice &&
    product.originalPrice > product.price;

  const showIcon = !product.image || imgError;

  const formattedPrice = product.price?.toLocaleString('en-PK');
  const formattedOriginalPrice =
    product.originalPrice?.toLocaleString('en-PK');

  return (
    <div
      className="
        group
        relative
        flex
        h-full
        min-w-0
        flex-col
        items-center
        rounded-2xl
        border
        border-stone-100
        bg-white
        p-4
        text-center
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        sm:rounded-3xl
        sm:p-5
        lg:p-6
      "
    >
      {/* Tag Badge */}
      {product.tag && (
        <span
          className={`
            absolute
            left-3
            top-3
            z-10
            max-w-[calc(100%-1.5rem)]
            rounded-full
            border
            px-2
            py-1
            text-[9px]
            font-bold
            uppercase
            tracking-wide
            sm:left-4
            sm:top-4
            sm:px-2.5
            sm:text-[10px]
            ${
              TAG_STYLES[product.tag] ||
              'border-stone-200 bg-stone-100 text-stone-700'
            }
          `}
        >
          {product.tag}
        </span>
      )}

      {/* Product Image */}
      <div
        className="
          mb-3
          flex
          h-24
          w-24
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-full
          bg-gradient-to-br
          from-amber-50
          to-stone-100
          transition-transform
          duration-300
          group-hover:scale-105
          sm:mb-4
          sm:h-28
          sm:w-28
        "
      >
        {showIcon ? (
          <Icon
            size={40}
            className="text-stone-600 sm:h-12 sm:w-12"
            strokeWidth={1.5}
          />
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="
              h-full
              w-full
              object-cover
            "
          />
        )}
      </div>

      {/* Product Information */}
      <div className="flex w-full min-w-0 flex-1 flex-col items-center">
        {/* English Name */}
        <h3
          className="
            w-full
            min-w-0
            break-words
            text-base
            font-semibold
            leading-snug
            text-stone-800
            sm:text-lg
          "
        >
          {product.name}
        </h3>

        {/* Urdu Name */}
        {product.urdu && (
          <p
            dir="rtl"
            className="
              mt-0.5
              mb-2
              w-full
              break-words
              text-xs
              font-medium
              leading-relaxed
              text-stone-500
              sm:text-sm
            "
            style={{
              fontFamily: "'Noto Nastaliq Urdu', serif",
            }}
          >
            {product.urdu}
          </p>
        )}

        {/* Rating + Unit */}
        <div
          className="
            mb-3
            flex
            max-w-full
            flex-wrap
            items-center
            justify-center
            gap-1
          "
        >
          <Star
            size={13}
            className="shrink-0 fill-amber-400 text-amber-400 sm:h-3.5 sm:w-3.5"
          />

          <span className="break-words text-[11px] font-medium text-stone-500 sm:text-xs">
            {product.rating} · {product.unit}
          </span>
        </div>

        {/* Price */}
        <div className="mb-4 min-h-[32px] w-full">
          {hasDiscount ? (
            <div
              className="
                flex
                flex-wrap
                items-baseline
                justify-center
                gap-x-2
                gap-y-0.5
              "
            >
              <span
                className="
                  text-xl
                  font-bold
                  text-amber-700
                  sm:text-2xl
                "
              >
                Rs {formattedPrice}
              </span>

              <span
                className="
                  text-xs
                  text-stone-400
                  line-through
                  sm:text-sm
                "
              >
                Rs {formattedOriginalPrice}
              </span>
            </div>
          ) : (
            <span
              className="
                text-xl
                font-bold
                text-stone-800
                sm:text-2xl
              "
            >
              Rs {formattedPrice}
            </span>
          )}
        </div>

        {/* Add To Cart */}
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="
            mt-auto
            flex
            min-h-11
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-stone-800
            px-4
            py-2.5
            text-sm
            font-semibold
            text-amber-50
            transition-all
            duration-200
            hover:bg-amber-400
            hover:text-stone-900
            active:scale-[0.98]
          "
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;