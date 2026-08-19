import React from 'react';

const AboutMarquee = () => {
  const skills = 'UI/UX • Branding • Web Dev • Motion';

  return (
    <div className="w-full h-20 md:h-24 bg-orange-800 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-white text-xl md:text-2xl mx-8">
          {skills.repeat(4)}
        </span>
      </div>
    </div>
  );
};

export default AboutMarquee;
