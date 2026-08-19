import React from 'react';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Project One', image: '/images/project1.jpg' },
    { id: 2, title: 'Project Two', image: '/images/project2.jpg' },
    { id: 3, title: 'Project Three', image: '/images/project3.jpg' },
    { id: 4, title: 'Project Four', image: '/images/project4.jpg' },
    { id: 5, title: 'Project Five', image: '/images/project5.jpg' },
    { id: 6, title: 'Project Six', image: '/images/project6.jpg' },
  ];

  return (
    <section className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-white mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg border-2 border-transparent focus:border-orange-500"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-serif px-4 text-center">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
