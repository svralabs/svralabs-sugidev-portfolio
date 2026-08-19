import { useRef, useEffect } from 'react';

const AboutMarquee = () => {
  const marqueeRef = useRef(null);
  const text = 'About Sugidev • Luxury Digital Craftsmanship • ';

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationId;

    const animate = () => {
      if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
        marquee.scrollLeft = 0;
      } else {
        marquee.scrollLeft += 1;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleMouseEnter = () => {
    const marquee = marqueeRef.current;
    marquee.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    const marquee = marqueeRef.current;
    marquee.style.animationPlayState = 'running';
  };

  return (
    <div
      ref={marqueeRef}
      className="overflow-hidden whitespace-nowrap bg-orange-900 text-white py-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="inline-block animate-marquee">
        <span className="mx-4 text-xl font-bold">{text.repeat(2)}</span>
      </div>
    </div>
  );
};

export default AboutMarquee;
