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

// ─── Supported banks (sorted alphabetically) ────────
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
  'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad',
  'Multan', 'Peshawar', 'Quetta', 'Hyderabad', 'Gujranwala',
  'Sialkot', 'Bahawalpur', 'Sargodha', 'Sukkur', 'Larkana',
  'Sheikhupura', 'Mirpur Khas', 'Rahim Yar Khan', 'Gujrat', 'Kasur',
];

const PAYMENT_METHODS = [
  { id: 'jazzcash', label: 'JazzCash', sub: 'Mobile wallet', icon: Smartphone },
  { id: 'easypaisa', label: 'EasyPaisa', sub: 'Mobile wallet', icon: Smartphone },
  { id: 'bank', label: 'Bank Transfer', sub: 'IBAN · Any bank', icon: Landmark },
];

// ─── Copy-to-clipboard row ──────────────────────────
const CopyRow = ({ label, value, note }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center justify-between gap-3 py-1.5">
      <div className="min-w-0 flex-1">
        <p className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
          {label}
        </p>
        <p className="text-sm font-mono text-stone-800 break-all">{value}</p>
        {note && <p className="text-[10px] text-stone-400 mt-0.5">{note}</p>}
      </div>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 w-8 h-8 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 flex items-center justify-center transition-colors"
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
    name: '', phone: '', email: '', address: '', city: '', zip: '',
    transactionId: '', senderBank: '', senderName: '', otherBank: '',
  });
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (isCheckoutOpen) {
      setStep(1);
      setErrors({});
      setProcessing(false);
      setPaymentMethod('jazzcash');
      setEmailSent(false);
    }
  }, [isCheckoutOpen]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 11);
    }
    if (name === 'zip') {
      value = value.replace(/\D/g, '').slice(0, 5);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Helper to get the final sender bank name
  const getSenderBankName = () =>
    formData.senderBank === 'Other'
      ? formData.otherBank.trim()
      : formData.senderBank;

  const validateShipping = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Required';
    if (!formData.phone.trim() || formData.phone.length < 11)
      e.phone = 'Enter 11-digit mobile number';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      e.email = 'Valid email required';
    if (!formData.address.trim()) e.address = 'Required';
    if (!formData.city.trim()) e.city = 'Required';
    if (!formData.zip.trim() || formData.zip.length !== 5)
      e.zip = 'Enter 5-digit postal code';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validatePayment = () => {
    const e = {};

    if (!formData.transactionId.trim() || formData.transactionId.trim().length < 5) {
      e.transactionId = 'Enter the Transaction ID / Reference Number';
    }

    if (paymentMethod === 'bank') {
      if (!formData.senderBank.trim()) {
        e.senderBank = 'Select your bank';
      }
      if (formData.senderBank === 'Other' && !formData.otherBank.trim()) {
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
    if (step === 1 && validateShipping()) setStep(2);
  };

  const finalTotal = cartTotal;

  const handlePayment = async () => {
    if (!validatePayment()) return;
    setProcessing(true);

    const newOrderId = `NDF-${Math.floor(Math.random() * 90000 + 10000)}`;
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
      subtotal: cartTotal,
      codFee: 0,
      total: finalTotal,
      transactionId: formData.transactionId,
      senderBank: paymentMethod === 'bank' ? getSenderBankName() : '',
      senderName: paymentMethod === 'bank' ? formData.senderName : '',
    };

    const emailResult = await sendOrderEmail(order);
    setEmailSent(emailResult.success);

    setTimeout(() => {
      setProcessing(false);
      setStep(3);
      setTimeout(() => handlePaymentSuccess(), 3000);
    }, 900);
  };

  // ── Build WhatsApp message for admin notification ──
  const buildWhatsAppLink = () => {
    const items = cart
      .map(
        (i) =>
          `• ${i.name} × ${i.quantity} = Rs ${(i.price * i.quantity).toLocaleString('en-PK')}`
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
      `*Total:* Rs ${finalTotal.toLocaleString('en-PK')}`;

    return `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  };

  if (!isCheckoutOpen) return null;

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-white'
    } focus:outline-none focus:ring-2 focus:ring-stone-800/20 focus:border-stone-400 transition-all text-stone-800 placeholder-stone-400`;

  const deliveryDays = 3;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={step < 3 ? () => setIsCheckoutOpen(false) : undefined}
      />

      <div className="relative bg-amber-50 rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* ─── Header ─────────────────────────── */}
        <div className="sticky top-0 bg-amber-50/95 backdrop-blur-md px-6 pt-6 pb-4 border-b border-stone-200 z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-stone-800">
              {step === 1 && 'Shipping Details'}
              {step === 2 && 'Payment Method'}
              {step === 3 && 'Order Confirmed'}
            </h2>
            {step < 3 && (
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="w-9 h-9 rounded-full hover:bg-stone-200 flex items-center justify-center"
                aria-label="Close checkout"
              >
                <X size={20} className="text-stone-600" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1 last:flex-none">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step >= s ? 'bg-stone-800 text-amber-50' : 'bg-stone-200 text-stone-500'
                  }`}
                >
                  {step > s ? <CheckCircle size={16} /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 rounded-full transition-all ${
                      step > s ? 'bg-stone-800' : 'bg-stone-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ─── Body ───────────────────────────── */}
        <div className="p-6">
          {/* ─── STEP 1: SHIPPING ──────────────── */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-stone-700 mb-1.5 block">Full Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Ali Khan" className={inputClass('name')} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-stone-700 mb-1.5 block">Mobile Number</label>
                  <div className="flex">
                    <span className="px-3 py-3 rounded-l-xl bg-stone-100 border border-r-0 border-stone-200 text-stone-600 text-sm font-medium flex items-center">+92</span>
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="3001234567" className={`${inputClass('phone')} rounded-l-none`} />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-stone-700 mb-1.5 block">Email</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="ali@example.com" className={inputClass('email')} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-stone-700 mb-1.5 block">Full Address</label>
                  <input name="address" value={formData.address} onChange={handleChange} placeholder="House 12, Street 5, DHA Phase 6" className={inputClass('address')} />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>

                <div>
                  <label className="text-sm font-semibold text-stone-700 mb-1.5 block">City</label>
                  <select name="city" value={formData.city} onChange={handleChange} className={`${inputClass('city')} cursor-pointer`}>
                    <option value="">Select city</option>
                    {PK_CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="text-sm font-semibold text-stone-700 mb-1.5 block">Postal Code</label>
                  <input name="zip" value={formData.zip} onChange={handleChange} placeholder="75500" className={inputClass('zip')} />
                  {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
                </div>
              </div>

              <button onClick={handleNext} className="w-full bg-stone-800 hover:bg-stone-700 text-amber-50 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all mt-4">
                Continue to Payment <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* ─── STEP 2: PAYMENT ───────────────── */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-stone-700 mb-2 block">Choose Payment Method</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {PAYMENT_METHODS.map((method) => {
                    const MethodIcon = method.icon;
                    const selected = paymentMethod === method.id;
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => {
                          setPaymentMethod(method.id);
                          setErrors({});
                          setFormData((p) => ({
                            ...p,
                            transactionId: '',
                            senderBank: '',
                            senderName: '',
                            otherBank: '',
                          }));
                        }}
                        className={`flex items-center gap-2 p-3 rounded-xl border-2 text-left transition-all ${
                          selected ? 'border-stone-800 bg-stone-800 text-amber-50' : 'border-stone-200 bg-white hover:border-stone-400'
                        }`}
                      >
                        <MethodIcon size={18} className={selected ? 'text-amber-400' : 'text-stone-600'} />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs truncate">{method.label}</p>
                          <p className={`text-[10px] truncate ${selected ? 'text-amber-100/70' : 'text-stone-500'}`}>{method.sub}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── JazzCash / EasyPaisa ───────── */}
              {['jazzcash', 'easypaisa'].includes(paymentMethod) && (
                <div className="bg-white rounded-xl p-4 border border-stone-200 space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle size={16} className="text-amber-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Open your <strong>{paymentMethod === 'jazzcash' ? 'JazzCash' : 'EasyPaisa'}</strong> app and send <strong>Rs {finalTotal.toLocaleString('en-PK')}</strong> to the account below. Then paste the transaction ID.
                    </p>
                  </div>

                  <div className="bg-amber-50/60 rounded-lg p-3 border border-amber-100">
                    <CopyRow label="Account Number" value={PAYMENT_INFO[paymentMethod].number} />
                    <CopyRow label="Account Name" value={PAYMENT_INFO[paymentMethod].accountName} />
                    <CopyRow label="Amount" value={`Rs ${finalTotal.toLocaleString('en-PK')}`} />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-stone-700 mb-1.5 block">
                      Transaction ID (TID)
                    </label>
                    <input
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleChange}
                      placeholder="e.g. 1234567890"
                      className={inputClass('transactionId')}
                    />
                    {errors.transactionId && (
                      <p className="text-red-500 text-xs mt-1">{errors.transactionId}</p>
                    )}
                    <p className="text-[11px] text-stone-500 mt-1">
                      You'll find this in your {paymentMethod === 'jazzcash' ? 'JazzCash' : 'EasyPaisa'} transaction history.
                    </p>
                  </div>
                </div>
              )}

              {/* ── Bank Transfer ──────────────── */}
              {paymentMethod === 'bank' && (
                <div className="bg-white rounded-xl p-4 border border-stone-200 space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle size={16} className="text-amber-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Transfer <strong>Rs {finalTotal.toLocaleString('en-PK')}</strong> to our UBL account from <strong>any bank</strong> (Meezan, HBL, MCB, UBL, etc.) using your mobile banking app, ATM, or online banking.
                    </p>
                  </div>

                  {/* OUR account (send payment TO) */}
                  <div className="bg-blue-50/40 rounded-lg p-3 border border-blue-100">
                    <p className="text-[11px] uppercase tracking-wider text-blue-700 font-bold mb-2">
                      Send Payment To
                    </p>
                    <CopyRow label="Bank" value={PAYMENT_INFO.bank.bankName} />
                    <CopyRow label="Account Title" value={PAYMENT_INFO.bank.accountTitle} />
                    <CopyRow label="Account Number" value={PAYMENT_INFO.bank.accountNumber} />
                    <CopyRow
                      label="IBAN"
                      value={PAYMENT_INFO.bank.iban}
                      note="Use this for inter-bank transfers"
                    />
                    <CopyRow label="Amount" value={`Rs ${finalTotal.toLocaleString('en-PK')}`} />
                  </div>

                  {/* SENDER details */}
                  <div className="space-y-3 pt-2 border-t border-stone-100">
                    <p className="text-xs text-stone-600 font-semibold">
                      Your Transfer Details
                    </p>

                    <div>
                      <label className="text-sm font-semibold text-stone-700 mb-1.5 block">
                        Your Bank
                      </label>
                      <select
                        name="senderBank"
                        value={formData.senderBank}
                        onChange={handleChange}
                        className={`${inputClass('senderBank')} cursor-pointer`}
                      >
                        <option value="">Select your bank</option>
                        {PK_BANKS.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                      {errors.senderBank && (
                        <p className="text-red-500 text-xs mt-1">{errors.senderBank}</p>
                      )}
                    </div>

                    {/* Show input only when "Other" is selected */}
                    {formData.senderBank === 'Other' && (
                      <div>
                        <label className="text-sm font-semibold text-stone-700 mb-1.5 block">
                          Enter Your Bank Name
                        </label>
                        <input
                          name="otherBank"
                          value={formData.otherBank}
                          onChange={handleChange}
                          placeholder="e.g. Soneri Bank, BankIslami, U Microfinance..."
                          className={inputClass('otherBank')}
                          autoFocus
                        />
                        {errors.otherBank && (
                          <p className="text-red-500 text-xs mt-1">{errors.otherBank}</p>
                        )}
                        <p className="text-[11px] text-stone-500 mt-1">
                          Type the full name of your bank.
                        </p>
                      </div>
                    )}

                    <div>
                      <label className="text-sm font-semibold text-stone-700 mb-1.5 block">
                        Your Account Holder Name
                      </label>
                      <input
                        name="senderName"
                        value={formData.senderName}
                        onChange={handleChange}
                        placeholder="Name on your bank account"
                        className={inputClass('senderName')}
                      />
                      {errors.senderName && (
                        <p className="text-red-500 text-xs mt-1">{errors.senderName}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-stone-700 mb-1.5 block">
                        Transfer Reference / TID
                      </label>
                      <input
                        name="transactionId"
                        value={formData.transactionId}
                        onChange={handleChange}
                        placeholder="e.g. FT-2025-XXXXXX"
                        className={inputClass('transactionId')}
                      />
                      {errors.transactionId && (
                        <p className="text-red-500 text-xs mt-1">{errors.transactionId}</p>
                      )}
                      <p className="text-[11px] text-stone-500 mt-1">
                        Your bank app will show this after the transfer.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Order summary */}
              <div className="bg-white rounded-xl p-4 border border-stone-200 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-stone-600">Subtotal</span>
                  <span className="font-semibold text-stone-800">Rs {cartTotal.toLocaleString('en-PK')}</span>
                </div>
                <div className="border-t border-stone-200 pt-2 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-stone-700 font-semibold">
                    <Lock size={14} className="text-green-600" /> Total
                  </span>
                  <span className="text-xl font-bold text-stone-800">Rs {finalTotal.toLocaleString('en-PK')}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep(1)} disabled={processing} className="px-5 py-3.5 rounded-full font-bold text-stone-700 bg-white border border-stone-200 hover:bg-stone-100 transition-colors disabled:opacity-50">
                  Back
                </button>
                <button onClick={handlePayment} disabled={processing} className="flex-1 bg-stone-800 hover:bg-stone-700 text-amber-50 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70">
                  {processing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-amber-50/30 border-t-amber-50 rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <><CheckCircle size={16} /> Submit Order</>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* ─── STEP 3: SUCCESS ───────────────── */}
          {step === 3 && (
            <div className="text-center py-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={44} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">
                Order Submitted!
              </h3>
              <p className="text-sm text-stone-500 mb-1">
                We'll verify your payment within 24 hours.
              </p>
              <p className="text-sm text-stone-400 mb-6">
                Order #<span className="font-mono font-semibold">{orderId}</span>
              </p>

              <div className="bg-white rounded-2xl p-4 border border-stone-200 text-left mb-4">
                <div className="flex items-center gap-2 text-stone-700 mb-2">
                  <Truck size={18} className="text-stone-600" />
                  <span className="font-semibold text-sm">Estimated Delivery</span>
                </div>
                <p className="text-sm text-stone-500">
                  {new Date(Date.now() + deliveryDays * 86400000).toLocaleDateString('en-PK', {
                    weekday: 'long', month: 'long', day: 'numeric',
                  })}
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  We'll call +92 {formData.phone} to confirm the order.
                </p>

                {emailSent && (
                  <div className="mt-3 pt-3 border-t border-stone-200 flex items-center gap-2 text-xs text-green-700">
                    <CheckCircle size={14} />
                    Confirmation sent to <strong>{formData.email}</strong>
                  </div>
                )}
              </div>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-colors mb-3"
              >
                <MessageCircle size={18} /> Send Order to WhatsApp
              </a>

              <button onClick={() => setIsCheckoutOpen(false)} className="w-full bg-stone-800 hover:bg-stone-700 text-amber-50 py-3.5 rounded-full font-bold transition-all">
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