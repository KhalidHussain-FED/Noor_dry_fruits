
import { useState, useEffect } from 'react';
import {
  X,
  Lock,
  CheckCircle,
  Truck,
  ChevronRight,
  Smartphone,
  Landmark,
  Copy,
  Check,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { sendOrderEmail } from '../utils/emailService';

// ─── PAYMENT DETAILS ────────────────────────────────
const PAYMENT_INFO = {
  jazzcash: {
    number: '0309 465 8807',
    accountName: 'Wajid Hussain',
  },
  easypaisa: {
    number: '0309 465 8807',
    accountName: 'Wajid Hussain',
  },
  bank: {
    bankName: 'United Bank Limited (UBL)',
    accountTitle: 'Wajid Hussain',
    accountNumber: '1867259141796',
    iban: 'PK58UNIL0109000397715556',
  },
};

// ─── Supported banks ────────────────────────────────
const PK_BANKS = [
  'Allied Bank',
  'Askari Bank',
  'Bank Al Habib',
  'Bank Alfalah',
  'Bank of Punjab',
  'Faysal Bank',
  'Habib Bank Limited (HBL)',
  'JS Bank',
  'MCB Bank',
  'Meezan Bank',
  'National Bank of Pakistan',
  'Sindh Bank',
  'Standard Chartered',
  'United Bank Limited (UBL)',
  'Other',
];

const ADMIN_WHATSAPP = '923094658807';

const PK_CITIES = [
  'Karachi',
  'Lahore',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Multan',
  'Peshawar',
  'Quetta',
  'Hyderabad',
  'Gujranwala',
  'Sialkot',
  'Bahawalpur',
  'Sargodha',
  'Sukkur',
  'Larkana',
  'Sheikhupura',
  'Mirpur Khas',
  'Rahim Yar Khan',
  'Gujrat',
  'Kasur',
];

const PAYMENT_METHODS = [
  {
    id: 'jazzcash',
    label: 'JazzCash',
    sub: 'Mobile wallet',
    icon: Smartphone,
  },
  {
    id: 'easypaisa',
    label: 'EasyPaisa',
    sub: 'Mobile wallet',
    icon: Smartphone,
  },
  {
    id: 'bank',
    label: 'Bank Transfer',
    sub: 'IBAN · Any bank',
    icon: Landmark,
  },
];

// ─── Copy-to-clipboard row ──────────────────────────
const CopyRow = ({ label, value, note }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(String(value));
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return (
    <div className="flex min-w-0 items-center justify-between gap-3 border-b border-stone-100 py-2 last:border-b-0">
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-stone-500 sm:text-[11px]">
          {label}
        </p>

        <p className="break-all font-mono text-xs text-stone-800 sm:text-sm">
          {value}
        </p>

        {note && (
          <p className="mt-0.5 text-[10px] leading-relaxed text-stone-400">
            {note}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={copy}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-white transition-colors hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400"
        aria-label={`Copy ${label}`}
      >
        {copied ? (
          <Check size={14} className="text-green-600" />
        ) : (
          <Copy size={14} className="text-stone-600" />
        )}
      </button>
    </div>
  );
};

// ─── Checkout Modal ─────────────────────────────────
const CheckoutModal = () => {
  const {
    cart,
    cartTotal,
    isCheckoutOpen,
    setIsCheckoutOpen,
    handlePaymentSuccess,
  } = useCart();

  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('jazzcash');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    transactionId: '',
    senderBank: '',
    senderName: '',
    otherBank: '',
  });

  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const finalTotal = Number(cartTotal) || 0;
  const deliveryDays = 3;

  const formatPrice = (amount) =>
    Number(amount || 0).toLocaleString('en-PK');

  // Reset checkout state when it opens
  useEffect(() => {
    if (!isCheckoutOpen) return;

    setStep(1);
    setErrors({});
    setProcessing(false);
    setPaymentMethod('jazzcash');
    setEmailSent(false);
    setOrderId('');
  }, [isCheckoutOpen]);

  // Prevent background scrolling while checkout is open
  useEffect(() => {
    if (!isCheckoutOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isCheckoutOpen]);

  // Escape closes checkout before order confirmation
  useEffect(() => {
    if (!isCheckoutOpen || step === 3) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && !processing) {
        setIsCheckoutOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCheckoutOpen, step, processing, setIsCheckoutOpen]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 11);
    }

    if (name === 'zip') {
      value = value.replace(/\D/g, '').slice(0, 5);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const getSenderBankName = () =>
    formData.senderBank === 'Other'
      ? formData.otherBank.trim()
      : formData.senderBank;

  const validateShipping = () => {
    const e = {};

    if (!formData.name.trim()) {
      e.name = 'Required';
    }

    if (!/^\d{11}$/.test(formData.phone)) {
      e.phone = 'Enter 11-digit mobile number';
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      e.email = 'Valid email required';
    }

    if (!formData.address.trim()) {
      e.address = 'Required';
    }

    if (!formData.city.trim()) {
      e.city = 'Required';
    }

    if (!/^\d{5}$/.test(formData.zip)) {
      e.zip = 'Enter 5-digit postal code';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validatePayment = () => {
    const e = {};

    if (
      !formData.transactionId.trim() ||
      formData.transactionId.trim().length < 5
    ) {
      e.transactionId =
        'Enter the Transaction ID / Reference Number';
    }

    if (paymentMethod === 'bank') {
      if (!formData.senderBank.trim()) {
        e.senderBank = 'Select your bank';
      }

      if (
        formData.senderBank === 'Other' &&
        !formData.otherBank.trim()
      ) {
        e.otherBank = 'Enter your bank name';
      }

      if (!formData.senderName.trim()) {
        e.senderName = 'Enter your account holder name';
      }
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateShipping()) {
      setStep(2);
      setErrors({});
    }
  };

  const handlePayment = async () => {
    if (processing || cart.length === 0) return;

    if (!validatePayment()) return;

    setProcessing(true);

    const newOrderId = `NDF-${Math.floor(
      Math.random() * 90000 + 10000
    )}`;

    setOrderId(newOrderId);

    const order = {
      orderId: newOrderId,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      zip: formData.zip,
      items: cart,
      paymentMethod,
      subtotal: finalTotal,
      codFee: 0,
      total: finalTotal,
      transactionId: formData.transactionId,
      senderBank:
        paymentMethod === 'bank'
          ? getSenderBankName()
          : '',
      senderName:
        paymentMethod === 'bank'
          ? formData.senderName
          : '',
    };

    try {
      const emailResult = await sendOrderEmail(order);
      setEmailSent(Boolean(emailResult?.success));
    } catch (error) {
      console.error('Order email failed:', error);
      setEmailSent(false);
    }

    setProcessing(false);
    setStep(3);
  };

  // ─── Build WhatsApp message ───────────────────────
  const buildWhatsAppLink = () => {
    const items = cart
      .map(
        (i) =>
          `• ${i.name} × ${i.quantity} = Rs ${(
            Number(i.price) * Number(i.quantity)
          ).toLocaleString('en-PK')}`
      )
      .join('\n');

    const methodLabel =
      paymentMethod === 'jazzcash'
        ? 'JazzCash'
        : paymentMethod === 'easypaisa'
        ? 'EasyPaisa'
        : 'Bank Transfer';

    let paymentDetails = `*Payment:* ${methodLabel}\n`;

    if (paymentMethod === 'bank') {
      paymentDetails += `*Sender Bank:* ${getSenderBankName()}\n`;
      paymentDetails += `*Sender Name:* ${formData.senderName}\n`;
    }

    paymentDetails += `*TID:* ${formData.transactionId}\n`;

    const msg =
      `🛒 *NEW ORDER — Noor Dry Fruits*\n\n` +
      `*Order ID:* ${orderId}\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* +92 ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Address:* ${formData.address}, ${formData.city} — ${formData.zip}\n\n` +
      `*Items:*\n${items}\n\n` +
      paymentDetails +
      `*Total:* Rs ${formatPrice(finalTotal)}`;

    return `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  };

  const selectPaymentMethod = (id) => {
    setPaymentMethod(id);
    setErrors({});

    setFormData((prev) => ({
      ...prev,
      transactionId: '',
      senderBank: '',
      senderName: '',
      otherBank: '',
    }));
  };

  const inputClass = (field) =>
    `w-full min-w-0 rounded-xl border px-3 py-3 text-sm text-stone-800 placeholder-stone-400 transition-all focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800/20 sm:px-4 ${
      errors[field]
        ? 'border-red-400 bg-red-50'
        : 'border-stone-200 bg-white'
    }`;

  const errorMessage = (field) =>
    errors[field] ? (
      <p className="mt-1 text-xs text-red-500" role="alert">
        {errors[field]}
      </p>
    ) : null;

  if (!isCheckoutOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto p-2 sm:items-center sm:p-4">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => {
          if (step < 3 && !processing) {
            setIsCheckoutOpen(false);
          }
        }}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
        className="relative my-2 flex max-h-[calc(100dvh-1rem)] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-amber-50 shadow-2xl sm:my-4 sm:max-h-[90vh] sm:rounded-3xl"
      >
        {/* Header */}
        <div className="z-10 shrink-0 border-b border-stone-200 bg-amber-50/95 px-4 pb-4 pt-4 backdrop-blur-md sm:px-6 sm:pb-5 sm:pt-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2
              id="checkout-title"
              className="text-xl font-bold text-stone-800 sm:text-2xl"
            >
              {step === 1 && 'Shipping Details'}
              {step === 2 && 'Payment Method'}
              {step === 3 && 'Order Confirmed'}
            </h2>

            {step < 3 && (
              <button
                type="button"
                onClick={() => setIsCheckoutOpen(false)}
                disabled={processing}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-stone-600 transition-colors hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Close checkout"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Progress */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className="flex min-w-0 flex-1 items-center gap-1.5 last:flex-none sm:gap-2"
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all sm:h-9 sm:w-9 sm:text-sm ${
                    step >= s
                      ? 'bg-stone-800 text-amber-50'
                      : 'bg-stone-200 text-stone-500'
                  }`}
                >
                  {step > s ? (
                    <CheckCircle size={16} />
                  ) : (
                    s
                  )}
                </div>

                {s < 3 && (
                  <div
                    className={`h-1 min-w-0 flex-1 rounded-full transition-all ${
                      step > s
                        ? 'bg-stone-800'
                        : 'bg-stone-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-6">
          {/* STEP 1: SHIPPING */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="checkout-name"
                    className="mb-1.5 block text-sm font-semibold text-stone-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="checkout-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ali Khan"
                    autoComplete="name"
                    className={inputClass('name')}
                  />

                  {errorMessage('name')}
                </div>

                {/* Phone */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="checkout-phone"
                    className="mb-1.5 block text-sm font-semibold text-stone-700"
                  >
                    Mobile Number
                  </label>

                  <div className="flex min-w-0">
                    <span className="flex shrink-0 items-center rounded-l-xl border border-r-0 border-stone-200 bg-stone-100 px-3 text-sm font-medium text-stone-600">
                      +92
                    </span>

                    <input
                      id="checkout-phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="3001234567"
                      autoComplete="tel-national"
                      maxLength={11}
                      className={`${inputClass(
                        'phone'
                      )} rounded-l-none`}
                    />
                  </div>

                  {errorMessage('phone')}
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="checkout-email"
                    className="mb-1.5 block text-sm font-semibold text-stone-700"
                  >
                    Email
                  </label>

                  <input
                    id="checkout-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ali@example.com"
                    autoComplete="email"
                    className={inputClass('email')}
                  />

                  {errorMessage('email')}
                </div>

                {/* Address */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="checkout-address"
                    className="mb-1.5 block text-sm font-semibold text-stone-700"
                  >
                    Full Address
                  </label>

                  <textarea
                    id="checkout-address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House 12, Street 5, DHA Phase 6"
                    autoComplete="street-address"
                    rows={3}
                    className={`${inputClass(
                      'address'
                    )} resize-y`}
                  />

                  {errorMessage('address')}
                </div>

                {/* City */}
                <div className="min-w-0">
                  <label
                    htmlFor="checkout-city"
                    className="mb-1.5 block text-sm font-semibold text-stone-700"
                  >
                    City
                  </label>

                  <select
                    id="checkout-city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    autoComplete="address-level2"
                    className={`${inputClass(
                      'city'
                    )} cursor-pointer`}
                  >
                    <option value="">Select city</option>

                    {PK_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>

                  {errorMessage('city')}
                </div>

                {/* Postal Code */}
                <div className="min-w-0">
                  <label
                    htmlFor="checkout-zip"
                    className="mb-1.5 block text-sm font-semibold text-stone-700"
                  >
                    Postal Code
                  </label>

                  <input
                    id="checkout-zip"
                    name="zip"
                    inputMode="numeric"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="75500"
                    autoComplete="postal-code"
                    maxLength={5}
                    className={inputClass('zip')}
                  />

                  {errorMessage('zip')}
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-stone-800 px-4 py-3.5 text-sm font-bold text-amber-50 transition-all hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 sm:text-base"
              >
                Continue to Payment
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* STEP 2: PAYMENT */}
          {step === 2 && (
            <div className="space-y-4">
              {/* Payment Methods */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-stone-700">
                  Choose Payment Method
                </label>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {PAYMENT_METHODS.map((method) => {
                    const MethodIcon = method.icon;
                    const selected =
                      paymentMethod === method.id;

                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() =>
                          selectPaymentMethod(method.id)
                        }
                        className={`flex min-w-0 items-center gap-3 rounded-xl border-2 p-3 text-left transition-all focus:outline-none focus:ring-2 focus:ring-stone-400 ${
                          selected
                            ? 'border-stone-800 bg-stone-800 text-amber-50'
                            : 'border-stone-200 bg-white hover:border-stone-400'
                        }`}
                        aria-pressed={selected}
                      >
                        <MethodIcon
                          size={19}
                          className={`shrink-0 ${
                            selected
                              ? 'text-amber-400'
                              : 'text-stone-600'
                          }`}
                        />

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-semibold sm:text-sm">
                            {method.label}
                          </p>

                          <p
                            className={`truncate text-[10px] ${
                              selected
                                ? 'text-amber-100/70'
                                : 'text-stone-500'
                            }`}
                          >
                            {method.sub}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* JazzCash / EasyPaisa */}
              {['jazzcash', 'easypaisa'].includes(
                paymentMethod
              ) && (
                <div className="space-y-3 rounded-xl border border-stone-200 bg-white p-3 sm:p-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle
                      size={16}
                      className="mt-0.5 shrink-0 text-amber-600"
                    />

                    <p className="text-xs leading-relaxed text-stone-600">
                      Open your{' '}
                      <strong>
                        {paymentMethod === 'jazzcash'
                          ? 'JazzCash'
                          : 'EasyPaisa'}
                      </strong>{' '}
                      app and send{' '}
                      <strong>
                        Rs {formatPrice(finalTotal)}
                      </strong>{' '}
                      to the account below. Then enter the
                      transaction ID.
                    </p>
                  </div>

                  <div className="rounded-lg border border-amber-100 bg-amber-50/60 p-3">
                    <CopyRow
                      label="Account Number"
                      value={
                        PAYMENT_INFO[paymentMethod].number
                      }
                    />

                    <CopyRow
                      label="Account Name"
                      value={
                        PAYMENT_INFO[paymentMethod].accountName
                      }
                    />

                    <CopyRow
                      label="Amount"
                      value={`Rs ${formatPrice(finalTotal)}`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="wallet-transaction-id"
                      className="mb-1.5 block text-sm font-semibold text-stone-700"
                    >
                      Transaction ID (TID)
                    </label>

                    <input
                      id="wallet-transaction-id"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleChange}
                      placeholder="e.g. 1234567890"
                      autoComplete="off"
                      className={inputClass('transactionId')}
                    />

                    {errorMessage('transactionId')}

                    <p className="mt-1 text-[11px] leading-relaxed text-stone-500">
                      You'll find this in your{' '}
                      {paymentMethod === 'jazzcash'
                        ? 'JazzCash'
                        : 'EasyPaisa'}{' '}
                      transaction history.
                    </p>
                  </div>
                </div>
              )}

              {/* Bank Transfer */}
              {paymentMethod === 'bank' && (
                <div className="space-y-3 rounded-xl border border-stone-200 bg-white p-3 sm:p-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle
                      size={16}
                      className="mt-0.5 shrink-0 text-amber-600"
                    />

                    <p className="text-xs leading-relaxed text-stone-600">
                      Transfer{' '}
                      <strong>
                        Rs {formatPrice(finalTotal)}
                      </strong>{' '}
                      to our UBL account from any supported
                      bank using your mobile banking app, ATM,
                      or online banking.
                    </p>
                  </div>

                  {/* Recipient account */}
                  <div className="rounded-lg border border-blue-100 bg-blue-50/40 p-3">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                      Send Payment To
                    </p>

                    <CopyRow
                      label="Bank"
                      value={PAYMENT_INFO.bank.bankName}
                    />

                    <CopyRow
                      label="Account Title"
                      value={PAYMENT_INFO.bank.accountTitle}
                    />

                    <CopyRow
                      label="Account Number"
                      value={PAYMENT_INFO.bank.accountNumber}
                    />

                    <CopyRow
                      label="IBAN"
                      value={PAYMENT_INFO.bank.iban}
                      note="Use this for inter-bank transfers"
                    />

                    <CopyRow
                      label="Amount"
                      value={`Rs ${formatPrice(finalTotal)}`}
                    />
                  </div>

                  {/* Sender details */}
                  <div className="space-y-3 border-t border-stone-100 pt-3">
                    <p className="text-xs font-semibold text-stone-600">
                      Your Transfer Details
                    </p>

                    {/* Sender bank */}
                    <div>
                      <label
                        htmlFor="sender-bank"
                        className="mb-1.5 block text-sm font-semibold text-stone-700"
                      >
                        Your Bank
                      </label>

                      <select
                        id="sender-bank"
                        name="senderBank"
                        value={formData.senderBank}
                        onChange={handleChange}
                        className={`${inputClass(
                          'senderBank'
                        )} cursor-pointer`}
                      >
                        <option value="">
                          Select your bank
                        </option>

                        {PK_BANKS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>

                      {errorMessage('senderBank')}
                    </div>

                    {/* Other bank */}
                    {formData.senderBank === 'Other' && (
                      <div>
                        <label
                          htmlFor="other-bank"
                          className="mb-1.5 block text-sm font-semibold text-stone-700"
                        >
                          Enter Your Bank Name
                        </label>

                        <input
                          id="other-bank"
                          name="otherBank"
                          value={formData.otherBank}
                          onChange={handleChange}
                          placeholder="Enter your bank name"
                          className={inputClass('otherBank')}
                        />

                        {errorMessage('otherBank')}

                        <p className="mt-1 text-[11px] text-stone-500">
                          Type the full name of your bank.
                        </p>
                      </div>
                    )}

                    {/* Account holder */}
                    <div>
                      <label
                        htmlFor="sender-name"
                        className="mb-1.5 block text-sm font-semibold text-stone-700"
                      >
                        Your Account Holder Name
                      </label>

                      <input
                        id="sender-name"
                        name="senderName"
                        value={formData.senderName}
                        onChange={handleChange}
                        placeholder="Name on your bank account"
                        className={inputClass('senderName')}
                      />

                      {errorMessage('senderName')}
                    </div>

                    {/* Transaction ID */}
                    <div>
                      <label
                        htmlFor="bank-transaction-id"
                        className="mb-1.5 block text-sm font-semibold text-stone-700"
                      >
                        Transfer Reference / TID
                      </label>

                      <input
                        id="bank-transaction-id"
                        name="transactionId"
                        value={formData.transactionId}
                        onChange={handleChange}
                        placeholder="e.g. FT-2025-XXXXXX"
                        autoComplete="off"
                        className={inputClass('transactionId')}
                      />

                      {errorMessage('transactionId')}

                      <p className="mt-1 text-[11px] text-stone-500">
                        Your bank app will show this after the
                        transfer.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Order Summary */}
              <div className="space-y-2 rounded-xl border border-stone-200 bg-white p-3 sm:p-4">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-stone-600">
                    Subtotal
                  </span>

                  <span className="font-semibold text-stone-800">
                    Rs {formatPrice(finalTotal)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-stone-200 pt-2">
                  <span className="flex items-center gap-2 font-semibold text-stone-700">
                    <Lock
                      size={14}
                      className="text-green-600"
                    />
                    Total
                  </span>

                  <span className="text-xl font-bold text-stone-800">
                    Rs {formatPrice(finalTotal)}
                  </span>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col-reverse gap-2 sm:flex-row sm:gap-3">
                <button
                  type="button"
                  onClick={() => {
                    if (!processing) {
                      setStep(1);
                      setErrors({});
                    }
                  }}
                  disabled={processing}
                  className="min-h-12 rounded-full border border-stone-200 bg-white px-5 py-3.5 text-sm font-bold text-stone-700 transition-colors hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={handlePayment}
                  disabled={processing || cart.length === 0}
                  className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-stone-800 px-4 py-3.5 text-sm font-bold text-amber-50 transition-all hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
                >
                  {processing ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-amber-50/30 border-t-amber-50" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CheckCircle size={16} />
                      Submit Order
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SUCCESS */}
          {step === 3 && (
            <div className="py-4 text-center sm:py-6">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle
                  size={44}
                  className="text-green-600"
                />
              </div>

              <h3 className="mb-2 text-2xl font-bold text-stone-800">
                Order Submitted!
              </h3>

              <p className="mb-1 text-sm text-stone-500">
                We'll verify your payment within 24 hours.
              </p>

              <p className="mb-6 text-sm text-stone-400">
                Order #
                <span className="font-mono font-semibold">
                  {orderId}
                </span>
              </p>

              <div className="mb-4 rounded-2xl border border-stone-200 bg-white p-4 text-left">
                <div className="mb-2 flex items-center gap-2 text-stone-700">
                  <Truck
                    size={18}
                    className="text-stone-600"
                  />

                  <span className="text-sm font-semibold">
                    Estimated Delivery
                  </span>
                </div>

                <p className="text-sm text-stone-500">
                  {new Date(
                    Date.now() + deliveryDays * 86400000
                  ).toLocaleDateString('en-PK', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>

                <p className="mt-1 text-xs leading-relaxed text-stone-400">
                  We'll call +92 {formData.phone} to confirm
                  the order.
                </p>

                {emailSent && (
                  <div className="mt-3 flex items-start gap-2 border-t border-stone-200 pt-3 text-xs text-green-700">
                    <CheckCircle
                      size={14}
                      className="mt-0.5 shrink-0"
                    />

                    <span className="break-words">
                      Confirmation sent to{' '}
                      <strong>{formData.email}</strong>
                    </span>
                  </div>
                )}
              </div>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:text-base"
              >
                <MessageCircle size={18} />
                Send Order to WhatsApp
              </a>

              <button
                type="button"
                onClick={() => setIsCheckoutOpen(false)}
                className="flex min-h-12 w-full items-center justify-center rounded-full bg-stone-800 px-4 py-3.5 text-sm font-bold text-amber-50 transition-all hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 sm:text-base"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;