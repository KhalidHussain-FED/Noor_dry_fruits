import { Link } from 'react-router-dom';
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from 'lucide-react';

// ─── Contact config ─────────────────────────────────
const WHATSAPP_NUMBER = '923094658807';
const WHATSAPP_DISPLAY = '0309 465 8807';
const EMAIL = 'm.khalid.fed@gmail.com';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer className="bg-stone-800 text-amber-100/70 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf size={26} className="text-amber-400" />
              <span className="text-xl font-bold text-amber-50 tracking-tight">
                Noor Dry Fruits
              </span>
            </div>
            <p className="text-sm leading-relaxed text-amber-100/60">
              Premium hand-picked dry fruits &amp; nuts, sourced directly from
              the finest farms. Freshness and quality in every bite.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-stone-700 hover:bg-amber-400 hover:text-stone-900 text-amber-100/70 flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-stone-700 hover:bg-amber-400 hover:text-stone-900 text-amber-100/70 flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-stone-700 hover:bg-amber-400 hover:text-stone-900 text-amber-100/70 flex items-center justify-center transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-50 font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-amber-400 transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-amber-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-amber-50 font-semibold text-sm uppercase tracking-wider mb-4">
              Customer Care
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/shipping"
                  className="hover:text-amber-400 transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="hover:text-amber-400 transition-colors"
                >
                  Returns &amp; Refunds
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-amber-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-amber-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-amber-50 font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <span>123 Orchard Street, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-amber-400 shrink-0" />
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-amber-400 shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-amber-400 transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <MessageCircle size={16} className="text-green-400 shrink-0" />
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-amber-100/50">
          <p>
            © {currentYear}{' '}
            <span className="text-amber-50 font-medium">Noor Dry Fruits</span> —
            Dry Fruits &amp; More. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <span className="text-amber-400">♥</span> in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;