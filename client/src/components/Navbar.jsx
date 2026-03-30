import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Home: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  ),
  About: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  ),
  Skills: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Projects: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="8" height="8" rx="1.5"/>
      <rect x="14" y="3" width="8" height="8" rx="1.5"/>
      <rect x="2" y="13" width="8" height="8" rx="1.5"/>
      <rect x="14" y="13" width="8" height="8" rx="1.5"/>
    </svg>
  ),
  Resume: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="8" y1="13" x2="16" y2="13"/>
      <line x1="8" y1="17" x2="13" y2="17"/>
    </svg>
  ),
  Contact: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  Arrow: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  ),
  GitHub: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Globe: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
};

const navLinks = [
  { name: 'Home',     href: '/',         Icon: Icons.Home     },
  { name: 'About',    href: '/about',    Icon: Icons.About    },
  { name: 'Skills',   href: '/skills',   Icon: Icons.Skills   },
  { name: 'Projects', href: '/projects', Icon: Icons.Projects },
  { name: 'Resume',   href: '/resume',   Icon: Icons.Resume   },
  { name: 'Contact',  href: '/contact',  Icon: Icons.Contact  },
];

const socialLinks = [
  { name: 'GitHub',    href: 'https://github.com/dhruvyadav123',                    Icon: Icons.GitHub   },
  { name: 'LinkedIn',  href: 'https://www.linkedin.com/in/dhruv-yadav-5a40b8370/', Icon: Icons.LinkedIn },
  { name: 'Portfolio', href: 'https://vercel.com/dhruv-yadavs-projects-2d5ef84a',  Icon: Icons.Globe    },
];

// ── Hamburger ──────────────────────────────────────────────────────────────
function HamburgerIcon({ open }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', width: '22px' }}>
      {[
        { transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none', width: '22px' },
        { transform: open ? 'translateY(0) translateY(-6.5px) rotate(-45deg)' : 'none', width: open ? '22px' : '14px', opacity: open ? 1 : 0.5 },
        { transform: 'none', width: open ? '0px' : '22px', opacity: open ? 0 : 1 },
      ].map((s, i) => (
        <span key={i} style={{
          display: 'block',
          height: '1.5px',
          borderRadius: '2px',
          backgroundColor: '#eba134',
          transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
          ...s,
        }} />
      ))}
    </div>
  );
}

