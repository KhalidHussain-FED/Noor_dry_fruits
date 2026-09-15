import {
  Leaf,
  Heart,
  Award,
  Users,
  Package,
  Truck,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── WhatsApp config ────────────────────────────────
// Local: 03094658807 → International: +92 309 4658807
const WHATSAPP_NUMBER = '923094658807';
const WHATSAPP_DISPLAY = '0309 465 8807';

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
  return (
    <div className="bg-amber-50">
      {/* ─── Hero ───────────────────────────── */}
      <section className="bg-gradient-to-br from-amber-100 to-amber-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-amber-700 font-semibold text-sm uppercase tracking-widest mb-2">
            Our Story
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
            About Noor Dry Fruits
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Since 2015, we've been on a mission to bring Pakistan the finest,
            freshest dry fruits and nuts — sourced from trusted farms around the
            world, packed with love in Karachi.
          </p>
        </div>
      </section>

      {/* ─── Stats ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white rounded-3xl p-6 text-center border border-stone-100"
            >
              <p className="text-3xl sm:text-4xl font-bold text-stone-800 mb-1">
                {value}
              </p>
              <p className="text-sm text-stone-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Story ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="bg-gradient-to-br from-amber-100 to-stone-100 rounded-3xl aspect-video flex items-center justify-center">
            <Leaf size={120} className="text-amber-600/40" strokeWidth={1} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-stone-800 mb-4">
              From Our Family to Yours
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
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
                Whether you're shopping for a wedding, Eid, a corporate gift, or
                just a healthy snack for the family — we've got you covered.
              </p>
            </div>

            {/* CTAs: Shop + WhatsApp */}
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-amber-50 px-7 py-3 rounded-full font-semibold transition-colors"
              >
                Explore Our Products
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  'Assalam o Alaikum! I would like to inquire about your dry fruits.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold transition-colors"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>

            {/* Contact hint */}
            <p className="text-sm text-stone-500 mt-4">
              Or call/WhatsApp us directly at{' '}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 font-semibold underline hover:text-amber-800"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ─── Values ─────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-stone-800 mb-2">
            What We Stand For
          </h2>
          <p className="text-stone-500">
            The values that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-6 border border-stone-100 hover:shadow-sm transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-4">
                <Icon size={24} className="text-amber-700" />
              </div>
              <h3 className="font-bold text-stone-800 mb-2">{title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Floating WhatsApp button ───────── */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          'Assalam o Alaikum! I would like to inquire about your dry fruits.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
};

export default About;