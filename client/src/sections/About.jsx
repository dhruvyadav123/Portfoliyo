import { useEffect, useRef, useState } from 'react';
import PROFILE_IMG from '../assets/profile.png';

// ── Data ────────────────────────────────────────────────────────────────────
const certifications = [
  { title: "Full Stack Web Development (MERN)", issuer: "GRAStech", year: "2026" },
  { title: "Summer Training in PHP with MVC",   issuer: "Self",     year: "Oct 2024" },
  { title: "Web Designing Certification",        issuer: "Self",     year: "Feb 2023" },
];

const education = [
  { degree: "B.Tech – Computer Science",    institute: "LDC Institute, Prayagraj · AKTU University",    year: "Pursuing" },
  { degree: "Diploma – Computer Science",   institute: "Govt. Polytechnic Chopan, Sonebhadra",           year: "2025"     },
  { degree: "Higher Secondary (12th)",      institute: "Govt. Excellence H.S. School, MP",               year: "2022"     },
  { degree: "High School (10th)",           institute: "Govt. Excellence H.S. School, MP",               year: "2020"     },
];

const experience = [
  {
    title:   "MERN Stack Development Trainee",
    period:  "Jul 2025 – Jan 2026",
    company: "Grastech · Noida, Uttar Pradesh",
    points: [
      "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Built and consumed RESTful APIs; tested endpoints using Postman.",
      "Implemented JWT authentication, role-based access control, and email verification.",
      "Integrated real-time features using Socket.io for live chat and notifications.",
      "Collaborated with Git & GitHub using branching and pull requests.",
    ],
  },
  {
    title:   "Frontend Development Intern",
    period:  "Sep 2025 – Dec 2025",
    company: "Grastech · Noida, Uttar Pradesh",
    points: [
      "Designed responsive UI components using HTML, CSS, JavaScript, and React.js.",
      "Applied Tailwind CSS for consistent, mobile-first design across all pages.",
      "Integrated frontend views with backend REST APIs for dynamic rendering.",
      "Improved page performance and cross-browser compatibility.",
    ],
  },
];

// ── Hooks ────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

// ── Animated Components ───────────────────────────────────────────────────────

