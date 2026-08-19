import React from 'react';

export default function SugidevServicesProjects() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- TopNavBar Component -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-mist/10">
<div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
<a class="font-h1 text-h1 text-ember tracking-tighter hover:text-ember transition-all duration-300" href="#">sugidev</a>
<div class="hidden md:flex items-center gap-8">
<a class="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-ember transition-all duration-300" href="#">Work</a>
<a class="font-nav-link text-nav-link uppercase text-primary font-bold border-b border-primary hover:text-ember transition-all duration-300" href="#">Services</a>
<a class="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-ember transition-all duration-300" href="#">About</a>
<a class="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-ember transition-all duration-300" href="#">Contact</a>
</div>
<a class="font-nav-link text-nav-link uppercase text-primary bg-ink-soft border border-mist/15 px-6 py-2 rounded-full hover:text-ember transition-all duration-300" href="#">Let's Build</a>
</div>
</nav>
<main class="pt-32 pb-section-gap-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<!-- Services Section -->
<section class="mb-section-gap-sm md:mb-section-gap-lg">
<div class="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
<div class="flex items-center gap-3 mb-6">
<span class="w-2 h-2 rounded-full bg-ember shadow-[0_0_15px_rgba(255,90,31,0.55)]"></span>
<span class="font-overline text-overline uppercase text-mist/60">What I do</span>
</div>
<h1 class="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tighter text-mist">SERVICES</h1>
</div>
<div class="flex flex-col gap-0 max-w-5xl mx-auto">
<!-- Service Item 1 -->
<div class="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 border-t border-mist/10" data-reveal="">
<span class="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-mist/10 group-hover:text-ember transition-colors duration-500 leading-none">01</span>
<div class="flex-1">
<h3 class="font-h1 text-h1 uppercase text-mist mb-2 md:mb-4 group-hover:translate-x-2 transition-transform duration-300">Frontend Development</h3>
<p class="font-body-lg text-body-lg text-mist/60 max-w-2xl">Building production-grade interfaces with React, Next.js and TypeScript — component-driven, type-safe and maintainable at scale.</p>
</div>
</div>
<!-- Service Item 2 -->
<div class="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 border-t border-mist/10" data-reveal="">
<span class="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-mist/10 group-hover:text-ember transition-colors duration-500 leading-none">02</span>
<div class="flex-1">
<h3 class="font-h1 text-h1 uppercase text-mist mb-2 md:mb-4 group-hover:translate-x-2 transition-transform duration-300">UI Engineering</h3>
<p class="font-body-lg text-body-lg text-mist/60 max-w-2xl">Translating designs into pixel-perfect, responsive layouts with clean, semantic and accessible markup that holds up everywhere.</p>
</div>
</div>
<!-- Service Item 3 -->
<div class="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 border-t border-mist/10" data-reveal="">
<span class="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-mist/10 group-hover:text-ember transition-colors duration-500 leading-none">03</span>
<div class="flex-1">
<h3 class="font-h1 text-h1 uppercase text-mist mb-2 md:mb-4 group-hover:translate-x-2 transition-transform duration-300">Performance</h3>
<p class="font-body-lg text-body-lg text-mist/60 max-w-2xl">Optimizing load times, rendering and Core Web Vitals so every page feels instant and every interaction stays smooth.</p>
</div>
</div>
<!-- Service Item 4 -->
<div class="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 border-t border-mist/10" data-reveal="">
<span class="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-mist/10 group-hover:text-ember transition-colors duration-500 leading-none">04</span>
<div class="flex-1">
<h3 class="font-h1 text-h1 uppercase text-mist mb-2 md:mb-4 group-hover:translate-x-2 transition-transform duration-300">Design Systems</h3>
<p class="font-body-lg text-body-lg text-mist/60 max-w-2xl">Crafting scalable component libraries and design tokens that keep products consistent and teams shipping faster.</p>
</div>
</div>
<!-- Service Item 5 -->
<div class="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 border-t border-b border-mist/10" data-reveal="">
<span class="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-mist/10 group-hover:text-ember transition-colors duration-500 leading-none">05</span>
<div class="flex-1">
<h3 class="font-h1 text-h1 uppercase text-mist mb-2 md:mb-4 group-hover:translate-x-2 transition-transform duration-300">Motion &amp; Interaction</h3>
<p class="font-body-lg text-body-lg text-mist/60 max-w-2xl">Adding purposeful animation and micro-interactions with Framer Motion to bring interfaces to life without hurting performance.</p>
</div>
</div>
</div>
</section>
<!-- Projects Section -->
<section class="mt-section-gap-lg">
<div class="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
<div class="flex items-center gap-3 mb-6">
<span class="w-2 h-2 rounded-full bg-ember shadow-[0_0_15px_rgba(255,90,31,0.55)]"></span>
<span class="font-overline text-overline uppercase text-mist/60">Selected work</span>
</div>
<h2 class="hero-heading font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tighter">PROJECTS</h2>
</div>
<div class="flex flex-col gap-32">
<!-- Project 1 -->
<div class="sticky top-32 flex flex-col xl:flex-row gap-8 bg-ink-soft rounded-xl p-8 border border-mist/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] origin-top" data-reveal="" style="transform: scale(0.95);">
<div class="flex flex-col gap-6 xl:w-1/3">
<span class="font-display-hero-mobile text-display-hero-mobile text-mist/20 leading-none">01</span>
<div>
<span class="font-overline text-overline text-ember uppercase tracking-widest block mb-2">Client · 2025</span>
<h3 class="font-h1 text-h1 uppercase text-mist">Nextlevel Dashboard</h3>
</div>
<div class="flex flex-wrap gap-2">
<span class="px-4 py-1 rounded-full border border-mist/15 font-caption text-caption uppercase text-mist/80">React</span>
<span class="px-4 py-1 rounded-full border border-mist/15 font-caption text-caption uppercase text-mist/80">Next.js</span>
<span class="px-4 py-1 rounded-full border border-mist/15 font-caption text-caption uppercase text-mist/80">Tailwind</span>
</div>
<a class="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ember/10 border border-ember text-ember font-nav-link text-nav-link uppercase hover:bg-ember hover:text-ink transition-colors duration-300 w-fit group" href="#">
                Live Project
                <span class="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
