import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full bg-gray-900 text-white h-20 flex items-center justify-between px-4 md:px-8 z-50">
        <Link to="/" className="text-2xl font-bold text-orange-600">
          Sugidev
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-orange-600 transition-colors ${
                location.pathname === link.path ? 'underline' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-40 md:hidden flex flex-col items-center justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl py-4 hover:text-orange-600 transition-colors ${
                location.pathname === link.path ? 'underline' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <main className="flex-1 pt-20">{children}</main>
    </div>
  );
};

export default Layout;
