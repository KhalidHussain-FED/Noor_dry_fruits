import { Truck, Clock, MapPin, Package, Banknote } from 'lucide-react';

const ShippingInfo = () => {
  return (
    <div className="bg-amber-50">
      <section className="bg-gradient-to-br from-amber-100 to-amber-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-amber-700 font-semibold text-sm uppercase tracking-widest mb-2">
            Delivery
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-3">
            Shipping Information
          </h1>
          <p className="text-stone-600 max-w-xl mx-auto">
            Fast, reliable delivery across Pakistan — with free shipping on
            orders over Rs 3,000.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        {/* Quick facts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-3xl p-6 border border-stone-100 text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-3">
              <Truck size={22} className="text-amber-700" />
            </div>
            <p className="font-bold text-stone-800 mb-1">Free Delivery</p>
            <p className="text-xs text-stone-500">On orders over Rs 3,000</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-stone-100 text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-3">
              <Clock size={22} className="text-amber-700" />
            </div>
            <p className="font-bold text-stone-800 mb-1">3–5 Days</p>
            <p className="text-xs text-stone-500">Nationwide delivery</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-stone-100 text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-3">
              <Banknote size={22} className="text-amber-700" />
            </div>
            <p className="font-bold text-stone-800 mb-1">COD Available</p>
            <p className="text-xs text-stone-500">Rs 150 handling fee</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-100 space-y-6 text-stone-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <Package size={20} className="text-amber-700" /> Order Processing
            </h2>
            <p>
              All orders placed before <strong>2:00 PM (PKT)</strong> on
              weekdays are dispatched the same day. Orders placed after that,
              on weekends, or on public holidays are dispatched the next
              working day.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <Truck size={20} className="text-amber-700" /> Delivery Timelines
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Karachi, Lahore, Islamabad, Rawalpindi:</strong> 1–2
                working days
              </li>
              <li>
                <strong>Other major cities:</strong> 2–4 working days
              </li>
              <li>
                <strong>Remote areas:</strong> 4–7 working days
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <Banknote size={20} className="text-amber-700" /> Shipping Charges
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Free shipping</strong> on all orders over{' '}
                <strong>Rs 3,000</strong>.
              </li>
              <li>
                Orders under Rs 3,000 — flat delivery charge of{' '}
                <strong>Rs 200</strong>.
              </li>
              <li>
                <strong>Cash on Delivery (COD)</strong> — additional{' '}
                <strong>Rs 150</strong> handling fee.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <MapPin size={20} className="text-amber-700" /> Tracking Your Order
            </h2>
            <p>
              Once your order is dispatched, you'll receive an SMS and WhatsApp
              message with a tracking ID. You can use it to track your parcel in
              real-time.
            </p>
          </div>

          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
            <p className="text-sm text-stone-600">
              <strong className="text-stone-800">Need help?</strong> Contact us
              at{' '}
              <a
                href="mailto:hello@noordryfruits.com"
                className="text-amber-700 underline"
              >
                hello@noordryfruits.com
              </a>{' '}
              or WhatsApp{' '}
              <a href="tel:+923001234567" className="text-amber-700 underline">
                +92 300 123 4567
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingInfo;