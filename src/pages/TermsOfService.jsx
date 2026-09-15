import {
  FileText,
  ShoppingBag,
  Truck,
  RotateCcw,
  AlertTriangle,
  Scale,
  Mail,
  MessageCircle,
} from 'lucide-react';

const WHATSAPP_NUMBER = '923094658807';
const WHATSAPP_DISPLAY = '0309 465 8807';
const EMAIL = 'm.khalid.fed@gmail.com';

const TermsOfService = () => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <div className="w-full overflow-hidden bg-amber-50">

      {/* ─── Hero ───────────────────────────── */}
      <section className="border-b border-stone-200 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8 lg:py-16">

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 sm:text-sm sm:tracking-widest">
            Legal
          </p>

          <h1 className="mb-3 text-3xl font-bold leading-tight text-stone-800 sm:text-4xl md:text-5xl">
            Terms of Service
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-relaxed">
            Please read these terms carefully before using our website or
            placing an order.
          </p>

          <p className="mt-3 text-xs text-stone-400 sm:text-sm">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* ─── Main Content ───────────────────── */}
      <section className="mx-auto w-full max-w-4xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">

        <div className="space-y-7 rounded-2xl border border-stone-100 bg-white p-4 text-sm leading-7 text-stone-600 sm:space-y-8 sm:rounded-3xl sm:p-6 sm:text-base sm:leading-relaxed lg:p-8">

          {/* Agreement to Terms */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <FileText
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />
              <span>Agreement to Terms</span>
            </h2>

            <p>
              By accessing or using <strong>Noor Dry Fruits</strong>, you agree
              to be bound by these Terms of Service and our Privacy Policy. If
              you do not agree, please discontinue use of our website.
            </p>
          </div>

          {/* Orders & Payments */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <ShoppingBag
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />
              <span>Orders &amp; Payments</span>
            </h2>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                All prices are listed in{' '}
                <strong>Pakistani Rupees (PKR)</strong> and are inclusive of
                applicable taxes.
              </li>

              <li>
                We reserve the right to refuse or cancel any order at our
                discretion — for example, due to stock unavailability, pricing
                errors, or suspected fraud.
              </li>

              <li>
                For COD orders, payment must be made in full at the time of
                delivery.
              </li>

              <li>
                For prepaid orders, payment is processed by our third-party
                payment providers (EasyPaisa, JazzCash, or card networks).
              </li>
            </ul>
          </div>

          {/* Shipping & Delivery */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <Truck
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />
              <span>Shipping &amp; Delivery</span>
            </h2>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Estimated delivery times are shared in good faith but are not
                guaranteed — delays may occur due to courier issues or
                unforeseen circumstances.
              </li>

              <li>
                Risk of loss passes to you once the order is delivered and
                signed for at the provided address.
              </li>

              <li>
                Please ensure your delivery address and phone number are
                accurate. We're not responsible for failed deliveries due to
                incorrect information.
              </li>
            </ul>
          </div>

          {/* Returns & Refunds */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <RotateCcw
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />
              <span>Returns &amp; Refunds</span>
            </h2>

            <p>
              Our full return policy is available on our{' '}
              <a
                href="/returns"
                className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800"
              >
                Returns &amp; Refunds
              </a>{' '}
              page. In summary: unopened products may be returned within 7 days
              of delivery for a refund or exchange.
            </p>
          </div>

          {/* Product Information & Allergies */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <AlertTriangle
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />
              <span>Product Information &amp; Allergies</span>
            </h2>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Product images and descriptions are for illustration. Actual
                product may vary slightly.
              </li>

              <li>
                Our products are packed in a facility that also handles{' '}
                <strong>nuts, seeds, and dried fruits</strong>. If you have
                allergies, please contact us before ordering.
              </li>

              <li>
                Nutritional and health information, if provided, is for general
                guidance only and not a substitute for professional advice.
              </li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <Scale
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />
              <span>Limitation of Liability</span>
            </h2>

            <p>
              To the maximum extent permitted by law, Noor Dry Fruits is not
              liable for any indirect, incidental, or consequential damages
              arising from the use of our products or website. Our total
              liability shall not exceed the amount paid for the specific order
              in question.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="mb-3 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              Intellectual Property
            </h2>

            <p>
              All content on this site — including logos, images, text, and
              graphics — is the property of Noor Dry Fruits and may not be
              copied, reproduced, or used without our written permission.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="mb-3 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              Governing Law
            </h2>

            <p>
              These Terms are governed by the laws of the{' '}
              <strong>Islamic Republic of Pakistan</strong>. Any disputes will
              be subject to the exclusive jurisdiction of the courts of
              Karachi.
            </p>
          </div>

          {/* Changes to Terms */}
          <div>
            <h2 className="mb-3 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              Changes to Terms
            </h2>

            <p>
              We may update these Terms from time to time. Continued use of our
              website after changes means you accept the updated terms.
            </p>
          </div>

          {/* Contact */}
          <div className="flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4 sm:p-5">
            <Mail
              size={20}
              className="mt-0.5 shrink-0 text-amber-700"
            />

            <p className="min-w-0 text-sm leading-6 text-stone-600 sm:text-base sm:leading-relaxed">
              <strong className="text-stone-800">
                Questions?
              </strong>{' '}
              Email us at{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="break-all font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800"
              >
                {EMAIL}
              </a>{' '}
              or WhatsApp{' '}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800"
              >
                {WHATSAPP_DISPLAY}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ─── Floating WhatsApp ──────────────── */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-all duration-200 hover:scale-105 hover:bg-green-600 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        <MessageCircle
          size={23}
          className="sm:h-[26px] sm:w-[26px]"
        />
      </a>
    </div>
  );
};

export default TermsOfService;