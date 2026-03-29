function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 shadow-lg transition hover:-translate-y-1 hover:border-cyan-500">
      <h3 className="text-xl font-bold text-white">{project.title}</h3>
      <p className="mt-1 text-sm font-medium text-cyan-400">{project.subtitle}</p>

      <p className="mt-4 text-sm leading-7 text-gray-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item, index) => (
          <span
            key={index}
            className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black hover:bg-cyan-400"
        >
          GitHub
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-semibold text-white hover:border-cyan-400 hover:text-cyan-400"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;