import React from 'react';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Project 1', image: '/projects/1.jpg' },
    { id: 2, title: 'Project 2', image: '/projects/2.jpg' },
    { id: 3, title: 'Project 3', image: '/projects/3.jpg' },
    { id: 4, title: 'Project 4', image: '/projects/4.jpg' },
    { id: 5, title: 'Project 5', image: '/projects/5.jpg' },
    { id: 6, title: 'Project 6', image: '/projects/6.jpg' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-orange-900 border-2 border-yellow-500 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_gold]"
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-slate-200 text-xl font-playfair font-semibold">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
