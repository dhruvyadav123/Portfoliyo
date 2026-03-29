import { useState } from 'react';
import { BookText, DripHeading, Reveal } from '../components/SectionAnimations';

const contactInfo = [
  { icon: '📞', label: 'Phone', value: '+91 91797 90800', href: 'tel:+919179790800' },
  { icon: '✉️', label: 'Email', value: 'yadavdhruv0800@gmail.com', href: 'mailto:yadavdhruv0800@gmail.com' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/dhruvyadav123', href: 'https://github.com/dhruvyadav123' },
  { icon: '💼', label: 'LinkedIn', value: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/dhruv-yadav-8b1a8b1b1/' },
  { icon: '🌐', label: 'Portfolio', value: 'Vercel Portfolio', href: 'https://vercel.com/dhruv-yadavs-projects-2d5ef84a' },
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0a0a] px-4 py-24 text-white sm:px-8">
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-[#eba134]">Get In Touch</p>
          <DripHeading text="Contact" accent="Me" className="text-4xl font-black md:text-5xl" />
          <BookText
            delay={0.1}
            text="Open to internships, freelance opportunities, collaborations, and real-world product work."
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
              text="I'm currently open to new opportunities. Whether you have a project in mind, want to collaborate, or just want to say hi, my inbox is always open."
              className="mb-8 text-gray-400 leading-7"
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
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[#eba134]/20 bg-[#eba134]/10 text-xl">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{contact.label}</p>
                      <p className="text-sm font-semibold text-gray-200 transition-colors group-hover:text-[#eba134]">
                        {contact.value}
                      </p>
                    </div>
                    <svg className="ml-auto h-4 w-4 text-gray-600 transition-colors group-hover:text-[#eba134]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                  </a>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="rounded-3xl border border-[#eba134]/15 bg-[#111111] p-6 sm:p-8">
            {sent ? (
              <div className="flex min-h-[300px] h-full flex-col items-center justify-center gap-4 text-center">
                <div className="text-5xl">✅</div>
                <h4 className="text-xl font-black text-white">Message Sent!</h4>
                <BookText
                  text="Thank you for reaching out. I'll get back to you soon."
                  className="text-gray-400"
                />
              </div>
            ) : (
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
                    className="w-full rounded-xl bg-[#eba134] py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eba134]/85 hover:shadow-[0_0_25px_#eba13450] active:translate-y-0"
                  >
                    Send Message →
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
