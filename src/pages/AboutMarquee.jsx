import Marquee from '../components/Marquee';

const brand = (slug, color) => `https://cdn.simpleicons.org/${slug}${color ? '/' + color : '/d7e2ea'}`;

const LOGOS = [
  brand('react'), brand('typescript'), brand('javascript'), brand('nextdotjs', 'ffffff'),
  brand('tailwindcss'), brand('vuedotjs'), brand('nodedotjs'), brand('graphql'), brand('redux'),
  brand('vite'), brand('sass'), brand('html5'), brand('css3'), brand('figma'), brand('git'),
  brand('storybook'), brand('jest'), brand('framer'), brand('vercel', 'ffffff'), brand('webpack'),
  brand('reactrouter'),
];

const tile = (src) => (
  <div
    key={src}
    className="shrink-0 flex items-center justify-center rounded-2xl border border-mist/10 bg-ink-soft transition-colors hover:border-ember/50 hover:bg-ember/10"
    style={{ width: '200px', height: '120px' }}
  >
    <img
      src={src}
      alt="Tech Logo"
      loading="lazy"
      className="h-10 w-10 md:h-14 md:w-14 object-contain opacity-70 hover:opacity-100 transition-opacity"
    />
  </div>
);

const row1 = [...LOGOS.slice(0, 11), ...LOGOS.slice(0, 11), ...LOGOS.slice(0, 11)];
const row2 = [...LOGOS.slice(11), ...LOGOS.slice(11), ...LOGOS.slice(11)];

export default function AboutMarquee() {
  return (
    <section className="relative z-10 pt-16 sm:pt-24 pb-10 overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-6 md:px-12 mb-10 sm:mb-14">
        <span className="text-mist/50 text-xs sm:text-sm font-medium uppercase tracking-[0.3em]">Tech Stack</span>
        <span className="text-mist/50 text-xs sm:text-sm font-medium uppercase tracking-[0.3em]">Tools & Tech</span>
      </div>
      <Marquee direction="left">
        {row1.map(tile)}
      </Marquee>
      <Marquee direction="right" className="mt-3">
        {row2.map(tile)}
      </Marquee>
    </section>
  );
}
