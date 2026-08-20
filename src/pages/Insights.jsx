import React from 'react';
import PostCard from '../components/PostCard';

const posts = [
  {
    number: '01',
    title: 'Optimizing React Performance',
    description: 'Beyond memoization: Strategies for enterprise-scale architecture.',
    category: 'ENGINEERING',
    readTime: '12',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb34s6W21ni4cEvdwC5zsut4rvo5v5pZCj-MOFb2RqL7jR3weUJpoYImWNy5y0DWpmfKPX4Y8_WLA5iomdD_jYCwigikqqasgl46pXE_CP81FjPa8B8H0a0TE2EL6FFU85zZLpKCQ4KkvozhnJT2oTtq7cu4CNR-MWYubHZWIe0i4CMEoEaziHH-P2iKAlw3PXChK97s-m3yeVO78zAaLGj-WrJoN77HQjG02aMR_WYLLw70tlQBvK',
    imageAlt: 'A macro close-up of a high-tech circuit board with neon ember light trails flowing through digital pathways. The background is a deep charcoal ink-black, creating a high-contrast industrial tech aesthetic. The lighting is moody and directional, highlighting the metallic textures of the capacitors and processors.'
  },
  {
    number: '02',
    title: 'The Future of CSS: Container Queries',
    description: 'A paradigm shift from viewport-driven to context-driven design.',
    category: 'FRONTEND',
    readTime: '08',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSEmV1obuvnPgnNuzpj_NvmNJhN0J12vnTbzdgOGdynCsFGemXns74jsbo0-Es0-VWYZRXxY696S0ukJ2NchDYrV_HXkQqauDIMCQI5MC1MWFY36mTe4qI4D5bZijnO7GNExB5_eMx2LxFNkWEWcTafjl6tBVV7DzX3XVrtAbT5LkwllAP9ZwjbEJYUIt3LA-A5wrTrmrfRWooPSP6ZsEo_ES16OSK09glYLod9z4UNcr3duLjLtk1',
    imageAlt: 'A minimalist abstract 3D render of layered translucent glass panels reflecting vibrant ember orange and deep ink black gradients. The composition uses geometric brutalist-lite structures that create a sense of digital depth and organizational precision. Soft volumetric lighting pierces through the glass layers.'
  },
  {
    number: '03',
    title: 'Rust for JavaScript Developers',
    description: 'Bridging the gap between the web and systems programming.',
    category: 'SYSTEMS',
    readTime: '15',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSEmV1obuvnPgnNuzpj_NvmNJhN0J12vnTbzdgOGdynCsFGemXns74jsbo0-Es0-VWYZRXxY696S0ukJ2NchDYrV_HXkQqauDIMCQI5MC1MWFY36mTe4qI4D5bZijnO7GNExB5_eMx2LxFNkWEWcTafjl6tBVV7DzX3XVrtAbT5LkwllAP9ZwjbEJYUIt3LA-A5wrTrmrfRWooPSP6ZsEo_ES16OSK09glYLod9z4UNcr3duLjLtk1',
    imageAlt: 'A futuristic cyberpunk cityscape with neon ember signage and holographic displays. The architecture features sleek, angular buildings with reflective surfaces that catch the light, creating a high-tech urban environment.'
  }
];

export default function Insights() {
  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop h-20">
          <a className="font-h1 text-h1 text-ember tracking-tighter" href="/">sugidev</a>
          <div className="hidden md:flex items-center space-x-8">
            <a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Work</a>
            <a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Services</a>
            <a className="font-nav-link text-nav-link uppercase text-primary border-b border-primary pb-1" href="#">Insights</a>
            <a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">About</a>
            <a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Contact</a>
          </div>
          <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-nav-link uppercase ember-glow hover:scale-105 active:scale-95 transition-all">
            Hire Me
          </button>
        </div>
      </nav>
      <main className="relative pt-32">
        <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap-sm relative">
          <div className="flex flex-col">
            <span className="font-overline text-overline text-ember mb-4 block">KNOWLEDGE BASE</span>
            <h1 className="kanit-title text-[15vw] md:text-[20vw] uppercase text-on-surface select-none">
              INSIGHTS
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md mt-stack-md border-t border-surface-variant/20 pt-8">
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Deep dives into engineering, architectural patterns, and the future of human-computer interaction. Precision-crafted thoughts for the modern developer.
            </p>
            <div className="flex justify-start md:justify-end items-end">
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 bg-ink-soft border border-surface-variant/10 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                  <span className="font-label-sm text-label-sm text-on-surface">32 ARTICLES</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap-lg">
          <div className="flex flex-col">
            {posts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
