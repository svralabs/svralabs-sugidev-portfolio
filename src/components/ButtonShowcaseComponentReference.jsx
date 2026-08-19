import React from 'react';

export default function ButtonShowcaseComponentReference() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- TopAppBar -->
<nav class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-mist/10 flex justify-between items-center px-margin-desktop h-20 w-full">
<div class="font-h1 text-h1 tracking-tighter text-on-background">BUTTON_LABS</div>
<div class="hidden md:flex items-center gap-8">
<a class="text-ember border-b border-ember pb-1 font-nav-link text-nav-link uppercase" href="#">COMPONENTS</a>
<a class="text-on-surface-variant hover:text-on-surface transition-colors font-nav-link text-nav-link uppercase" href="#">GUIDELINES</a>
<a class="text-on-surface-variant hover:text-on-surface transition-colors font-nav-link text-nav-link uppercase" href="#">STORYBOOK</a>
<a class="text-on-surface-variant hover:text-on-surface transition-colors font-nav-link text-nav-link uppercase" href="#">DOCS</a>
</div>
<button class="bg-ember text-white px-6 py-2 rounded-md font-nav-link text-nav-link uppercase ember-glow active:scale-95 transition-all">GET STARTED</button>
</nav>
<main class="pt-32 pb-section-gap-lg px-margin-desktop max-w-container-max mx-auto">
<!-- Hero Header -->
<header class="mb-24">
<p class="tech-label mb-4">SUGIDEV / DEVOS — COMPONENT CATALOGUE</p>
<h1 class="font-display-hero text-display-hero text-on-background uppercase">
                Button <br/> Showcase
            </h1>
<div class="flex items-center gap-4 mt-8">
<span class="w-12 h-[1px] bg-ember"></span>
<p class="text-mist/60 font-body-lg max-w-2xl">A comprehensive reference of the atomic button primitives. Engineered for tactile precision with the signature Tegas aesthetic.</p>
</div>
</header>
<!-- Section 01: Primary -->
<section class="section-divider py-16">
<div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div>
<h2 class="font-display-hero text-8xl text-ember opacity-20">01.</h2>
<h3 class="font-kanit text-2xl font-bold uppercase mt-[-2rem]">Primary Buttons</h3>
<p class="tech-label mt-4">CLASS: .btn-primary</p>
</div>
<div class="lg:col-span-3 flex flex-wrap items-end gap-12">
<div class="flex flex-col gap-4">
<span class="tech-label">Solid Ember</span>
<button class="bg-ember text-white px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider ember-glow btn-transition hover:-translate-y-1 active:scale-95">
                            Action Primary
                        </button>
</div>
<div class="flex flex-col gap-4">
<span class="tech-label">With Icon</span>
<button class="bg-ember text-white px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider flex items-center gap-3 ember-glow btn-transition hover:-translate-y-1 active:scale-95">
                            Launch Project
                            <span class="material-symbols-outlined text-lg">arrow_top_right</span>
</button>
</div>
<div class="flex flex-col gap-4">
<span class="tech-label">Leading Icon</span>
<button class="bg-ember text-white px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider flex items-center gap-3 ember-glow btn-transition hover:-translate-y-1 active:scale-95">
<span class="material-symbols-outlined text-lg">map</span>
                            Optimize
                        </button>
</div>
</div>
</div>
</section>
<!-- Section 02: Secondary & Ghost -->
<section class="section-divider py-16">
<div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div>
<h2 class="font-display-hero text-8xl text-ember opacity-20">02.</h2>
<h3 class="font-kanit text-2xl font-bold uppercase mt-[-2rem]">Secondary &amp; Ghost</h3>
<p class="tech-label mt-4">CLASS: .btn-ink / .btn-ghost</p>
</div>
<div class="lg:col-span-3 flex flex-wrap items-end gap-12">
<div class="flex flex-col gap-4">
<span class="tech-label">Ink Soft Fill</span>
<button class="bg-ink-soft text-on-background px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider border border-mist/10 btn-transition hover:bg-mist/10 active:scale-95">
                            Secondary Task
                        </button>
</div>
<div class="flex flex-col gap-4">
<span class="tech-label">Ghost / Transparent</span>
<button class="bg-transparent text-on-background px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider border border-transparent hover:border-mist/20 hover:bg-mist/5 btn-transition active:scale-95">
                            Ghost Action
                        </button>
</div>
<div class="flex flex-col gap-4">
<span class="tech-label">Mist Contrast</span>
<button class="bg-mist text-background px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider btn-transition hover:bg-white active:scale-95">
                            High Contrast
                        </button>
</div>
</div>
</div>
</section>
<!-- Section 03: Outlined -->
<section class="section-divider py-16">
<div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div>
<h2 class="font-display-hero text-8xl text-ember opacity-20">03.</h2>
<h3 class="font-kanit text-2xl font-bold uppercase mt-[-2rem]">Outlined Variants</h3>
<p class="tech-label mt-4">CLASS: .btn-outline</p>
</div>
<div class="lg:col-span-3 flex flex-wrap items-end gap-12">
<div class="flex flex-col gap-4">
<span class="tech-label">Ember Stroke</span>
<button class="bg-transparent text-ember px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider border-2 border-ember btn-transition hover:bg-ember hover:text-white active:scale-95">
                            Outline Ember
                        </button>
</div>
<div class="flex flex-col gap-4">
<span class="tech-label">Mist Stroke</span>
<button class="bg-transparent text-mist px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider border-2 border-mist/30 btn-transition hover:border-mist hover:bg-mist/5 active:scale-95">
                            Outline Mist
                        </button>
