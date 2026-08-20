import React from 'react';

const Marquee = ({ logos, direction }) => {
  return (
    <div className="edge-fade flex flex-col gap-3 overflow-hidden">
      <div className={`marquee-row ${direction === 'left' ? 'anim-left' : 'anim-right'}`}>
        {logos.map((logo, index) => (
          <div key={index} className="shrink-0 flex items-center justify-center rounded-2xl border border-mist/10 bg-ink-soft transition-colors hover:border-ember/50 hover:bg-ember/10" style={{ width: '200px', height: '120px' }}>
            <img src={logo} alt="Tech Logo" loading="lazy" className="h-10 w-10 md:h-14 md:w-14 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
