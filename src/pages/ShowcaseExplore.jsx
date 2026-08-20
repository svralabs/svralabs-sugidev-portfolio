import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Nextlevel Dashboard',
    description: 'A comprehensive analytics platform for modern businesses',
    tags: ['React', 'TypeScript', 'Dashboard'],
    year: '2025',
    views: '1.2k',
    image: '/images/project1.jpg',
    link: '/projects/nextlevel-dashboard'
  },
  {
    id: 2,
    title: 'EcoMarket',
    description: 'Sustainable e-commerce platform for eco-conscious shoppers',
    tags: ['React', 'Next.js', 'E-commerce'],
    year: '2024',
    views: '850',
    image: '/images/project2.jpg',
    link: '/projects/eco-market'
  },
  {
    id: 3,
    title: 'HealthTrack',
    description: 'Personal health and wellness tracking application',
    tags: ['React Native', 'Health', 'Mobile'],
    year: '2023',
    views: '1.5k',
    image: '/images/project3.jpg',
    link: '/projects/health-track'
  },
  {
    id: 4,
    title: 'FinanceFlow',
    description: 'Modern financial management and budgeting tool',
    tags: ['React', 'Finance', 'Dashboard'],
    year: '2024',
    views: '980',
    image: '/images/project4.jpg',
    link: '/projects/finance-flow'
  },
  {
    id: 5,
    title: 'ArtGallery',
    description: 'Virtual art gallery showcasing contemporary artists',
    tags: ['React', 'Art', 'Gallery'],
    year: '2023',
    views: '1.1k',
    image: '/images/project5.jpg',
    link: '/projects/art-gallery'
  }
];

export default function ShowcaseExplore() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('mouseup', handleMouseUp);
    scrollContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      scrollContainer.removeEventListener('mousedown', handleMouseDown);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('mouseup', handleMouseUp);
      scrollContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden" id="showcase">
      {/* HeaderNav and MobileMenu components would go here */}
      <main className="relative z-10 flex-1 flex justify-between items-start px-10 md:px-16 pb-24 md:pb-32">
        {/* Left content (Hero Heading & CTA) */}
        <div className="mt-16 sm:mt-20 md:mt-24 max-w-sm">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-mist/50">
            <span>01</span>
            <span className="h-px w-12 bg-mist/25"></span>
            <span>Intro</span>
          </div>
          <h1 className="mt-5 text-[3rem] md:text-[4.5rem] font-black tracking-tight leading-[0.95] uppercase text-mist">
            Built <span className="text-ember">for</span> the web
          </h1>
          <p className="mt-5 max-w-xs text-sm md:text-[15px] text-mist/60 leading-relaxed">
            Browse interfaces engineered for speed, accessibility and detail — built to be remembered.
          </p>
          <div className="mt-8">
            <Link
              to="#collection"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-md border border-ember/60 bg-ink-soft px-6 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(255,90,31,0.5)] active:translate-y-0 active:shadow-none"
            >
              <span className="absolute inset-0 -translate-x-[101%] bg-ember transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0"></span>
              <span className="relative z-10 w-[18px] h-[18px] text-mist transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 group-hover:-translate-y-1 group-hover:text-ink material-symbols-outlined">
                sparkles
              </span>
              <span className="relative z-10 text-[15px] font-medium text-mist transition-colors duration-300 group-hover:text-ink">
                View Work
              </span>
            </Link>
          </div>
        </div>
        {/* Right content (Stats & Featured Project) */}
        <aside className="hidden md:flex flex-col gap-8 w-[200px] mt-16 md:mt-24">
          <div>
            <p className="text-[10px] font-bold tracking-widest uppercase text-mist">Featured Project</p>
            <p className="mt-2 text-[12px] text-mist/60 leading-[1.6]">Nextlevel Dashboard<br/>Client · 2025</p>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-mist/50">Projects</p>
              <p className="text-[13px] font-medium text-mist">80+</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-mist/50">Experience</p>
              <p className="text-[13px] font-medium text-mist">3 yrs</p>
            </div>
          </div>
          <Link to="#collection" className="group flex items-center gap-3">
            <span className="flex w-10 h-10 items-center justify-center rounded-full border border-mist/40 transition-colors group-hover:border-ember group-hover:bg-ember">
              <span className="w-4 h-4 text-mist transition-colors group-hover:text-ink material-symbols-outlined">
                add
              </span>
            </span>
            <span className="text-[10px] tracking-widest uppercase font-bold text-mist">View Details</span>
          </Link>
        </aside>
      </main>

      <section className="relative w-full min-h-[75vh] md:min-h-screen bg-paper text-paper-ink flex flex-col items-center pt-24 md:pt-32 pb-0 z-20 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]" id="explore">
        <div className="w-full flex flex-col items-center max-w-7xl mx-auto">
          <p className="text-[10px] md:text-[11px] tracking-[0.2em] mb-12">
            <span className="text-paper-ink/50">[ 02 ]</span> <span className="text-paper-ink font-bold uppercase">What I Do</span>
          </p>
          <h2 className="px-6 text-center text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[1.1] font-medium tracking-tight text-paper-ink max-w-[1000px]">
            Turning bold ideas into fast, accessible web<br className="hidden md:block"/> interfaces that refuse to blend in.
          </h2>

          <div className="w-full overflow-x-auto scrollbar-hide mt-12" ref={scrollContainerRef}>
            <div className="flex gap-6 px-6 pb-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          <div className="min-h-[60px] md:min-h-[120px]"></div>
        </div>

        <footer className="hidden md:flex absolute bottom-0 inset-x-0 justify-between px-8 md:px-16 pb-8 md:pb-12 pointer-events-none text-[10px] tracking-widest uppercase text-paper-ink/50 font-medium">
          <span>We don't just write code.</span>
          <span>Sugidev © 2026</span>
        </footer>
      </section>
    </section>
  );
}
