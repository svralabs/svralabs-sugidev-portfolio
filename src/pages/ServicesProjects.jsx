import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building production-grade interfaces with React, Next.js and TypeScript — component-driven, type-safe and maintainable at scale.'
  },
  {
    number: '02',
    title: 'UI Engineering',
    description: 'Translating designs into pixel-perfect, responsive layouts with clean, semantic and accessible markup that holds up everywhere.'
  },
  {
    number: '03',
    title: 'Performance',
    description: 'Optimizing load times, rendering and Core Web Vitals so every page feels instant and every interaction stays smooth.'
  },
  {
    number: '04',
    title: 'Design Systems',
    description: 'Crafting scalable component libraries and design tokens that keep products consistent and teams shipping faster.'
  },
  {
    number: '05',
    title: 'Motion & Interaction',
    description: 'Adding purposeful animation and micro-interactions with Framer Motion to bring interfaces to life without hurting performance.'
  }
];

const projects = [
  {
    number: '01',
    client: 'Client',
    year: '2025',
    title: 'Nextlevel Dashboard',
    tags: ['React', 'Next.js', 'Tailwind CSS']
  },
  {
    number: '02',
    client: 'Client',
    year: '2024',
    title: 'E-commerce Platform',
    tags: ['React', 'Redux', 'GraphQL']
  },
  {
    number: '03',
    client: 'Client',
    year: '2023',
    title: 'Mobile App',
    tags: ['React Native', 'Firebase', 'Expo']
  }
];

export default function ServicesProjects() {
  const [activeTab, setActiveTab] = useState('services');

  const handleKeyDown = (e, tab) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveTab(tab);
    }
  };

  return (
    <main className="pt-32 pb-section-gap-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-ink-soft rounded-full p-1 border border-mist/15">
          <button
            className={`px-6 py-2 rounded-full font-nav-link text-nav-link uppercase transition-all duration-300 ${
              activeTab === 'services' ? 'text-primary bg-mist/10' : 'text-mist/60 hover:text-ember'
            }`}
            onClick={() => setActiveTab('services')}
            onKeyDown={(e) => handleKeyDown(e, 'services')}
            tabIndex={0}
          >
            Services
          </button>
          <button
            className={`px-6 py-2 rounded-full font-nav-link text-nav-link uppercase transition-all duration-300 ${
              activeTab === 'projects' ? 'text-primary bg-mist/10' : 'text-mist/60 hover:text-ember'
            }`}
            onClick={() => setActiveTab('projects')}
            onKeyDown={(e) => handleKeyDown(e, 'projects')}
            tabIndex={0}
          >
            Projects
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'services' && (
          <motion.section
            key="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
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
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </motion.section>
        )}

        {activeTab === 'projects' && (
          <motion.section
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-section-gap-lg"
          >
            <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-ember shadow-[0_0_15px_rgba(255,90,31,0.55)]"></span>
                <span className="font-overline text-overline uppercase text-mist/60">Selected work</span>
              </div>
              <h2 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tighter text-mist">PROJECTS</h2>
            </div>
            <div className="flex flex-col gap-32">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="sticky top-32 flex flex-col xl:flex-row gap-8 bg-ink-soft rounded-xl p-8 border border-mist/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] origin-top"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col gap-6 xl:w-1/3">
                    <span className="font-display-hero-mobile text-display-hero-mobile text-mist/20 leading-none">{project.number}</span>
                    <div>
                      <span className="font-overline text-overline text-ember uppercase tracking-widest block mb-2">{project.client} · {project.year}</span>
                      <h3 className="font-h1 text-h1 uppercase text-mist">{project.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-4 py-1 rounded-full border border-mist/15 font-caption text-caption uppercase text-mist/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
