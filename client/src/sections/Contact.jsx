import { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { BookText, DripHeading, Reveal } from '../components/SectionAnimations';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';
const CONTACT_RECEIVER_EMAIL =
  import.meta.env.VITE_CONTACT_RECEIVER_EMAIL ?? 'yadavdhruv0800@gmail.com';

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const contactInfo = [
  { icon: 'PH', label: 'Phone', value: '+91 91797 90800', href: 'tel:+919179790800' },
  { icon: 'EM', label: 'Email', value: 'yadavdhruv0800@gmail.com', href: 'mailto:yadavdhruv0800@gmail.com' },
  { icon: 'GH', label: 'GitHub', value: 'github.com/dhruvyadav123', href: 'https://github.com/dhruvyadav123' },
  { icon: 'IN', label: 'LinkedIn', value: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/dhruv-yadav-5a40b8370/' },
];

const buildMailtoLink = ({ name, email, subject, message }) => {
  const mailSubject = subject || `Portfolio inquiry from ${name}`;
  const mailBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    message,
  ].join('\n');

  return `mailto:${CONTACT_RECEIVER_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
};

const normalizeForm = (form) => ({
  name: form.name.trim(),
  email: form.email.trim(),
  subject: form.subject.trim(),
  message: form.message.trim(),
});

const missingEmailJsConfig = [
  !EMAILJS_SERVICE_ID && 'VITE_EMAILJS_SERVICE_ID',
  !EMAILJS_TEMPLATE_ID && 'VITE_EMAILJS_TEMPLATE_ID',
  !EMAILJS_PUBLIC_KEY && 'VITE_EMAILJS_PUBLIC_KEY',
].filter(Boolean);
const hasEmailJsConfig = missingEmailJsConfig.length === 0;

function Contact() {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState('idle');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [fallbackLink, setFallbackLink] = useState(`mailto:${CONTACT_RECEIVER_EMAIL}`);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));

    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const normalizedForm = normalizeForm(form);
    const mailtoLink = buildMailtoLink(normalizedForm);

    setFallbackLink(mailtoLink);
    setSubmittedEmail(normalizedForm.email);

    if (Object.values(normalizedForm).some((value) => !value)) {
      setStatus('error');
      setErrorMessage('Please fill out every field before sending your message.');
      return;
    }

    if (missingEmailJsConfig.length > 0) {
      window.location.href = mailtoLink;
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    const templateParams = {
      name: normalizedForm.name,
      email: normalizedForm.email,
      title: normalizedForm.subject,
      time: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      message: normalizedForm.message,
      from_name: normalizedForm.name,
      from_email: normalizedForm.email,
      subject: normalizedForm.subject,
      to_email: CONTACT_RECEIVER_EMAIL,
      reply_to: normalizedForm.email,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
        limitRate: {
          throttle: 15000,
        },
      });

      setStatus('sent');
      setForm(initialFormState);
      window.setTimeout(() => {
        setStatus('idle');
      }, 4000);
    } catch (error) {
      console.error('EmailJS error:', error);

      const errorText = error instanceof EmailJSResponseStatus ? error.text.toLowerCase() : '';
      const hasGmailScopeIssue =
        error instanceof EmailJSResponseStatus &&
        errorText.includes('insufficient authentication scopes');
      const hasTemplateIdIssue =
        error instanceof EmailJSResponseStatus &&
        errorText.includes('template id not found');
      const hasServiceIdIssue =
        error instanceof EmailJSResponseStatus &&
        errorText.includes('service id not found');
      const shouldOpenFallbackEmailApp =
        error instanceof EmailJSResponseStatus &&
        (hasTemplateIdIssue || hasServiceIdIssue || hasGmailScopeIssue || error.status >= 400);

      setStatus('error');
      setErrorMessage(
        hasTemplateIdIssue
          ? 'The EmailJS template ID was not found. Use the exact saved template ID from EmailJS and make sure the template is saved in the dashboard.'
          : hasServiceIdIssue
            ? 'The EmailJS service ID does not exist in your dashboard. Update VITE_EMAILJS_SERVICE_ID with the exact service ID from EmailJS.'
          : hasGmailScopeIssue
          ? 'Your Gmail service in EmailJS needs to be reconnected with the correct send permissions.'
          : 'The message could not be sent right now. You can still email me directly using the link below.',
      );

      if (shouldOpenFallbackEmailApp) {
        window.setTimeout(() => {
          window.location.href = mailtoLink;
        }, 250);
      }
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0a0a] px-4 py-24 text-white sm:px-8">
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-[#eba134]">Get In Touch</p>
          <DripHeading text="Contact" accent="Me" className="text-4xl font-black md:text-5xl" />
          <BookText
            delay={0.1}
            text="Open to full-time development roles, freelance opportunities, collaborations, and production product work."
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400"
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal delay={0.08}>
            <h3 className="mb-2 text-2xl font-black text-white">
              Let&apos;s work <span className="text-[#eba134]">together</span>
            </h3>
            <BookText
              delay={0.12}
              text="I&apos;m currently open to new opportunities. Whether you have a project in mind, want to collaborate, or just want to say hi, my inbox is always open."
              className="mb-8 leading-7 text-gray-400"
            />

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Reveal key={contact.label} delay={0.14 + index * 0.06}>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/3 p-4 transition-all duration-300 hover:border-[#eba134]/40 hover:bg-[#eba134]/8 hover:shadow-[0_0_20px_#eba13415]"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[#eba134]/20 bg-[#eba134]/10 text-xs font-black tracking-[0.24em] text-[#eba134]">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{contact.label}</p>
                      <p className="text-sm font-semibold text-gray-200 transition-colors group-hover:text-[#eba134]">
                        {contact.value}
                      </p>
                    </div>
                    <svg
                      className="ml-auto h-4 w-4 text-gray-600 transition-colors group-hover:text-[#eba134]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="rounded-3xl border border-[#eba134]/15 bg-[#111111] p-6 sm:p-8">
            {status === 'sent' && (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#eba134]/30 bg-[#eba134]/10 text-2xl font-black text-[#eba134]">
                  OK
                </div>
                <h4 className="text-xl font-black text-white">Message Sent!</h4>
                <p className="text-sm leading-7 text-gray-400">
                  Thank you for reaching out. I&apos;ll get back to you soon at{' '}
                  <span className="text-[#eba134]">{submittedEmail || 'your email'}</span>.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-xs font-black tracking-[0.3em] text-red-300">
                  ERR
                </div>
                <h4 className="text-xl font-black text-white">Something went wrong</h4>
                <p className="max-w-md text-sm leading-7 text-gray-400">{errorMessage}</p>
                <div className="flex flex-col items-center gap-3 sm:flex-row">
                  <a
                    href={fallbackLink}
                    className="rounded-xl border border-[#eba134]/40 bg-[#eba134]/10 px-5 py-3 text-sm font-bold text-[#eba134] transition-all duration-300 hover:border-[#eba134] hover:bg-[#eba134]/15"
                  >
                    Email me directly
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setErrorMessage('');
                    }}
                    className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
                  >
                    Try again
                  </button>
                </div>
                {!hasEmailJsConfig && (
                  <p className="max-w-md text-xs leading-6 text-gray-500">
                    The direct email fallback is active right now.
                  </p>
                )}
              </div>
            )}

            {(status === 'idle' || status === 'sending') && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Reveal delay={0.16}>
                  <h3 className="mb-6 text-xl font-black text-white">Send a Message</h3>
                </Reveal>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Reveal delay={0.18}>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-400">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder-gray-600 focus:border-[#eba134]/50 focus:bg-[#eba134]/5 focus:shadow-[0_0_0_3px_#eba13420]"
                    />
                  </Reveal>

                  <Reveal delay={0.22}>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-400">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder-gray-600 focus:border-[#eba134]/50 focus:bg-[#eba134]/5 focus:shadow-[0_0_0_3px_#eba13420]"
                    />
                  </Reveal>
                </div>

                <Reveal delay={0.26}>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-400">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder-gray-600 focus:border-[#eba134]/50 focus:bg-[#eba134]/5 focus:shadow-[0_0_0_3px_#eba13420]"
                  />
                </Reveal>

                <Reveal delay={0.3}>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-400">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder-gray-600 focus:border-[#eba134]/50 focus:bg-[#eba134]/5 focus:shadow-[0_0_0_3px_#eba13420]"
                  />
                </Reveal>

                <Reveal delay={0.34}>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full rounded-xl bg-[#eba134] py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eba134]/85 hover:shadow-[0_0_25px_#eba13450] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status === 'sending'
                      ? 'Sending...'
                      : hasEmailJsConfig
                        ? 'Send Message ->'
                        : 'Continue in Email App ->'}
                  </button>
                </Reveal>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
