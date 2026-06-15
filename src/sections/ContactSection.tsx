import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin, Phone, CheckCircle, MessageCircle } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { Button } from '../components/Button';
import type { ContactFormData } from '../types';
import udaya from "../assets/Udayakumar.jpg";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const INITIAL: ContactFormData = { name: '', email: '', subject: '', message: '' };

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const headerAnim   = useScrollAnimation('fade-up',    { delay: 0 });
  const formAnim     = useScrollAnimation('slide-left', { delay: 100 });
  const sidebarAnim  = useScrollAnimation('slide-right',{ delay: 150 });

  const validate = (): boolean => {
    const e: Partial<ContactFormData> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setTimeout(() => setSubmitted(true), 400);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof ContactFormData]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const inputBase = 'w-full bg-slate-50 dark:bg-slate-800/60 border rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all';
  const inputCls = (field: keyof ContactFormData) =>
    `${inputBase} ${errors[field] ? 'border-red-400' : 'border-slate-200 dark:border-white/8 hover:border-slate-400 dark:hover:border-white/15'}`;

  const CONTACT_ITEMS = [
    { icon: <Mail size={16} />,     label: 'udayakumar12221@gmail.com',         href: 'mailto:udayakumar12221@gmail.com',           aria: 'Send email to Udaya Kumar' },
    { icon: <Phone size={16} />,    label: '+91 9688380366',                    href: 'tel:+919688380366',                          aria: 'Call Udaya Kumar' },
    { icon: <Github size={16} />,   label: 'github.com/Udaya8855',              href: 'https://github.com/Udaya8855',               aria: 'View GitHub profile' },
    { icon: <Linkedin size={16} />, label: 'linkedin.com/in/udayakumar2003',    href: 'https://www.linkedin.com/in/udayakumar2003', aria: 'View LinkedIn profile' },
    { icon: <MapPin size={16} />,   label: 'Chennai, India',                    href: undefined,                                    aria: undefined },
  ];

  return (
    <Section id="contact" ariaLabel="Contact Udaya Kumar V A" className="py-24 px-4 sm:px-6 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">

        <div ref={headerAnim.ref as React.RefObject<HTMLDivElement>} style={headerAnim.style}>
          <SectionHeader
            eyebrow="Contact"
            title="Let's talk"
            subtitle="Open to backend roles, freelance API projects, and interesting collaborations. Drop me a message."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form */}
          <div ref={formAnim.ref as React.RefObject<HTMLDivElement>} style={formAnim.style} className="lg:col-span-3">
            {submitted ? (
              <div role="status" aria-live="polite" className="flex flex-col items-center justify-center py-16 text-center gap-4 border border-green-200 dark:border-green-500/20 rounded-2xl bg-green-50 dark:bg-green-500/5">
                <CheckCircle size={48} className="text-green-500" />
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">Message sent!</h3>
                <p className="text-slate-500 text-sm max-w-xs">Thanks for reaching out. I'll get back to you within 48 hours.</p>
                <Button variant="ghost" size="sm" onClick={() => { setForm(INITIAL); setSubmitted(false); }}>Send another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block font-mono text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                      Name <span aria-label="required" className="text-cyan-500">*</span>
                    </label>
                    <input id="contact-name" name="name" type="text" autoComplete="name" value={form.name} onChange={handleChange}
                      placeholder="Your name" aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined} className={inputCls('name')} />
                    {errors.name && <p id="name-error" role="alert" className="mt-1 text-xs text-red-500 font-mono">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block font-mono text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                      Email <span aria-label="required" className="text-cyan-500">*</span>
                    </label>
                    <input id="contact-email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange}
                      placeholder="you@company.com" aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined} className={inputCls('email')} />
                    {errors.email && <p id="email-error" role="alert" className="mt-1 text-xs text-red-500 font-mono">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block font-mono text-xs text-slate-500 dark:text-slate-400 mb-1.5">Subject</label>
                  <input id="contact-subject" name="subject" type="text" value={form.subject} onChange={handleChange}
                    placeholder="Backend role at your company" className={inputCls('subject')} />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-mono text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                    Message <span aria-label="required" className="text-cyan-500">*</span>
                  </label>
                  <textarea id="contact-message" name="message" rows={6} value={form.message} onChange={handleChange}
                    placeholder="Tell me about the role or project..."
                    aria-required="true" aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`${inputCls('message')} resize-none`} />
                  {errors.message && <p id="message-error" role="alert" className="mt-1 text-xs text-red-500 font-mono">{errors.message}</p>}
                </div>

                <Button type="submit" size="lg" rightIcon={<Send size={16} />} aria-label="Send contact message" className="w-full sm:w-auto">
                  Send message
                </Button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside
            ref={sidebarAnim.ref as React.RefObject<HTMLElement>}
            style={sidebarAnim.style}
            aria-label="Contact details"
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Profile card */}
            <div className="rounded-2xl p-6 flex flex-col items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                <img
                  src={udaya}
                  alt="Udaya Kumar V A"
                  className="relative w-45 h-52 rounded-2xl object-cover border-2 border-cyan-300 dark:border-cyan-500/30"
                />
              </div>
              <div className="text-center">
                <p className="font-display font-bold text-slate-900 dark:text-white">Udaya Kumar V A</p>
                <p className="font-mono text-xs text-slate-500 mt-0.5">Java Backend Developer</p>
                <p className="font-mono text-xs text-slate-400 mt-0.5">Chennai, India</p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/10 border border-green-300 dark:border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-xs text-green-700 dark:text-green-400">Open to opportunities</span>
              </div>
            </div>

            {/* Contact items */}
            <div className="space-y-3">
              <p className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <MessageCircle size={12} /> Get in touch
              </p>
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/6 text-cyan-500 shrink-0 group-hover:bg-cyan-500/10 transition-colors">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer" aria-label={item.aria}
                      className="font-mono text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors truncate">
                      {item.label}
                    </a>
                  ) : (
                    <span className="font-mono text-sm text-slate-500">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

        
          </aside>

        </div>
      </div>
    </Section>
  );
};
