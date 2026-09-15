import { Lock, Eye, UserCheck, Database, Share2, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-amber-50">
      <section className="bg-gradient-to-br from-amber-100 to-amber-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-amber-700 font-semibold text-sm uppercase tracking-widest mb-2">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-3">
            Privacy Policy
          </h1>
          <p className="text-stone-600 max-w-xl mx-auto">
            Your privacy matters. Here's how we collect, use, and protect your
            information.
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
              <Database size={20} className="text-amber-700" /> Information We
              Collect
            </h2>
            <p className="mb-3">
              When you place an order or interact with our website, we may
              collect:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Full name, phone number, and email address</li>
              <li>Delivery address and city</li>
              <li>Order history and preferences</li>
              <li>Payment details (processed securely by our providers)</li>
              <li>Device and browser information for analytics</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <Eye size={20} className="text-amber-700" /> How We Use Your
              Information
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>To process and deliver your orders</li>
              <li>To send order confirmations and delivery updates</li>
              <li>To respond to your inquiries and support requests</li>
              <li>To improve our products and website experience</li>
              <li>
                To send promotional offers (only if you opt in — you can
                unsubscribe anytime)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <Share2 size={20} className="text-amber-700" /> Sharing Your
              Information
            </h2>
            <p className="mb-3">
              We <strong>never sell</strong> your personal information. We only
              share it with trusted third parties who help us run our business:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Courier and logistics partners (for delivery)</li>
              <li>Payment processors (EasyPaisa, JazzCash, banks)</li>
              <li>SMS and WhatsApp services for order updates</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <Lock size={20} className="text-amber-700" /> Data Security
            </h2>
            <p>
              We use industry-standard security measures — including SSL
              encryption and secure payment gateways — to protect your data. All
              payment transactions are encrypted; we do not store card details
              on our servers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
              <UserCheck size={20} className="text-amber-700" /> Your Rights
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Request access to the personal data we hold about you</li>
              <li>Ask us to correct or delete your data</li>
              <li>Opt out of marketing communications anytime</li>
              <li>Request information on how your data is used</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-3">Cookies</h2>
            <p>
              We use cookies to keep your cart, remember preferences, and
              improve site performance. You can disable cookies in your browser
              settings, though some features may not work properly.
            </p>
          </div>

          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 flex items-start gap-3">
            <Mail size={20} className="text-amber-700 shrink-0 mt-0.5" />
            <p className="text-sm">
              <strong className="text-stone-800">Contact us</strong> about
              privacy at{' '}
              <a
                href="mailto:privacy@noordryfruits.com"
                className="text-amber-700 underline"
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