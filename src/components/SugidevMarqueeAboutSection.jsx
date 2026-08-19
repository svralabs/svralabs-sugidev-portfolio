import React from 'react';

export default function SugidevMarqueeAboutSection() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- BEGIN: Header -->
<header class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-ink/80 border-b border-white/5">
<a class="text-ember font-black text-2xl tracking-tighter hover:opacity-80 transition-opacity" href="/">sugidev</a>
<nav class="hidden md:flex items-center gap-8">
<a class="nav-link" href="#work">Work</a>
<a class="nav-link" href="#services">Services</a>
<a class="nav-link text-ember" href="#about">About</a>
<a class="nav-link" href="#contact">Contact</a>
</nav>
<a class="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/20 text-sm font-medium uppercase tracking-widest hover:border-ember hover:text-ember transition-colors" href="#contact">
        Let's Build
      </a>
<button class="md:hidden text-mist hover:text-ember">
<i data-lucide="menu"></i>
</button>
</header>
<!-- END: Header -->
<!-- BEGIN: Main Content -->
<main class="flex-grow pt-24 relative">
<div class="glow-bg"></div>
<!-- BEGIN: Marquee Section -->
<section class="relative z-10 pt-16 sm:pt-24 pb-10 overflow-hidden">
<div class="flex items-center justify-between gap-4 px-6 md:px-12 mb-10 sm:mb-14">
<span class="text-mist/50 text-xs sm:text-sm font-medium uppercase tracking-[0.3em]">Tech Stack</span>
<span class="text-mist/50 text-xs sm:text-sm font-medium uppercase tracking-[0.3em]">Tools &amp; Tech</span>
</div>
<div class="edge-fade flex flex-col gap-3 overflow-hidden">
<div class="marquee-row anim-left" data-row="1"></div>
<div class="marquee-row anim-right" data-row="2"></div>
</div>
</section>
<!-- END: Marquee Section -->
<!-- BEGIN: About Section -->
<section class="relative z-10 min-h-[80vh] flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-20 overflow-hidden" id="about">
<div class="flex flex-col items-center gap-16 sm:gap-20 md:gap-24 w-full max-w-5xl">
<div class="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
<h2 class="hero-heading font-black uppercase leading-none tracking-tight text-center" data-reveal="" data-y="40" style="font-size: clamp(3rem, 12vw, 120px);">About me</h2>
<p class="text-mist font-medium text-center leading-relaxed max-w-3xl" data-animtext="" style="font-size: clamp(1.125rem, 2.5vw, 1.75rem);"></p>
<div class="flex flex-wrap justify-center gap-x-12 gap-y-8 sm:gap-x-24 mt-8" data-delay="0.1" data-reveal="" data-y="24">
<div class="flex flex-col items-center">
<span class="heading-ember font-black leading-none" style="font-size: clamp(2.5rem, 5vw, 4rem);">3+</span>
<span class="mt-2 text-mist/60 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">Years with React</span>
</div>
<div class="flex flex-col items-center">
<span class="heading-ember font-black leading-none" style="font-size: clamp(2.5rem, 5vw, 4rem);">80+</span>
<span class="mt-2 text-mist/60 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">Projects shipped</span>
</div>
<div class="flex flex-col items-center">
<span class="heading-ember font-black leading-none" style="font-size: clamp(2.5rem, 5vw, 4rem);">30+</span>
<span class="mt-2 text-mist/60 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">Happy clients</span>
</div>
</div>
</div>
<a class="group inline-flex items-center gap-2 rounded-full text-white font-medium uppercase tracking-[0.2em] px-8 py-4 text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,90,31,0.7)]" href="#contact" style="background: linear-gradient(135deg, #ff8a4c 0%, #ff5a1f 48%, #c2410c 100%); shadow: 0 8px 30px -8px rgba(255,90,31,0.55), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 0 0 1px rgba(255,255,255,0.12);">
            Contact Me
            <i class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</section>
