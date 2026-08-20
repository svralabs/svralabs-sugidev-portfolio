import React from 'react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={project.image} alt={project.title} className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
