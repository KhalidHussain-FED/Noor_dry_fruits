import { Truck, Shield, Leaf, Banknote } from 'lucide-react';

const FEATURES = [
  {
    icon: Truck,
    title: 'Free Delivery',
    desc: 'On orders over Rs 3,000',
  },
  {
    icon: Banknote,
    title: 'Cash on Delivery',
    desc: 'Pay when it arrives',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    desc: 'EasyPaisa · JazzCash · Card',
  },
  {
    icon: Leaf,
    title: 'Fresh & Natural',
    desc: 'No preservatives, ever',
  },
];

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-3xl p-6 flex items-center gap-4 border border-stone-100 hover:border-stone-300 hover:shadow-sm transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
              <Icon size={24} className="text-stone-700" />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-stone-800 text-sm sm:text-base truncate">
                {title}
              </p>
              <p className="text-xs sm:text-sm text-stone-500 truncate">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;