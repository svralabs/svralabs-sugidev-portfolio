import React from 'react';

export default function ProjectInquiryCleanBackground() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- TopNavBar Shell -->
<nav class="fixed top-0 w-full z-50 bg-ink/80 backdrop-blur-md border-b border-mist/10">
<div class="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div class="font-h1 text-h1 tracking-tighter text-on-surface">PORTFOLIO</div>
<div class="hidden md:flex gap-8">
<a class="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-ember transition-colors duration-300" href="#">WORK</a>
<a class="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-ember transition-colors duration-300" href="#">SERVICES</a>
<a class="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-ember transition-colors duration-300" href="#">ABOUT</a>
<a class="font-nav-link text-nav-link uppercase text-ember font-bold border-b-2 border-ember pb-1 transition-all duration-300 ease-out active:scale-95" href="#">CONTACT</a>
</div>
<button class="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-nav-link text-nav-link uppercase hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,90,31,0.4)]">
                HIRE ME
            </button>
</div>
</nav>
<main class="pt-32 pb-section-gap-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<!-- Header Section -->
<header class="mb-16 md:mb-24 animate-reveal">
<h1 class="font-kanit font-black text-[14vw] md:text-[10vw] leading-none tracking-tighter text-on-surface uppercase opacity-100">
                PROJECT<br/><span class="text-ember">INQUIRY</span>
</h1>
</header>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
<!-- Left: Side Info -->
<aside class="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-12 animate-reveal" style="animation-delay: 0.2s;">
<div class="space-y-8 border-l border-mist/10 pl-8">
<div class="group">
<p class="font-caption text-caption uppercase text-on-surface-variant mb-2">Location</p>
<p class="font-body-lg text-xl font-medium group-hover:text-ember transition-glow flex items-center gap-2">
<span class="material-symbols-outlined">location_on</span> Based in Jakarta
                        </p>
</div>
<div class="group">
<p class="font-caption text-caption uppercase text-on-surface-variant mb-2">Current Availability</p>
<p class="font-body-lg text-xl font-medium flex items-center gap-2">
<span class="relative flex h-3 w-3">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
<span class="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
</span>
                            Q4 2024
                        </p>
</div>
<div class="group">
<p class="font-caption text-caption uppercase text-on-surface-variant mb-2">Average Response</p>
<p class="font-body-lg text-xl font-medium flex items-center gap-2">
<span class="material-symbols-outlined">schedule</span> Within 24h
                        </p>
