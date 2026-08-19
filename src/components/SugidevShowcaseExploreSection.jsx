import React from 'react';

export default function SugidevShowcaseExploreSection() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- BEGIN: ShowcaseSection -->
<section class="relative w-full min-h-screen flex flex-col overflow-hidden" id="showcase">
<!-- BEGIN: HeaderNav -->
<header class="relative z-20 pt-6 px-6 md:px-16">
<!-- Wordmark Container -->
<div aria-label="sugidev" class="text-mega font-black lowercase tracking-tight w-full flex items-end justify-center" data-wordmark=""></div>
<!-- Sub-navigation -->
<nav class="flex justify-between items-start mt-8 text-[10px] md:text-[11px] tracking-[0.2em] uppercase">
<!-- Left tags -->
<div class="w-[15%] text-mist leading-relaxed" data-reveal="" data-y="20">
<p>React</p>
<p>TypeScript</p>
<p>Web</p>
</div>
<!-- Decorative arrow -->
<div class="hidden md:flex w-[5%] justify-center pt-1" data-reveal="" data-y="20">
<i class="w-3.5 h-3.5 text-mist/40" data-lucide="arrow-right"></i>
</div>
<!-- Intro blurb -->
<p class="flex-1 md:flex-none md:w-[30%] text-mist/70 leading-relaxed" data-reveal="" data-y="20">
            Building fast, accessible and delightful web interfaces with React, TypeScript and a love for detail.
          </p>
<!-- Decorative arrow -->
<div class="hidden md:flex w-[5%] justify-center pt-1" data-reveal="" data-y="20">
<i class="w-3.5 h-3.5 text-mist/40" data-lucide="arrow-right"></i>
</div>
<!-- Desktop links -->
<ul class="hidden md:block w-[15%] text-mist space-y-1" data-reveal="" data-y="20">
<li><a class="transition-colors hover:text-ember" href="#projects">Work</a></li>
<li><a class="transition-colors hover:text-ember" href="#services">Services</a></li>
<li><a class="transition-colors hover:text-ember" href="#about">About</a></li>
<li><a class="transition-colors hover:text-ember" href="#contact">Contact</a></li>
</ul>
<!-- Mobile burger toggle -->
<button aria-label="Toggle menu" class="group relative z-[60] md:hidden flex flex-col gap-[6px] pt-1" data-burger="" type="button">
<span class="h-[1.5px] bg-mist transition-all duration-300 w-8 group-hover:w-6" data-bar="1"></span>
<span class="h-[1.5px] bg-mist transition-all duration-300 w-8 group-hover:w-10" data-bar="2"></span>
</button>
</nav>
</header>
<!-- END: HeaderNav -->
<!-- BEGIN: MobileMenu -->
<div class="hidden relative z-30 bg-ink border-b border-mist/10 shadow-xl px-6 py-8" data-menu="">
<ul class="space-y-6 text-sm tracking-[0.2em] uppercase text-mist">
<li><a class="hover:text-ember" href="#projects">Work</a></li>
<li><a class="hover:text-ember" href="#services">Services</a></li>
<li><a class="hover:text-ember" href="#about">About</a></li>
<li><a class="hover:text-ember" href="#contact">Contact</a></li>
</ul>
</div>
<!-- END: MobileMenu -->
<!-- BEGIN: ShowcaseBody -->
<main class="relative z-10 flex-1 flex justify-between items-start px-10 md:px-16 pb-24 md:pb-32">
<!-- Left content (Hero Heading & CTA) -->
<div class="mt-16 sm:mt-20 md:mt-24 max-w-sm">
<div class="flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-mist/50" data-reveal="" data-y="20">
<span>01</span>
<span class="h-px w-12 bg-mist/25"></span>
<span>Intro</span>
</div>
<h1 class="mt-5 text-[3rem] md:text-[4.5rem] font-black tracking-tight leading-[0.95] uppercase text-mist" data-reveal="" data-y="20">
            Built <span class="text-ember">for</span> the web
          </h1>
<p class="mt-5 max-w-xs text-sm md:text-[15px] text-mist/60 leading-relaxed" data-reveal="" data-y="20">
            Browse interfaces engineered for speed, accessibility and detail — built to be remembered.
          </p>
<div class="mt-8" data-reveal="" data-y="20">
<a class="group relative inline-flex items-center gap-3 overflow-hidden rounded-md border border-ember/60 bg-ink-soft px-6 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(255,90,31,0.5)] active:translate-y-0 active:shadow-none" href="#collection">
<span class="absolute inset-0 -translate-x-[101%] bg-ember transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0"></span>
<i class="relative z-10 w-[18px] h-[18px] text-mist transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 group-hover:-translate-y-1 group-hover:text-ink" data-lucide="sparkles"></i>
<span class="relative z-10 text-[15px] font-medium text-mist transition-colors duration-300 group-hover:text-ink">View Work</span>
</a>
</div>
</div>
<!-- Right content (Stats & Featured Project) -->
<aside class="hidden md:flex flex-col gap-8 w-[200px] mt-16 md:mt-24" data-delay="0.2" data-reveal="" data-y="20">
<div>
<p class="text-[10px] font-bold tracking-widest uppercase text-mist">Featured Project</p>
<p class="mt-2 text-[12px] text-mist/60 leading-[1.6]">Nextlevel Dashboard<br/>Client · 2025</p>
</div>
<div class="flex flex-col gap-4">
<div>
<p class="text-[10px] tracking-widest uppercase text-mist/50">Projects</p>
<p class="text-[13px] font-medium text-mist">80+</p>
</div>
<div>
<p class="text-[10px] tracking-widest uppercase text-mist/50">Experience</p>
<p class="text-[13px] font-medium text-mist">3 yrs</p>
</div>
</div>
<a class="group flex items-center gap-3" href="#collection">
<span class="flex w-10 h-10 items-center justify-center rounded-full border border-mist/40 transition-colors group-hover:border-ember group-hover:bg-ember">
<i class="w-4 h-4 text-mist transition-colors group-hover:text-ink" data-lucide="plus"></i>
</span>
<span class="text-[10px] tracking-widest uppercase font-bold text-mist">View Details</span>
</a>
</aside>
</main>
<!-- END: ShowcaseBody -->
</section>
<!-- END: ShowcaseSection -->
<!-- BEGIN: ExploreSection -->
<section class="relative w-full min-h-[75vh] md:min-h-screen bg-paper text-paper-ink flex flex-col items-center pt-24 md:pt-32 pb-0 z-20 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]" id="explore">
<div class="w-full flex flex-col items-center max-w-7xl mx-auto">
<p class="text-[10px] md:text-[11px] tracking-[0.2em] mb-12" data-reveal="" data-y="20">
<span class="text-paper-ink/50">[ 02 ]</span> <span class="text-paper-ink font-bold uppercase">What I Do</span>
</p>
<h2 class="px-6 text-center text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[1.1] font-medium tracking-tight text-paper-ink max-w-[1000px]" data-reveal="" data-y="40">
          Turning bold ideas into fast, accessible web<br class="hidden md:block"/> interfaces that refuse to blend in.
        </h2>
