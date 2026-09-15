import {
  RotateCcw,
  CheckCircle,
  XCircle,
  Clock,
  Mail,
  MessageCircle,
} from 'lucide-react';

// ─── Contact config ─────────────────────────────────
const WHATSAPP_NUMBER = '923094658807';
const WHATSAPP_DISPLAY = '0309 465 8807';
const EMAIL = 'm.khalid.fed@gmail.com';
const WHATSAPP_MESSAGE =
  'Assalam o Alaikum! I would like to request a return/refund for my order.';

const ReturnsRefunds = () => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <div className="bg-amber-50">
      {/* ─── Hero ───────────────────────────── */}
      <section className="bg-gradient-to-br from-amber-100 to-amber-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-amber-700 font-semibold text-sm uppercase tracking-widest mb-2">
            Customer Care
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-3">
            Returns &amp; Refunds
          </h1>
          <p className="text-stone-600 max-w-xl mx-auto">
            Your satisfaction is our priority. Here's how our return and refund
            process works.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        {/* ─── Policy summary cards ──────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-3xl p-6 border border-stone-100 text-center">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-3">
              <CheckCircle size={22} className="text-green-600" />
            </div>
            <p className="font-bold text-stone-800 mb-1">7-Day Returns</p>
            <p className="text-xs text-stone-500">From delivery date</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-stone-100 text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-3">
              <RotateCcw size={22} className="text-amber-700" />
            </div>
            <p className="font-bold text-stone-800 mb-1">Easy Process</p>
            <p className="text-xs text-stone-500">No-hassle returns</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-stone-100 text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
              <Clock size={22} className="text-blue-600" />
            </div>
            <p className="font-bold text-stone-800 mb-1">Fast Refunds</p>
            <p className="text-xs text-stone-500">Within 5–7 days</p>
          </div>
        </div>

        {/* ─── Main content ──────────────────── */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-100 space-y-6 text-stone-600 leading-relaxed">
          {/* Return Policy */}
          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3">
              Return Policy
            </h2>
            <p>
              You may return any unopened, unused product within{' '}
              <strong>7 days of delivery</strong>. To qualify for a return, the
              product must be:
            </p>
            <ul className="space-y-2 list-disc list-inside mt-3">
              <li>In its original packaging, unopened and sealed</li>
              <li>Accompanied by the original invoice or order number</li>
              <li>Not damaged due to misuse or improper storage</li>
            </ul>
          </div>

          {/* Non-Returnable */}
          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <XCircle size={20} className="text-red-500" /> Non-Returnable
              Items
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Opened or partially consumed products</li>
              <li>Custom or bulk gift orders</li>
              <li>Items marked as "Final Sale" at purchase</li>
              <li>Products stored improperly after delivery</li>
            </ul>
          </div>

          {/* How to Request */}
          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3">
              How to Request a Return
            </h2>
            <ol className="space-y-3 list-decimal list-inside">
              <li>
                Email us at{' '}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-amber-700 underline"
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
              </li>
              <li>
                Share your <strong>order number</strong> and{' '}
                <strong>photos of the product</strong> (including the
                packaging).
              </li>
              <li>
                Our team will review and respond within{' '}
                <strong>24–48 hours</strong>.
              </li>
              <li>
                Once approved, we'll arrange a pickup or provide a return
                address.
              </li>
              <li>
                After inspection, your refund will be processed within{' '}
                <strong>5–7 business days</strong>.
              </li>
            </ol>
          </div>

          {/* Refund Method */}
          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3">
              Refund Method
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Prepaid orders:</strong> refunded to your original
                payment method (bank, EasyPaisa, JazzCash, or card).
              </li>
              <li>
                <strong>COD orders:</strong> refunded via bank transfer or
                mobile wallet.
              </li>
              <li>
                Refunds exclude original shipping charges (unless the return is
                due to our error).
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors text-sm"
            >
              <MessageCircle size={16} /> Request Return via WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                'Return Request — Noor Dry Fruits'
              )}`}
              className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-amber-50 px-6 py-3 rounded-full font-semibold transition-colors text-sm"
            >
              <Mail size={16} /> Email Us
            </a>
          </div>

          {/* Footer hint */}
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 flex items-start gap-3">
            <Mail size={20} className="text-amber-700 shrink-0 mt-0.5" />
            <p className="text-sm">
              <strong className="text-stone-800">Questions?</strong> Reach our
              returns team at{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="text-amber-700 underline"
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
              . We're happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Floating WhatsApp button ──────── */}
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

export default ReturnsRefunds;