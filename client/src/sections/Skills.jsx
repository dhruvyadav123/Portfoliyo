import { BookText, DripHeading, Reveal } from '../components/SectionAnimations';

const skillsData = {
  frontend: [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Tailwind CSS', icon: '💨' },
  ],
  backend: [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '🚂' },
    { name: 'REST API', icon: '🔌' },
    { name: 'Socket.io', icon: '🔁' },
    { name: 'JWT Auth', icon: '🔐' },
    { name: 'Chatbot API', icon: '🤖' },
  ],
  database: [
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MongoDB Atlas', icon: '☁️' },
    { name: 'Mongoose', icon: '🔗' },
  ],
  tools: [
    { name: 'Git', icon: '🐙' },
    { name: 'GitHub', icon: '📦' },
    { name: 'Postman', icon: '📮' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Vercel', icon: '▲' },
  ],
  concepts: [
    { name: 'CRUD Operations', icon: '🔄' },
    { name: 'Role-Based Access', icon: '🛡️' },
    { name: 'Email Verification', icon: '📧' },
    { name: 'Admin Panel', icon: '⚙️' },
    { name: 'Responsive Design', icon: '📐' },
    { name: 'MVC Pattern', icon: '🏗️' },
  ],
};

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Database' },
  { key: 'tools', label: 'Tools' },
  { key: 'concepts', label: 'Concepts', wide: true },
];

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#0a0a0a] px-4 py-24 text-white sm:px-8">
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-[#eba134]">What I Know</p>
          <DripHeading
            text="Technical"
            accent="Skills"
            className="text-4xl font-black md:text-5xl"
          />
          <BookText
            delay={0.1}
            text="Core tools, libraries, and development patterns I use to build polished full stack products."
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal
              key={category.key}
              delay={0.08 * index}
              className={`rounded-3xl border border-[#eba134]/15 bg-[#111111] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#eba134]/35 hover:shadow-[0_0_30px_#eba13415] ${category.wide ? 'lg:col-span-2' : ''}`}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="h-0.5 w-6 bg-[#eba134]" />
                <h3 className="text-lg font-black uppercase tracking-wider text-[#eba134]">{category.label}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skillsData[category.key].map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex cursor-default items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 transition-all duration-200 hover:border-[#eba134]/50 hover:bg-[#eba134]/10"
                  >
                    <span className="text-base leading-none">{skill.icon}</span>
                    <span className="text-sm font-semibold text-gray-300 transition-colors group-hover:text-[#eba134]">
                      {skill.name}
                    </span>
                  </div>
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