<!-- Interactive Pills Container -->
<div class="flex flex-wrap justify-center gap-3 md:gap-4 mt-12 mb-10 md:mb-24 px-6" data-pills=""></div>
<div class="min-h-[60px] md:min-h-[120px]"></div>
</div>
<!-- Bottom Footer Info (Desktop) -->
<footer class="hidden md:flex absolute bottom-0 inset-x-0 justify-between px-8 md:px-16 pb-8 md:pb-12 pointer-events-none text-[10px] tracking-widest uppercase text-paper-ink/50 font-medium">
<span>We don't just write code.</span>
<span>Sugidev © 2026</span>
</footer>
</section>
<!-- END: ExploreSection -->
<!-- External Libraries -->
<script data-purpose="icons" src="https://unpkg.com/lucide@latest"></script>
<script data-purpose="animation-lib" src="https://cdn.jsdelivr.net/npm/motion@11/dist/motion.js"></script>
<!-- Application Logic -->
<script data-purpose="app-logic">
      const { animate, inView, stagger } = window.Motion

      // 1. Generate Wordmark letters with non-clipping mask boxes
      const WORD = 'sugidev'
      const wordmarkContainer = document.querySelector('[data-wordmark]')
      if (wordmarkContainer) {
        wordmarkContainer.innerHTML = [...WORD]
          .map((ch) => \`<span class="inline-flex overflow-hidden pt-[0.12em] pb-[0.18em] -mt-[0.12em] -mb-[0.18em]"><span data-letter class="hero-heading inline-block leading-[0.9]">${ch}</span></span>\`)
          .join('')
      }

      // 2. Generate Explore pills dynamically
      const PILLS = [
        { icon: 'code', label: 'React' }, 
        { icon: 'braces', label: 'TypeScript' },
        { icon: 'layout-dashboard', label: 'UI Engineering' }, 
        { icon: 'zap', label: 'Performance' },
        { icon: 'sparkles', label: 'Motion' },
      ]
      const pillsContainer = document.querySelector('[data-pills]')
      if (pillsContainer) {
        pillsContainer.innerHTML = PILLS.map((p) => \`
          <button type="button" data-reveal data-y="16" class="group flex items-center gap-2 rounded-full border border-paper-ink/25 bg-white/50 backdrop-blur-sm px-5 py-2.5 text-[11px] font-medium uppercase tracking-wider text-paper-ink/80 transition-colors hover:border-paper-ink hover:bg-paper-ink hover:text-paper">
            <i data-lucide="${p.icon}" class="w-3.5 h-3.5"></i>
            ${p.label}
          </button>\`).join('')
      }

      // Initialize Lucide icons
      lucide.createIcons()

      // 3. Animate wordmark on view
      const letters = document.querySelectorAll('[data-letter]')
      if (wordmarkContainer && letters.length > 0) {
        inView(wordmarkContainer, () => {
          animate(letters, { opacity: [0, 1], y: [120, 0] }, { duration: 1.2, delay: stagger(0.06), ease: [0.16, 1, 0.3, 1] })
        }, { amount: 0.2 })
      }

      // 4. Generic reveals for scroll animations
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        const y = parseFloat(el.dataset.y ?? '20')
        const delay = parseFloat(el.dataset.delay ?? '0')
        inView(el, () => { 
          animate(el, { opacity: [0, 1], y: [y, 0] }, { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }) 
        }, { amount: 0.1 })
      })

      // 5. Mobile Hamburger Menu Toggle
      const burger = document.querySelector('[data-burger]')
      const menu = document.querySelector('[data-menu]')
      const bar1 = document.querySelector('[data-bar="1"]')
      const bar2 = document.querySelector('[data-bar="2"]')
      
      if (burger && menu && bar1 && bar2) {
        let open = false
        burger.addEventListener('click', () => {
          open = !open
          menu.classList.toggle('hidden', !open)
          bar1.className = \`h-[1.5px] bg-mist transition-all duration-300 ${open ? 'w-8 translate-y-[7.5px] rotate-45' : 'w-8 group-hover:w-6'}\`
          bar2.className = \`h-[1.5px] bg-mist transition-all duration-300 ${open ? 'w-8 -rotate-45' : 'w-8 group-hover:w-10'}\`
        })
      }
    </script>` }} />
  );
}
