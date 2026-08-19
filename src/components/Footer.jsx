import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#131313] text-[#d7e2ea] border-t border-[#201f1f] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-3xl font-black font-kanit tracking-wider text-white">
              sugidev<span className="text-[#ff5a1f]">.</span>
            </h3>
            <p className="text-sm text-[#d7e2ea]/70 max-w-sm">
              Engineering high-performance web applications, immersive design systems, and robust developer platforms for forward-thinking brands.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/svralabs" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#201f1f] flex items-center justify-center hover:bg-[#ff5a1f] hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#201f1f] flex items-center justify-center hover:bg-[#ff5a1f] hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#201f1f] flex items-center justify-center hover:bg-[#ff5a1f] hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@svralabs.com" className="w-10 h-10 rounded-full bg-[#201f1f] flex items-center justify-center hover:bg-[#ff5a1f] hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-kanit font-semibold text-white uppercase tracking-wider text-sm mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#d7e2ea]/70">
              <li><Link to="/" className="hover:text-[#ff5a1f] transition-colors">Home Landing</Link></li>
              <li><Link to="/services" className="hover:text-[#ff5a1f] transition-colors">Services & Projects</Link></li>
              <li><Link to="/showcase" className="hover:text-[#ff5a1f] transition-colors">Showcase & Explore</Link></li>
              <li><Link to="/insights" className="hover:text-[#ff5a1f] transition-colors">Insights & Articles</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-kanit font-semibold text-white uppercase tracking-wider text-sm mb-4">System & UI</h4>
            <ul className="space-y-2 text-sm text-[#d7e2ea]/70">
              <li><Link to="/dashboard" className="hover:text-[#ff5a1f] transition-colors">DevOS Dashboard</Link></li>
              <li><Link to="/components" className="hover:text-[#ff5a1f] transition-colors">Component Reference</Link></li>
              <li><Link to="/inquiry" className="hover:text-[#ff5a1f] transition-colors">Project Inquiry</Link></li>
              <li><Link to="/contact" className="hover:text-[#ff5a1f] transition-colors">Direct Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#201f1f] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#d7e2ea]/50">
          <p>© {new Date().getFullYear()} sugidev / SVRALABS. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <span className="hover:text-[#ff5a1f] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#ff5a1f] cursor-pointer">Terms of Service</span>
            <span className="text-[#ff5a1f]">svralabs.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