</div>
</div>
<div class="relative overflow-hidden rounded-lg aspect-video w-full grayscale hover:grayscale-0 transition-all duration-700">
<img class="w-full h-full object-cover" data-alt="A moody, high-contrast aerial shot of Jakarta's skyline at night, glowing with amber lights and deep shadows. The architectural lines are sharp and brutalist, matching the tech-noir aesthetic of the Ember and Ink design system. Cinematic lighting and a subtle grain effect give it a professional, high-end portfolio feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo0aiS3GG8fqD3FuQCcqOmmRi6VSK20tIKKz20eyAU233AirFin-bSFlM_phJu2Bbiv21sr6aM3Zg5lCOu8_UpA3kUkVrnRuEIgWZQf8lUF_s_DemJMqR-2RKA2-kBkKRX6MQ5H0_NxSjN_L1VDCJnNGCJnwsqrV6fVRjo_iaQjo8HiWtJ6Kw_XD4wz-KVGGEXtZsNlJLRsuEJeF9Fo_g5dkHbCjeSsBisX4khkLgh2PiljcnlrcgN"/>
</div>
</aside>
<!-- Right: Inquiry Form -->
<section class="lg:col-span-8 order-1 lg:order-2 animate-reveal" style="animation-delay: 0.1s;">
<form class="space-y-12">
<!-- Identity Row -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="flex flex-col gap-2">
<label class="font-nav-link text-nav-link uppercase text-on-surface-variant" for="name">Your Name</label>
<input class="bg-ink-soft border-b border-mist/20 py-4 px-1 text-xl font-light text-on-surface glow-focus transition-glow placeholder:text-mist/20 focus:bg-surface-container" id="name" placeholder="John Doe" type="text"/>
</div>
<div class="flex flex-col gap-2">
<label class="font-nav-link text-nav-link uppercase text-on-surface-variant" for="email">Email Address</label>
<input class="bg-ink-soft border-b border-mist/20 py-4 px-1 text-xl font-light text-on-surface glow-focus transition-glow placeholder:text-mist/20 focus:bg-surface-container" id="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div class="flex flex-col gap-2">
<label class="font-nav-link text-nav-link uppercase text-on-surface-variant" for="company">Company / Organization</label>
<input class="bg-ink-soft border-b border-mist/20 py-4 px-1 text-xl font-light text-on-surface glow-focus transition-glow placeholder:text-mist/20 focus:bg-surface-container" id="company" placeholder="The Future Inc." type="text"/>
</div>
<!-- Project Type Selection -->
<div class="flex flex-col gap-6">
<label class="font-nav-link text-nav-link uppercase text-on-surface-variant">Project Type</label>
<div class="flex flex-wrap gap-3">
<label class="cursor-pointer">
<input class="hidden peer" name="project_type" type="radio"/>
<span class="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">Web App</span>
</label>
<label class="cursor-pointer">
<input class="hidden peer" name="project_type" type="radio"/>
<span class="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">Design System</span>
</label>
<label class="cursor-pointer">
<input class="hidden peer" name="project_type" type="radio"/>
<span class="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">UI Engineering</span>
</label>
<label class="cursor-pointer">
<input class="hidden peer" name="project_type" type="radio"/>
<span class="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">Performance</span>
</label>
</div>
</div>
<!-- Budget Selection -->
<div class="flex flex-col gap-6">
<label class="font-nav-link text-nav-link uppercase text-on-surface-variant">Budget Range</label>
<div class="flex flex-wrap gap-3">
<label class="cursor-pointer">
<input class="hidden peer" name="budget" type="radio"/>
<span class="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">&lt; $5k</span>
</label>
<label class="cursor-pointer">
<input class="hidden peer" name="budget" type="radio"/>
<span class="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">$5k - $10k</span>
</label>
<label class="cursor-pointer">
<input checked="" class="hidden peer" name="budget" type="radio"/>
<span class="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">$10k+</span>
</label>
</div>
</div>
<div class="flex flex-col gap-2">
<label class="font-nav-link text-nav-link uppercase text-on-surface-variant" for="details">Project Details</label>
<textarea class="bg-ink-soft border-b border-mist/20 py-4 px-1 text-xl font-light text-on-surface glow-focus transition-glow placeholder:text-mist/20 focus:bg-surface-container resize-none" id="details" placeholder="Tell me about your vision, goals, and any specific challenges..." rows="5"></textarea>
</div>
<div class="pt-8">
<button class="group relative w-full md:w-auto px-12 py-5 rounded-full bg-ember text-white font-kanit font-bold text-xl uppercase tracking-wider overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,90,31,0.5)]" type="submit">
<span class="relative z-10 flex items-center justify-center gap-3">
                                SEND INQUIRY 
                                <span class="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
</span>
<div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
</div>
</form>
</section>
</div>
</main>
<!-- Footer Shell -->
<footer class="w-full py-section-gap-sm border-t border-mist/10 bg-ink">
<div class="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-stack-md">
<div class="font-h1 text-h1 text-on-surface">PORTFOLIO</div>
<div class="flex gap-8">
<a class="font-caption text-caption uppercase text-on-surface-variant hover:text-ember transition-colors duration-300" href="#">GITHUB</a>
<a class="font-caption text-caption uppercase text-on-surface-variant hover:text-ember transition-colors duration-300" href="#">LINKEDIN</a>
<a class="font-caption text-caption uppercase text-on-surface-variant hover:text-ember transition-colors duration-300" href="#">TWITTER</a>
<a class="font-caption text-caption uppercase text-on-surface-variant hover:text-ember transition-colors duration-300" href="#">INSTAGRAM</a>
</div>
<div class="font-caption text-caption uppercase text-on-surface-variant opacity-80">
                © 2024 FRONTEND ARCHITECT. ALL RIGHTS RESERVED.
            </div>
</div>
</footer>
<script>
        // Micro-interaction: Form input float effects or validation animations
        document.querySelectorAll('input, textarea').forEach(el => {
            el.addEventListener('focus', () => {
                el.parentElement.querySelector('label').style.color = '#ff5a1f';
            });
            el.addEventListener('blur', () => {
                if(!el.value) el.parentElement.querySelector('label').style.color = '';
            });
        });

        // Submit button particle effect (simulated via scale and shadow)
        const form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            btn.innerHTML = '<span class="material-symbols-outlined animate-spin">sync</span> SENDING...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = 'SENT SUCCESSFULLY';
                btn.classList.replace('bg-ember', 'bg-success');
                btn.style.boxShadow = '0 0 40px rgba(52, 211, 153, 0.5)';
            }, 2000);
        });
    </script>` }} />
  );
}
