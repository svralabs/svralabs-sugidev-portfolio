import { useEffect, useRef } from 'react';

const AboutMarquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const updateMarquee = () => {
      const speed = window.innerWidth * 0.05;
      marquee.style.animationDuration = `${speed}ms`;
    };

    updateMarquee();
    window.addEventListener('resize', updateMarquee);

    return () => {
      window.removeEventListener('resize', updateMarquee);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black py-8">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
      >
        <span className="text-3xl md:text-5xl font-playfair text-orange-500 mx-8">
          About Us • About Us • About Us • About Us • About Us • About Us •
        </span>
      </div>
    </div>
  );
};

export default AboutMarquee;
