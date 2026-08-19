import { Link } from 'react-router-dom';
import { Github, Linkedin, Dribbble } from 'lucide-react';

const Footer = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socials = [
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'Dribbble', icon: Dribbble, url: 'https://dribbble.com' },
  ];

  return (
    <footer className="w-full h-80 bg-orange-900 text-white p-8">
      <div className="container mx-auto h-full flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-orange-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Socials</h3>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-300 transition-colors"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-orange-700">
          <p>© {new Date().getFullYear()} Sugidev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
