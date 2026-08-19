import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-900 to-orange-700 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sugidev</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-orange-200">About</a></li>
            <li><a href="#work" className="hover:text-orange-200">Work</a></li>
            <li><a href="#contact" className="hover:text-orange-200">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h2 className="text-6xl md:text-8xl font-bold mb-4">Sugidev</h2>
          <p className="text-xl md:text-2xl mb-8">Luxury Digital Craftsmanship</p>
          <button
            onClick={scrollToNextSection}
            className="bg-white text-orange-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-100 transition-colors duration-300 flex items-center mx-auto"
          >
            Explore Work
            <ChevronDown className="ml-2" size={20} />
          </button>
        </div>
      </main>

      <div ref={nextSectionRef} className="h-16"></div>
    </div>
  );
}