</div>
</div>
</div>
</section>
<!-- Section 04: Sizes & Icons -->
<section class="section-divider py-16">
<div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div>
<h2 class="font-display-hero text-8xl text-ember opacity-20">04.</h2>
<h3 class="font-kanit text-2xl font-bold uppercase mt-[-2rem]">Sizes &amp; Icons</h3>
<p class="tech-label mt-4">SCALE: SM / MD / LG</p>
</div>
<div class="lg:col-span-3">
<div class="flex flex-wrap items-center gap-12 mb-16">
<div class="flex flex-col gap-4">
<span class="tech-label">Large (64px)</span>
<button class="bg-ember text-white px-10 py-5 text-lg rounded-md font-kanit font-bold uppercase tracking-widest ember-glow">
                                Large Scale
                            </button>
</div>
<div class="flex flex-col gap-4">
<span class="tech-label">Medium (48px)</span>
<button class="bg-ember text-white px-8 py-3.5 rounded-md font-kanit font-bold uppercase tracking-wider ember-glow">
                                Default
                            </button>
</div>
<div class="flex flex-col gap-4">
<span class="tech-label">Small (36px)</span>
<button class="bg-ember text-white px-6 py-2 text-sm rounded-md font-kanit font-bold uppercase tracking-tight ember-glow">
                                Small Task
                            </button>
</div>
</div>
<div class="flex flex-wrap items-center gap-8">
<div class="flex flex-col gap-4">
<span class="tech-label">Icon Only (Circle Support)</span>
<div class="flex gap-4">
<button class="w-12 h-12 flex items-center justify-center bg-ink-soft border border-mist/10 text-ember rounded-md hover:border-ember transition-colors">
<span class="material-symbols-outlined">hls</span>
</button>
<button class="w-12 h-12 flex items-center justify-center bg-ink-soft border border-mist/10 text-mist rounded-md hover:border-mist transition-colors">
<span class="material-symbols-outlined">settings</span>
</button>
<button class="w-12 h-12 flex items-center justify-center bg-ember text-white rounded-md ember-glow">
<span class="material-symbols-outlined">share</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Section 05: States -->
<section class="py-16">
<div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div>
<h2 class="font-display-hero text-8xl text-ember opacity-20">05.</h2>
<h3 class="font-kanit text-2xl font-bold uppercase mt-[-2rem]">System States</h3>
<p class="tech-label mt-4">LOGIC: PSEUDO-CLASSES</p>
</div>
<div class="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
<div class="flex flex-col gap-4">
<span class="tech-label">Normal State</span>
<button class="bg-ember text-white px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider">
                            Idle Component
                        </button>
</div>
<div class="flex flex-col gap-4">
<span class="tech-label">Hover Simulation</span>
<button class="bg-ember text-white px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider -translate-y-1 scale-[1.02] shadow-[0_10px_30px_rgba(255,90,31,0.4)]">
                            Hover State
                        </button>
</div>
<div class="flex flex-col gap-4">
<span class="tech-label">Active / Pressed</span>
<button class="bg-ember-deep text-white px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider scale-95 opacity-90">
                            Active State
                        </button>
</div>
<div class="flex flex-col gap-4">
<span class="tech-label">Disabled / Locked</span>
<button class="bg-surface-container-highest/50 text-on-surface-variant/30 px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider cursor-not-allowed border border-mist/5" disabled="">
                            Locked Component
                        </button>
</div>
<div class="flex flex-col gap-4 md:col-span-2">
<span class="tech-label">Loading State</span>
<button class="bg-ember text-white px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider flex items-center justify-center gap-3 w-full max-w-xs relative overflow-hidden">
<svg class="animate-spin h-5 w-5 text-white" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
<path class="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
                            Syncing Data...
                        </button>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-section-gap-sm border-t border-mist/10 bg-background flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-stack-md">
<div class="font-h1 text-h1 text-on-background">BUTTON_LABS</div>
<div class="text-on-surface-variant font-caption text-caption uppercase tracking-widest text-center md:text-left">
            © 2024 TECHNICAL PORTFOLIO SUITE. ENGINEERED FOR PRECISION.
        </div>
<div class="flex gap-8">
<a class="text-on-surface-variant hover:text-ember transition-colors font-caption text-caption uppercase" href="#">PRIVACY</a>
<a class="text-on-surface-variant hover:text-ember transition-colors font-caption text-caption uppercase" href="#">LICENSE</a>
<a class="text-on-surface-variant hover:text-ember transition-colors font-caption text-caption uppercase" href="#">CONTRIBUTE</a>
<a class="text-on-surface-variant hover:text-ember transition-colors font-caption text-caption uppercase" href="#">CHANGELOG</a>
</div>
</footer>
<!-- Interactive Layer: Texture Overlay & Scripts -->
<div class="fixed inset-0 pointer-events-none z-[60] opacity-[0.03]" id="grain"></div>
<script>
        // Micro-interaction for mouse follow on Ember Glow buttons
        document.querySelectorAll('.ember-glow').forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                button.style.setProperty('--x', \`${x}px\`);
                button.style.setProperty('--y', \`${y}px\`);
            });
        });

        // Simple button ripple logic
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', function(e) {
                if(this.disabled) return;
                let ripple = document.createElement('span');
                ripple.classList.add('ripple');
                this.appendChild(ripple);
                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;
                ripple.style.left = \`${x}px\`;
                ripple.style.top = \`${y}px\`;
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    </script>
<style>
        /* Loading animation and ripple enhancements */
        .ripple {
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%);
            pointer-events: none;
            border-radius: 50%;
            animation: ripple-animation 0.6s linear;
        }

        @keyframes ripple-animation {
            from {
                width: 0px;
                height: 0px;
                opacity: 0.5;
            }
            to {
                width: 500px;
                height: 500px;
                opacity: 0;
            }
        }
    </style>` }} />
  );
}
