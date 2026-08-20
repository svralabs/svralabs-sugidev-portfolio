import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    number: '01',
    title: 'Frontend Development',
    description: 'Building production-grade interfaces with React, Next.js and TypeScript — component-driven, type-safe and maintainable at scale.'
  },
  {
    id: 2,
    number: '02',
    title: 'UI Engineering',
    description: 'Translating designs into pixel-perfect, responsive layouts with clean, semantic and accessible markup that holds up everywhere.'
  },
  {
    id: 3,
    number: '03',
    title: 'Performance',
    description: 'Optimizing load times, rendering and Core Web Vitals so every page feels instant and every interaction stays smooth.'
  },
  {
    id: 4,
    number: '04',
    title: 'Design Systems',
    description: 'Crafting scalable component libraries and design tokens that keep products consistent and teams shipping faster.'
  },
  {
    id: 5,
    number: '05',
    title: 'Motion & Interaction',
    description: 'Adding purposeful animation and micro-interactions with Framer Motion to bring interfaces to life without hurting performance.'
  }
];

const projects = [
  {
    id: 1,
    number: '01',
    client: 'Client',
    year: '2025',
    title: 'Nextlevel Dashboard',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 2,
    number: '02',
    client: 'Client',
    year: '2024',
    title: 'E-commerce Platform',
    tags: ['React', 'Redux', 'GraphQL', 'Stripe']
  },
  {
    id: 3,
    number: '03',
    client: 'Client',
    year: '2023',
    title: 'Mobile App',
    tags: ['React Native', 'Firebase', 'Expo']
  }
];

export default function ServicesProjects() {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <main className="pt-32 pb-section-gap-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="flex justify-center mb-16">
        <button
          className={`px-6 py-2 rounded-full ${activeTab === 'services' ? 'bg-ember text-ink' : 'bg-ink-soft text-mist'}`}
          onClick={() => setActiveTab('services')}
        >
          Services
        </button>
        <button
          className={`px-6 py-2 rounded-full ${activeTab === 'projects' ? 'bg-ember text-ink' : 'bg-ink-soft text-mist'}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
      </div>

      {activeTab === 'services' && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-section-gap-sm md:mb-section-gap-lg"
        >
          <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-ember shadow-[0_0_15px_rgba(255,90,31,0.55)]"></span>
              <span className="font-overline text-overline uppercase text-mist/60">What I do</span>
            </div>
            <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tighter text-mist">SERVICES</h1>
          </div>
          <div className="flex flex-col gap-0 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 border-t border-mist/10">
                <span className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-mist/10 group-hover:text-ember transition-colors duration-500 leading-none">{service.number}</span>
                <div className="flex-1">
                  <h3 className="font-h1 text-h1 uppercase text-mist mb-2 md:mb-4 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                  <p className="font-body-lg text-body-lg text-mist/60 max-w-2xl">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {activeTab === 'projects' && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-section-gap-lg"
        >
          <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-ember shadow-[0_0_15px_rgba(255,90,31,0.55)]"></span>
              <span className="font-overline text-overline uppercase text-mist/60">Selected work</span>
            </div>
            <h2 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tighter">PROJECTS</h2>
          </div>
          <div className="flex flex-col gap-32">
            {projects.map((project) => (
              <div key={project.id} className="sticky top-32 flex flex-col xl:flex-row gap-8 bg-ink-soft rounded-xl p-8 border border-mist/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] origin-top" style={{ transform: 'scale(0.95)' }}>
                <div className="flex flex-col gap-6 xl:w-1/3">
                  <span className="font-display-hero-mobile text-display-hero-mobile text-mist/20 leading-none">{project.number}</span>
                  <div>
                    <span className="font-overline text-overline text-ember uppercase tracking-widest block mb-2">{project.client} · {project.year}</span>
                    <h3 className="font-h1 text-h1 uppercase text-mist">{project.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-4 py-1 rounded-full border border-mist/15 font-caption text-caption uppercase text-mist/80">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}
    </main>
  );
}
