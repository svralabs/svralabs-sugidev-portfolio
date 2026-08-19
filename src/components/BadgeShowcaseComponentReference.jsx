import React from 'react';

export default function BadgeShowcaseComponentReference() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- TopNavBar -->
<nav class="bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-mist/10">
<div class="flex justify-between items-center px-margin-desktop py-stack-md max-w-container-max mx-auto">
<div class="font-h1 text-h1 text-ember tracking-tighter">sugidev</div>
<div class="hidden md:flex items-center gap-8">
<a class="font-nav-link text-nav-link text-secondary hover:text-ember duration-300 transition-all" href="#">Showcase</a>
<a class="font-nav-link text-nav-link text-primary border-b border-primary pb-1" href="#">Components</a>
<a class="font-nav-link text-nav-link text-secondary hover:text-ember duration-300 transition-all" href="#">Docs</a>
<a class="font-nav-link text-nav-link text-secondary hover:text-ember duration-300 transition-all" href="#">GitHub</a>
<button class="bg-ember text-ink px-6 py-2 rounded-full font-label-sm hover:scale-105 transition-transform ember-glow">Hire Me</button>
</div>
<!-- Mobile Menu Placeholder -->
<div class="md:hidden">
<span class="material-symbols-outlined text-mist">menu</span>
</div>
</div>
</nav>
<main class="pt-32 pb-section-gap-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<!-- Hero Section -->
<header class="relative mb-section-gap-sm">
<div class="absolute -top-10 -left-10 w-64 h-64 bg-ember/10 blur-[100px] rounded-full"></div>
<h1 class="font-display-hero text-display-hero text-on-surface uppercase opacity-10 leading-none select-none pointer-events-none">
                BADGES
            </h1>
<div class="mt-[-4vw] relative z-10">
<h2 class="font-h1 text-6xl md:text-8xl tracking-tighter text-on-surface font-black">
                    Badge <span class="text-ember">Showcase</span>
</h2>
<p class="font-body-lg text-mist/60 max-w-2xl mt-4">
                    Reference documentation for atomic status indicators and metadata tags used across the DevOS ecosystem. 
                    Engineered for high readability in dense technical interfaces.
                </p>
