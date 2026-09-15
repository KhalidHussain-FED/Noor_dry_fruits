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
    <div className="w-full overflow-hidden bg-amber-50">

      {/* ─── Hero ───────────────────────────── */}
      <section className="border-b border-stone-200 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 sm:text-sm sm:tracking-widest">
            Customer Care
          </p>

          <h1 className="mb-3 text-3xl font-bold leading-tight text-stone-800 sm:text-4xl md:text-5xl">
            Returns &amp; Refunds
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-relaxed">
            Your satisfaction is our priority. Here's how our return and refund
            process works.
          </p>
        </div>
      </section>

      {/* ─── Main Content ───────────────────── */}
      <section className="mx-auto w-full max-w-4xl space-y-6 px-3 py-8 sm:space-y-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">

        {/* ─── Policy Summary Cards ─────────── */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">

          {/* 7-Day Returns */}
          <div className="flex min-h-[145px] flex-col items-center justify-center rounded-2xl border border-stone-100 bg-white p-5 text-center sm:min-h-[160px] sm:rounded-3xl sm:p-6">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-green-50 sm:h-12 sm:w-12">
              <CheckCircle
                size={22}
                className="text-green-600"
              />
            </div>

            <p className="mb-1 text-sm font-bold text-stone-800 sm:text-base">
              7-Day Returns
            </p>

            <p className="text-xs text-stone-500">
              From delivery date
            </p>
          </div>

          {/* Easy Process */}
          <div className="flex min-h-[145px] flex-col items-center justify-center rounded-2xl border border-stone-100 bg-white p-5 text-center sm:min-h-[160px] sm:rounded-3xl sm:p-6">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 sm:h-12 sm:w-12">
              <RotateCcw
                size={22}
                className="text-amber-700"
              />
            </div>

            <p className="mb-1 text-sm font-bold text-stone-800 sm:text-base">
              Easy Process
            </p>

            <p className="text-xs text-stone-500">
              No-hassle returns
            </p>
          </div>

          {/* Fast Refunds */}
          <div className="flex min-h-[145px] flex-col items-center justify-center rounded-2xl border border-stone-100 bg-white p-5 text-center sm:min-h-[160px] sm:rounded-3xl sm:p-6">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 sm:h-12 sm:w-12">
              <Clock
                size={22}
                className="text-blue-600"
              />
            </div>

            <p className="mb-1 text-sm font-bold text-stone-800 sm:text-base">
              Fast Refunds
            </p>

            <p className="text-xs text-stone-500">
              Within 5–7 days
            </p>
          </div>
        </div>

        {/* ─── Main Policy ──────────────────── */}
        <div className="space-y-7 rounded-2xl border border-stone-100 bg-white p-4 text-sm leading-7 text-stone-600 sm:space-y-8 sm:rounded-3xl sm:p-6 sm:text-base sm:leading-relaxed lg:p-8">

          {/* Return Policy */}
          <div>
            <h2 className="mb-3 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              Return Policy
            </h2>

            <p>
              You may return any unopened, unused product within{' '}
              <strong>7 days of delivery</strong>. To qualify for a return, the
              product must be:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                In its original packaging, unopened and sealed
              </li>
              <li>
                Accompanied by the original invoice or order number
              </li>
              <li>
                Not damaged due to misuse or improper storage
              </li>
            </ul>
          </div>

          {/* Non-Returnable */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <XCircle
                size={20}
                className="mt-1 shrink-0 text-red-500"
              />

              <span>Non-Returnable Items</span>
            </h2>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Opened or partially consumed products
              </li>
              <li>
                Custom or bulk gift orders
              </li>
              <li>
                Items marked as "Final Sale" at purchase
              </li>
              <li>
                Products stored improperly after delivery
              </li>
            </ul>
          </div>

          {/* How to Request */}
          <div>
            <h2 className="mb-3 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              How to Request a Return
            </h2>

            <ol className="list-decimal space-y-3 pl-5">
              <li className="pl-1">
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
                  className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800"
                >
                  {WHATSAPP_DISPLAY}
                </a>
                .
              </li>

              <li className="pl-1">
                Share your <strong>order number</strong> and{' '}
                <strong>photos of the product</strong> (including the
                packaging).
              </li>

              <li className="pl-1">
                Our team will review and respond within{' '}
                <strong>24–48 hours</strong>.
              </li>

              <li className="pl-1">
                Once approved, we'll arrange a pickup or provide a return
                address.
              </li>

              <li className="pl-1">
                After inspection, your refund will be processed within{' '}
                <strong>5–7 business days</strong>.
              </li>
            </ol>
          </div>

          {/* Refund Method */}
          <div>
            <h2 className="mb-3 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              Refund Method
            </h2>

            <ul className="list-disc space-y-2 pl-5">
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
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-green-700 sm:w-auto sm:px-6"
            >
              <MessageCircle
                size={17}
                className="shrink-0"
              />

              <span>Request Return via WhatsApp</span>
            </a>

            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                'Return Request — Noor Dry Fruits'
              )}`}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-stone-800 px-5 py-3 text-center text-sm font-semibold text-amber-50 transition-colors hover:bg-stone-700 sm:w-auto sm:px-6"
            >
              <Mail
                size={17}
                className="shrink-0"
              />

              <span>Email Us</span>
            </a>
          </div>

          {/* Footer Hint */}
          <div className="flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4 sm:p-5">
            <Mail
              size={20}
              className="mt-0.5 shrink-0 text-amber-700"
            />

            <p className="min-w-0 text-sm leading-6 text-stone-600 sm:text-base sm:leading-relaxed">
              <strong className="text-stone-800">
                Questions?
              </strong>{' '}
              Reach our returns team at{' '}
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
                className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800"
              >
                {WHATSAPP_DISPLAY}
              </a>
              . We're happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Floating WhatsApp Button ───────── */}
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

export default ReturnsRefunds;