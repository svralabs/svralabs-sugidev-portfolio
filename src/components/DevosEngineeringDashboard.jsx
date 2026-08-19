import React from 'react';

export default function DevosEngineeringDashboard() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- SideNavBar Anchor -->
<aside class="fixed left-0 top-0 hidden md:flex flex-col h-screen w-64 border-r border-outline-variant/20 bg-surface z-50 py-stack-md">
<div class="px-6 mb-10">
<h1 class="font-h1 text-h1 text-on-surface tracking-tighter">DevOS v2.4</h1>
<p class="font-caption text-caption text-tertiary uppercase mt-1">Terminal Access</p>
</div>
<nav class="flex-1 px-4 space-y-2">
<!-- Overview is active -->
<a class="flex items-center gap-4 px-4 py-3 text-ember font-bold border-r-2 border-ember transition-all duration-300 ease-in-out font-nav-link text-nav-link bg-surface-container-high/40" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">dashboard</span>
        Overview
      </a>
<a class="flex items-center gap-4 px-4 py-3 text-tertiary hover:bg-surface-container-high hover:text-on-surface transition-all duration-300 ease-in-out font-nav-link text-nav-link" href="#">
<span class="material-symbols-outlined">code</span>
        Repository
      </a>
<a class="flex items-center gap-4 px-4 py-3 text-tertiary hover:bg-surface-container-high hover:text-on-surface transition-all duration-300 ease-in-out font-nav-link text-nav-link" href="#">
<span class="material-symbols-outlined">insights</span>
        Analytics
      </a>
<a class="flex items-center gap-4 px-4 py-3 text-tertiary hover:bg-surface-container-high hover:text-on-surface transition-all duration-300 ease-in-out font-nav-link text-nav-link" href="#">
<span class="material-symbols-outlined">layers</span>
        Infrastructure
      </a>
<a class="flex items-center gap-4 px-4 py-3 text-tertiary hover:bg-surface-container-high hover:text-on-surface transition-all duration-300 ease-in-out font-nav-link text-nav-link" href="#">
<span class="material-symbols-outlined">security</span>
        Security
      </a>
<a class="flex items-center gap-4 px-4 py-3 text-tertiary hover:bg-surface-container-high hover:text-on-surface transition-all duration-300 ease-in-out font-nav-link text-nav-link" href="#">
<span class="material-symbols-outlined">settings</span>
        Settings
      </a>
</nav>
<div class="px-6 mt-auto">
<button class="w-full py-4 px-6 rounded-full ember-gradient-bg text-on-primary-container font-label-sm text-label-sm uppercase tracking-widest ember-glow transition-transform active:scale-95">
        New Deploy
      </button>
<div class="mt-8 pt-8 border-t border-outline-variant/10 space-y-4">
<a class="flex items-center gap-4 text-tertiary opacity-60 hover:opacity-100 transition-all font-caption text-caption uppercase" href="#">
<span class="material-symbols-outlined text-[18px]">description</span>
          Documentation
        </a>
<a class="flex items-center gap-4 text-tertiary opacity-60 hover:opacity-100 transition-all font-caption text-caption uppercase" href="#">
<span class="material-symbols-outlined text-[18px]">contact_support</span>
          Support
        </a>
