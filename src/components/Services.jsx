import { Figma, Code, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    { name: 'Design', icon: <Figma size={24} /> },
    { name: 'Development', icon: <Code size={24} /> },
    { name: 'Consulting', icon: <MessageSquare size={24} /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-orange-900">
      {services.map((service, index) => (
        <div
          key={index}
          className="p-6 border-2 border-yellow-500 rounded-lg text-slate-200 hover:scale-105 hover:shadow-[0_0_20px_gold] transition-transform duration-300"
        >
          <div className="text-yellow-500 mb-4">{service.icon}</div>
          <h3 className="text-2xl font-playfair">{service.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Services;
