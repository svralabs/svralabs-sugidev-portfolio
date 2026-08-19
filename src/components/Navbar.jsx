import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/site';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#0c0c0c]/80 backdrop-blur-md border-b border-[#201f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-2xl font-black font-kanit tracking-wider text-white flex items-center gap-2">
              <span className="w-3 h-3 bg-[#ff5a1f] inline-block rounded-full animate-pulse"></span>
              sugidev<span className="text-[#ff5a1f]">.</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#ff5a1f] ${
                    active ? 'text-[#ff5a1f] font-semibold' : 'text-[#d7e2ea]/70'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/inquiry"
              className="px-5 py-2.5 rounded-full bg-[#ff5a1f] text-white text-sm font-semibold hover:bg-[#c2410c] transition-all shadow-[0_0_20px_rgba(255,90,31,0.3)] flex items-center gap-1"
            >
              Start Project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[#201f1f] text-[#d7e2ea] hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#131313] border-b border-[#201f1f] px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#d7e2ea] hover:bg-[#201f1f] hover:text-[#ff5a1f]"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/inquiry"
              onClick={() => setIsOpen(false)}
              className="w-full text-center block px-5 py-3 rounded-full bg-[#ff5a1f] text-white font-semibold shadow-lg"
            >
              Start Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
