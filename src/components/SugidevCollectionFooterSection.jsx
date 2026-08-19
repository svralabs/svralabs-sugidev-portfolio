import React from 'react';

export default function SugidevCollectionFooterSection() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- BEGIN: Collection Section -->
<section class="relative w-full bg-ink text-mist flex flex-col z-30" id="collection">
<!-- Header Area -->
<div class="relative z-10 px-8 md:px-16 pt-32 md:pt-48 mb-16 flex flex-col xl:flex-row justify-between gap-10">
<!-- Main Heading with Icons -->
<h2 class="text-[1.8rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4rem] leading-[1.15] font-medium tracking-tight text-mist max-w-4xl" data-reveal="" data-y="30">
          Shipped from years of
          <span class="inline-flex gap-2 md:gap-3 align-middle mx-2 md:mx-4 -translate-y-[4px]">
<span class="flex w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full border border-mist/25 bg-ink-soft text-mist/50 transition-colors hover:bg-mist hover:text-ink hover:border-mist">
<i class="w-[22px] h-[22px]" data-lucide="code"></i>
</span>
<span class="flex w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full border border-mist/25 bg-ink-soft text-mist/50 transition-colors hover:bg-mist hover:text-ink hover:border-mist">
<i class="w-[22px] h-[22px]" data-lucide="zap"></i>
</span>
<span class="flex w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full border border-mist/25 bg-ink-soft text-mist/50 transition-colors hover:bg-mist hover:text-ink hover:border-mist">
<i class="w-[22px] h-[22px]" data-lucide="layout-dashboard"></i>
</span>
</span>
          curiosity &amp; code.
        </h2>
<!-- Description and Tags -->
<div class="xl:text-right xl:max-w-xs" data-delay="0.1" data-reveal="" data-y="30">
<p class="text-[9px] md:text-[10px] tracking-widest text-mist/40 uppercase mb-6 leading-relaxed">
            We don't just ship features<br/>we craft experiences worth remembering
          </p>
<div class="flex flex-wrap xl:justify-end gap-2">
<span class="rounded-full border border-mist/25 px-5 py-2 text-[9px] tracking-widest uppercase text-mist/70 transition-colors hover:bg-mist hover:text-ink hover:border-mist">Fast</span>
<span class="rounded-full border border-mist/25 px-5 py-2 text-[9px] tracking-widest uppercase text-mist/70 transition-colors hover:bg-mist hover:text-ink hover:border-mist">Accessible</span>
<span class="rounded-full border border-mist/25 px-5 py-2 text-[9px] tracking-widest uppercase text-mist/70 transition-colors hover:bg-mist hover:text-ink hover:border-mist">Polished</span>
</div>
</div>
</div>
<!-- Divider -->
<div class="relative z-10 h-px bg-mist/15"></div>
<!-- Chapter Showcase Area -->
<div class="relative z-10 flex flex-col md:flex-row">
<!-- Left: Image Preview -->
<div class="md:w-[35%] border-b md:border-b-0 md:border-r border-mist/15 min-h-[400px] md:min-h-[500px] flex flex-col">
<div class="p-8 text-mist/40 text-xl tracking-[0.3em]">∗∗∗</div>
<div class="relative flex-1">
<img alt="Chapter Preview" class="absolute inset-0 m-auto w-[80%] h-[80%] object-contain mix-blend-lighten" data-chap-img=""/>
</div>
<!-- Counter -->
<div class="p-8 flex items-end gap-1 text-[10px] tracking-widest uppercase">
<span class="text-[#888]" data-counter="">03</span>
<span class="text-[#333]">/</span>
<span class="text-[#888]" data-total="">05</span>
</div>
</div>
<!-- Right: Chapter List -->
<div class="md:w-[65%] flex flex-col">
<div class="border-b border-mist/15 p-8 flex items-center justify-between text-[10px] tracking-widest uppercase text-mist/40">
<span>Design with intent. Build with soul.</span>
<span class="text-ember" data-chap-label="">Chapter 03</span>
</div>
<ul class="flex-1" data-chap-list="">
<!-- List items populated by JS -->
</ul>
</div>
</div>
<!-- Footer Bar -->
<div class="relative z-10 h-px bg-mist/15"></div>
<div class="relative z-10 px-8 py-8 text-[10px] tracking-widest uppercase text-mist/50 bg-ink">
        Building for the modern web
      </div>
</section>
<!-- END: Collection Section -->
<!-- BEGIN: Footer Section -->
<footer class="relative bg-ink px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-36 pb-10" id="contact">
<div class="max-w-6xl mx-auto">
<p class="text-mist/40 font-medium uppercase tracking-[0.3em] text-xs sm:text-sm mb-6" data-reveal="" data-y="40">
          (Got a project?)
        </p>
<!-- Massive CTA Link -->
<a class="group block hero-heading font-black uppercase leading-[0.9] tracking-tight" data-delay="0.1" data-reveal="" data-y="40" href="mailto:hello@sugidev.studio" style="font-size: clamp(2.5rem, 11vw, 150px);">
          Let's build<br/>
<span class="inline-flex items-center gap-3 sm:gap-6">
            something 
            <i class="w-[0.7em] h-[0.7em] text-ember transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" data-lucide="arrow-up-right"></i>
