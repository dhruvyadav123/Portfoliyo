import { BookText, DripHeading, Reveal } from '../components/SectionAnimations';

const projects = [
  {
    title: 'Online Admission System',
    subtitle: 'Full Stack Web Application',
    description: 'A full-stack admission portal with student, admin, and staff roles. Implements secure JWT authentication, CRUD operations for applications, email verification workflow, and admin approval management.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    tags: ['MERN', 'JWT', 'Role-Based'],
    github: 'https://github.com/dhruvyadav123',
    live: 'https://institute-project-eta.vercel.app/',
    emoji: '🏫',
  },
  {
    title: 'Hospital Management System',
    subtitle: 'Healthcare Admin Portal',
    description: 'Multi-role system for Admin, Doctor, and Patient with JWT-based authentication. Includes CRUD for patient records, appointments, prescriptions, and doctor schedules with a responsive admin dashboard.',
    tech: ['React.js', 'Node.js', 'MongoDB Atlas', 'Express.js', 'REST API', 'Socket.io'],
    tags: ['MERN', 'REST API', 'Admin Panel'],
    github: 'https://github.com/dhruvyadav123',
    live: 'https://hospital-management-tan-seven.vercel.app/',
    emoji: '🏥',
  },
  {
    title: 'Ayurvedic E-Commerce Platform',
    subtitle: 'Online Shopping + Chatbot',
    description: 'Full-featured e-commerce site with product catalog, cart, and checkout. Integrated Chatbot REST API for customer support. Uses MongoDB Atlas for cloud database with secure auth and email verification.',
    tech: ['React.js', 'Node.js', 'MongoDB Atlas', 'Chatbot API', 'JWT', 'Tailwind CSS'],
    tags: ['MERN', 'MongoDB Atlas', 'Chatbot API'],
    github: 'https://github.com/dhruvyadav123',
    live: 'https://ayurvedic-e-commerce.vercel.app/shop',
    emoji: '🌿',
  },
];

function ProjectCard({ project, index }) {
  return (
    <Reveal
      delay={0.08 * index}
      className="group relative rounded-3xl border border-white/10 bg-[#111111] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#eba134]/40 hover:shadow-[0_0_40px_#eba13420] sm:p-8"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#eba134]/20 bg-[#eba134]/10 text-2xl">
            {project.emoji}
          </div>
          <h3 className="text-xl font-black leading-tight text-white">{project.title}</h3>
          <p className="mt-1 text-sm font-semibold text-[#eba134]">{project.subtitle}</p>
        </div>

        <div className="flex shrink-0 flex-col gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="whitespace-nowrap rounded-full border border-[#eba134]/25 bg-[#eba134]/8 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#eba134]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <BookText
        delay={0.05}
        text={project.description}
        className="mb-5 text-sm leading-7 text-gray-400"
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400 transition-colors group-hover:border-[#eba134]/20 group-hover:text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-xl bg-[#eba134] py-2.5 text-center text-sm font-bold text-black transition-all duration-300 hover:bg-[#eba134]/85 hover:shadow-[0_0_15px_#eba13440]"
        >
          GitHub →
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-xl border border-[#eba134]/30 bg-[#eba134]/5 py-2.5 text-center text-sm font-bold text-[#eba134] transition-all duration-300 hover:border-[#eba134] hover:bg-[#eba134]/15"
        >
          Live Demo
        </a>
      </div>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#0a0a0a] px-4 py-24 text-white sm:px-8">
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-[#eba134]">My Work</p>
          <DripHeading
            text="Featured"
            accent="Projects"
            className="text-4xl font-black md:text-5xl"
          />
          <BookText
            delay={0.1}
            text="A few production-style full stack projects that reflect my current focus on secure, practical web applications."
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <Reveal delay={0.28} className="mt-12 text-center">
          <a
            href="https://github.com/dhruvyadav123"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#eba134]/40 bg-[#eba134]/5 px-8 py-3 text-sm font-bold text-[#eba134] transition-all duration-300 hover:border-[#eba134] hover:bg-[#eba134]/15 hover:shadow-[0_0_20px_#eba13430]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            View All on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;
