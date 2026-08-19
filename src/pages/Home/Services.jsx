import { useState } from 'react';

const Services = () => {
  const [services] = useState([
    {
      title: 'Web Development',
      description: 'Build responsive, modern websites with React and Tailwind CSS.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
    {
      title: 'Mobile Development',
      description: 'Create cross-platform mobile apps with React Native.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      description: 'Design intuitive and visually appealing user interfaces.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 3H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></path>
          <path d="M20 21v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2z"></path>
        </svg>
      ),
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-80 h-60 border-2 border-orange-800 rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(200,90,0,0.5)]"
          >
            <div className="text-orange-600 mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-center mb-2">{service.title}</h3>
            <p className="text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