</a>
</div>
<div class="flex flex-col md:flex-row gap-4 xl:w-2/3 h-[500px]">
<div class="flex flex-col gap-4 w-full md:w-2/5 h-full">
<div class="flex-1 rounded-lg overflow-hidden bg-surface">
<img class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" data-alt="A dark mode UI dashboard component showing analytical charts and data tables, styled with glowing orange accents on a deep black background, highly detailed and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9eqowowcEW3XUrsCBIw5RvxYJa0LX0nE0HArlofMkCAwyQdwzC74BjawZAu1_qX6lrj6J4nvnVNBQtAjDhPJL-ARMc4qncSkGWxkPM53hzlzeNndm5PVaxiy9No3Aqp17l62Un3Nozn0t_9N5B5471O0RHBu4S_1fjhTlDeAiD10AONbMNgT_tyCd2LoBK7Z-m81Ma6pZbUqiG_a1ZxX5wQBKIgw7i7kapfUtUqsgKSMTz0sWInF9"/>
</div>
<div class="flex-[1.5] rounded-lg overflow-hidden bg-surface">
<img class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" data-alt="A close up of a sleek digital interface element, specifically a complex data visualization widget with a dark theme and subtle neon orange highlights, modern and polished." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI84Melozf5Yh08sGPrWHzY8Cv2S0LDquEvGiBK7b5G_lonx5h1x8d4eCELSmMLfEoNRun0HI2H3F4X1T63PzqTvFpmYG9QZ1IBcCOwIu1z_6b-OsS9iduuh5pIy7S6z0kcGqkGj26V81Y57LtEW2l4QWdbKM1Oim6xvD4_wC67mbjyEMf0wq5MhNScBCPuAEn2E0J7KWttwighbG-HUa8BETCEb-qcXel9AZ-lghNFB3E7gHbOp9l"/>
</div>
</div>
<div class="w-full md:w-3/5 h-full rounded-lg overflow-hidden bg-surface">
<img class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" data-alt="A full screen view of a high end web application interface in dark mode, featuring a comprehensive layout with sidebars, top navigation, and main content area filled with premium UI components, dark minimalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCseWxnAZAmtmgSJb1Mz71r66_8MYiz4wn9bIlPB1-1flHUQRJQxrJdcm_YRNtco5Hefs1GqNQe0Rx6OWxhhIaTB2CIFKbG0axYWXR-9LPXWuBIj9ZG60BZkHs9GVravywQf_zFudwfdFJorikl-zWR7Okl_jeH66AZy4FUkzNOawiAyzrL2o8oy_FSIsKGoywmu0GwSAa9lWGnUodN4CVzveNItgrHPl8OQ2NWKVC4CVIWxtjCa2cd"/>
</div>
</div>
</div>
<!-- Project 2 -->
<div class="sticky top-40 flex flex-col xl:flex-row gap-8 bg-ink-soft rounded-xl p-8 border border-mist/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] origin-top" data-reveal="" style="transform: scale(0.97);">
<div class="flex flex-col gap-6 xl:w-1/3">
<span class="font-display-hero-mobile text-display-hero-mobile text-mist/20 leading-none">02</span>
<div>
<span class="font-overline text-overline text-ember uppercase tracking-widest block mb-2">Personal · 2025</span>
<h3 class="font-h1 text-h1 uppercase text-mist">Aura Design System</h3>
</div>
<div class="flex flex-wrap gap-2">
<span class="px-4 py-1 rounded-full border border-mist/15 font-caption text-caption uppercase text-mist/80">React</span>
<span class="px-4 py-1 rounded-full border border-mist/15 font-caption text-caption uppercase text-mist/80">Storybook</span>
<span class="px-4 py-1 rounded-full border border-mist/15 font-caption text-caption uppercase text-mist/80">TypeScript</span>
</div>
<a class="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ember/10 border border-ember text-ember font-nav-link text-nav-link uppercase hover:bg-ember hover:text-ink transition-colors duration-300 w-fit group" href="#">
                Live Project
                <span class="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
