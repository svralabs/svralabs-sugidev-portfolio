import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={project.link}
      className="group relative block w-[280px] h-[380px] md:w-[320px] md:h-[420px] overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 to-ink/30 z-10"></div>
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20">
        <div className="flex items-center gap-2 mb-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-[10px] font-medium bg-ember/20 text-ember rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-mist mb-2">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-mist/80 mb-4">
          {project.description}
        </p>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-mist">
            {project.year}
          </span>
          <span className="flex items-center gap-1 text-sm text-mist/60">
            <span className="material-symbols-outlined text-base">
              visibility
            </span>
            {project.views}
          </span>
        </div>
      </div>
    </Link>
  );
}
