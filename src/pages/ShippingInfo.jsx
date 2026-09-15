import {
  Truck,
  Clock,
  MapPin,
  Package,
  Banknote,
} from 'lucide-react';

const ShippingInfo = () => {
  return (
    <div className="w-full overflow-hidden bg-amber-50">

      {/* ─── Hero ───────────────────────────── */}
      <section className="border-b border-stone-200 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 sm:text-sm sm:tracking-widest">
            Delivery
          </p>

          <h1 className="mb-3 text-3xl font-bold leading-tight text-stone-800 sm:text-4xl md:text-5xl">
            Shipping Information
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-relaxed">
            Fast, reliable delivery across Pakistan — with free shipping on
            orders over Rs 3,000.
          </p>
        </div>
      </section>

      {/* ─── Main Content ───────────────────── */}
      <section className="mx-auto w-full max-w-4xl space-y-6 px-3 py-8 sm:space-y-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">

        {/* ─── Quick Facts ─────────────────── */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">

          {/* Free Delivery */}
          <div className="flex min-h-[145px] flex-col items-center justify-center rounded-2xl border border-stone-100 bg-white p-5 text-center sm:min-h-[160px] sm:rounded-3xl sm:p-6">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 sm:h-12 sm:w-12">
              <Truck
                size={22}
                className="text-amber-700"
              />
            </div>

            <p className="mb-1 text-sm font-bold text-stone-800 sm:text-base">
              Free Delivery
            </p>

            <p className="text-xs leading-5 text-stone-500">
              On orders over Rs 3,000
            </p>
          </div>

          {/* Delivery Time */}
          <div className="flex min-h-[145px] flex-col items-center justify-center rounded-2xl border border-stone-100 bg-white p-5 text-center sm:min-h-[160px] sm:rounded-3xl sm:p-6">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 sm:h-12 sm:w-12">
              <Clock
                size={22}
                className="text-amber-700"
              />
            </div>

            <p className="mb-1 text-sm font-bold text-stone-800 sm:text-base">
              3–5 Days
            </p>

            <p className="text-xs leading-5 text-stone-500">
              Nationwide delivery
            </p>
          </div>

          {/* COD */}
          <div className="flex min-h-[145px] flex-col items-center justify-center rounded-2xl border border-stone-100 bg-white p-5 text-center sm:min-h-[160px] sm:rounded-3xl sm:p-6">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 sm:h-12 sm:w-12">
              <Banknote
                size={22}
                className="text-amber-700"
              />
            </div>

            <p className="mb-1 text-sm font-bold text-stone-800 sm:text-base">
              COD Available
            </p>

            <p className="text-xs leading-5 text-stone-500">
              Rs 150 handling fee
            </p>
          </div>
        </div>

        {/* ─── Shipping Content ─────────────── */}
        <div className="space-y-7 rounded-2xl border border-stone-100 bg-white p-4 text-sm leading-7 text-stone-600 sm:space-y-8 sm:rounded-3xl sm:p-6 sm:text-base sm:leading-relaxed lg:p-8">

          {/* Order Processing */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <Package
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />

              <span>Order Processing</span>
            </h2>

            <p>
              All orders placed before <strong>2:00 PM (PKT)</strong> on
              weekdays are dispatched the same day. Orders placed after that,
              on weekends, or on public holidays are dispatched the next
              working day.
            </p>
          </div>

          {/* Delivery Timelines */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <Truck
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />

              <span>Delivery Timelines</span>
            </h2>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>
                  Karachi, Lahore, Islamabad, Rawalpindi:
                </strong>{' '}
                1–2 working days
              </li>

              <li>
                <strong>Other major cities:</strong> 2–4 working days
              </li>

              <li>
                <strong>Remote areas:</strong> 4–7 working days
              </li>
            </ul>
          </div>

          {/* Shipping Charges */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <Banknote
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />

              <span>Shipping Charges</span>
            </h2>

            <ul className="list-disc space-y-2 pl-5">
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

          {/* Tracking */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <MapPin
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />

              <span>Tracking Your Order</span>
            </h2>

            <p>
              Once your order is dispatched, you'll receive an SMS and
              WhatsApp message with a tracking ID. You can use it to track
              your parcel in real-time.
            </p>
          </div>

          {/* Help */}
          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 sm:p-5">
            <p className="text-sm leading-6 text-stone-600 sm:text-base sm:leading-relaxed">
              <strong className="text-stone-800">
                Need help?
              </strong>{' '}
              Contact us at{' '}
              <a
                href="mailto:hello@noordryfruits.com"
                className="break-all font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800"
              >
                hello@noordryfruits.com
              </a>{' '}
              or WhatsApp{' '}
              <a
                href="tel:+923001234567"
                className="whitespace-nowrap font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800"
              >
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