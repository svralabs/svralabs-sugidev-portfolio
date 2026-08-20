import React from 'react';
import ProjectCard from '../components/ProjectCard';

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
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/images/project1.jpg'
  },
  {
    number: '02',
    client: 'Client',
    year: '2024',
    title: 'E-commerce Platform',
    tags: ['React', 'Redux', 'GraphQL', 'Stripe'],
    imageUrl: '/images/project2.jpg'
  },
  {
    number: '03',
    client: 'Client',
    year: '2023',
    title: 'Mobile App',
    tags: ['React Native', 'Firebase', 'Expo'],
    imageUrl: '/images/project3.jpg'
  }
];

export default function ServicesProjects() {
  return (
    <main className="pt-32 pb-section-gap-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Services Section */}
      <section className="mb-section-gap-sm md:mb-section-gap-lg">
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-ember shadow-[0_0_15px_rgba(255,90,31,0.55)]"></span>
            <span className="font-overline text-overline uppercase text-mist/60">What I do</span>
          </div>
          <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tighter text-mist">SERVICES</h1>
        </div>
        <div className="flex flex-col gap-0 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className={`group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 border-t border-mist/10 ${index === services.length - 1 ? 'border-b' : ''}`}>
              <span className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-mist/10 group-hover:text-ember transition-colors duration-500 leading-none">{service.number}</span>
              <div className="flex-1">
                <h3 className="font-h1 text-h1 uppercase text-mist mb-2 md:mb-4 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                <p className="font-body-lg text-body-lg text-mist/60 max-w-2xl">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-section-gap-lg">
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-ember shadow-[0_0_15px_rgba(255,90,31,0.55)]"></span>
            <span className="font-overline text-overline uppercase text-mist/60">Selected work</span>
          </div>
          <h2 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tighter">PROJECTS</h2>
        </div>
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              number={project.number}
              client={project.client}
              year={project.year}
              title={project.title}
              tags={project.tags}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
