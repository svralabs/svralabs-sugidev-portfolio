import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const chevron = document.getElementById('scroll-chevron');
      chevron.classList.add('animate-bounce');
      setTimeout(() => {
        chevron.classList.remove('animate-bounce');
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-900 to-orange-700 text-amber-100">
      <h1 className="text-4xl md:text-6xl font-bold font-playfair text-center px-4">
        SVRALABS
      </h1>
      <div id="scroll-chevron" className="mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
