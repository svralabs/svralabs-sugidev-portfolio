import { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const arrow = arrowRef.current;
    let animationFrameId;

    const animateArrow = () => {
      if (arrow) {
        arrow.style.transform = 'translateY(0)';
        setTimeout(() => {
          arrow.style.transform = 'translateY(10px)';
        }, 1500);
      }
      animationFrameId = requestAnimationFrame(() => {
        setTimeout(animateArrow, 3000);
      });
    };

    animateArrow();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-900 to-orange-700 text-white">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-4">Sugidev</h1>
        <p className="text-1.5rem md:text-1.5rem lg:text-1.5rem xl:text-1.5rem mb-8">Luxury Digital Craftsmanship</p>
        <button
          onClick={scrollToNextSection}
          className="focus:outline-none"
          aria-label="Scroll to next section"
        >
          <ChevronDown
            ref={arrowRef}
            className="w-8 h-8 animate-bounce"
            style={{ transition: 'transform 0.5s ease-in-out' }}
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;
