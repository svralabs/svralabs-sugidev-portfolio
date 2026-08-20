import { useRef, useEffect } from 'react';

export default function Marquee({ children, direction = 'left', speed = 40 }) {
  const marqueeRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const content = contentRef.current;

    if (!marquee || !content) return;

    const updateMarquee = () => {
      if (isPausedRef.current) return;

      const marqueeWidth = marquee.offsetWidth;
      const contentWidth = content.scrollWidth;

      positionRef.current += direction === 'left' ? -speed / 60 : speed / 60;

      if (direction === 'left' && positionRef.current <= -contentWidth) {
        positionRef.current = 0;
      } else if (direction === 'right' && positionRef.current >= marqueeWidth) {
        positionRef.current = -contentWidth;
      }

      content.style.transform = `translateX(${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(updateMarquee);
    };

    const handleMouseEnter = () => {
      isPausedRef.current = true;
    };

    const handleMouseLeave = () => {
      isPausedRef.current = false;
      animationRef.current = requestAnimationFrame(updateMarquee);
    };

    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);

    animationRef.current = requestAnimationFrame(updateMarquee);

    return () => {
      cancelAnimationFrame(animationRef.current);
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction, speed]);

  return (
    <div
      ref={marqueeRef}
      className="edge-fade flex flex-col gap-3 overflow-hidden"
    >
      <div
        ref={contentRef}
        className="flex items-center gap-4 whitespace-nowrap"
      >
        {children}
        {children}
      </div>
    </div>
  );
}
