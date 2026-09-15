import {
  Lock,
  Eye,
  UserCheck,
  Database,
  Share2,
  Mail,
} from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="w-full overflow-hidden bg-amber-50">

      {/* ─── Header ─────────────────────────────── */}
      <section className="border-b border-stone-200 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 sm:text-sm sm:tracking-widest">
            Legal
          </p>

          <h1 className="mb-3 text-3xl font-bold leading-tight text-stone-800 sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-relaxed">
            Your privacy matters. Here's how we collect, use, and protect your
            information.
          </p>

          <p className="mt-3 text-xs text-stone-400 sm:text-sm">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* ─── Policy Content ────────────────────── */}
      <section className="mx-auto w-full max-w-4xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="space-y-7 rounded-2xl border border-stone-100 bg-white p-4 text-sm leading-7 text-stone-600 sm:space-y-8 sm:rounded-3xl sm:p-6 sm:text-base sm:leading-relaxed lg:p-8">

          {/* Information We Collect */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <Database
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />
              <span>Information We Collect</span>
            </h2>

            <p className="mb-3">
              When you place an order or interact with our website, we may
              collect:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Full name, phone number, and email address</li>
              <li>Delivery address and city</li>
              <li>Order history and preferences</li>
              <li>
                Payment details (processed securely by our providers)
              </li>
              <li>Device and browser information for analytics</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <Eye
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />
              <span>How We Use Your Information</span>
            </h2>

            <ul className="list-disc space-y-2 pl-5">
              <li>To process and deliver your orders</li>
              <li>
                To send order confirmations and delivery updates
              </li>
              <li>
                To respond to your inquiries and support requests
              </li>
              <li>
                To improve our products and website experience
              </li>
              <li>
                To send promotional offers (only if you opt in — you can
                unsubscribe anytime)
              </li>
            </ul>
          </div>

          {/* Sharing Your Information */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <Share2
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />
              <span>Sharing Your Information</span>
            </h2>

            <p className="mb-3">
              We <strong>never sell</strong> your personal information. We only
              share it with trusted third parties who help us run our business:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Courier and logistics partners (for delivery)
              </li>
              <li>
                Payment processors (EasyPaisa, JazzCash, banks)
              </li>
              <li>
                SMS and WhatsApp services for order updates
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <Lock
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />
              <span>Data Security</span>
            </h2>

            <p>
              We use industry-standard security measures — including SSL
              encryption and secure payment gateways — to protect your data.
              All payment transactions are encrypted; we do not store card
              details on our servers.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="mb-3 flex items-start gap-2 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              <UserCheck
                size={20}
                className="mt-1 shrink-0 text-amber-700"
              />
              <span>Your Rights</span>
            </h2>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Request access to the personal data we hold about you
              </li>
              <li>
                Ask us to correct or delete your data
              </li>
              <li>
                Opt out of marketing communications anytime
              </li>
              <li>
                Request information on how your data is used
              </li>
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="mb-3 text-lg font-bold leading-7 text-stone-800 sm:text-xl">
              Cookies
            </h2>

            <p>
              We use cookies to keep your cart, remember preferences, and
              improve site performance. You can disable cookies in your browser
              settings, though some features may not work properly.
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
                Contact us
              </strong>{' '}
              about privacy at{' '}
              <a
                href="mailto:privacy@noordryfruits.com"
                className="break-all font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800"
              >
                privacy@noordryfruits.com
              </a>
              .
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;