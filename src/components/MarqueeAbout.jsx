import React, { useEffect, useRef } from 'react';
import styles from './MarqueeAbout.module.css';
import { LOGOS, ABOUT_TEXT } from '../config/marqueeText';

const MarqueeAbout = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const row1 = [...LOGOS.slice(0, 11), ...LOGOS.slice(0, 11), ...LOGOS.slice(0, 11)];
    const row2 = [...LOGOS.slice(11), ...LOGOS.slice(11), ...LOGOS.slice(11)];

    if (row1Ref.current) {
      row1Ref.current.innerHTML = row1.map(tile).join('');
    }

    if (row2Ref.current) {
      row2Ref.current.innerHTML = row2.map(tile).join('');
    }
  }, []);

  const tile = (src) => `
    <div class="shrink-0 flex items-center justify-center rounded-2xl border border-mist/10 bg-ink-soft transition-colors hover:border-ember/50 hover:bg-ember/10" style="width:200px;height:120px">
      <img src="${src}" alt="Tech Logo" loading="lazy" class="h-10 w-10 md:h-14 md:w-14 object-contain opacity-70 hover:opacity-100 transition-opacity" />
    </div>
  `;

  return (
    <main className="flex-grow pt-24 relative">
      <div className={styles['glow-bg']}></div>
      <section className="relative z-10 pt-16 sm:pt-24 pb-10 overflow-hidden">
        <div className="flex items-center justify-between gap-4 px-6 md:px-12 mb-10 sm:mb-14">
          <span className="text-mist/50 text-xs sm:text-sm font-medium uppercase tracking-[0.3em]">Tech Stack</span>
          <span className="text-mist/50 text-xs sm:text-sm font-medium uppercase tracking-[0.3em]">Tools & Tech</span>
        </div>
        <div className={`${styles['edge-fade']} flex flex-col gap-3 overflow-hidden`}>
          <div ref={row1Ref} className={`${styles['marquee-row']} ${styles['anim-left']}`}></div>
          <div ref={row2Ref} className={`${styles['marquee-row']} ${styles['anim-right']}`}></div>
        </div>
      </section>
      <section className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-20 overflow-hidden" id="about">
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24 w-full max-w-5xl">
          <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
            <h2 className={`${styles['hero-heading']} font-black uppercase leading-none tracking-tight text-center`}>About me</h2>
            <p className="text-mist font-medium text-center leading-relaxed max-w-3xl" style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)' }}>
              {ABOUT_TEXT}
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 sm:gap-x-24 mt-8">
              <div className="flex flex-col items-center">
                <span className={`${styles['heading-ember']} font-black leading-none`}>3+</span>
                <span className="mt-2 text-mist/60 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">Years with React</span>
              </div>
              <div className="flex flex-col items-center">
                <span className={`${styles['heading-ember']} font-black leading-none`}>80+</span>
                <span className="mt-2 text-mist/60 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">Projects shipped</span>
              </div>
              <div className="flex flex-col items-center">
                <span className={`${styles['heading-ember']} font-black leading-none`}>30+</span>
                <span className="mt-2 text-mist/60 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">Happy clients</span>
              </div>
            </div>
          </div>
          <a className="group inline-flex items-center gap-2 rounded-full text-white font-medium uppercase tracking-[0.2em] px-8 py-4 text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,90,31,0.7)]" href="#contact" style={{ background: 'linear-gradient(135deg, #ff8a4c 0%, #ff5a1f 48%, #c2410c 100%)', boxShadow: '0 8px 30px -8px rgba(255,90,31,0.55), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 0 0 1px rgba(255,255,255,0.12)' }}>
            Contact Me
            <span className="material-symbols-outlined w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">arrow_right</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default MarqueeAbout;