</div>
</header>
<!-- Status Badges (Tegas Style) -->
<section class="section-gap-sm">
<div class="flex items-baseline justify-between mb-8">
<h3 class="font-h1 text-3xl tracking-tight uppercase">01. Status Badges</h3>
<span class="font-caption text-mist/30">TYPE: TEGAS (ROUNDED-MD)</span>
</div>
<div class="space-y-12">
<!-- Soft Variants -->
<div class="space-y-4">
<p class="font-overline text-secondary/40">SOFT VARIANTS</p>
<div class="flex flex-wrap gap-4">
<span class="px-4 py-1 rounded-md text-sm font-bold bg-success/10 text-success border border-success/20 uppercase tracking-widest">Success</span>
<span class="px-4 py-1 rounded-md text-sm font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 uppercase tracking-widest">Warning</span>
<span class="px-4 py-1 rounded-md text-sm font-bold bg-error/10 text-error border border-error/20 uppercase tracking-widest">Error</span>
<span class="px-4 py-1 rounded-md text-sm font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20 uppercase tracking-widest">Info</span>
</div>
</div>
<!-- Outline Variants -->
<div class="space-y-4">
<p class="font-overline text-secondary/40">OUTLINE VARIANTS</p>
<div class="flex flex-wrap gap-4">
<span class="px-4 py-1 rounded-md text-sm font-bold border-2 border-success text-success uppercase tracking-widest">Active</span>
<span class="px-4 py-1 rounded-md text-sm font-bold border-2 border-amber-500 text-amber-500 uppercase tracking-widest">Pending</span>
<span class="px-4 py-1 rounded-md text-sm font-bold border-2 border-error text-error uppercase tracking-widest">Failed</span>
<span class="px-4 py-1 rounded-md text-sm font-bold border-2 border-blue-500 text-blue-500 uppercase tracking-widest">Synching</span>
</div>
</div>
</div>
</section>
<div class="section-divider"></div>
<!-- Technical Badges -->
<section class="section-gap-sm">
<div class="flex items-baseline justify-between mb-8">
<h3 class="font-h1 text-3xl tracking-tight uppercase">02. Technical Labels</h3>
<span class="font-caption text-mist/30">TYPE: DEVOS HIGH-CONTRAST</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div class="bg-surface-container-low p-8 rounded-lg border border-mist/5 flex flex-col items-start gap-6">
<span class="px-3 py-1 bg-ember text-ink font-black text-xs rounded-sm tracking-tighter">V2.4.12</span>
<p class="font-caption text-secondary/50 uppercase">Build Version</p>
</div>
<div class="bg-surface-container-low p-8 rounded-lg border border-mist/5 flex flex-col items-start gap-6">
<span class="px-3 py-1 bg-ink text-ember border border-ember font-black text-xs rounded-sm tracking-widest">STABLE</span>
<p class="font-caption text-secondary/50 uppercase">Release Stream</p>
</div>
<div class="bg-surface-container-low p-8 rounded-lg border border-mist/5 flex flex-col items-start gap-6">
<span class="px-3 py-1 bg-surface-container-highest text-secondary-fixed-dim font-black text-xs rounded-sm tracking-widest opacity-50">DEPRECATED</span>
<p class="font-caption text-secondary/50 uppercase">Lifecycle State</p>
</div>
<div class="bg-surface-container-low p-8 rounded-lg border border-mist/5 flex flex-col items-start gap-6 relative overflow-hidden">
<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ember to-transparent"></div>
<span class="px-3 py-1 bg-ember/20 text-ember font-black text-xs rounded-sm tracking-widest animate-pulse">BUILDING</span>
<p class="font-caption text-secondary/50 uppercase">CI/CD Pipeline</p>
</div>
</div>
</section>
<div class="section-divider"></div>
<!-- Dot Indicators & Sizes -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 section-gap-sm">
<!-- Dot Indicators -->
<section>
<div class="flex items-baseline justify-between mb-8">
<h3 class="font-h1 text-3xl tracking-tight uppercase">03. Dot States</h3>
</div>
<div class="bg-surface-container-low p-10 rounded-lg border border-mist/5 space-y-6">
<div class="flex items-center gap-4">
<div class="relative w-2.5 h-2.5 bg-success rounded-full dot-pulse"></div>
<span class="font-body-md text-on-surface">Systems Live</span>
</div>
<div class="flex items-center gap-4 opacity-40">
<div class="w-2.5 h-2.5 bg-secondary rounded-full"></div>
<span class="font-body-md text-on-surface">Offline Mode</span>
</div>
<div class="flex items-center gap-4">
<div class="w-2.5 h-2.5 bg-ember rounded-full"></div>
<span class="font-body-md text-on-surface">Maintenance Window</span>
</div>
</div>
</section>
<!-- Sizes -->
<section>
<div class="flex items-baseline justify-between mb-8">
<h3 class="font-h1 text-3xl tracking-tight uppercase">04. Size Variants</h3>
</div>
<div class="bg-surface-container-low p-10 rounded-lg border border-mist/5 flex flex-col justify-center gap-8">
<div class="flex items-center gap-4">
<span class="px-2 py-0.5 text-[10px] font-bold bg-mist/10 text-mist rounded uppercase tracking-[0.2em]">Small</span>
<span class="font-caption text-mist/30">8px Vertical Padding</span>
</div>
<div class="flex items-center gap-4">
<span class="px-4 py-1.5 text-xs font-bold bg-mist/10 text-mist rounded uppercase tracking-[0.2em]">Medium</span>
<span class="font-caption text-mist/30">12px Vertical Padding</span>
</div>
<div class="flex items-center gap-4">
<span class="px-6 py-2.5 text-sm font-bold bg-mist/10 text-mist rounded uppercase tracking-[0.2em]">Large</span>
<span class="font-caption text-mist/30">16px Vertical Padding</span>
</div>
</div>
</section>
</div>
<div class="section-divider"></div>
<!-- Icon Badges (Bento-ish Grid) -->
<section class="section-gap-sm">
<div class="flex items-baseline justify-between mb-8">
<h3 class="font-h1 text-3xl tracking-tight uppercase">05. Icon Badges</h3>
<span class="font-caption text-mist/30">SYSTEM: MATERIAL SYMBOLS</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="group p-8 border border-mist/10 hover:border-ember/40 transition-colors flex flex-col gap-4">
<div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">shield</span>
</div>
<span class="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest self-start rounded">Encrypted</span>
<p class="font-body-md text-mist/60">Standard security layer badge for sensitive data clusters.</p>
</div>
<div class="group p-8 border border-mist/10 hover:border-ember/40 transition-colors flex flex-col gap-4">
<div class="w-12 h-12 flex items-center justify-center rounded-full bg-ember/10 text-ember">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">map</span>
</div>
<span class="px-3 py-1 bg-ember/10 text-ember text-[10px] font-black uppercase tracking-widest self-start rounded">Accelerated</span>
<p class="font-body-md text-mist/60">Hardware acceleration active on the current processing node.</p>
</div>
<div class="group p-8 border border-mist/10 hover:border-ember/40 transition-colors flex flex-col gap-4">
<div class="w-12 h-12 flex items-center justify-center rounded-full bg-error/10 text-error">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">add_circle</span>
</div>
<span class="px-3 py-1 bg-error/10 text-error text-[10px] font-black uppercase tracking-widest self-start rounded">Critical</span>
<p class="font-body-md text-mist/60">System-wide alert requiring immediate engineering attention.</p>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface border-t border-mist/5 mt-section-gap-lg">
<div class="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-section-gap-sm max-w-container-max mx-auto">
<div class="font-overline text-overline text-ember mb-4 md:mb-0">© 2024 SUGIDEV | Built for DevOS</div>
<div class="flex gap-8">
<a class="font-caption text-caption text-secondary-fixed-dim hover:text-ember transition-colors" href="#">Privacy</a>
<a class="font-caption text-caption text-secondary-fixed-dim hover:text-ember transition-colors" href="#">Terms</a>
<a class="font-caption text-caption text-secondary-fixed-dim hover:text-ember transition-colors" href="#">Changelog</a>
<a class="font-caption text-caption text-secondary-fixed-dim hover:text-ember transition-colors" href="#">Status</a>
</div>
</div>
</footer>
<script>
        // Micro-interactions for badges
        document.querySelectorAll('span.rounded-md, span.rounded-sm').forEach(badge => {
            badge.addEventListener('mouseenter', () => {
                badge.style.transform = 'translateY(-2px)';
                badge.style.transition = 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
            badge.addEventListener('mouseleave', () => {
                badge.style.transform = 'translateY(0)';
            });
        });
    </script>` }} />
  );
}
