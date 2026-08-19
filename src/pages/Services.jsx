import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Web Development',
      description: 'Custom web applications tailored to your business needs.'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps for iOS and Android.'
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Improve your online visibility with our SEO services.'
    }
  ];

  return (
    <section className="bg-orange-800 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-orange-700 p-8 rounded-lg hover:scale-105 transition-transform">
              <div className="text-4xl text-orange-300 mb-4">{service.icon}</div>
              <h3 className="text-1.5rem font-bold text-white mb-2">{service.title}</h3>
              <p className="text-orange-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
