import React from 'react';
import styles from './Projects.module.css';
import projects from '../../data/projects.json';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.item}>
            <div className={styles.overlay}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
            <img
              src={project.thumbnail}
              alt={project.title}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
