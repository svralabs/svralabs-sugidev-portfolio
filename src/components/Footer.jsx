import { Link } from 'react-router-dom';
import { Globe, Mail, ExternalLink, ArrowRight } from 'lucide-react';

const Footer = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const projects = [
    { name: 'Project 1', path: '/projects/1' },
    { name: 'Project 2', path: '/projects/2' },
    { name: 'Project 3', path: '/projects/3' },
    { name: 'Project 4', path: '/projects/4' },
    { name: 'Project 5', path: '/projects/5' },
    { name: 'Project 6', path: '/projects/6' },
  ];

  const socials = [
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-orange-900 text-yellow-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-playfair">Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-yellow-300 font-inter text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 font-playfair">Projects</h3>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.name}>
                  <Link to={project.path} className="hover:text-yellow-300 font-inter text-sm">
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 font-playfair">Socials</h3>
            <ul className="space-y-2">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-yellow-300 font-inter text-sm"
                  >
                    <social.icon className="mr-2 h-4 w-4" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 font-playfair">Copyright</h3>
            <p className="font-inter text-sm">© 2023 Sugidev</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
