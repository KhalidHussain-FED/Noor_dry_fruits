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
    <div className="bg-amber-50">
      <section className="bg-gradient-to-br from-amber-100 to-amber-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-amber-700 font-semibold text-sm uppercase tracking-widest mb-2">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-3">
            Terms of Service
          </h1>
          <p className="text-stone-600 max-w-xl mx-auto">
            Please read these terms carefully before using our website or
            placing an order.
          </p>
          <p className="text-xs text-stone-400 mt-3">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-100 space-y-8 text-stone-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <FileText size={20} className="text-amber-700" /> Agreement to
              Terms
            </h2>
            <p>
              By accessing or using <strong>Noor Dry Fruits</strong>, you agree
              to be bound by these Terms of Service and our Privacy Policy. If
              you do not agree, please discontinue use of our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <ShoppingBag size={20} className="text-amber-700" /> Orders &amp;
              Payments
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                All prices are listed in <strong>Pakistani Rupees (PKR)</strong>{' '}
                and are inclusive of applicable taxes.
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

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <Truck size={20} className="text-amber-700" /> Shipping &amp;
              Delivery
            </h2>
            <ul className="space-y-2 list-disc list-inside">
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

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <RotateCcw size={20} className="text-amber-700" /> Returns &amp;
              Refunds
            </h2>
            <p>
              Our full return policy is available on our{' '}
              <a href="/returns" className="text-amber-700 underline">
                Returns &amp; Refunds
              </a>{' '}
              page. In summary: unopened products may be returned within 7 days
              of delivery for a refund or exchange.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <AlertTriangle size={20} className="text-amber-700" /> Product
              Information &amp; Allergies
            </h2>
            <ul className="space-y-2 list-disc list-inside">
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

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <Scale size={20} className="text-amber-700" /> Limitation of
              Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Noor Dry Fruits is not
              liable for any indirect, incidental, or consequential damages
              arising from the use of our products or website. Our total
              liability shall not exceed the amount paid for the specific order
              in question.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3">
              Intellectual Property
            </h2>
            <p>
              All content on this site — including logos, images, text, and
              graphics — is the property of Noor Dry Fruits and may not be
              copied, reproduced, or used without our written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3">
              Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the{' '}
              <strong>Islamic Republic of Pakistan</strong>. Any disputes will
              be subject to the exclusive jurisdiction of the courts of
              Karachi.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3">
              Changes to Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of our
              website after changes means you accept the updated terms.
            </p>
          </div>

          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 flex items-start gap-3">
            <Mail size={20} className="text-amber-700 shrink-0 mt-0.5" />
            <p className="text-sm">
              <strong className="text-stone-800">Questions?</strong> Email us at{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="text-amber-700 underline break-all"
              >
                {EMAIL}
              </a>{' '}
              or WhatsApp{' '}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 underline"
              >
                {WHATSAPP_DISPLAY}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={waLink}
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

export default TermsOfService;