import { Link, useLocation } from 'react-router-dom';

const navigation = [
  ['Home', '/'], ['About', '/about'], ['Skills', '/skills'],
  ['Projects', '/projects'], ['Resume', '/resume'], ['Contact', '/contact'],
];

function Footer() {
  const location = useLocation();
  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  const handleLinkClick = (href) => location.pathname === href && scrollToTop();

  return (
    <footer id="main-footer" className="border-t border-white/[0.07] bg-[#080808] px-4 py-10 text-white sm:px-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-14">
          <div className="max-w-md">
            <Link to="/" onClick={() => handleLinkClick('/')} className="inline-flex items-center gap-2 text-xl font-black tracking-tight">
              Dhruv <span className="text-[#eba134]">Yadav</span><span className="h-1.5 w-1.5 rounded-full bg-[#eba134]" />
            </Link>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Full stack developer building dependable web and mobile products with thoughtful interfaces,
              secure APIs, realtime systems, and production-ready deployment.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />Open to opportunities
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#eba134]">Navigation</p>
            <nav aria-label="Footer navigation" className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {navigation.map(([name, href]) => (
                <Link key={name} to={href} onClick={() => handleLinkClick(href)} className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#eba134]">Start a conversation</p>
            <a href="mailto:yadavdhruv0800@gmail.com" className="mt-4 block break-all text-base font-bold transition-colors hover:text-[#eba134]">yadavdhruv0800@gmail.com</a>
            <a href="tel:+919179790800" className="mt-2 block text-sm text-gray-400 transition-colors hover:text-white">+91 91797 90800</a>
            <div className="mt-5 flex gap-5">
              <a href="https://github.com/dhruvyadav123" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-400 transition-colors hover:text-[#eba134]">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/dhruv-yadav-5a40b8370/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-400 transition-colors hover:text-[#eba134]">LinkedIn ↗</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Dhruv Kumar Yadav. Built with React and Tailwind CSS.</p>
          <button type="button" onClick={scrollToTop} className="w-fit text-xs font-bold uppercase tracking-[0.16em] text-gray-400 transition-colors hover:text-[#eba134]">Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
