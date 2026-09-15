import { CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Toast = () => {
  const { toast } = useCart();

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[1100] transition-all duration-300 ${
        toast.show
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-stone-800 text-amber-50 px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-medium">
        <CheckCircle size={18} className="text-green-400" />
        {toast.message}
      </div>
    </div>
  );
};

export default Toast;