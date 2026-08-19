import { useEffect, useRef } from 'react';
import Logo from '../../assets/logo.svg';

const Hero = () => {
  const headlineRef = useRef(null);

  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    const underline = document.createElement('span');
    underline.className = 'absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300';
    headline.appendChild(underline);

    const handleMouseEnter = () => {
      underline.style.width = '100%';
    };

    const handleMouseLeave = () => {
      underline.style.width = '0';
    };

    headline.addEventListener('mouseenter', handleMouseEnter);
    headline.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      headline.removeEventListener('mouseenter', handleMouseEnter);
      headline.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-orange-800 to-black">
      <div className="absolute top-4 left-4 max-w-[120px]">
        <img src={Logo} alt="SVRALABS Logo" className="w-full h-auto" />
      </div>
      <div className="text-center px-4">
        <h1
          ref={headlineRef}
          className="relative font-playfair text-4xl md:text-6xl font-bold text-white mb-8"
        >
          Elevate Your Digital Presence
        </h1>
        <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-white hover:text-orange-500 transition-colors duration-300 shadow-lg hover:shadow-orange-500/50">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
