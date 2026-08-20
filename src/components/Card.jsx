import React from 'react';

export default function Card({ number, title, description, category, readTime, imageUrl, imageAlt }) {
  return (
    <a className="chapter-item group relative py-12 border-b border-surface-variant/20 flex items-center justify-between transition-all duration-500 hover:px-8" href="#">
      <div className="flex items-baseline space-x-12 z-10">
        <span className="font-display-hero-mobile text-display-hero-mobile text-ember/20 group-hover:text-ember transition-colors duration-500">{number}</span>
        <div className="flex flex-col">
          <h2 className="font-h1 text-h1 md:text-5xl group-hover:text-ember transition-colors duration-500">{title}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">{description}</p>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-end z-10">
        <span className="font-label-sm text-label-sm text-on-surface-variant">{category}</span>
        <span className="font-caption text-caption text-secondary/40 mt-1 uppercase">{readTime} MIN READ</span>
      </div>
      <div className="hover-image pointer-events-none opacity-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-52 overflow-hidden rounded-lg transition-all duration-500 scale-75 z-20">
        <img className="w-full h-full object-cover" src={imageUrl} alt={imageAlt} />
      </div>
    </a>
  );
}
