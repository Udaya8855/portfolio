import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../types';

/**
 * Email delivery for the contact form, powered by EmailJS — a client-side
 * email API that needs no backend server. Two emails are sent per submit:
 *
 *  1. An "owner notification" to Udaya, containing the visitor's message.
 *  2. An "auto-reply" thank-you email back to the visitor who submitted the
 *     form, confirming their message was received.
 *
 * Setup required (see README.md "Contact form email setup" section):
 *   - Create a free account at https://www.emailjs.com
 *   - Connect an email service (Gmail, Outlook, etc.) → get a Service ID
 *   - Create two templates (owner notification + auto-reply) → get their IDs
 *   - Copy your Public Key from Account → General
 *   - Put all four values in a `.env` file at the project root (see .env.example)
 *
 * All four values are public-safe "client IDs", not secrets — EmailJS is
 * designed to be called directly from the browser. Restrict abuse by setting
 * allowed domains in the EmailJS dashboard under Account → Security.
 */

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const OWNER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID;
const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const isEmailServiceConfigured = (): boolean =>
  Boolean(SERVICE_ID && OWNER_TEMPLATE_ID && AUTOREPLY_TEMPLATE_ID && PUBLIC_KEY);

export class EmailDeliveryError extends Error {}

/**
 * Sends both the owner notification and the visitor auto-reply for a
 * contact form submission. Both sends happen in parallel; if either one
 * fails this throws so the UI can show an accurate error state.
 */
export async function sendContactMessage(form: ContactFormData): Promise<void> {
  if (!isEmailServiceConfigured()) {
    throw new EmailDeliveryError(
      'Email service is not configured. Add your EmailJS keys to a .env file (see .env.example).'
    );
  }

  const submittedAt = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  // Template variable names below (to_name, from_name, from_email, subject,
  // message, time) must match the {{variable}} placeholders you set up in
  // your EmailJS template editor.
  const ownerNotificationParams = {
    to_name: 'Udaya',
    from_name: form.name,
    from_email: form.email,
    subject: form.subject || 'New portfolio contact form message',
    message: form.message,
    time: submittedAt,
  };

  const autoReplyParams = {
    to_name: form.name,
    to_email: form.email,
    from_name: 'Udaya Kumar V A',
    subject: form.subject || 'Thanks for reaching out',
    message: form.message,
    time: submittedAt,
  };

  const results = await Promise.allSettled([
    emailjs.send(SERVICE_ID, OWNER_TEMPLATE_ID, ownerNotificationParams, { publicKey: PUBLIC_KEY }),
    emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, autoReplyParams, { publicKey: PUBLIC_KEY }),
  ]);

  const failures = results.filter((r) => r.status === 'rejected') as PromiseRejectedResult[];

  if (failures.length > 0) {
    const reasons = failures.map((f) => (f.reason instanceof Error ? f.reason.message : String(f.reason)));
    throw new EmailDeliveryError(reasons.join('; ') || 'Failed to send message. Please try again.');
  }
}