<!-- END: About Section -->
</main>
<!-- END: Main Content -->
<!-- BEGIN: Footer -->
<footer class="relative z-10 border-t border-white/5 py-8 mt-auto">
<div class="px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
<a class="text-white font-bold text-xl tracking-tight" href="/">sugidev</a>
<div class="flex items-center gap-6">
<a class="text-xs uppercase tracking-widest text-mist/60 hover:text-white transition-colors" href="#">Github</a>
<a class="text-xs uppercase tracking-widest text-mist/60 hover:text-white transition-colors" href="#">Linkedin</a>
<a class="text-xs uppercase tracking-widest text-mist/60 hover:text-white transition-colors" href="#">Source</a>
</div>
<p class="text-xs uppercase tracking-widest text-mist/40">
          © 2024 SUGIDEV. BUILT WITH PRECISION.
        </p>
</div>
</footer>
<!-- END: Footer -->
<!-- Scripts -->
<script data-purpose="icons" src="https://unpkg.com/lucide@latest"></script>
<script data-purpose="animations-library" src="https://cdn.jsdelivr.net/npm/motion@11/dist/motion.js"></script>
<script data-purpose="marquee-logic">
      // --- Marquee brand logos (Simple Icons CDN) ---
      const brand = (slug, color) => \`https://cdn.simpleicons.org/${slug}${color ? '/' + color : '/d7e2ea'}\`
      const LOGOS = [
        brand('react'), brand('typescript'), brand('javascript'), brand('nextdotjs', 'ffffff'),
        brand('tailwindcss'), brand('vuedotjs'), brand('nodedotjs'), brand('graphql'), brand('redux'),
        brand('vite'), brand('sass'), brand('html5'), brand('css3'), brand('figma'), brand('git'),
        brand('storybook'), brand('jest'), brand('framer'), brand('vercel', 'ffffff'), brand('webpack'),
        brand('reactrouter'),
      ]
      const tile = (src) =>
        \`<div class="shrink-0 flex items-center justify-center rounded-2xl border border-mist/10 bg-ink-soft transition-colors hover:border-ember/50 hover:bg-ember/10" style="width:200px;height:120px"><img src="${src}" alt="Tech Logo" loading="lazy" class="h-10 w-10 md:h-14 md:w-14 object-contain opacity-70 hover:opacity-100 transition-opacity"></div>\`
      const row1 = [...LOGOS.slice(0, 11), ...LOGOS.slice(0, 11), ...LOGOS.slice(0, 11)]
      const row2 = [...LOGOS.slice(11), ...LOGOS.slice(11), ...LOGOS.slice(11)]
      document.querySelector('[data-row="1"]').innerHTML = row1.map(tile).join('')
      document.querySelector('[data-row="2"]').innerHTML = row2.map(tile).join('')
    </script>
<script data-purpose="scroll-animations">
      const { animate, inView, scroll } = window.Motion

      // --- AnimatedText (char-by-char scroll reveal) ---
      const ABOUT_TEXT =
        "A frontend developer turning ideas into fast, accessible and polished interfaces. I work best with teams shipping products that need to feel as good as they look. Let's build something worth remembering."
      const p = document.querySelector('[data-animtext]')
      const frag = document.createDocumentFragment()
      const chars = []
      for (const ch of ABOUT_TEXT) {
        if (ch === ' ') { frag.appendChild(document.createTextNode(' ')); continue }
        const s = document.createElement('span')
        s.textContent = ch
        s.style.opacity = '0.15'
        s.style.transition = 'opacity 0.15s linear'
        frag.appendChild(s)
        chars.push(s)
      }
      p.appendChild(frag)
      scroll(
        (progress) => {
          const revealed = chars.length * progress
          chars.forEach((c, i) => { c.style.opacity = i < revealed ? '1' : '0.15' })
        },
        { target: p, offset: ['start 0.8', 'end 0.3'] },
      )

      lucide.createIcons()
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        const y = parseFloat(el.dataset.y ?? '20')
        const delay = parseFloat(el.dataset.delay ?? '0')
        inView(el, () => { animate(el, { opacity: [0, 1], y: [y, 0] }, { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }) }, { amount: 0.1 })
      })
    </script>` }} />
  );
}
