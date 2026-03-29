import { Link, useLocation } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

const workHighlights = ['MERN Stack', 'JWT Auth', 'Socket.io', 'Responsive UI'];

const contactItems = [
  {
    label: 'Email',
    value: 'yadavdhruv0800@gmail.com',
    href: 'mailto:yadavdhruv0800@gmail.com',
    icon: MailIcon,
  },
  {
    label: 'Phone',
    value: '+91 91797 90800',
    href: 'tel:+919179790800',
    icon: PhoneIcon,
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/dhruvyadav123',
    icon: GitHubIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dhruv-yadav-8b1a8b1b1/',
    icon: LinkedInIcon,
  },
  {
    name: 'Portfolio',
    href: 'https://vercel.com/dhruv-yadavs-projects-2d5ef84a',
    icon: GlobeIcon,
  },
];

function MailIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.6 3h2.5l1.1 4.3-2 1.6a16.4 16.4 0 0 0 7 7l1.6-2L21 14.9v2.5A1.6 1.6 0 0 1 19.4 19 16.4 16.4 0 0 1 5 4.6 1.6 1.6 0 0 1 6.6 3Z"
      />
    </svg>
  );
}

function GitHubIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.2 11.39c.6.11.8-.26.8-.58v-2.04c-3.34.73-4.04-1.41-4.04-1.41-.54-1.39-1.33-1.76-1.33-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.4 11.4 0 0 1 12 5.8c1.02 0 2.05.14 3.01.41 2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.82 1.11.82 2.23v3.3c0 .32.19.69.8.57A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

function LinkedInIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.42v1.56h.04c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

function GlobeIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c2.7 3 4 6 4 9s-1.3 6-4 9c-2.7-3-4-6-4-9s1.3-6 4-9Z" />
    </svg>
  );
}

function ArrowUpIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="m12 19 0-14M6 11l6-6 6 6" />
    </svg>
  );
}

function Footer() {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href) => {
    if (location.pathname === href && !location.hash) {
      scrollToTop();
    }
  };

  return (
    <footer
      id="main-footer"
      className="border-t border-[#eba134]/10 bg-[#080808] px-4 py-12 text-white sm:px-8 sm:py-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-[#eba134]/12 bg-[#101010] p-5 sm:p-7 lg:p-9">
          <div className="rounded-[28px] border border-[#eba134]/12 bg-[#131313] p-5 sm:p-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#eba134]/20 bg-[#eba134]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-[#eba134]">
                  <span className="h-2 w-2 rounded-full bg-[#eba134]" />
                  Available For Work
                </div>

                <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                  Let&apos;s build a portfolio, product, or dashboard that feels sharp on every screen.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                  Clean frontend, solid backend logic, and a polished user experience. If you have a project idea,
                  we can turn it into something modern and reliable.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#eba134] px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-[#eba134]/85 hover:shadow-[0_0_24px_#eba13430]"
                >
                  Start a Project
                </Link>

                <Link
                  to="/projects"
                  onClick={() => handleLinkClick('/projects')}
                  className="inline-flex items-center justify-center rounded-full border border-[#eba134]/35 bg-transparent px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-[#eba134] hover:bg-[#eba134]/10"
                >
                  View Projects
                </Link>
              </div>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.95fr_1fr]">
              <div className="rounded-[28px] border border-white/8 bg-[#0d0d0d] p-5 sm:p-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#eba134]/80">
                    MERN Stack Developer
                  </p>
                  <p className="mt-2 text-2xl font-black tracking-tight text-white">
                    Dhruv <span className="text-[#eba134]">Yadav</span>
                  </p>
                  <div className="mt-3 h-px w-20 bg-[#eba134]/50" />
                </div>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  Building secure and scalable web apps with React, Node.js, MongoDB, Express, and polished UI detail.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {workHighlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#eba134]/15 bg-[#eba134]/7 px-3 py-1 text-xs font-semibold text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-3 py-3 text-center">
                    <div className="text-xl font-black text-[#eba134]">3+</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-500">Projects</div>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-3 py-3 text-center">
                    <div className="text-xl font-black text-[#eba134]">6mo+</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-500">Experience</div>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-3 py-3 text-center">
                    <div className="text-xl font-black text-[#eba134]">24h</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-500">Reply Time</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-[#0d0d0d] p-5 sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#eba134]">Quick Links</p>
                    <h3 className="mt-2 text-xl font-black text-white">Explore</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link) => {
                    const isActive = location.pathname === link.href;

                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? 'border-[#eba134]/35 bg-[#18120a] text-[#eba134]'
                            : 'border-white/8 bg-white/[0.02] text-gray-300 hover:border-[#eba134]/25 hover:bg-[#eba134]/8 hover:text-white'
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl border border-[#eba134]/12 bg-[#141414] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#eba134]">Focus</p>
                  <p className="mt-2 text-sm leading-7 text-gray-400">
                    Portfolio sites, admin dashboards, auth systems, APIs, and responsive frontend work.
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-[#0d0d0d] p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#eba134]">Contact</p>
                <h3 className="mt-2 text-xl font-black text-white">Reach Out</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Open for internships, freelance work, and collaboration on real-world web products.
                </p>

                <div className="mt-5 space-y-3">
                  {contactItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:border-[#eba134]/25 hover:bg-[#eba134]/8"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eba134]/10 text-[#eba134]">
                          <Icon />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">{item.label}</div>
                          <div className="truncate text-sm font-semibold text-white">{item.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:border-[#eba134]/30 hover:bg-[#eba134]/10 hover:text-[#eba134]"
                        aria-label={social.name}
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-gray-500">
                Copyright {currentYear} Dhruv Kumar Yadav. Built with React and Tailwind CSS.
              </p>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-[#eba134]/30 hover:bg-[#eba134]/10 hover:text-[#eba134] sm:self-auto"
              >
                <ArrowUpIcon />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
