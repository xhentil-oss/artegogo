/**
 * ──────────────────────────────────────────────────────────────
 *  PAYMENT & EMAIL CONFIGURATION
 *  Replace the placeholder values below with your real API keys.
 * ──────────────────────────────────────────────────────────────
 *
 *  STRIPE
 *  1. Create account at https://stripe.com
 *  2. Dashboard → Developers → API keys
 *  3. Copy the "Publishable key" (starts with pk_live_ or pk_test_)
 *  NOTE: To actually charge the card you also need a backend that
 *        creates a PaymentIntent and returns the client_secret.
 *        The frontend here tokenizes the card safely — ready for backend.
 *
 *  PAYPAL
 *  1. Create a PayPal Developer account at https://developer.paypal.com
 *  2. My Apps & Credentials → Create App → copy Client ID
 *  3. For live use the LIVE client ID; for testing use the Sandbox one.
 *
 *  EMAILJS  (100% client-side email — no backend needed)
 *  1. Create free account at https://www.emailjs.com
 *  2. Email Services → Add New Service (Gmail / SMTP etc.)  → copy Service ID
 *  3. Email Templates → Create Template with variables:
 *       {{to_name}}, {{to_email}}, {{order_items}}, {{order_total}}
 *     copy the Template ID
 *  4. Account → API Keys → copy Public Key
 * ──────────────────────────────────────────────────────────────
 */

export const STRIPE_PUBLISHABLE_KEY = "pk_test_REPLACE_WITH_YOUR_STRIPE_KEY";

export const PAYPAL_CLIENT_ID = "REPLACE_WITH_YOUR_PAYPAL_CLIENT_ID";

export const EMAILJS_SERVICE_ID  = "REPLACE_WITH_YOUR_SERVICE_ID";
export const EMAILJS_TEMPLATE_ID = "REPLACE_WITH_YOUR_TEMPLATE_ID";
export const EMAILJS_PUBLIC_KEY  = "REPLACE_WITH_YOUR_PUBLIC_KEY";
