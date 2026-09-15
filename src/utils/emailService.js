import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const ORDER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ORDER_TEMPLATE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

// Initialize once
emailjs.init(PUBLIC_KEY);

/**
 * Send order confirmation to ADMIN + CUSTOMER.
 */
export const sendOrderEmail = async (order) => {
  const itemsText = order.items
    .map(
      (i) =>
        `• ${i.name}${i.urdu ? ` (${i.urdu})` : ''}\n  ${i.quantity} × Rs ${i.price.toLocaleString(
          'en-PK'
        )} = Rs ${(i.price * i.quantity).toLocaleString('en-PK')}`
    )
    .join('\n\n');

  const baseParams = {
    order_id: order.orderId,
    order_date: new Date().toLocaleString('en-PK', {
      dateStyle: 'full',
      timeStyle: 'short',
    }),
    customer_name: order.name,
    customer_phone: order.phone,
    customer_email: order.email,
    customer_address: order.address,
    customer_city: order.city,
    customer_zip: order.zip,
    order_items: itemsText,
    payment_method: order.paymentMethod.toUpperCase(),
    subtotal: order.subtotal.toLocaleString('en-PK'),
    cod_fee: order.codFee.toLocaleString('en-PK'),
    total: order.total.toLocaleString('en-PK'),
    reply_to: order.email,
  };

  try {
    // 1️⃣ Admin copy
    await emailjs.send(SERVICE_ID, ORDER_TEMPLATE_ID, {
      ...baseParams,
      to_email: ADMIN_EMAIL,
    });

    // 2️⃣ Customer copy
    await emailjs.send(SERVICE_ID, ORDER_TEMPLATE_ID, {
      ...baseParams,
      to_email: order.email,
    });

    return { success: true };
  } catch (error) {
    console.error('Order email failed:', error);
    return { success: false, error };
  }
};

/**
 * Send contact form message to admin.
 */
export const sendContactEmail = async ({ name, email, message }) => {
  try {
    await emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, {
      from_name: name,
      from_email: email,
      message,
      to_email: ADMIN_EMAIL,
      reply_to: email,
    });
    return { success: true };
  } catch (error) {
    console.error('Contact email failed:', error);
    return { success: false, error };
  }
};