</a>
</div>
<div class="flex flex-col md:flex-row gap-4 xl:w-2/3 h-[500px]">
<div class="flex flex-col gap-4 w-full md:w-2/5 h-full">
<div class="flex-[1.2] rounded-lg overflow-hidden bg-surface">
<img class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" data-alt="A clean, structured documentation page for a design system, displaying typography scales and color palettes on a dark background, minimal and highly organized." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASQsB6rg8wR-SyhlfHSLyPq3bur372oZPOqnPo9c1eTg8zrjSZgitG3k7R4qCZoXZ19n3C00bXDC30rm3XfBqS7DlFoshQY4-JTIrFTol3wMNZoNAVCP2GNUBiHXseyvDsUZqpG_-wf_BOoizSL5XP-Rsnf7DRfMd3ZRCMjDGdc50-RH6j3GMf9nfyZnfZaPSfSR3ReE1a8LjL2rEe7P-PzmUw91WPjLuVVFy3iKvP3otCRQvJhF1q"/>
</div>
<div class="flex-[0.8] rounded-lg overflow-hidden bg-surface">
<img class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" data-alt="A collection of UI button components in various states (hover, active, disabled) showcased in a grid layout on a dark interface, technical and precise aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZiLnXaRwmj1UAbdL2Wac7C8tQGHqp_U2lstscyysdhVm-gC533HghQI6DGmaGciLkY37iLrQJKTBaceLTsZst2f656qNs7wiYzbsQClopRp5Rs59JaF_a-vNemea37lpcLmUSP9tC3LfoJ2wJjdT2mW44-UVvzrja7arfRpd1ui4uMSqgMOXTdlnlewz75wFBekKV0iUrPI_YB9OTojx2swSbu_dO1YuibUgzVcUwR-n8bwhNTofV"/>
</div>
</div>
<div class="w-full md:w-3/5 h-full rounded-lg overflow-hidden bg-surface">
<img class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" data-alt="A wide shot of a design system component library interface, showing a complex layout of nested components, forms, and interactive elements, all unified by a dark mode theme with subtle glowing edges." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4lpSxK51hhvv2_vjqVbb3XGoW4FeRge43_vHn0dDovMKPySuOuOc5rJyedzoQiyXhAnDQoA4_GxALxNz9SXTWY_9RfDrsScA5od2M-BwWeTM_npJwQEYwhxeG5IIPJsgJQiUmShovtzfzwUrVMy3dub4XIy8ochDCw4GnN1_fXc0H5ZUtQLu1oqWFTLBzuldo9cX5NCLlKP4OGwRfhDDzDmiv_LlZe9zzoDZJZpX6ib4v9ErwneSD"/>
</div>
</div>
</div>
<!-- Project 3 -->
<div class="sticky top-48 flex flex-col xl:flex-row gap-8 bg-ink-soft rounded-xl p-8 border border-mist/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] origin-top z-10" data-reveal="">
<div class="flex flex-col gap-6 xl:w-1/3">
<span class="font-display-hero-mobile text-display-hero-mobile text-mist/20 leading-none">03</span>
<div>
<span class="font-overline text-overline text-ember uppercase tracking-widest block mb-2">Client · 2026</span>
<h3 class="font-h1 text-h1 uppercase text-mist">Solaris Web App</h3>
</div>
<div class="flex flex-wrap gap-2">
<span class="px-4 py-1 rounded-full border border-mist/15 font-caption text-caption uppercase text-mist/80">Next.js</span>
<span class="px-4 py-1 rounded-full border border-mist/15 font-caption text-caption uppercase text-mist/80">TypeScript</span>
<span class="px-4 py-1 rounded-full border border-mist/15 font-caption text-caption uppercase text-mist/80">Tailwind</span>
</div>
<a class="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ember/10 border border-ember text-ember font-nav-link text-nav-link uppercase hover:bg-ember hover:text-ink transition-colors duration-300 w-fit group" href="#">
                Live Project
                <span class="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
