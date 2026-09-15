import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-amber-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative z-10 max-w-2xl">
          <span className="inline-block bg-amber-400/20 text-amber-200 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            Premium Quality
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Nature's best,
            <br />
            <span className="text-amber-300">delivered fresh.</span>
          </h1>
          <p className="text-amber-100/80 text-lg mb-8 max-w-lg">
            Handpicked almonds, cashews, pistachios, and more — fresh, crunchy,
            and naturally delicious.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#products"
              className="bg-amber-400 hover:bg-amber-300 text-stone-900 px-8 py-3.5 rounded-full font-bold flex items-center gap-2 transition-colors shadow-lg shadow-amber-400/20"
            >
              Shop Now <ChevronRight size={18} />
            </a>
            <div className="flex items-center gap-3 text-amber-100/70 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-amber-300/30 border-2 border-stone-800 flex items-center justify-center text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>2k+ happy customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;