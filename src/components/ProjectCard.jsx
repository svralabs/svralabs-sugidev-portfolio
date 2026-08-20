import React from 'react';

export default function ProjectCard({ number, client, year, title, tags, imageUrl }) {
  return (
    <div className="sticky top-32 flex flex-col xl:flex-row gap-8 bg-ink-soft rounded-xl p-8 border border-mist/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] origin-top" style={{ transform: 'scale(0.95)' }}>
      <div className="flex flex-col gap-6 xl:w-1/3">
        <span className="font-display-hero-mobile text-display-hero-mobile text-mist/20 leading-none">{number}</span>
        <div>
          <span className="font-overline text-overline text-ember uppercase tracking-widest block mb-2">{client} · {year}</span>
          <h3 className="font-h1 text-h1 uppercase text-mist">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-4 py-1 rounded-full border border-mist/15 font-caption text-caption uppercase text-mist/80">
              {tag}
            </span>
          ))}
        </div>
      </div>
      {imageUrl && (
        <div className="xl:w-2/3 rounded-lg overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}
