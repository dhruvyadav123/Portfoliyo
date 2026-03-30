import { Link } from 'react-router-dom';
import PROFILE_IMG from '../assets/profile.png';
import { BookText, Reveal } from '../components/SectionAnimations';

const RESUME_PDF_URL = '/dhruv_kumar_yadav_resume.pdf';

function Hero() {
  const socials = [
    { href: 'https://github.com/dhruvyadav123', icon: (<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>) },
    { href: 'https://www.linkedin.com/in/dhruv-yadav-5a40b8370/', icon: (<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/></svg>) },
    { href: 'https://vercel.com/dhruv-yadavs-projects-2d5ef84a', icon: (<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>) },
  ];

  const stats = [
    { val: '3+', label: 'Projects' },
    { val: '6mo+', label: 'Experience' },
    { val: '10+', label: 'Skills' },
  ];

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#0a0a0a] text-white">
      <div className="relative mx-auto max-w-7xl w-full px-4 pb-10 pt-6 sm:px-8 sm:pb-10 sm:pt-8 lg:pb-6 lg:pt-4">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:gap-14">
          <div className="flex-1 max-w-xl">
            <Reveal delay={0.05}>
              <h1 className="mb-3 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                <span className="text-white">Dhruv</span>
                <br />
                <span className="text-[#eba134]">Kumar</span>
                <span className="text-white"> Yadav</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12} className="mt-4 flex items-center gap-3">
              <div className="h-px w-12 bg-[#eba134]" />
              <p className="text-lg font-semibold text-gray-300">
                Full Stack Developer
                <span className="text-[#eba134]"> · </span>
                MERN Stack
              </p>
            </Reveal>

            <BookText
              delay={0.18}
              text="Building secure, scalable web applications with JWT auth, Socket.io, REST APIs, and modern frontend technologies. B.Tech CS student passionate about real-world products."
              className="mt-6 max-w-lg text-base leading-8 text-gray-400"
            />

            <Reveal delay={0.24} className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="rounded-full bg-[rgb(235,161,52)] px-7 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eba134]/85 hover:shadow-[0_0_25px_#eba13460]"
              >
                View Projects
              </Link>
              <Link
                to="/resume"
                className="rounded-full border border-[#eba134]/50 bg-[#eba134]/5 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#eba134] hover:bg-[#eba134]/15"
              >
                View Resume
              </Link>
              <a
                href={RESUME_PDF_URL}
                download="dhruv_kumar_yadav_resume.pdf"
                className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#eba134]/45 hover:bg-white/[0.07]"
              >
                Download Resume
              </a>
            </Reveal>

            <Reveal delay={0.3} className="mt-8 flex items-center gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#eba134]/60 hover:bg-[#eba134]/10 hover:text-[#eba134]"
                >
                  {social.icon}
                </a>
              ))}
              <div className="ml-2 flex items-center gap-2">
                <div className="h-px w-6 bg-gray-700" />
                <span className="text-xs text-gray-600">Follow me</span>
              </div>
            </Reveal>

            <Reveal delay={0.36} className="mt-8 flex gap-6 border-t border-white/5 pt-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-[#eba134]">{stat.val}</div>
                  <div className="mt-0.5 text-xs uppercase tracking-wider text-gray-500">{stat.label}</div>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.12} className="flex w-full flex-shrink-0 justify-center lg:flex-1 lg:justify-center">
            <div className="relative">
              <div className="absolute -inset-4 animate-spin rounded-full border-2 border-dashed border-[#eba134]/30" style={{ animationDuration: '20s' }} />
              <div className="absolute -inset-2 rounded-full border border-[#eba134]/20" />

              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-[#eba134]/40 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <div className="absolute inset-0 z-10 rounded-full bg-black/10" />
                <img
                  src={PROFILE_IMG}
                  alt="Dhruv Kumar Yadav"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="absolute -right-4 -top-2 z-20 flex items-center gap-1.5 rounded-full border border-[#eba134]/30 bg-[#0a0a0a] px-3 py-1.5 text-xs font-bold text-[#eba134] shadow-lg">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#eba134]" />
                MERN Stack
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Hero;