</div>
</div>
</aside>
<main class="md:ml-64 min-h-screen flex flex-col">
<!-- TopNavBar Anchor -->
<header class="flex justify-between items-center w-full px-6 md:px-margin-desktop h-16 sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
<div class="flex items-center gap-8 flex-1">
<span class="font-h1 text-h1-mobile md:text-h1 text-on-surface whitespace-nowrap">System Health</span>
<div class="hidden lg:flex items-center bg-ink-soft rounded-full px-4 py-2 w-96 border border-outline-variant/20 focus-within:border-ember transition-colors">
<span class="material-symbols-outlined text-tertiary text-[20px]">search</span>
<input class="bg-transparent border-none focus:ring-0 text-body-md w-full placeholder:text-tertiary/40" placeholder="Search systems..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<div class="hidden md:flex items-center gap-6 mr-6">
<a class="text-ember border-b-2 border-ember pb-1 font-nav-link text-nav-link" href="#">Cloud Status</a>
<a class="text-tertiary hover:text-ember transition-colors font-nav-link text-nav-link" href="#">Incidents</a>
</div>
<div class="flex items-center gap-4">
<button class="relative text-tertiary hover:text-ember transition-colors active:scale-90">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-0 right-0 w-2 h-2 bg-ember rounded-full"></span>
</button>
<button class="text-tertiary hover:text-ember transition-colors active:scale-90">
<span class="material-symbols-outlined">terminal</span>
</button>
<div class="w-10 h-10 rounded-full border border-outline-variant/30 overflow-hidden cursor-pointer hover:border-ember transition-colors">
<img class="w-full h-full object-cover" data-alt="A professional engineering leader portrait, low-key lighting with subtle warm amber rim light, sharp focus on a person wearing technical gear in a futuristic server room environment, high-end commercial photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCclfEpe9NtdHADfLOppWqgvQ9APUVwgIOrN8ccCE2IS-VbTijut93014aoXYK4F34PszGTlJHO2zvkWJsGMWjyapkoQ_v_svcywa8jkX43AzQTEoYnMonKv5Sm2kJB9LbHLqiV0_CY650OZmBzQhkw6Ny5RvH1W_LdcgOdmp6i3iVWS6Hu9oMzdFh-PfKTMMpAJRR2fuJ4S7P1pF1tLpm4OXxpd4plaqTnnGELfPJpdlvBlp7cm2q6"/>
</div>
</div>
</div>
</header>
<!-- Page Content Canvas -->
<div class="flex-1 p-6 md:p-margin-desktop max-w-container-max mx-auto w-full">
<!-- Metric Row -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-section-gap-sm">
<!-- Metric 1 -->
<div class="bg-surface-container-low p-stack-md rounded-lg border border-outline-variant/5 relative overflow-hidden group">
<div class="absolute top-0 right-0 p-4">
<span class="material-symbols-outlined text-success opacity-50 group-hover:opacity-100 transition-opacity">monitor_heart</span>
</div>
<p class="font-overline text-overline text-tertiary uppercase mb-2">System Health</p>
<div class="flex items-end gap-3">
<h2 class="text-[2.5rem] font-black text-on-surface tracking-tight">99.9%</h2>
<div class="mb-2 w-16 h-6">
<svg class="w-full h-full stroke-success fill-none stroke-2" viewbox="0 0 100 40">
<path d="M0,35 Q10,35 20,20 T40,25 T60,10 T80,15 T100,5" stroke-linecap="round"></path>
</svg>
</div>
</div>
<p class="font-caption text-caption text-success mt-2">UPTIME STABLE</p>
</div>
<!-- Metric 2 -->
<div class="bg-surface-container-low p-stack-md rounded-lg border border-outline-variant/5 group">
<p class="font-overline text-overline text-tertiary uppercase mb-2">Active Deployments</p>
<div class="flex items-end gap-3">
<h2 class="text-[2.5rem] font-black text-on-surface tracking-tight">14</h2>
<div class="mb-3 flex items-center text-success gap-1">
<span class="material-symbols-outlined text-[16px]">trending_up</span>
<span class="font-label-sm text-label-sm">+2</span>
</div>
</div>
<p class="font-caption text-caption text-tertiary/60 mt-2">GLOBAL CLUSTERS</p>
</div>
<!-- Metric 3 -->
<div class="bg-surface-container-low p-stack-md rounded-lg border border-outline-variant/5 group">
<p class="font-overline text-overline text-tertiary uppercase mb-2">Build Success Rate</p>
<div class="flex items-end gap-3">
<h2 class="text-[2.5rem] font-black text-on-surface tracking-tight">98.2%</h2>
</div>
<div class="w-full h-1 bg-ink-soft rounded-full mt-4 overflow-hidden">
<div class="h-full bg-ember w-[98.2%]"></div>
</div>
<p class="font-caption text-caption text-tertiary/60 mt-2">PAST 24 HOURS</p>
</div>
<!-- Metric 4 -->
<div class="bg-surface-container-low p-stack-md rounded-lg border border-outline-variant/5 group">
<p class="font-overline text-overline text-tertiary uppercase mb-2">Security Score</p>
<div class="flex items-center gap-3">
<h2 class="text-[2.5rem] font-black text-ember tracking-tight">A+</h2>
<span class="material-symbols-outlined text-ember text-[32px]">verified_user</span>
</div>
<p class="font-caption text-caption text-ember/60 mt-2">ENCRYPTION ACTIVE</p>
</div>
</div>
<!-- Network Traffic Area Chart -->
<section class="mb-section-gap-sm">
<div class="flex justify-between items-end mb-6">
<div>
<h3 class="font-h1 text-h1 text-on-surface">Network Traffic</h3>
<p class="font-body-md text-body-md text-tertiary opacity-60">Global egress and ingress data throughput</p>
</div>
<div class="flex gap-2">
<button class="px-4 py-1.5 rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-tertiary hover:border-ember hover:text-on-surface transition-all">1H</button>
<button class="px-4 py-1.5 rounded-full bg-ember text-on-primary-fixed-variant font-label-sm text-label-sm transition-all ember-glow">24H</button>
<button class="px-4 py-1.5 rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-tertiary hover:border-ember hover:text-on-surface transition-all">7D</button>
</div>
</div>
<div class="h-[400px] w-full bg-surface-container rounded-lg border border-outline-variant/10 relative overflow-hidden chart-mesh">
<!-- Animated Area Chart Mockup -->
<svg class="absolute bottom-0 left-0 w-full h-[80%] preserve-3d" preserveaspectratio="none" viewbox="0 0 1000 100">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ff5a1f" stop-opacity="0.4"></stop>
<stop offset="100%" stop-color="#ff5a1f" stop-opacity="0"></stop>
</lineargradient>
</defs>
<!-- Background Area -->
<path d="M0,80 L100,75 L200,85 L300,50 L400,60 L500,30 L600,45 L700,20 L800,35 L900,10 L1000,15 V100 H0 Z" fill="url(#chartGradient)"></path>
<!-- Line -->
<path d="M0,80 L100,75 L200,85 L300,50 L400,60 L500,30 L600,45 L700,20 L800,35 L900,10 L1000,15" fill="none" stroke="#ff5a1f" stroke-linecap="round" stroke-width="2.5"></path>
</svg>
<div class="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
<div class="w-full flex justify-between text-tertiary/30 font-caption text-[10px] border-b border-outline-variant/5 pb-2">
<span>5.2 TB/s</span>
<span>LIVE CLOUD STREAM</span>
</div>
<div class="w-full h-[1px] bg-outline-variant/5"></div>
<div class="w-full h-[1px] bg-outline-variant/5"></div>
<div class="w-full h-[1px] bg-outline-variant/5"></div>
<div class="w-full flex justify-between text-tertiary/30 font-caption text-[10px] pt-2">
<span>08:00</span>
<span>12:00</span>
<span>16:00</span>
<span>20:00</span>
<span>00:00</span>
</div>
</div>
</div>
</section>
<!-- Bottom Two Column Section -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<!-- Left: Recent Deployments -->
<section class="lg:col-span-8">
<div class="flex items-center justify-between mb-6">
<h4 class="font-h1 text-h1 text-on-surface">Recent Deployments</h4>
<button class="text-ember font-label-sm text-label-sm uppercase tracking-wider hover:underline transition-all">View History</button>
</div>
<div class="w-full overflow-hidden">
<table class="w-full border-collapse">
<thead>
<tr class="text-left border-b border-outline-variant/20">
<th class="py-4 font-overline text-overline text-tertiary uppercase">Status</th>
<th class="py-4 font-overline text-overline text-tertiary uppercase">Service Name</th>
<th class="py-4 font-overline text-overline text-tertiary uppercase">Version</th>
<th class="py-4 font-overline text-overline text-tertiary uppercase">Timestamp</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/10">
<tr class="group hover:bg-surface-container-low transition-colors">
<td class="py-5">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-success animate-pulse"></span>
<span class="font-caption text-caption text-success uppercase">Success</span>
</div>
</td>
<td class="py-5 font-medium text-on-surface">core-api-gateway</td>
<td class="py-5"><code class="bg-ink-soft px-2 py-1 rounded text-ember text-xs">v2.4.12</code></td>
<td class="py-5 text-tertiary text-sm">2 mins ago</td>
</tr>
<tr class="group hover:bg-surface-container-low transition-colors">
<td class="py-5">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-success"></span>
<span class="font-caption text-caption text-success uppercase">Success</span>
</div>
</td>
<td class="py-5 font-medium text-on-surface">auth-microservice</td>
<td class="py-5"><code class="bg-ink-soft px-2 py-1 rounded text-ember text-xs">v1.9.0</code></td>
<td class="py-5 text-tertiary text-sm">14 mins ago</td>
</tr>
<tr class="group hover:bg-surface-container-low transition-colors">
<td class="py-5">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-ember animate-pulse"></span>
<span class="font-caption text-caption text-ember uppercase">Building</span>
</div>
</td>
<td class="py-5 font-medium text-on-surface">worker-node-delta</td>
<td class="py-5"><code class="bg-ink-soft px-2 py-1 rounded text-ember text-xs">v3.0.1-rc</code></td>
<td class="py-5 text-tertiary text-sm">Just now</td>
</tr>
<tr class="group hover:bg-surface-container-low transition-colors">
<td class="py-5">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-success"></span>
<span class="font-caption text-caption text-success uppercase">Success</span>
</div>
</td>
<td class="py-5 font-medium text-on-surface">storage-manager</td>
<td class="py-5"><code class="bg-ink-soft px-2 py-1 rounded text-ember text-xs">v4.2.0</code></td>
<td class="py-5 text-tertiary text-sm">1 hour ago</td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- Right: Infrastructure Status -->
<section class="lg:col-span-4">
<div class="flex items-center justify-between mb-6">
<h4 class="font-h1 text-h1 text-on-surface">Infrastructure</h4>
<span class="material-symbols-outlined text-tertiary">more_horiz</span>
</div>
<div class="space-y-4">
<!-- Service Item -->
<div class="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline-variant/10 group hover:border-ember/30 transition-all">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-ink-soft flex items-center justify-center text-ember">
<span class="material-symbols-outlined">key</span>
</div>
<div>
<p class="font-bold text-on-surface text-sm">Auth Service</p>
<p class="text-xs text-tertiary opacity-60">us-east-1</p>
</div>
</div>
<div class="text-right">
<span class="px-3 py-1 rounded-full bg-success/10 text-success font-caption text-caption uppercase border border-success/20">Operational</span>
<p class="text-[10px] text-tertiary mt-1">12ms latency</p>
</div>
</div>
<div class="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline-variant/10 group hover:border-ember/30 transition-all">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-ink-soft flex items-center justify-center text-ember">
<span class="material-symbols-outlined">database</span>
</div>
<div>
<p class="font-bold text-on-surface text-sm">Database Cluster</p>
<p class="text-xs text-tertiary opacity-60">eu-central-1</p>
</div>
</div>
<div class="text-right">
<span class="px-3 py-1 rounded-full bg-success/10 text-success font-caption text-caption uppercase border border-success/20">Operational</span>
<p class="text-[10px] text-tertiary mt-1">45ms latency</p>
</div>
</div>
<div class="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline-variant/10 group hover:border-ember/30 transition-all">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-ink-soft flex items-center justify-center text-ember">
<span class="material-symbols-outlined">cloud_circle</span>
</div>
<div>
<p class="font-bold text-on-surface text-sm">S3 Storage</p>
<p class="text-xs text-tertiary opacity-60">Global Edge</p>
</div>
</div>
<div class="text-right">
<span class="px-3 py-1 rounded-full bg-success/10 text-success font-caption text-caption uppercase border border-success/20">Operational</span>
<p class="text-[10px] text-tertiary mt-1">8ms latency</p>
</div>
</div>
<div class="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline-variant/10 group hover:border-ember/30 transition-all">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-ink-soft flex items-center justify-center text-ember">
<span class="material-symbols-outlined">wifi_tethering</span>
</div>
<div>
<p class="font-bold text-on-surface text-sm">Edge CDN</p>
<p class="text-xs text-tertiary opacity-60">24 Nodes</p>
</div>
</div>
<div class="text-right">
<span class="px-3 py-1 rounded-full bg-success/10 text-success font-caption text-caption uppercase border border-success/20">Operational</span>
<p class="text-[10px] text-tertiary mt-1">102ms latency</p>
</div>
</div>
</div>
</section>
</div>
</div>
<!-- Footer Anchor -->
<footer class="mt-auto bg-ink flex flex-row justify-between items-center px-6 md:px-margin-desktop py-stack-md w-full border-t border-outline-variant/5">
<div>
<p class="font-caption text-caption text-tertiary opacity-60">© 2024 DevOS Engineering. All systems operational.</p>
<div class="mt-1 flex gap-4">
<span class="font-overline text-overline text-tertiary/40">KERNEL: 5.15.0-x86_64</span>
<span class="font-overline text-overline text-tertiary/40">NODE: DEV-OS-ALPHA-01</span>
</div>
</div>
<div class="flex gap-6">
<a class="font-caption text-caption text-tertiary opacity-60 hover:text-ember transition-opacity uppercase" href="#">Privacy Policy</a>
<a class="font-caption text-caption text-tertiary opacity-60 hover:text-ember transition-opacity uppercase" href="#">Security Audit</a>
<a class="font-caption text-caption text-tertiary opacity-60 hover:text-ember transition-opacity uppercase" href="#">API Docs</a>
</div>
</footer>
</main>
<!-- Interactive Shader for background depth -->

<script>
    // Micro-interactions and interactions logic
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        // Subtle haptic-like scaling could be added here via JS if desired
      });
    });

    // Custom pulse effect for real-time monitoring feel
    setInterval(() => {
      const activePulse = document.querySelector('.animate-pulse');
      if(activePulse) {
        activePulse.style.boxShadow = \`0 0 ${Math.random() * 10 + 5}px rgba(52, 211, 153, 0.5)\`;
      }
    }, 1000);
  </script>` }} />
  );
}
