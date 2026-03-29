import { useEffect, useRef, useState } from 'react';
import PROFILE_IMG from '../assets/profile.png';

const certifications = [
  { title: "Full Stack Web Development (MERN)", issuer: "GRAStech", year: "2026" },
  { title: "Summer Training in PHP with MVC", issuer: "Self", year: "Oct 2024" },
  { title: "Web Designing Certification", issuer: "Self", year: "Feb 2023" },
];

const education = [
  { degree: "B.Tech â€“ Computer Science", institute: "LDC Institute, Prayagraj Â· AKTU University", year: "Pursuing" },
  { degree: "Diploma â€“ Computer Science", institute: "Govt. Polytechnic Chopan, Sonebhadra", year: "2025" },
  { degree: "Higher Secondary (12th)", institute: "Govt. Excellence H.S. School, MP", year: "2022" },
  { degree: "High School (10th)", institute: "Govt. Excellence H.S. School, MP", year: "2020" },
];

const experience = [
  {
    title: "MERN Stack Development Trainee",
    period: "Jul 2025 â€“ Jan 2026",
    company: "Grastech Â· Noida, Uttar Pradesh",
    points: [
      "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Built and consumed RESTful APIs; tested endpoints using Postman.",
      "Implemented JWT authentication, role-based access control, and email verification.",
      "Integrated real-time features using Socket.io for live chat and notifications.",
      "Collaborated with Git & GitHub using branching and pull requests.",
    ],
  },
  {
    title: "Frontend Development Intern",
    period: "Sep 2025 â€“ Dec 2025",
    company: "Grastech Â· Noida, Uttar Pradesh",
    points: [
      "Designed responsive UI components using HTML, CSS, JavaScript, and React.js.",
      "Applied Tailwind CSS for consistent, mobile-first design across all pages.",
      "Integrated frontend views with backend REST APIs for dynamic rendering.",
      "Improved page performance and cross-browser compatibility.",
    ],
  },
];

/* â”€â”€â”€ Animated word-by-word text (book-reveal style) â”€â”€â”€ */
function BookText({ text, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = text.split(' ');
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: `opacity 0.5s ease ${delay + i * 0.04}s, transform 0.5s ease ${delay + i * 0.04}s`,
            marginRight: '0.28em',
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

/* â”€â”€â”€ Char-by-char heading (typewriter drip) â”€â”€â”€ */
function DripHeading({ text, accent, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const chars = (text + ' ' + accent).split('');
  const splitAt = text.length + 1;
  return (
    <h2 ref={ref} className={className}>
      {chars.map((ch, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) rotateX(0deg)' : 'translateY(-20px) rotateX(-90deg)',
            transition: `opacity 0.4s ease ${delay + i * 0.03}s, transform 0.5s cubic-bezier(.22,1,.36,1) ${delay + i * 0.03}s`,
            color: i >= splitAt ? '#eba134' : 'white',
            whiteSpace: ch === ' ' ? 'pre' : 'normal',
          }}
        >
          {ch}
        </span>
      ))}
    </h2>
  );
}