/** Fade + slide-up wrapper */
function Reveal({ children, className = '', delay = 0, style = {} }) {
  const [ref, vis] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    vis ? 1 : 0,
        transform:  vis ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s cubic-bezier(.22,1,.36,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Char-by-char heading */
function DripHeading({ text, accent, className = '', delay = 0 }) {
  const [ref, vis] = useInView(0.3);
  const mainChars   = text.split('');
  const accentChars = accent.split('');
  return (
    <h2 ref={ref} className={className} style={{ fontFamily: "'Syne', sans-serif" }}>
      {mainChars.map((ch, i) => (
        <span
          key={`m${i}`}
          style={{
            display:    'inline-block',
            opacity:    vis ? 1 : 0,
            transform:  vis ? 'translateY(0)' : 'translateY(-18px)',
            transition: `opacity 0.4s ease ${delay + i * 0.03}s, transform 0.5s cubic-bezier(.22,1,.36,1) ${delay + i * 0.03}s`,
            whiteSpace: ch === ' ' ? 'pre' : 'normal',
            color:      'white',
          }}
        >
          {ch}
        </span>
      ))}
      <span> </span>
      {accentChars.map((ch, i) => (
        <span
          key={`a${i}`}
          style={{
            display:    'inline-block',
            opacity:    vis ? 1 : 0,
            transform:  vis ? 'translateY(0)' : 'translateY(-18px)',
            transition: `opacity 0.4s ease ${delay + (mainChars.length + 1 + i) * 0.03}s, transform 0.5s cubic-bezier(.22,1,.36,1) ${delay + (mainChars.length + 1 + i) * 0.03}s`,
            whiteSpace: ch === ' ' ? 'pre' : 'normal',
            color:      '#eba134',
          }}
        >
          {ch}
        </span>
      ))}
    </h2>
  );
}

/** Word-by-word paragraph */
function BookText({ text, className = '', delay = 0 }) {
  const [ref, vis] = useInView(0.1);
  const words = text.split(' ');
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display:    'inline-block',
            opacity:    vis ? 1 : 0,
            transform:  vis ? 'translateY(0)' : 'translateY(10px)',
            transition: `opacity 0.45s ease ${delay + i * 0.035}s, transform 0.45s ease ${delay + i * 0.035}s`,
            marginRight: '0.27em',
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

/** Counting number */
function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0);
  const [ref, vis]    = useInView(0.5);
  const started       = useRef(false);
  useEffect(() => {
    if (!vis || started.current) return;
    started.current = true;
    let cur = 0;
    const step  = Math.max(1, Math.ceil(to / 45));
    const timer = setInterval(() => {
      cur += step;
      if (cur >= to) { setVal(to); clearInterval(timer); }
      else setVal(cur);
    }, 35);
    return () => clearInterval(timer);
  }, [vis, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ── Background decorations ────────────────────────────────────────────────────
function GlowOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div style={{
        position: 'absolute', top: '8%', right: '-8%',
        width: 'clamp(260px,40vw,500px)', height: 'clamp(260px,40vw,500px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(235,161,52,0.055) 0%, transparent 70%)',
        animation: 'orbSpin 22s linear infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '4%', left: '-6%',
        width: 'clamp(200px,32vw,400px)', height: 'clamp(200px,32vw,400px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(235,161,52,0.045) 0%, transparent 70%)',
        animation: 'orbSpin 32s linear infinite reverse',
      }} />
    </div>
  );
}

function GridLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden
      style={{
        backgroundImage: `
          linear-gradient(rgba(235,161,52,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(235,161,52,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
      }}
    />
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        @keyframes orbSpin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulseDot  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.6)} }
        @keyframes cardFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes tlDot     { 0%{box-shadow:0 0 0 0 rgba(235,161,52,0.55)} 70%{box-shadow:0 0 0 7px rgba(235,161,52,0)} 100%{box-shadow:0 0 0 0 rgba(235,161,52,0)} }
        @keyframes shimmer   { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes scanLine  { 0%{top:-2px} 100%{top:calc(100% + 2px)} }
        @keyframes borderGlo { 0%,100%{box-shadow:0 0 0 0 rgba(235,161,52,0)} 50%{box-shadow:0 0 22px 2px rgba(235,161,52,0.13)} }

        /* card hover shimmer sweep */
        .bcard { position:relative; overflow:hidden; }
        .bcard::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(105deg,transparent 40%,rgba(235,161,52,0.045) 50%,transparent 60%);
          transform:translateX(-100%); transition:transform 0.65s ease; pointer-events:none;
        }
        .bcard:hover::after { transform:translateX(100%); }

        .shimmer-text {
          background:linear-gradient(90deg,#fff 38%,#eba134 50%,#fff 62%);
          background-size:220% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; animation:shimmer 3.5s linear infinite;
        }

        .cert-row { transition:transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease; }
        .cert-row:hover { transform:translateX(5px) scale(1.01); box-shadow:-3px 0 0 #eba134, 0 4px 18px rgba(235,161,52,0.1); }

        .exp-card { transition:transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease; }
        .exp-card:hover { transform:translateY(-3px); box-shadow:0 8px 30px rgba(235,161,52,0.11); }

        /* stat float stagger */
        .sf0 { animation:cardFloat 4s   ease-in-out infinite; }
        .sf1 { animation:cardFloat 4s   ease-in-out infinite 0.45s; }
        .sf2 { animation:cardFloat 4s   ease-in-out infinite 0.9s; }

        /* ── Responsive helpers ── */
        /* ensure nothing overflows its parent */
        * { box-sizing:border-box; }
      `}</style>

      <section
        id="about"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="relative bg-[#070707] px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-white overflow-hidden"
      >
        <GlowOrbs />
        <GridLines />

        <div className="relative mx-auto max-w-5xl w-full space-y-8 sm:space-y-10 lg:space-y-12">

          {/* ── Section label + heading ── */}
          <Reveal className="text-center">
            <div className="mb-5 inline-flex items-center gap-3 flex-wrap justify-center">
              <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#eba134]/60" />
              <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#eba134]/70">Portfolio</span>
              <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#eba134]/60" />
            </div>
            <DripHeading
              text="About"
              accent="Me"
              delay={0.1}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
            />
          </Reveal>

          {/* ── Hero card ── */}
          <Reveal delay={0.1}>
            <div
              className="bcard rounded-2xl sm:rounded-3xl border border-[#eba134]/12 bg-[#0d0d0d] p-5 sm:p-7 lg:p-9"
              style={{ animation: 'borderGlo 4s ease-in-out infinite' }}
            >
              {/* scan line */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl" aria-hidden>
                <div style={{
                  position:'absolute', left:0, right:0, height:'2px',
                  background:'linear-gradient(90deg,transparent,rgba(235,161,52,0.13),transparent)',
                  animation:'scanLine 7s linear infinite',
                }} />
              </div>

              <div className="flex flex-col items-center gap-10 sm:gap-12 md:flex-row md:items-start md:gap-10 lg:gap-14">

                {/* ── Photo ── */}
                <div className="relative flex-shrink-0 pb-6 sm:pb-7 md:pb-0">
                  {/* image container — fixed size, never stretches */}
                  <div
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      width:  'clamp(160px, 40vw, 220px)',
                      height: 'clamp(160px, 40vw, 220px)',
                      boxShadow: '0 0 36px rgba(235,161,52,0.14), 0 18px 52px rgba(0,0,0,0.55)',
                      flexShrink: 0,
                    }}
                  >
                    {/* border overlay */}
                    <div className="absolute inset-0 rounded-2xl border border-[#eba134]/20 z-20 pointer-events-none" />
                    {/* corner brackets */}
                    {[
                      'top-0 left-0 border-t-2 border-l-2 rounded-tl-xl',
                      'top-0 right-0 border-t-2 border-r-2 rounded-tr-xl',
                      'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl',
                      'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl',
                    ].map((cls, i) => (
                      <div key={i} className={`absolute w-4 h-4 border-[#eba134] z-30 ${cls}`} />
                    ))}
                    <img
                      src={PROFILE_IMG}
                      alt="Dhruv Kumar Yadav"
                      className="absolute inset-0 h-full w-full object-cover object-top z-10"
                    />
                    <div className="absolute inset-0 z-10 pointer-events-none"
                      style={{ background: 'linear-gradient(to bottom, transparent 58%, rgba(7,7,7,0.28))' }} />
                  </div>

                  {/* status badge — positioned relative to image, won't overlap text */}
                  <div
                    className="absolute -bottom-3.5 sm:-bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full border border-[#eba134]/30 bg-[#070707] px-3 py-1.5 shadow-lg"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    <span style={{
                      width: 7, height: 7, borderRadius: '50%',
                      background: '#eba134', display: 'inline-block', flexShrink: 0,
                      animation: 'pulseDot 1.6s ease-in-out infinite',
                    }} />
                    <span className="text-[11px] font-bold text-[#eba134]">Available for Work</span>
                  </div>
                </div>

                {/* ── Bio ── */}
                <div className="flex-1 w-full min-w-0">
                  <Reveal delay={0.18}>
                    <span className="inline-block mb-3 rounded-full border border-[#eba134]/30 bg-[#eba134]/8 px-4 py-1 text-[11px] font-bold tracking-widest uppercase text-[#eba134]">
                      Full Stack Developer
                    </span>
                  </Reveal>

                  <Reveal delay={0.22}>
                    <h3
                      className="mb-4 text-2xl sm:text-3xl font-black text-white leading-tight shimmer-text"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Dhruv Kumar Yadav
                    </h3>
                  </Reveal>

                  <BookText
                    delay={0.28}
                    text="I am a motivated Full Stack Developer with hands-on experience building secure, scalable web applications using the MERN stack. I specialize in authentication systems, role-based access control, real-time communication with Socket.io, and building responsive admin panels. Currently pursuing B.Tech in Computer Science while continuously pushing my skills forward."
                    className="leading-7 sm:leading-8 text-gray-400 text-sm sm:text-[15px]"
                  />

                  {/* Stats */}
                  <Reveal delay={0.38}>
                    <div className="mt-7 grid grid-cols-3 gap-3 sm:gap-4">
                      {[
                        { value: 3,   suffix: '+',   label: 'Projects',    cls: 'sf0' },
                        { value: 6,   suffix: 'mo+', label: 'Experience',  cls: 'sf1' },
                        { value: 100, suffix: '%',   label: 'Dedication',  cls: 'sf2' },
                      ].map(({ value, suffix, label, cls }) => (
                        <div
                          key={label}
                          className={`${cls} rounded-xl sm:rounded-2xl border border-[#eba134]/15 bg-gradient-to-b from-[#eba134]/8 to-transparent p-2.5 sm:p-3 text-center`}
                        >
                          <div className="text-lg sm:text-xl font-black text-[#eba134]" style={{ fontFamily: "'Syne', sans-serif" }}>
                            <Counter to={value} suffix={suffix} />
                          </div>
                          <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 mt-0.5 leading-tight">{label}</div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Education + Certifications ── */}
          <div className="grid gap-6 sm:gap-7 md:grid-cols-2">

            {/* Education */}
            <Reveal delay={0.12}>
              <div className="bcard h-full rounded-2xl sm:rounded-3xl border border-[#eba134]/12 bg-[#0d0d0d] p-5 sm:p-6 lg:p-7">
                <div className="mb-5 sm:mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#eba134]/20 bg-[#eba134]/8 text-lg sm:text-xl">🎓</div>
                  <h3 className="text-lg sm:text-xl font-black text-[#eba134]" style={{ fontFamily: "'Syne', sans-serif" }}>Education</h3>
                </div>

                {/* timeline */}
                <div className="relative space-y-5 pl-6 sm:pl-7">
                  <div className="absolute left-0 top-1 bottom-1 w-px"
                    style={{ background: 'linear-gradient(to bottom, #eba134, rgba(235,161,52,0.08))' }} />

                  {education.map((e, i) => (
                    <Reveal key={i} delay={0.08 + i * 0.07}>
                      <div className="relative group">
                        {/* dot */}
                        <div
                          className="absolute -left-6 sm:-left-7 top-[14px] h-[11px] w-[11px] rounded-full border-2 border-[#eba134] bg-[#070707] z-10"
                          style={{ animation: 'tlDot 2.2s ease-out infinite', animationDelay: `${i * 0.55}s` }}
                        />
                        <div className="rounded-xl border border-[#eba134]/10 bg-[#eba134]/4 p-3 sm:p-3.5 transition-all duration-300 group-hover:border-[#eba134]/25 group-hover:bg-[#eba134]/8">
                          <p className="font-bold text-white text-[13px] sm:text-sm leading-snug break-words">{e.degree}</p>
                          <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-snug break-words">{e.institute}</p>
                          <span className="mt-2 inline-block rounded-full border border-[#eba134]/25 bg-[#eba134]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#eba134] tracking-wider uppercase">
                            {e.year}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Certifications */}
            <Reveal delay={0.18}>
              <div className="bcard h-full rounded-2xl sm:rounded-3xl border border-[#eba134]/12 bg-[#0d0d0d] p-5 sm:p-6 lg:p-7">
                <div className="mb-5 sm:mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#eba134]/20 bg-[#eba134]/8 text-lg sm:text-xl">🏆</div>
                  <h3 className="text-lg sm:text-xl font-black text-[#eba134]" style={{ fontFamily: "'Syne', sans-serif" }}>Certifications</h3>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  {certifications.map((c, i) => (
                    <Reveal key={i} delay={0.08 + i * 0.09}>
                      <div className="cert-row rounded-xl sm:rounded-2xl border border-[#eba134]/10 bg-[#eba134]/4 p-3.5 sm:p-4 cursor-default">
                        <div className="flex items-start gap-3">
                          {/* number badge */}
                          <div className="flex-shrink-0 h-7 w-7 rounded-lg bg-[#eba134]/15 flex items-center justify-center text-[10px] font-black text-[#eba134]">
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-white text-[13px] sm:text-sm leading-snug break-words">{c.title}</p>
                            <div className="mt-1.5 flex items-center gap-2 flex-wrap">
                              <span className="text-[11px] sm:text-xs text-gray-500">{c.issuer}</span>
                              <span className="h-1 w-1 rounded-full bg-[#eba134]/40 flex-shrink-0" />
                              <span className="text-[11px] sm:text-xs font-bold text-[#eba134]">{c.year}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* decorative tagline */}
                <Reveal delay={0.4}>
                  <div className="mt-6 rounded-xl border border-dashed border-[#eba134]/15 p-3.5 text-center">
                    <p className="text-[11px] sm:text-xs text-gray-600 italic">
                      Constantly learning&nbsp;•&nbsp;Always building&nbsp;•&nbsp;Never stopping
                    </p>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>

          {/* ── Work Experience ── */}
          <Reveal delay={0.1}>
            <div className="bcard rounded-2xl sm:rounded-3xl border border-[#eba134]/12 bg-[#0d0d0d] p-5 sm:p-7 lg:p-9">
              <div className="mb-6 sm:mb-8 flex items-center gap-3 flex-wrap">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#eba134]/20 bg-[#eba134]/8 text-lg sm:text-xl">💼</div>
                <h3 className="text-lg sm:text-xl font-black text-[#eba134]" style={{ fontFamily: "'Syne', sans-serif" }}>Work Experience</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[#eba134]/20 to-transparent min-w-[20px]" />
              </div>

              {/* timeline */}
              <div className="relative space-y-6 sm:space-y-7 pl-6 sm:pl-8">
                <div className="absolute left-0 top-3 bottom-3 w-px"
                  style={{ background: 'linear-gradient(to bottom, #eba134, rgba(235,161,52,0.12))' }} />

                {experience.map((exp, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.14}>
                    <div className="relative group">
                      {/* timeline dot */}
                      <div className="absolute -left-6 sm:-left-8 top-4 flex items-center justify-center z-10">
                        <div
                          className="h-[11px] w-[11px] rounded-full border-2 border-[#eba134] bg-[#070707]"
                          style={{ animation: 'tlDot 2.5s ease-out infinite', animationDelay: `${i * 0.9}s` }}
                        />
                      </div>

                      <div className="exp-card rounded-xl sm:rounded-2xl border border-[#eba134]/12 bg-[#eba134]/4 p-4 sm:p-5 lg:p-6">
                        {/* header row */}
                        <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                          <h4
                            className="text-[15px] sm:text-base lg:text-lg font-black text-white leading-snug break-words min-w-0"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                          >
                            {exp.title}
                          </h4>
                          <span className="flex-shrink-0 rounded-full border border-[#eba134]/30 bg-[#eba134]/10 px-2.5 sm:px-3 py-0.5 text-[10px] sm:text-[11px] font-bold text-[#eba134] whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>

                        <p className="mb-4 sm:mb-5 text-[11px] sm:text-xs font-medium text-gray-500 flex items-center gap-1.5 flex-wrap">
                          <span className="inline-block h-1 w-1 rounded-full bg-[#eba134]/50 flex-shrink-0" />
                          {exp.company}
                        </p>

                        <ul className="space-y-1.5 sm:space-y-2">
                          {exp.points.map((pt, j) => (
                            <li key={j} className="flex items-start gap-2 group/pt">
                              <span className="mt-[9px] h-1 w-1 flex-shrink-0 rounded-full bg-[#eba134]/45 group-hover/pt:bg-[#eba134] transition-colors" />
                              <span className="text-[13px] sm:text-sm text-gray-400 leading-6 sm:leading-7 break-words min-w-0">
                                {pt}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}

export default About;