// ── Mobile Menu ────────────────────────────────────────────────────────────
function MobileMenu({ isOpen, onClose, location, navigate }) {
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    } else {
      setAnimate(false);
      const t = setTimeout(() => setMounted(false), 500);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!mounted) return null;

  const handleNav = (path) => {
    onClose();
    if (location.pathname === path && !location.hash)
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHire = (e) => {
    onClose();
    if (location.pathname === '/') {
      e.preventDefault();
      if (location.hash !== '#contact') navigate('/#contact');
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <style>{`
        .mnav-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 20px;
          height: 58px;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: background 0.25s ease;
        }
        .mnav-row:hover { background: rgba(235,161,52,0.06) !important; }
        .mnav-row:hover .mni { color: #eba134 !important; transform: scale(1.18) rotate(-6deg) !important; }
        .mnav-row:hover .mnl { color: rgba(255,255,255,0.95) !important; }
        .mnav-row:hover .mnd { opacity: 0.5 !important; }
        .mni { transition: color 0.25s ease, transform 0.32s cubic-bezier(0.34,1.56,0.64,1); }
        .mnl { transition: color 0.25s ease; }
        .mnd { transition: opacity 0.25s ease; }
        .msoc:hover { background: rgba(235,161,52,0.1) !important; color: #eba134 !important; }
        .mhire:hover { box-shadow: 0 14px 40px rgba(235,161,52,0.4) !important; transform: translateY(-1px) scale(1.02) !important; }
        .mhire { transition: box-shadow 0.3s ease, transform 0.3s ease !important; }
      `}</style>

      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, top: '72px', zIndex: 40,
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        opacity: animate ? 1 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: animate ? 'auto' : 'none',
      }} />

      {/* Drop panel */}
      <div style={{
        position: 'fixed',
        top: '72px', left: 0, right: 0,
        zIndex: 45,
        background: 'linear-gradient(180deg,#0f0806 0%,#110906 70%,#0c0704 100%)',
        borderBottom: '1px solid rgba(235,161,52,0.15)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.8), inset 0 -1px 0 rgba(235,161,52,0.08)',
        transformOrigin: 'top',
        transform: animate ? 'scaleY(1) translateY(0)' : 'scaleY(0.65) translateY(-20px)',
        opacity: animate ? 1 : 0,
        transition: 'transform 0.48s cubic-bezier(0.23,1,0.32,1), opacity 0.32s ease',
        overflow: 'hidden',
      }}>

        {/* Amber top accent */}
        <div style={{
          height: '2px',
          background: 'linear-gradient(90deg,transparent,#eba134 35%,#f7d08a 65%,transparent)',
        }} />

        {/* Nav list — single column */}
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          {navLinks.map(({ name, href, Icon }, i) => {
            const active = location.pathname === href;
            return (
              <NavLink
                key={name}
                to={href}
                end={href === '/'}
                onClick={() => handleNav(href)}
                className="mnav-row"
                style={{
                  background: active
                    ? 'linear-gradient(90deg,rgba(235,161,52,0.12),rgba(235,161,52,0.03))'
                    : 'transparent',
                  opacity: animate ? 1 : 0,
                  transform: animate ? 'translateY(0)' : 'translateY(-14px)',
                  transition: `opacity 0.38s ease ${50 + i * 40}ms, transform 0.38s cubic-bezier(0.23,1,0.32,1) ${50 + i * 40}ms, background 0.25s ease`,
                }}
              >
                {/* Active left bar */}
                {active && (
                  <span style={{
                    position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                    width: '3px', height: '26px',
                    background: 'linear-gradient(180deg,#f5c46e,#eba134)',
                    borderRadius: '0 3px 3px 0',
                  }} />
                )}

                {/* Icon */}
                <span className="mni" style={{ color: active ? '#eba134' : 'rgba(255,255,255,0.28)', flexShrink: 0 }}>
                  <Icon />
                </span>

                {/* Label */}
                <span className="mnl" style={{
                  fontFamily: "'Syne','DM Sans',sans-serif",
                  fontSize: '14px',
                  fontWeight: active ? 600 : 400,
                  color: active ? '#eba134' : 'rgba(255,255,255,0.68)',
                  letterSpacing: '0.01em',
                  flex: 1,
                }}>
                  {name}
                </span>

                {/* Active dot */}
                <span className="mnd" style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: '#eba134',
                  opacity: active ? 0.85 : 0,
                  flexShrink: 0,
                }} />
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom strip */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '10px',
          padding: '14px 20px 18px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          opacity: animate ? 1 : 0,
          transform: animate ? 'translateY(0)' : 'translateY(-8px)',
          transition: `opacity 0.38s ease ${50 + navLinks.length * 40 + 50}ms, transform 0.38s ease ${50 + navLinks.length * 40 + 50}ms`,
        }}>

          {/* Social pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {socialLinks.map(({ name, href, Icon }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                className="msoc"
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '6px 12px', borderRadius: '20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textDecoration: 'none',
                  color: 'rgba(255,255,255,0.45)',
                  fontFamily: "'Syne',sans-serif", fontSize: '12px', fontWeight: 500,
                  transition: 'background 0.25s ease, color 0.25s ease',
                }}>
                <Icon />{name}
              </a>
            ))}
          </div>

          {/* Hire Me */}
          <Link to="/#contact" onClick={handleHire} className="mhire" style={{
            display: 'flex', alignItems: 'center', gap: '7px',
            padding: '8px 18px', borderRadius: '22px',
            background: 'linear-gradient(135deg,#eba134,#f5c46e)',
            textDecoration: 'none',
            color: '#0a0704',
            fontFamily: "'Syne',sans-serif", fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.07em', textTransform: 'uppercase',
            boxShadow: '0 8px 24px rgba(235,161,52,0.25)',
            whiteSpace: 'nowrap',
          }}>
            Hire Me <Icons.Arrow />
          </Link>
        </div>
      </div>
    </>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn(); window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const fn = (e) => { if (e.key === 'Escape') setIsMenuOpen(false); };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', fn);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', fn); };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (path) => {
    closeMenu();
    if (location.pathname === path && !location.hash) scrollTop();
  };

  const handleHireMeClick = (e) => {
    closeMenu();
    if (location.pathname === '/') {
      e.preventDefault();
      if (location.hash !== '#contact') navigate('/#contact');
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const desktopLinkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-[#eba134]' : 'text-gray-300 hover:text-[#eba134]'}`;

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? 'border-b border-[#eba134]/12 bg-[#0a0a0a]/94 backdrop-blur-xl' : 'bg-transparent'
      }`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">

          {/* Logo */}
          <NavLink to="/" onClick={() => { closeMenu(); if (location.pathname === '/' && !location.hash) scrollTop(); }}>
            <div className="flex flex-col">
              <div className="flex items-end gap-2">
                <span className="text-lg font-black tracking-tight text-white sm:text-xl">
                  Dhruv <span className="text-[#eba134]">Yadav</span>
                </span>
                <span className="hidden h-2 w-2 rounded-full bg-[#eba134] sm:block" />
              </div>
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.32em] text-[#eba134]/75 sm:block">
                MERN Stack Developer
              </span>
            </div>
          </NavLink>

          {/* Desktop */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map(({ name, href }) => (
              <NavLink key={name} to={href} end={href === '/'} onClick={() => handleNavClick(href)} className={desktopLinkClass}>
                {name}
              </NavLink>
            ))}
            <Link to="/#contact" onClick={handleHireMeClick} className="text-sm font-semibold text-gray-300 transition-colors duration-300 hover:text-[#eba134]">
              Hire Me
            </Link>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((o) => !o)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200 hover:bg-white/5 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <HamburgerIcon open={isMenuOpen} />
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} location={location} navigate={navigate} />

      <div className="h-[72px]" />
    </>
  );
}

export default Navbar;
