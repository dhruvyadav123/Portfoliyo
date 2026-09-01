import { DripHeading, Reveal } from '../components/SectionAnimations';
import skills from '../data/skills';

const categories = [
  ['frontend', '01', 'Frontend & Mobile', 'Responsive web and mobile interfaces built around reusable components.'],
  ['backend', '02', 'Backend & APIs', 'Secure APIs, authorization, realtime events, and maintainable server logic.'],
  ['database', '03', 'Data', 'Schema design, validation, queries, and managed production databases.'],
  ['paymentsAndRealtime', '04', 'Integrations', 'Payment, calling, storage, and live communication workflows.'],
  ['deploymentAndTools', '05', 'Deployment & Tools', 'Tools used to test, ship, monitor, and maintain applications.'],
];

function Skills() {
  return (
    <section id="skills" className="bg-[#0a0a0a] px-4 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-[#eba134]">Technical Toolkit</p>
          <DripHeading text="Skills used to" accent="ship products" className="text-4xl font-black tracking-tight md:text-5xl" />
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A focused stack shaped by production web, mobile, realtime, payment, and deployment work.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(([key, number, title, description], index) => (
            <Reveal
              key={key}
              delay={index * 0.06}
              className={`rounded-3xl border border-white/[0.08] bg-[#111] p-6 transition-all hover:-translate-y-1 hover:border-[#eba134]/30 ${key === 'deploymentAndTools' ? 'lg:col-span-2' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div><h3 className="text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-gray-500">{description}</p></div>
                <span className="text-xs font-black tracking-widest text-[#eba134]/60">{number}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills[key].map((skill) => (
                  <span key={skill} className="rounded-full border border-white/[0.09] bg-white/[0.035] px-3 py-1.5 text-xs font-semibold text-gray-300 transition-colors hover:border-[#eba134]/35 hover:text-[#eba134]">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