/* â”€â”€â”€ Slide-up section wrapper â”€â”€â”€ */
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* â”€â”€â”€ Floating particles background â”€â”€â”€ */
function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(22)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${(i * 47 + 13) % 100}%`,
            top: `${(i * 31 + 7) % 100}%`,
            width: i % 3 === 0 ? '2px' : '1px',
            height: i % 3 === 0 ? '2px' : '1px',
            borderRadius: '50%',
            background: '#eba134',
            opacity: 0.25 + (i % 4) * 0.1,
            animation: `float${i % 3} ${6 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${(i * 0.7) % 5}s`,
          }}
        />
      ))}
    </div>
  );
}

/* â”€â”€â”€ Orbiting glow rings â”€â”€â”€ */
function GlowOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div style={{
        position: 'absolute', top: '10%', right: '-10%', width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(235,161,52,0.06) 0%, transparent 70%)',
        animation: 'orbSpin 20s linear infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-8%', width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(235,161,52,0.05) 0%, transparent 70%)',
        animation: 'orbSpin 30s linear infinite reverse',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '800px', height: '800px', borderRadius: '50%',
        border: '1px solid rgba(235,161,52,0.04)',
        animation: 'orbSpin 40s linear infinite',
      }} />
    </div>
  );
}

/* â”€â”€â”€ Grid texture overlay â”€â”€â”€ */
function GridLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(235,161,52,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(235,161,52,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  );
}

/* â”€â”€â”€ Counter animation â”€â”€â”€ */
function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = Math.ceil(to / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= to) { setVal(to); clearInterval(timer); }
          else setVal(start);
        }, 40);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        @keyframes float0 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes orbSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes borderGlow {
          0%,100%{box-shadow:0 0 0 0 rgba(235,161,52,0)} 
          50%{box-shadow:0 0 20px 2px rgba(235,161,52,0.15)}
        }
        @keyframes scanLine {
          0%{transform:translateY(-100%)} 100%{transform:translateY(400%)}
        }
        @keyframes pulse-dot {
          0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)}
        }
        @keyframes cardFloat {
          0%,100%{transform:translateY(0px)} 50%{transform:translateY(-6px)}
        }
        @keyframes timelineDot {
          0%{box-shadow:0 0 0 0 rgba(235,161,52,0.5)} 
          70%{box-shadow:0 0 0 8px rgba(235,161,52,0)} 
          100%{box-shadow:0 0 0 0 rgba(235,161,52,0)}
        }
        .book-card {
          position: relative;
          overflow: hidden;
        }
        .book-card::before {
          content: '';
          position: absolute;
          top: -2px; left: -2px; right: -2px; bottom: -2px;
          background: linear-gradient(135deg, rgba(235,161,52,0.15), transparent 40%, rgba(235,161,52,0.08));
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
        }
        .book-card:hover::before { opacity: 1; }
        .book-card::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(235,161,52,0.04), transparent);
          transition: left 0.6s ease;
          pointer-events: none;
        }
        .book-card:hover::after { left: 150%; }

        .shimmer-text {
          background: linear-gradient(90deg, #fff 40%, #eba134 50%, #fff 60%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .cert-card {
          transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease;
        }
        .cert-card:hover {
          transform: translateX(6px) scale(1.01);
          box-shadow: -3px 0 0 #eba134, 0 4px 20px rgba(235,161,52,0.1);
        }

        .exp-card {
          transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease;
        }
        .exp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(235,161,52,0.12);
        }

        .stat-box {
          animation: cardFloat 4s ease-in-out infinite;
        }
        .stat-box:nth-child(2) { animation-delay: 0.5s; }
        .stat-box:nth-child(3) { animation-delay: 1s; }
      `}</style>

      <section
        id="about"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="relative bg-[#070707] px-4 sm:px-6 py-24 text-white overflow-hidden"
      >
        {/* Background layers */}
        <GlowOrbs />
        <GridLines />
        <Particles />

        {/* Noise texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '200px' }}
        />

        <div className="relative mx-auto max-w-6xl">

          {/* â”€â”€ Section Title â”€â”€ */}
          <Reveal className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#eba134]/60" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#eba134]/70">Portfolio</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#eba134]/60" />
            </div>
            <DripHeading
              text="About"
              accent="Me"
              delay={0.1}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            />
          </Reveal>

          {/* â”€â”€ Hero Card â”€â”€ */}
          <Reveal delay={0.1} className="mb-8">
            <div
              className="book-card rounded-3xl border border-[#eba134]/12 bg-[#0d0d0d] p-6 sm:p-8"
              style={{ animation: 'borderGlow 4s ease-in-out infinite' }}
            >
              {/* Scan line effect */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                <div style={{
                  position: 'absolute', width: '100%', height: '2px',
                  background: 'linear-gradient(90deg, transparent, rgba(235,161,52,0.15), transparent)',
                  animation: 'scanLine 6s linear infinite',
                }} />
              </div>

              <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">

                {/* Photo */}
                <div className="relative mx-auto flex-shrink-0 md:mx-0">
                  <div className="relative h-52 w-52 sm:h-60 sm:w-60 rounded-2xl overflow-hidden"
                    style={{ boxShadow: '0 0 40px rgba(235,161,52,0.15), 0 20px 60px rgba(0,0,0,0.6)' }}
                  >
                    <div className="absolute inset-0 rounded-2xl border border-[#eba134]/20 z-20" />
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#eba134] rounded-tl-xl z-30" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#eba134] rounded-tr-xl z-30" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#eba134] rounded-bl-xl z-30" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#eba134] rounded-br-xl z-30" />
                    <div className="absolute inset-[2px] rounded-2xl overflow-hidden z-10">
                      <img src={PROFILE_IMG} alt="Dhruv Kumar Yadav" className="h-full w-full object-cover object-top" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(7,7,7,0.3))' }} />
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full border border-[#eba134]/30 bg-[#070707] px-4 py-1.5 text-xs font-bold text-[#eba134] whitespace-nowrap shadow-lg">
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#eba134', display: 'inline-block', animation: 'pulse-dot 1.5s ease-in-out infinite' }} />
                    Available for Work
                  </div>
                </div>

                {/* Bio */}
                <div className="flex-1 pt-6">
                  <Reveal delay={0.2}>
                    <span className="inline-block mb-3 rounded-full border border-[#eba134]/30 bg-[#eba134]/8 px-4 py-1 text-xs font-bold tracking-widest uppercase text-[#eba134]">
                      Full Stack Developer
                    </span>
                  </Reveal>

                  <Reveal delay={0.25}>
                    <h3 className="mb-5 text-3xl sm:text-4xl font-black text-white leading-tight shimmer-text"
                      style={{ fontFamily: "'Syne', sans-serif" }}>
                      Dhruv Kumar Yadav
                    </h3>
                  </Reveal>

                  <BookText
                    delay={0.3}
                    text="I am a motivated Full Stack Developer with hands-on experience building secure, scalable web applications using the MERN stack. I specialize in authentication systems, role-based access control, real-time communication with Socket.io, and building responsive admin panels. Currently pursuing B.Tech in Computer Science while continuously pushing my skills forward."
                    className="leading-8 text-gray-400 text-sm sm:text-[15px]"
                  />

                  {/* Stats */}
                  <Reveal delay={0.4}>
                    <div className="mt-7 grid grid-cols-3 gap-3">
                      {[
                        { value: 3, suffix: '+', label: 'Projects' },
                        { value: 6, suffix: 'mo+', label: 'Experience' },
                        { value: 100, suffix: '%', label: 'Dedication' },
                      ].map((s, i) => (
                        <div
                          key={s.label}
                          className="stat-box rounded-2xl border border-[#eba134]/15 bg-gradient-to-b from-[#eba134]/8 to-transparent p-3 text-center"
                          style={{ animationDelay: `${i * 0.4}s` }}
                        >
                          <div className="text-xl font-black text-[#eba134]" style={{ fontFamily: "'Syne', sans-serif" }}>
                            <Counter to={s.value} suffix={s.suffix} />
                          </div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-0.5">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </Reveal>

          {/* â”€â”€ Education + Certifications â”€â”€ */}
          <div className="mb-8 grid gap-6 md:grid-cols-2">

            {/* Education */}
            <Reveal delay={0.15}>
              <div className="book-card h-full rounded-3xl border border-[#eba134]/12 bg-[#0d0d0d] p-6 sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#eba134]/20 bg-[#eba134]/8 text-xl">ðŸŽ“</div>
                  <h3 className="text-xl font-black text-[#eba134]" style={{ fontFamily: "'Syne', sans-serif" }}>Education</h3>
                </div>

                <div className="relative space-y-5 pl-5">
                  <div className="absolute left-0 top-0 bottom-0 w-px"
                    style={{ background: 'linear-gradient(to bottom, #eba134, rgba(235,161,52,0.1))' }} />

                  {education.map((e, i) => (
                    <Reveal key={i} delay={0.1 + i * 0.08}>
                      <div className="relative group">
                        <div className="absolute -left-5 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#eba134] bg-[#070707] z-10"
                          style={{ animation: 'timelineDot 2s ease-out infinite', animationDelay: `${i * 0.5}s` }} />

                        <div className="rounded-xl border border-[#eba134]/10 bg-[#eba134]/4 p-3.5 transition-all duration-300 group-hover:border-[#eba134]/25 group-hover:bg-[#eba134]/8">
                          <p className="font-bold text-white text-sm leading-snug">
                            {e.degree.split('').map((ch, ci) => (
                              <span key={ci} style={{
                                display: 'inline-block',
                                whiteSpace: ch === ' ' ? 'pre' : 'normal',
                              }}>{ch}</span>
                            ))}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{e.institute}</p>
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
            <Reveal delay={0.2}>
              <div className="book-card h-full rounded-3xl border border-[#eba134]/12 bg-[#0d0d0d] p-6 sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#eba134]/20 bg-[#eba134]/8 text-xl">ðŸ†</div>
                  <h3 className="text-xl font-black text-[#eba134]" style={{ fontFamily: "'Syne', sans-serif" }}>Certifications</h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((c, i) => (
                    <Reveal key={i} delay={0.1 + i * 0.1}>
                      <div className="cert-card rounded-2xl border border-[#eba134]/10 bg-[#eba134]/4 p-4 cursor-default">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5 h-7 w-7 rounded-lg bg-[#eba134]/15 flex items-center justify-center text-[10px] font-black text-[#eba134]">
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          <div>
                            <BookText
                              text={c.title}
                              delay={0.15 + i * 0.1}
                              className="font-bold text-white text-sm leading-snug"
                            />
                            <div className="mt-1.5 flex items-center gap-2">
                              <span className="text-xs text-gray-500">{c.issuer}</span>
                              <span className="h-1 w-1 rounded-full bg-[#eba134]/40" />
                              <span className="text-xs font-bold text-[#eba134]">{c.year}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Decorative badge */}
                <div className="mt-6 rounded-2xl border border-dashed border-[#eba134]/15 p-4 text-center">
                  <BookText
                    text="Constantly learning â€¢ Always building â€¢ Never stopping"
                    delay={0.4}
                    className="text-xs text-gray-600 italic"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* â”€â”€ Work Experience â”€â”€ */}
          <Reveal delay={0.1}>
            <div className="book-card rounded-3xl border border-[#eba134]/12 bg-[#0d0d0d] p-6 sm:p-8">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#eba134]/20 bg-[#eba134]/8 text-xl">ðŸ’¼</div>
                <h3 className="text-xl font-black text-[#eba134]" style={{ fontFamily: "'Syne', sans-serif" }}>Work Experience</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[#eba134]/20 to-transparent" />
              </div>

              <div className="relative space-y-8 pl-6 sm:pl-8">
                {/* Timeline spine */}
                <div className="absolute left-0 top-4 bottom-4 w-px"
                  style={{ background: 'linear-gradient(to bottom, #eba134, rgba(235,161,52,0.15))' }} />

                {experience.map((exp, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.15}>
                    <div className="relative group">
                      {/* Dot */}
                      <div className="absolute -left-6 sm:-left-8 top-4 flex h-4 w-4 items-center justify-center z-10">
                        <div className="h-3 w-3 rounded-full border-2 border-[#eba134] bg-[#070707]"
                          style={{ animation: 'timelineDot 2.5s ease-out infinite', animationDelay: `${i * 0.8}s` }} />
                      </div>

                      <div className="exp-card rounded-2xl border border-[#eba134]/12 bg-[#eba134]/4 p-5">
                        {/* Header */}
                        <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
                          <h4 className="text-base sm:text-lg font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                            {exp.title}
                          </h4>
                          <span className="flex-shrink-0 rounded-full border border-[#eba134]/30 bg-[#eba134]/10 px-3 py-0.5 text-[11px] font-bold text-[#eba134]">
                            {exp.period}
                          </span>
                        </div>

                        <p className="mb-4 text-xs font-medium text-gray-500 flex items-center gap-1.5">
                          <span className="inline-block h-1 w-1 rounded-full bg-[#eba134]/50" />
                          {exp.company}
                        </p>

                        <ul className="space-y-2">
                          {exp.points.map((pt, j) => (
                            <li key={j} className="flex items-start gap-2.5 group/pt">
                              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#eba134]/50 group-hover/pt:bg-[#eba134] transition-colors" />
                              <BookText
                                text={pt}
                                delay={0.05 * j}
                                className="text-sm text-gray-400 leading-7"
                              />
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
