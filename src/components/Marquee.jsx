import React from 'react';

const Marquee = () => {
  return (
    <div className="overflow-hidden bg-orange-800 py-2">
      <div className="whitespace-nowrap animate-marquee hover:animate-pause">
        <span className="text-amber-50 text-2xl font-serif mx-4">
          Sugidev — Creative Developer — Portfolio
        </span>
        <span className="text-amber-50 text-2xl font-serif mx-4">
          Sugidev — Creative Developer — Portfolio
        </span>
      </div>
    </div>
  );
};

export default Marquee;
