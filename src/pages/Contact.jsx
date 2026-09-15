import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { sendContactEmail } from '../utils/emailService';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    setStatus('sending');
    console.log('🚀 Submitting contact form:', form);

    try {
      const result = await sendContactEmail({
        name: form.name,
        email: form.email,
        message: form.message,
      });

      console.log('📧 sendContactEmail result:', result);

      if (result.success) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 6000);
      }
    } catch (err) {
      console.error('❌ Unexpected error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status === 'error') setStatus('idle');
  };

  return (
    <div className="bg-amber-50">
      {/* ─── Header ─────────────────────────────── */}
      <section className="bg-gradient-to-br from-amber-100 to-amber-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-amber-700 font-semibold text-sm uppercase tracking-widest mb-2">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-3">
            Contact Us
          </h1>
          <p className="text-stone-600 max-w-xl mx-auto">
            Have a question, feedback, or a bulk order request? We'd love to
            hear from you.
          </p>
        </div>
      </section>

      {/* ─── Main ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* ── Left: Info cards ──────────────── */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-stone-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-amber-700" />
              </div>
              <div>
                <h3 className="font-bold text-stone-800 mb-1">Visit Us</h3>
                <p className="text-sm text-stone-500">
                  123 Orchard Street,
                  <br />
                  Karachi, Sindh 75500, Pakistan
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                <Phone size={22} className="text-amber-700" />
              </div>
              <div>
                <h3 className="font-bold text-stone-800 mb-1">
                  Call / WhatsApp
                </h3>
                <a
                  href="tel:+923001234567"
                  className="text-sm text-stone-500 hover:text-amber-700 transition-colors block"
                >
                  +92 300 123 4567
                </a>
                <a
                  href="tel:+922134567890"
                  className="text-sm text-stone-500 hover:text-amber-700 transition-colors block"
                >
                  +92 21 3456 7890
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                <Mail size={22} className="text-amber-700" />
              </div>
              <div>
                <h3 className="font-bold text-stone-800 mb-1">Email Us</h3>
                <a
                  href="mailto:hello@noordryfruits.com"
                  className="text-sm text-stone-500 hover:text-amber-700 transition-colors block"
                >
                  hello@noordryfruits.com
                </a>
                <a
                  href="mailto:support@noordryfruits.com"
                  className="text-sm text-stone-500 hover:text-amber-700 transition-colors block"
                >
                  support@noordryfruits.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-100">
              <h3 className="font-bold text-stone-800 mb-2">Business Hours</h3>
              <div className="text-sm text-stone-500 space-y-1">
                <p className="flex justify-between">
                  <span>Mon – Fri</span> <span>9:00 AM – 8:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span> <span>10:00 AM – 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>{' '}
                  <span className="text-amber-700 font-medium">Closed</span>
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-full font-semibold transition-colors"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>

          {/* ── Right: Form ───────────────────── */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-100 h-fit">
            <h2 className="text-2xl font-bold text-stone-800 mb-1">
              Send Us a Message
            </h2>
            <p className="text-sm text-stone-500 mb-6">
              We typically reply within 24 hours.
            </p>

            {/* Status banners */}
            {status === 'sent' && (
              <div className="mb-4 bg-green-50 border border-green-200 text-green-800 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
                <CheckCircle size={16} /> Thanks! Your message has been sent.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-800 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
                <AlertCircle size={16} /> Failed to send. Please try again or
                WhatsApp us.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-stone-700 mb-1.5 block">
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Ali Khan"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-amber-50/40 focus:outline-none focus:ring-2 focus:ring-stone-800/20 focus:border-stone-400 text-stone-800 placeholder-stone-400"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-stone-700 mb-1.5 block">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="ali@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-amber-50/40 focus:outline-none focus:ring-2 focus:ring-stone-800/20 focus:border-stone-400 text-stone-800 placeholder-stone-400"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-stone-700 mb-1.5 block">
                  Message
                </label>
                <textarea
                  rows="5"
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="How can we help you?"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-amber-50/40 focus:outline-none focus:ring-2 focus:ring-stone-800/20 focus:border-stone-400 text-stone-800 placeholder-stone-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-stone-800 hover:bg-stone-700 text-amber-50 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-amber-50/30 border-t-amber-50 rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;