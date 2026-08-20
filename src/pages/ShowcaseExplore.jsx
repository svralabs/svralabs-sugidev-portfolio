import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from './ShowcaseExplore.module.css';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced filtering and checkout.',
    image: '/images/project1.jpg',
    tags: ['React', 'TypeScript', 'Redux']
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Comprehensive analytics dashboard for business metrics.',
    image: '/images/project2.jpg',
    tags: ['React', 'D3.js', 'Node.js']
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing creative projects.',
    image: '/images/project3.jpg',
    tags: ['React', 'CSS Modules', 'Framer Motion']
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'Productivity app with Kanban board and time tracking.',
    image: '/images/project4.jpg',
    tags: ['React', 'Firebase', 'Material-UI']
  },
  {
    id: 5,
    title: 'Social Media Platform',
    description: 'Interactive social network with real-time updates.',
    image: '/images/project5.jpg',
    tags: ['React', 'GraphQL', 'Apollo']
  },
  {
    id: 6,
    title: 'Learning Management System',
    description: 'Educational platform with course management and analytics.',
    image: '/images/project6.jpg',
    tags: ['React', 'Next.js', 'MongoDB']
  }
];

export default function ShowcaseExplore() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
