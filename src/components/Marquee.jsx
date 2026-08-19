import React from 'react';

const Marquee = () => {
  return (
    <div className="bg-dark-orange overflow-hidden">
      <div className="whitespace-nowrap animate-scroll text-gold opacity-50 hover:opacity-100 hover:underline">
        <span className="text-[1.5rem] md:text-[2.5rem] font-playfair-display mx-4">UI Engineer • Designer • Creator</span>
        <span className="text-[1.5rem] md:text-[2.5rem] font-playfair-display mx-4">UI Engineer • Designer • Creator</span>
      </div>
    </div>
  );
};

export default Marquee;
