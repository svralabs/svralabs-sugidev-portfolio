import { useState } from 'react';
import { X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'Description for Project One',
      techStack: ['React', 'Tailwind CSS', 'Node.js'],
      imageUrl: 'https://via.placeholder.com/250x180',
      link: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Description for Project Two',
      techStack: ['Vue.js', 'Bootstrap', 'Express'],
      imageUrl: 'https://via.placeholder.com/250x180',
      link: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Description for Project Three',
      techStack: ['Angular', 'Material UI', 'Django'],
      imageUrl: 'https://via.placeholder.com/250x180',
      link: '#'
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'Description for Project Four',
      techStack: ['Svelte', 'Bulma', 'Flask'],
      imageUrl: 'https://via.placeholder.com/250x180',
      link: '#'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-[25rem] h-[18rem] bg-cover bg-center rounded-lg overflow-hidden cursor-pointer"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="absolute inset-0 bg-orange-900 opacity-0 hover:opacity-70 transition-opacity duration-300 flex flex-col items-center justify-center">
              <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
              <button className="bg-white text-orange-900 px-4 py-2 rounded-lg font-bold">View</button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-orange-900 bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-full overflow-auto relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, index) => (
                  <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={selectedProject.link}
              className="inline-block bg-orange-900 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-800 transition-colors"
            >
              Visit Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
