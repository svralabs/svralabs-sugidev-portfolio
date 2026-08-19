import React from 'react';

export default function ContactCleanBackground() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- Top Navigation Bar -->
<nav class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md">
<div class="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop h-20">
<div class="font-h1 text-h1 text-ember tracking-tighter">sugidev</div>
<div class="hidden md:flex items-center space-x-12">
<a class="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Work</a>
<a class="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Services</a>
<a class="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">About</a>
<a class="font-nav-link text-nav-link uppercase text-primary border-b border-primary pb-1" href="#">Contact</a>
</div>
<button class="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-nav-link text-nav-link uppercase inner-stroke hover:scale-105 active:scale-95 transition-all duration-300">
                Hire Me
            </button>
</div>
</nav>
<main class="pt-32 pb-section-gap-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<!-- Hero Section -->
<header class="mb-section-gap-sm">
<div class="reveal-up">
<span class="font-overline text-overline text-ember uppercase mb-stack-xs block">Availability: Q4 2024</span>
<h1 class="kanit-black text-[15vw] md:text-[10vw] leading-[0.9] tracking-tighter text-on-surface uppercase italic">
                    Let's<br/>Talk
                </h1>
</div>
</header>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
<!-- Left Side: Information & Services -->
<aside class="lg:col-span-5 space-y-16 reveal-up" style="animation-delay: 0.2s;">
<!-- Direct Contact -->
<div>
<h3 class="font-label-sm text-label-sm text-on-surface-variant uppercase mb-stack-md">Direct Link</h3>
<a class="group flex items-center text-[2rem] md:text-[2.5rem] font-kanit italic text-on-surface hover:text-ember transition-colors" href="mailto:hello@sugidev.tech">
                        hello@sugidev.tech
                        <span class="material-symbols-outlined ml-4 text-ember group-hover:translate-x-2 transition-transform duration-300">arrow_outward</span>
