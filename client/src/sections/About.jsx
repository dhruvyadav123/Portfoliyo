import { DripHeading, Reveal } from '../components/SectionAnimations';
import { projectCountLabel } from '../data/projects';

const experience = [
  'Build MERN features across customer, host, vendor, and admin workflows.',
  'Develop secure APIs for authentication, wallets, payments, and notifications.',
  'Integrate React and React Native apps with Socket.io and Agora/WebRTC.',
  'Support deployments with Vercel, Render, Linux, PM2, Nginx, and AWS S3.',
];

function About() {
  const stats = [[projectCountLabel, 'Projects'], ['1yr+', 'Experience'], ['Web + Mobile', 'Focus']];

  return (
    <section id="about" className="bg-[#0a0a0a] px-4 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-[#eba134]">About Me</p>
          <DripHeading text="More than" accent="just code" className="text-4xl font-black tracking-tight md:text-5xl" />
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            I turn real product requirements into reliable web and mobile experiences.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={0.08} className="rounded-3xl border border-white/[0.08] bg-[#111] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#eba134]">How I work</p>
            <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">Building features that hold up in production.</h3>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              My work spans frontend, backend, mobile integration, realtime systems, payments, and deployment.
              I value clear UX, dependable behavior, and maintainable code.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/[0.08] pt-6">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <div className="text-lg font-black text-[#eba134]">{value}</div>
                  <div className="mt-1 text-[9px] font-bold uppercase tracking-wider text-gray-500">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14} className="rounded-3xl border border-[#eba134]/15 bg-[#111] p-6 sm:p-8">
            <div className="flex flex-col gap-3 border-b border-white/[0.08] pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#eba134]">Current Experience</p>
                <h3 className="mt-2 text-xl font-black sm:text-2xl">Full Stack Web Developer</h3>
                <p className="mt-1 text-sm text-gray-400">Asyscraft Private Limited</p>
              </div>
              <span className="w-fit rounded-full bg-[#eba134]/10 px-3 py-1 text-xs font-bold text-[#eba134]">Aug 2025 - Present</span>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {experience.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-gray-400">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#eba134]" />{point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="mt-6 grid gap-4 rounded-3xl border border-white/[0.08] bg-[#101010] p-6 sm:grid-cols-[auto_1fr_1fr] sm:items-center sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#eba134]">Education</p>
          <div className="border-l-2 border-[#eba134]/35 pl-4"><p className="text-sm font-bold">B.Tech - Computer Science Engineering</p><p className="mt-1 text-xs text-gray-500">LDC Institute, Prayagraj · AKTU University</p></div>
          <div className="border-l-2 border-[#eba134]/35 pl-4"><p className="text-sm font-bold">Diploma - Computer Science Engineering</p><p className="mt-1 text-xs text-gray-500">Government Polytechnic Chopan, Sonebhadra</p></div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
