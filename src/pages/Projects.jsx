import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      category: 'Web Development',
      image: 'https://via.placeholder.com/600x400?text=Project+One',
    },
    {
      id: 2,
      title: 'Project Two',
      category: 'Mobile App',
      image: 'https://via.placeholder.com/600x400?text=Project+Two',
    },
    {
      id: 3,
      title: 'Project Three',
      category: 'UI/UX Design',
      image: 'https://via.placeholder.com/600x400?text=Project+Three',
    },
    {
      id: 4,
      title: 'Project Four',
      category: 'Web Development',
      image: 'https://via.placeholder.com/600x400?text=Project+Four',
    },
    {
      id: 5,
      title: 'Project Five',
      category: 'Mobile App',
      image: 'https://via.placeholder.com/600x400?text=Project+Five',
    },
    {
      id: 6,
      title: 'Project Six',
      category: 'UI/UX Design',
      image: 'https://via.placeholder.com/600x400?text=Project+Six',
    },
  ];

  return (
    <section className="bg-orange-900 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="relative overflow-hidden rounded-lg group aspect-square">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-orange-900/80 group-hover:bg-orange-900/60 transition"></div>
              <h3 className="absolute bottom-4 left-4 text-white font-bold">{project.title}</h3>
              <p className="absolute bottom-12 left-4 text-orange-300">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
