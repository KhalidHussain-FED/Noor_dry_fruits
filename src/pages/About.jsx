import {
  Leaf,
  Heart,
  Award,
  Truck,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── WhatsApp config ────────────────────────────────
// Local: 03094658807 → International: +92 309 4658807
const WHATSAPP_NUMBER = '923094658807';
const WHATSAPP_DISPLAY = '0309 465 8807';

const WHATSAPP_MESSAGE =
  'Assalam o Alaikum! I would like to inquire about your dry fruits.';

const STATS = [
  { value: '10,000+', label: 'Happy Customers' },
  { value: '50+', label: 'Premium Products' },
  { value: '100%', label: 'Natural & Fresh' },
  { value: '24/7', label: 'Customer Support' },
];

const VALUES = [
  {
    icon: Leaf,
    title: '100% Natural',
    desc: 'No preservatives, no artificial colors. Just pure, natural goodness in every bite.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    desc: 'Hand-picked from the finest farms, then quality-checked before every shipment.',
  },
  {
    icon: Heart,
    title: 'Made with Care',
    desc: 'Every order is packed with love and attention to make sure it reaches you fresh.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Same-day dispatch and quick delivery across all major cities in Pakistan.',
  },
];

const About = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <div className="w-full overflow-hidden bg-amber-50">

      {/* ─── Hero ───────────────────────────── */}
      <section className="border-b border-stone-200 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 sm:text-sm sm:tracking-widest">
            Our Story
          </p>

          <h1 className="mb-4 text-3xl font-bold leading-tight text-stone-800 sm:text-4xl md:text-5xl">
            About Noor Dry Fruits
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-relaxed">
            Since 2015, we've been on a mission to bring Pakistan the finest,
            freshest dry fruits and nuts — sourced from trusted farms around the
            world, packed with love in Karachi.
          </p>
        </div>
      </section>

      {/* ─── Stats ──────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="flex min-h-[120px] flex-col items-center justify-center rounded-2xl border border-stone-100 bg-white p-4 text-center sm:min-h-[140px] sm:rounded-3xl sm:p-6"
            >
              <p className="mb-1 text-2xl font-bold text-stone-800 sm:text-3xl lg:text-4xl">
                {value}
              </p>

              <p className="text-xs leading-5 text-stone-500 sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Story ──────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Story visual */}
          <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 to-stone-100 sm:aspect-video lg:aspect-[4/3]">
            <Leaf
              size={90}
              className="text-amber-600/40 sm:h-[110px] sm:w-[110px] lg:h-[120px] lg:w-[120px]"
              strokeWidth={1}
            />
          </div>

          {/* Story content */}
          <div className="min-w-0">
            <h2 className="mb-4 text-2xl font-bold leading-tight text-stone-800 sm:text-3xl">
              From Our Family to Yours
            </h2>

            <div className="space-y-4 text-sm leading-7 text-stone-600 sm:text-base sm:leading-relaxed">
              <p>
                Noor Dry Fruits started as a small family business with one
                simple belief — that everyone deserves access to fresh,
                high-quality dry fruits without paying exorbitant prices.
              </p>

              <p>
                Today, we serve thousands of families across Pakistan, and we
                still personally inspect every batch before it leaves our
                warehouse. From premium California almonds to Ajwa dates from
                Madinah, each product is chosen with intention and care.
              </p>

              <p>
                Whether you're shopping for a wedding, Eid, a corporate gift,
                or just a healthy snack for the family — we've got you covered.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/shop"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-stone-800 px-6 py-3 text-center text-sm font-semibold text-amber-50 transition-colors hover:bg-stone-700 sm:w-auto sm:px-7"
              >
                Explore Our Products
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-green-700 sm:w-auto sm:px-7"
              >
                <MessageCircle
                  size={18}
                  className="shrink-0"
                />
                WhatsApp Us
              </a>
            </div>

            {/* Contact hint */}
            <p className="mt-4 text-center text-xs leading-6 text-stone-500 sm:text-left sm:text-sm">
              Or call/WhatsApp us directly at{' '}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-2 transition-colors hover:text-amber-800"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ─── Values ─────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="mb-2 text-2xl font-bold leading-tight text-stone-800 sm:text-3xl">
            What We Stand For
          </h2>

          <p className="text-sm text-stone-500 sm:text-base">
            The values that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="h-full rounded-2xl border border-stone-100 bg-white p-5 transition-shadow hover:shadow-sm sm:rounded-3xl sm:p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 sm:h-12 sm:w-12">
                <Icon
                  size={23}
                  className="text-amber-700"
                  strokeWidth={1.8}
                />
              </div>

              <h3 className="mb-2 text-base font-bold text-stone-800 sm:text-lg">
                {title}
              </h3>

              <p className="break-words text-sm leading-6 text-stone-500">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Floating WhatsApp button ───────── */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-all duration-200 hover:bg-green-600 hover:scale-105 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        <MessageCircle
          size={23}
          className="sm:h-[26px] sm:w-[26px]"
        />
      </a>
    </div>
  );
};

export default About;