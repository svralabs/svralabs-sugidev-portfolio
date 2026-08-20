import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesProjects.module.css';
import ProjectCard from '../components/ProjectCard';

const services = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Building production-grade interfaces with React, Next.js and TypeScript — component-driven, type-safe and maintainable at scale.'
  },
  {
    id: 2,
    title: 'UI Engineering',
    description: 'Translating designs into pixel-perfect, responsive layouts with clean, semantic and accessible markup that holds up everywhere.'
  },
  {
    id: 3,
    title: 'Performance',
    description: 'Optimizing load times, rendering and Core Web Vitals so every page feels instant and every interaction stays smooth.'
  },
  {
    id: 4,
    title: 'Design Systems',
    description: 'Crafting scalable component libraries and design tokens that keep products consistent and teams shipping faster.'
  },
  {
    id: 5,
    title: 'Motion & Interaction',
    description: 'Adding purposeful animation and micro-interactions with Framer Motion to bring interfaces to life without hurting performance.'
  }
];

const projects = [
  {
    id: 1,
    client: 'Client',
    year: '2025',
    title: 'Nextlevel Dashboard',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    description: 'A comprehensive dashboard application built with React and Next.js, featuring real-time data visualization and customizable widgets.'
  },
  {
    id: 2,
    client: 'Client',
    year: '2024',
    title: 'EcoMarket',
    tags: ['Vue.js', 'Nuxt.js', 'GraphQL', 'Apollo'],
    description: 'An e-commerce platform focused on sustainability, built with Vue.js and Nuxt.js, featuring a custom GraphQL API and Apollo Client.'
  },
  {
    id: 3,
    client: 'Client',
    year: '2023',
    title: 'FitTrack',
    tags: ['Angular', 'NestJS', 'MongoDB', 'RxJS'],
    description: 'A fitness tracking application built with Angular and NestJS, featuring real-time workout tracking and progress visualization.'
  }
];

const ServicesProjects = () => {
  return (
    <main className={styles.servicesProjects}>
      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesHeader}>
          <div className={styles.servicesHeaderIndicator}>
            <span className={styles.servicesHeaderIndicatorDot}></span>
            <span className="font-overline text-overline uppercase text-mist/60">What I do</span>
          </div>
          <h1 className={styles.servicesHeaderTitle}>SERVICES</h1>
        </div>
        <div className={styles.servicesList}>
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={styles.serviceItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className={styles.serviceItemNumber}>{service.id.toString().padStart(2, '0')}</span>
              <div className={styles.serviceItemContent}>
                <h3 className={styles.serviceItemTitle}>{service.title}</h3>
                <p className={styles.serviceItemDescription}>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsHeader}>
          <div className={styles.projectsHeaderIndicator}>
            <span className={styles.projectsHeaderIndicatorDot}></span>
            <span className="font-overline text-overline uppercase text-mist/60">Selected work</span>
          </div>
          <h2 className={styles.projectsHeaderTitle}>PROJECTS</h2>
        </div>
        <div className={styles.projectsList}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                number={project.id.toString().padStart(2, '0')}
                client={project.client}
                year={project.year}
                title={project.title}
                tags={project.tags}
                description={project.description}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesProjects;
