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
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 lg:pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="
              flex items-center gap-3 sm:gap-4
              min-w-0
              rounded-2xl sm:rounded-3xl
              border border-stone-100
              bg-white
              p-4 sm:p-5 lg:p-6
              transition-all duration-200
              hover:border-stone-300 hover:shadow-sm
            "
          >
            <div
              className="
                flex h-11 w-11 sm:h-12 sm:w-12
                shrink-0 items-center justify-center
                rounded-xl sm:rounded-2xl
                bg-amber-50
              "
            >
              <Icon
                size={22}
                className="text-stone-700 sm:h-6 sm:w-6"
                strokeWidth={1.8}
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm sm:text-base font-bold leading-snug text-stone-800 break-words">
                {title}
              </p>

              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-stone-500 break-words">
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