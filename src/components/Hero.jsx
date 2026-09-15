import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-5 sm:pt-8 lg:pt-12 pb-8 sm:pb-12 lg:pb-16">
      <div
        className="
          relative overflow-hidden
          rounded-[1.75rem] sm:rounded-[2.25rem] lg:rounded-[2.5rem]
          bg-gradient-to-br from-stone-800 to-stone-900
          px-5 py-8
          sm:px-10 sm:py-12
          lg:px-16 lg:py-16
          text-amber-50
        "
      >
        {/* Decorative background circles */}
        <div
          className="
            absolute
            -right-24 -top-24
            h-64 w-64
            rounded-full
            bg-amber-400/10
            sm:-right-28 sm:-top-28 sm:h-80 sm:w-80
            lg:-right-32 lg:-top-32 lg:h-96 lg:w-96
          "
        />

        <div
          className="
            absolute
            -bottom-24 -left-24
            h-48 w-48
            rounded-full
            bg-amber-400/5
            sm:-bottom-28 sm:-left-28 sm:h-56 sm:w-56
            lg:-bottom-32 lg:-left-32 lg:h-64 lg:w-64
          "
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-2xl">
          {/* Badge */}
          <span
            className="
              inline-flex items-center
              rounded-full
              bg-amber-400/20
              px-3 py-1.5
              text-[10px] sm:text-xs
              font-bold uppercase
              tracking-wider
              text-amber-200
            "
          >
            Premium Quality
          </span>

          {/* Heading */}
          <h1
            className="
              mt-4
              mb-4
              text-3xl
              font-bold
              leading-[1.1]
              tracking-tight
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Nature's best,
            <br />
            <span className="text-amber-300">
              delivered fresh.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              max-w-xl
              text-sm
              leading-relaxed
              text-amber-100/80
              sm:text-base
              lg:text-lg
            "
          >
            Handpicked almonds, cashews, pistachios, and more — fresh,
            crunchy, and naturally delicious.
          </p>

          {/* CTA + Customers */}
          <div
            className="
              mt-7
              flex
              flex-col
              items-stretch
              gap-5
              sm:mt-8
              sm:flex-row
              sm:flex-wrap
              sm:items-center
              sm:gap-4
            "
          >
            {/* Shop Button */}
            <a
              href="#products"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-amber-400
                px-7 py-3.5
                text-sm
                font-bold
                text-stone-900
                shadow-lg
                shadow-amber-400/20
                transition-colors
                hover:bg-amber-300
                sm:w-auto
                sm:px-8
              "
            >
              Shop Now
              <ChevronRight size={18} />
            </a>

            {/* Happy Customers */}
            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                text-xs
                text-amber-100/70
                sm:justify-start
                sm:text-sm
              "
            >
              {/* Customer avatars */}
              <div className="flex shrink-0 -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="
                      flex
                      h-8 w-8
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-stone-800
                      bg-amber-300/30
                      text-xs
                      font-bold
                      text-amber-100
                    "
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>

              <span className="whitespace-nowrap">
                2k+ happy customers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;