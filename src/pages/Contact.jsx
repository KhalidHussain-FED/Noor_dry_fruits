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

const WHATSAPP_NUMBER = '923001234567';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setStatus('error');

      setTimeout(() => {
        setStatus('idle');
      }, 4000);

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

        setForm({
          name: '',
          email: '',
          message: '',
        });

        setTimeout(() => {
          setStatus('idle');
        }, 6000);
      } else {
        setStatus('error');

        setTimeout(() => {
          setStatus('idle');
        }, 6000);
      }
    } catch (err) {
      console.error('❌ Unexpected error:', err);

      setStatus('error');

      setTimeout(() => {
        setStatus('idle');
      }, 6000);
    }
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (status === 'error') {
      setStatus('idle');
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <div className="w-full overflow-hidden bg-amber-50">

      {/* ─── Header ─────────────────────────────── */}
      <section className="border-b border-stone-200 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 sm:text-sm sm:tracking-widest">
            Get in Touch
          </p>

          <h1 className="mb-3 text-3xl font-bold leading-tight text-stone-800 sm:text-4xl md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-relaxed">
            Have a question, feedback, or a bulk order request? We'd love to
            hear from you.
          </p>
        </div>
      </section>

      {/* ─── Main ───────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10">

          {/* ── Left: Contact Info ─────────────── */}
          <div className="min-w-0 space-y-3 sm:space-y-4">

            {/* Visit Us */}
            <div className="flex items-start gap-3 rounded-2xl border border-stone-100 bg-white p-4 sm:gap-4 sm:rounded-3xl sm:p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 sm:h-12 sm:w-12">
                <MapPin
                  size={21}
                  className="text-amber-700"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="mb-1 text-sm font-bold text-stone-800 sm:text-base">
                  Visit Us
                </h3>

                <p className="break-words text-sm leading-6 text-stone-500">
                  123 Orchard Street,
                  <br />
                  Karachi, Sindh 75500, Pakistan
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 rounded-2xl border border-stone-100 bg-white p-4 sm:gap-4 sm:rounded-3xl sm:p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 sm:h-12 sm:w-12">
                <Phone
                  size={21}
                  className="text-amber-700"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="mb-1 text-sm font-bold text-stone-800 sm:text-base">
                  Call / WhatsApp
                </h3>

                <a
                  href="tel:+923001234567"
                  className="block break-words text-sm leading-6 text-stone-500 transition-colors hover:text-amber-700"
                >
                  +92 300 123 4567
                </a>

                <a
                  href="tel:+922134567890"
                  className="block break-words text-sm leading-6 text-stone-500 transition-colors hover:text-amber-700"
                >
                  +92 21 3456 7890
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 rounded-2xl border border-stone-100 bg-white p-4 sm:gap-4 sm:rounded-3xl sm:p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 sm:h-12 sm:w-12">
                <Mail
                  size={21}
                  className="text-amber-700"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="mb-1 text-sm font-bold text-stone-800 sm:text-base">
                  Email Us
                </h3>

                <a
                  href="mailto:hello@noordryfruits.com"
                  className="block break-all text-sm leading-6 text-stone-500 transition-colors hover:text-amber-700"
                >
                  hello@noordryfruits.com
                </a>

                <a
                  href="mailto:support@noordryfruits.com"
                  className="block break-all text-sm leading-6 text-stone-500 transition-colors hover:text-amber-700"
                >
                  support@noordryfruits.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-2xl border border-stone-100 bg-white p-4 sm:rounded-3xl sm:p-6">
              <h3 className="mb-3 text-sm font-bold text-stone-800 sm:text-base">
                Business Hours
              </h3>

              <div className="space-y-2 text-sm text-stone-500">
                <div className="flex items-center justify-between gap-4">
                  <span className="shrink-0">
                    Mon – Fri
                  </span>

                  <span className="text-right">
                    9:00 AM – 8:00 PM
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="shrink-0">
                    Saturday
                  </span>

                  <span className="text-right">
                    10:00 AM – 6:00 PM
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="shrink-0">
                    Sunday
                  </span>

                  <span className="font-medium text-amber-700">
                    Closed
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={`${whatsappUrl}?text=${encodeURIComponent(
                'Assalam o Alaikum! I would like to inquire about your dry fruits.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700 sm:min-h-[52px]"
            >
              <MessageCircle
                size={18}
                className="shrink-0"
              />
              Chat on WhatsApp
            </a>
          </div>

          {/* ── Right: Form ───────────────────── */}
          <div className="h-fit min-w-0 rounded-2xl border border-stone-100 bg-white p-4 sm:rounded-3xl sm:p-6 lg:p-8">

            <h2 className="mb-1 text-xl font-bold leading-tight text-stone-800 sm:text-2xl">
              Send Us a Message
            </h2>

            <p className="mb-5 text-sm leading-6 text-stone-500 sm:mb-6">
              We typically reply within 24 hours.
            </p>

            {/* ─── Status: Success ───────────── */}
            {status === 'sent' && (
              <div
                role="status"
                aria-live="polite"
                className="mb-4 flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm leading-5 text-green-800"
              >
                <CheckCircle
                  size={17}
                  className="mt-0.5 shrink-0"
                />

                <span>
                  Thanks! Your message has been sent.
                </span>
              </div>
            )}

            {/* ─── Status: Error ─────────────── */}
            {status === 'error' && (
              <div
                role="alert"
                className="mb-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-800"
              >
                <AlertCircle
                  size={17}
                  className="mt-0.5 shrink-0"
                />

                <span>
                  Failed to send. Please try again or WhatsApp us.
                </span>
              </div>
            )}

            {/* ─── Contact Form ──────────────── */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-semibold text-stone-700"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    handleChange('name', e.target.value)
                  }
                  placeholder="Ali Khan"
                  autoComplete="name"
                  required
                  className="min-h-12 w-full rounded-xl border border-stone-200 bg-amber-50/40 px-4 py-3 text-base text-stone-800 outline-none transition focus:border-stone-400 focus:ring-2 focus:ring-stone-800/20 placeholder:text-stone-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-semibold text-stone-700"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    handleChange('email', e.target.value)
                  }
                  placeholder="ali@example.com"
                  autoComplete="email"
                  required
                  className="min-h-12 w-full rounded-xl border border-stone-200 bg-amber-50/40 px-4 py-3 text-base text-stone-800 outline-none transition focus:border-stone-400 focus:ring-2 focus:ring-stone-800/20 placeholder:text-stone-400"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-semibold text-stone-700"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    handleChange('message', e.target.value)
                  }
                  placeholder="How can we help you?"
                  required
                  className="w-full resize-none rounded-xl border border-stone-200 bg-amber-50/40 px-4 py-3 text-base leading-6 text-stone-800 outline-none transition focus:border-stone-400 focus:ring-2 focus:ring-stone-800/20 placeholder:text-stone-400"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-stone-800 px-5 py-3 text-sm font-bold text-amber-50 transition-colors hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-70 sm:min-h-[52px]"
              >
                {status === 'sending' ? (
                  <>
                    <div
                      className="h-4 w-4 animate-spin rounded-full border-2 border-amber-50/30 border-t-amber-50"
                      aria-hidden="true"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send
                      size={16}
                      className="shrink-0"
                    />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Floating WhatsApp ─────────────── */}
      <a
        href={`${whatsappUrl}?text=${encodeURIComponent(
          'Assalam o Alaikum! I would like to inquire about your dry fruits.'
        )}`}
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

export default Contact;