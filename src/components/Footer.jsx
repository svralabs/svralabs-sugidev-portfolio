import React from 'react';
import { Globe, Mail, ExternalLink, ArrowRight, Code } from 'lucide-react';

const Footer = () => {
  const links = [
    { name: 'Home', path: '#home' },
    { name: 'Services', path: '#services' },
    { name: 'Projects', path: '#projects' },
    { name: 'Explore', path: '#explore' },
  ];

  const projects = [
    { name: 'E-Commerce Platform', path: '#projects' },
    { name: 'Logistics Tracker', path: '#projects' },
    { name: 'SaaS Design System', path: '#projects' },
    { name: 'Travel Booking Vista', path: '#projects' },
  ];

  const socials = [
    { name: 'Website', icon: Globe, url: 'https://svralabs.com' },
    { name: 'Contact', icon: Mail, url: 'mailto:contact@svralabs.com' },
    { name: 'Portfolio', icon: ExternalLink, url: 'https://github.com/svralabs' },
  ];

  return (
    <footer className="bg-[#131313] border-t border-[#353534] text-[#e5e2e1] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#ae3200]"></span>
              <h3 className="text-xl font-bold tracking-wider text-white">SUGIDEV</h3>
            </div>
            <p className="text-sm text-gray-400">
              High-end digital craftsmanship, product engineering & bespoke interfaces.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.path} className="text-gray-300 hover:text-white transition text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Featured Work</h4>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.name}>
                  <a href={project.path} className="text-gray-300 hover:text-white transition text-sm">
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Connect</h4>
            <ul className="space-y-2">
              {socials.map((social) => {
                const IconComponent = social.icon;
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white transition text-sm space-x-2"
                    >
                      <IconComponent className="h-4 w-4 text-[#ae3200]" />
                      <span>{social.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-[#252525] flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Sugidev Portfolio. Engineered with SVRALABS Factory 2.0.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://svralabs-sugidev-portfolio.pages.dev" className="hover:text-gray-300">Live Edge</a>
            <span>•</span>
            <a href="https://github.com/svralabs/svralabs-sugidev-portfolio" className="hover:text-gray-300">Source</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
