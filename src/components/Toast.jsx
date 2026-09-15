import { CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Toast = () => {
  const { toast } = useCart();

  return (
    <div
      className={`
        fixed
        bottom-4
        left-1/2
        z-[1100]
        w-[calc(100%-2rem)]
        max-w-md
        -translate-x-1/2
        transition-all
        duration-300
        sm:bottom-6
        sm:w-auto
        ${
          toast.show
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }
      `}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className="
          flex
          min-h-12
          w-full
          items-center
          justify-center
          gap-2.5
          rounded-2xl
          bg-stone-800
          px-4
          py-3
          text-center
          text-sm
          font-medium
          text-amber-50
          shadow-2xl
          sm:w-auto
          sm:min-w-[220px]
          sm:rounded-full
          sm:px-6
        "
      >
        <CheckCircle
          size={18}
          className="shrink-0 text-green-400"
          strokeWidth={2}
        />

        <span className="min-w-0 break-words">
          {toast.message}
        </span>
      </div>
    </div>
  );
};

export default Toast;