import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/dhruvyadav123' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dhruv-yadav-8b1a8b1b1/' },
  { name: 'Portfolio', href: 'https://vercel.com/dhruv-yadavs-projects-2d5ef84a' },
];

function MenuIcon({ open = false }) {
  return (
    <div className="relative h-5 w-6">
      <span
        className={`absolute left-0 h-0.5 w-full rounded-full transition-all duration-300 ${
          open ? 'top-2 rotate-45 bg-[#eba134]' : 'top-0 bg-[#eba134]'
        }`}
      />
      <span
        className={`absolute left-0 top-2 h-0.5 w-full rounded-full transition-all duration-300 ${
          open ? 'scale-x-0 opacity-0' : 'opacity-100 bg-[#eba134]'
        }`}
      />
      <span
        className={`absolute left-0 h-0.5 w-full rounded-full transition-all duration-300 ${
          open ? 'top-2 -rotate-45 bg-[#eba134]' : 'top-4 bg-[#eba134]'
        }`}
      />
    </div>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleNavClick = (path) => {
    closeMenu();

    if (location.pathname === path && !location.hash) {
      scrollToTop();
    }
  };

  const handleHomeClick = () => {
    closeMenu();

    if (location.pathname === '/' && !location.hash) {
      scrollToTop();
    }
  };

  const handleHireMeClick = (event) => {
    closeMenu();

    if (location.pathname === '/') {
      event.preventDefault();

      if (location.hash !== '#contact') {
        navigate('/#contact');
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const desktopLinkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-300 ${
      isActive ? 'text-[#eba134]' : 'text-gray-300 hover:text-[#eba134]'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'border-b border-[#eba134]/12 bg-[#0a0a0a]/94 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
          <NavLink to="/" onClick={handleHomeClick} className="group relative">
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

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === '/'}
                onClick={() => handleNavClick(link.href)}
                className={desktopLinkClass}
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/#contact"
              onClick={handleHireMeClick}
              className="text-sm font-semibold text-gray-300 transition-colors duration-300 hover:text-[#eba134]"
            >
              Hire Me
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="relative z-50 flex items-center justify-center lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
          >
            <MenuIcon open={isMenuOpen} />
          </button>
        </nav>
      </header>

      <div
        id="site-menu"
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto transition-all duration-300 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <div className="min-h-full bg-[#120907]/97 backdrop-blur-xl">
          <div className="border-t border-white/10 px-4 pt-4 sm:px-8 sm:pt-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <NavLink
                  key={link.name}
                  to={link.href}
                  end={link.href === '/'}
                  onClick={() => handleNavClick(link.href)}
                  className={`block border-b border-white/8 px-0 py-5 text-2xl font-semibold tracking-tight transition-all duration-300 sm:py-6 sm:text-4xl ${
                    isActive
                      ? 'bg-[#eba134]/14 text-[#eba134]'
                      : 'text-white hover:bg-[#eba134]/10 hover:text-[#eba134]'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          <div className="px-4 pb-10 pt-6 sm:px-8 sm:pb-12">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white/75 transition-colors duration-300 hover:text-[#eba134]"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[72px]" />
    </>
  );
}

export default Navbar;