</a>
</div>
<div class="flex flex-col md:flex-row gap-4 xl:w-2/3 h-[500px]">
<div class="flex flex-col gap-4 w-full md:w-2/5 h-full">
<div class="flex-1 rounded-lg overflow-hidden bg-surface">
<img class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" data-alt="An abstract representation of data flowing through a digital network, visualised as glowing orange lines on a deep space black background, futuristic and dynamic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSP4b9RDldoas24R5t-Ge0WdcscjT2b3einjmDdeFMr3yb43977NYNB4ZGu2McG17YUDMKA341t0eYNv1egIEJq5h8QJRg5VX3y3VmzmWIr-AOYkzU89UM9Lb5Y3jQHTsDyW5jWr_KZbzNB1zGb_32R5HIzwoc6kCJPeSGrk-QvCrJds3_b9F4tTbFRCYpIGUyDMOQV9fjCc846_NTKdoIPjsPXL5pfnNKwQMvOZaAsKfuaEVcQl8s"/>
</div>
<div class="flex-1 rounded-lg overflow-hidden bg-surface">
<img class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" data-alt="A macro shot of a sleek, dark metallic user interface element, perhaps a dial or slider, with a soft orange backlight indicating activity, high-end industrial design feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH2-OBL0uyp1r-4lYtKE6jzr7Pv8NPYRsGpk-FcpV2ZV-MnmVftE7Qlw5MX0l9_iOlc5vz2JY7kx2xcuVxg8y1FqSiXsCTDtAkzZnb9xt2mNmGJz5rqItqiI3Ddgi4nSWxrOZuzB3avUS2HUXSI0IreS8r-Qchn-w_B1i02ePX9rfEHvEIFkFU3QrtKIus38EwlSL0blzPN3jU-5tzPWRiNUJI7xr5pnBe3sSj1iEsYzvukXUEXkFi"/>
</div>
</div>
<div class="w-full md:w-3/5 h-full rounded-lg overflow-hidden bg-surface">
<img class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" data-alt="A sprawling, complex web application dashboard interface designed for financial or scientific data analysis. The UI is predominantly dark grey and black, with key metrics highlighted in vibrant, glowing orange. The layout is dense but highly structured and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmqTJ6HIYhvnCaTTUnuTmSbaA26gbwJJBs0-5P5aWkgt3m6rOh5m2evmPEX9EhfjAT6h24S6hYj6INJcm72t96bcyvleh4FFQ5N3Fstr0i5tyybmSWBZ0oLRNkBB0RF_qnQvIEDhZI_6gZOeEWWIvOFdItodbbwsmhZK04q4wa5Es1hgR_8zGqqyTz922-Iq5x6sxPchBxQKQKyHT7Mmsg4Wglgi5cpZWJU2BoPt5zSQs0qoi3gcEZ"/>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer Component -->
<footer class="w-full relative bottom-0 bg-ink border-t border-mist/10">
<div class="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-12 gap-stack-md max-w-container-max mx-auto">
<a class="font-h1 text-h1 text-on-surface hover:opacity-80 transition-opacity" href="#">sugidev</a>
<div class="flex items-center gap-6">
<a class="font-caption text-caption uppercase text-on-surface-variant hover:text-primary transition-colors" href="#">Github</a>
<a class="font-caption text-caption uppercase text-on-surface-variant hover:text-primary transition-colors" href="#">LinkedIn</a>
<a class="font-caption text-caption uppercase text-on-surface-variant hover:text-primary transition-colors" href="#">Source</a>
</div>
<p class="font-caption text-caption uppercase text-ember text-center md:text-right">© 2024 sugidev. Built with precision.</p>
</div>
</footer>
<script>
      // Simple intersection observer for reveal animations
      document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
        });

        document.querySelectorAll('[data-reveal]').forEach(el => {
          observer.observe(el);
        });
      });
    </script>` }} />
  );
}