</span>
</a>
<!-- Sub Contact Link -->
<a class="inline-block mt-8 text-mist text-lg sm:text-2xl md:text-3xl font-light lowercase tracking-tight border-b border-mist/30 pb-1 transition-colors hover:border-ember hover:text-ember" data-delay="0.2" data-reveal="" data-y="30" href="mailto:hello@sugidev.studio">
          hello@sugidev.studio
        </a>
</div>
<!-- Bottom Links -->
<div class="max-w-6xl mx-auto mt-20 sm:mt-28 md:mt-36 pt-8 border-t border-mist/10 flex flex-col sm:flex-row gap-6 sm:gap-4 items-start sm:items-center justify-between">
<span class="text-mist/40 text-xs sm:text-sm uppercase tracking-widest">
          © 2026 sugidev° — Frontend Developer
        </span>
<div class="flex flex-wrap gap-x-6 gap-y-2">
<a class="text-mist/60 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-ember" href="#">GitHub</a>
<a class="text-mist/60 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-ember" href="#">LinkedIn</a>
<a class="text-mist/60 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-ember" href="#">X / Twitter</a>
<a class="text-mist/60 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-ember" href="#">CodePen</a>
</div>
<a class="text-mist/40 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-mist" href="#top">
          Back to top ↑
        </a>
</div>
</footer>
<!-- END: Footer Section -->
<!-- Scripts -->
<script data-purpose="icons" src="https://unpkg.com/lucide@latest"></script>
<script data-purpose="animations" src="https://cdn.jsdelivr.net/npm/motion@11/dist/motion.js"></script>
<script data-purpose="interaction-logic">
      // Initialize Lucide Icons
      lucide.createIcons();

      const { animate, inView } = window.Motion;

      // Unsplash helper
      const u = (id, w) => \`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75\`;
      
      const CHAPTERS = [
        { name: 'Nextlevel Dashboard', image: u('1467232004584-a241de8bcf5d', 900) },
        { name: 'Aura Design System', image: u('1559028012-481c04fa702d', 900) },
        { name: 'Solaris Web App', image: u('1559028006-448665bd7c7f', 900) },
        { name: 'Orbit Web3 App', image: u('1517292987719-0369a794ec0f', 900) },
        { name: 'Lumina UI Kit', image: u('1545235617-9465d2a55698', 900) },
      ];

      const pad = (n) => String(n).padStart(2, '0');
      
      // Elements
      const img = document.querySelector('[data-chap-img]');
      const counter = document.querySelector('[data-counter]');
      const label = document.querySelector('[data-chap-label]');
      const list = document.querySelector('[data-chap-list]');
      
      document.querySelector('[data-total]').textContent = pad(CHAPTERS.length);

      // Populate List
      list.innerHTML = CHAPTERS.map((c, i) => \`
        <li class="border-b border-mist/10 px-8">
          <button type="button" data-chap="${i}" class="group flex w-full items-center justify-between py-8 text-left transition-colors text-[#444] hover:text-[#999]">
            <span class="text-2xl md:text-[2rem] font-medium tracking-tight">${c.name}</span>
            <span data-arrow class="opacity-0 transition-opacity">
              <i data-lucide="arrow-up-right" class="w-[22px] h-[22px] text-mist/50"></i>
            </span>
          </button>
        </li>
      \`).join('');

      // Re-init icons for dynamic content
      lucide.createIcons();

      let active = 2;
      let intervalId;

      // Render function
      function render(i, withTransition) {
        active = i;
        counter.textContent = pad(i + 1);
        label.textContent = 'Chapter ' + pad(i + 1);
        
        // Update list states
        list.querySelectorAll('button[data-chap]').forEach((b, bi) => {
          const on = bi === i;
          b.className = \`group flex w-full items-center justify-between py-8 text-left transition-colors ${on ? 'text-mist' : 'text-[#444] hover:text-[#999]'}\`;
          b.querySelector('[data-arrow]').style.opacity = on ? '1' : '0';
        });

        // Update image
        if (withTransition && img.src) {
          animate(img, { opacity: [1, 0], filter: ['blur(0px)', 'blur(6px)'], scale: [1, 1.05] }, { duration: 0.25 })
            .finished.then(() => {
              img.src = CHAPTERS[i].image;
              animate(img, { opacity: [0, 1], filter: ['blur(6px)', 'blur(0px)'], scale: [1.05, 1] }, { duration: 0.5, ease: [0.16, 1, 0.3, 1] });
            });
        } else {
          img.src = CHAPTERS[i].image;
        }
      }

      // Initial Render
      render(active, false);

      // Event Listeners
      list.querySelectorAll('button[data-chap]').forEach((b) =>
        b.addEventListener('click', () => {
          clearInterval(intervalId); // Stop auto-cycle on manual click
          render(Number(b.dataset.chap), true);
          startInterval(); // Restart auto-cycle
        })
      );

      // Auto-cycle
      function startInterval() {
        intervalId = setInterval(() => render((active + 1) % CHAPTERS.length, true), 3500);
      }
      startInterval();

      // Scroll Animations
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        const y = parseFloat(el.dataset.y ?? '30');
        const delay = parseFloat(el.dataset.delay ?? '0');
        inView(el, () => { 
          animate(el, { opacity: [0, 1], y: [y, 0] }, { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] });
        }, { amount: 0.1 });
      });
    </script>` }} />
  );
}