</a>
</div>
<!-- Services Checklist -->
<div>
<h3 class="font-label-sm text-label-sm text-on-surface-variant uppercase mb-6">How can I help?</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<label class="flex items-center space-x-4 p-4 rounded-xl bg-ink-soft border border-surface-variant/20 cursor-pointer hover:border-ember/40 transition-colors group">
<input class="custom-checkbox w-5 h-5 rounded border-surface-variant/50 bg-background text-ember focus:ring-ember" type="checkbox"/>
<span class="font-body-md text-on-surface group-hover:text-primary transition-colors">Frontend Architecture</span>
</label>
<label class="flex items-center space-x-4 p-4 rounded-xl bg-ink-soft border border-surface-variant/20 cursor-pointer hover:border-ember/40 transition-colors group">
<input class="custom-checkbox w-5 h-5 rounded border-surface-variant/50 bg-background text-ember focus:ring-ember" type="checkbox"/>
<span class="font-body-md text-on-surface group-hover:text-primary transition-colors">UI Design System</span>
</label>
<label class="flex items-center space-x-4 p-4 rounded-xl bg-ink-soft border border-surface-variant/20 cursor-pointer hover:border-ember/40 transition-colors group">
<input class="custom-checkbox w-5 h-5 rounded border-surface-variant/50 bg-background text-ember focus:ring-ember" type="checkbox"/>
<span class="font-body-md text-on-surface group-hover:text-primary transition-colors">Full-stack Dev</span>
</label>
<label class="flex items-center space-x-4 p-4 rounded-xl bg-ink-soft border border-surface-variant/20 cursor-pointer hover:border-ember/40 transition-colors group">
<input class="custom-checkbox w-5 h-5 rounded border-surface-variant/50 bg-background text-ember focus:ring-ember" type="checkbox"/>
<span class="font-body-md text-on-surface group-hover:text-primary transition-colors">Technical Audit</span>
</label>
</div>
</div>
<!-- Aesthetic Image/Map Placeholder -->
<div class="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-surface-variant/20 grayscale hover:grayscale-0 transition-all duration-700">
<img class="w-full h-full object-cover" data-alt="A moody, high-contrast black and white architectural photograph of a brutalist concrete building with sharp shadows and glowing ember-colored lights in the windows. The scene is shot during a dark, misty evening in a futuristic city like Tokyo or Berlin. The lighting is dramatic and cinematic, echoing the professional and technical sugidev brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPJW4ntn7cfq-NK6sXpOK-oljo0kpYwiqnmqHNP-pVkHHrhMRjEY7IaVUDdtyhboZF1Tosh1B4pQ7viLVlyz0CGSYynq5IcY4n_8d0TWhB3RooaWuy8j_pUZV4pOld2UrxEc4cyYM2eOfzUzEzgk7-HQaZCZxG6GpEJgVmvehATSOZYp3QbtcF0kP-ipxbvAxymPDhNa9QmlSxMq4xefBHR4mWUWhTBGHPRYL3QhKKsq9R8oUKowvI"/>
<div class="absolute bottom-6 left-6 flex items-center space-x-2">
<span class="material-symbols-outlined text-ember">location_on</span>
<span class="font-label-sm text-label-sm uppercase tracking-widest">Berlin, DE / Remote</span>
</div>
</div>
</aside>
<!-- Right Side: Contact Form -->
<div class="lg:col-span-7 bg-ink-soft p-margin-mobile md:p-12 rounded-lg border border-surface-variant/10 reveal-up" style="animation-delay: 0.4s;">
<form action="#" class="space-y-8" method="POST">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Name Field -->
<div class="group">
<label class="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3" for="name">Full Name</label>
<input class="w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:border-ember focus:ring-0 transition-all placeholder:text-surface-variant/40" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<!-- Email Field -->
<div class="group">
<label class="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3" for="email">Email Address</label>
<input class="w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:border-ember focus:ring-0 transition-all placeholder:text-surface-variant/40" id="email" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<!-- Subject Field -->
<div class="group">
<label class="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3" for="subject">Subject / Project Title</label>
<input class="w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:border-ember focus:ring-0 transition-all placeholder:text-surface-variant/40" id="subject" name="subject" placeholder="New Project Inquiry" type="text"/>
</div>
<!-- Message Field -->
<div class="group">
<label class="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3" for="message">Tell me about it</label>
<textarea class="w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:border-ember focus:ring-0 transition-all resize-none placeholder:text-surface-variant/40" id="message" name="message" placeholder="What are we building together?" required="" rows="5"></textarea>
</div>
<!-- Submit Button -->
<div class="pt-4">
<button class="w-full bg-gradient-to-r from-ember to-ember-deep text-on-primary-fixed font-h1 text-h1 uppercase py-6 rounded-full inner-stroke hover:scale-[1.01] active:scale-95 transition-all duration-300 flex justify-center items-center group" type="submit">
                            Submit Inquiry
                            <span class="material-symbols-outlined ml-4 group-hover:translate-x-2 transition-transform">send</span>
</button>
<p class="text-center font-caption text-caption text-secondary/40 mt-6 uppercase">Typical response time: 24-48 hours</p>
</div>
</form>
</div>
</div>
</main>
<!-- Footer Section -->
<footer class="bg-ink border-t border-surface-variant/10 w-full py-section-gap-sm">
<div class="flex flex-col items-center justify-center space-y-stack-md max-w-container-max mx-auto px-margin-desktop">
<div class="font-h1 text-h1 text-ember">sugidev</div>
<div class="flex space-x-8">
<a class="font-body-md text-secondary hover:text-ember transition-colors duration-300" href="#">Github</a>
<a class="font-body-md text-secondary hover:text-ember transition-colors duration-300" href="#">LinkedIn</a>
<a class="font-body-md text-secondary hover:text-ember transition-colors duration-300" href="#">Twitter</a>
<a class="font-body-md text-secondary hover:text-ember transition-colors duration-300" href="#">Codepen</a>
</div>
<p class="font-body-md text-body-md text-secondary/50">© 2024 sugidev. Built with precision.</p>
</div>
</footer>
<!-- Micro-interaction Scripts -->
<script>
        document.addEventListener('DOMContentLoaded', () => {
            // Magnetic button effect logic (Simplified)
            const buttons = document.querySelectorAll('button');
            buttons.forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    btn.style.transform = \`translate(${x * 0.15}px, ${y * 0.15}px) scale(1.02)\`;
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = \`translate(0, 0) scale(1)\`;
                });
            });

            // Smooth reveal on scroll for sections
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-up');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
        });
    </script>` }} />
  );
}
