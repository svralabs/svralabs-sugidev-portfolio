import {Globe as ArrowUpRight} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-ink px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-36 pb-10" id="contact">
      <div className="max-w-6xl mx-auto">
        <p className="text-mist/40 font-medium uppercase tracking-[0.3em] text-xs sm:text-sm mb-6" data-reveal="" data-y="40">
          (Got a project?)
        </p>
        <a className="group block hero-heading font-black uppercase leading-[0.9] tracking-tight" data-delay="0.1" data-reveal="" data-y="40" href="mailto:hello@sugidev.studio" style={{ fontSize: 'clamp(2.5rem, 11vw, 150px)' }}>
          Let's build<br/>
          <span className="inline-flex items-center gap-3 sm:gap-6">
            something
            <ArrowUpRight className="w-[0.7em] h-[0.7em] text-ember transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
          </span>
        </a>
        <a className="inline-block mt-8 text-mist text-lg sm:text-2xl md:text-3xl font-light lowercase tracking-tight border-b border-mist/30 pb-1 transition-colors hover:border-ember hover:text-ember" data-delay="0.2" data-reveal="" data-y="30" href="mailto:hello@sugidev.studio">
          hello@sugidev.studio
        </a>
      </div>
      <div className="max-w-6xl mx-auto mt-20 sm:mt-28 md:mt-36 pt-8 border-t border-mist/10 flex flex-col sm:flex-row gap-6 sm:gap-4 items-start sm:items-center justify-between">
        <span className="text-mist/40 text-xs sm:text-sm uppercase tracking-widest">
          © {currentYear} sugidev° — Frontend Developer
        </span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a className="text-mist/60 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-ember" href="https://github.com">GitHub</a>
          <a className="text-mist/60 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-ember" href="https://linkedin.com">LinkedIn</a>
          <a className="text-mist/60 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-ember" href="https://twitter.com">X / Globe</a>
          <a className="text-mist/60 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-ember" href="https://codepen.io">CodePen</a>
        </div>
        <a className="text-mist/40 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-mist" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
