import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-300">Web Development</a></li>
              <li><a href="#" className="hover:text-orange-300">Mobile Development</a></li>
              <li><a href="#" className="hover:text-orange-300">UI/UX Design</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Projects</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-300">Portfolio</a></li>
              <li><a href="#" className="hover:text-orange-300">E-commerce</a></li>
              <li><a href="#" className="hover:text-orange-300">Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-300">Email</a></li>
              <li><a href="#" className="hover:text-orange-300">Phone</a></li>
              <li><a href="#" className="hover:text-orange-300">Address</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-orange-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-orange-300"><FaGithub size={24} /></a>
            <a href="#" className="hover:text-orange-300"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-orange-300"><FaTwitter size={24} /></a>
          </div>
          <p className="text-sm">&copy; 2024 Sugidev</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
