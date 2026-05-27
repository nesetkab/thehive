<script lang="ts">
  import { page } from '$app/state';

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Sponsors', href: '/sponsors' },
    { label: 'Contact', href: '/contact' },
  ];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-16 py-5 bg-background/80 backdrop-blur-sm">
  <a href="/" class="text-lg tracking-tight text-foreground">
    The Hive <span class="text-foreground/40">3747</span>
  </a>
  <div class="flex gap-8">
    {#each links as link}
      <a
        href={link.href}
        class="text-base transition-colors {page.url.pathname === link.href ? 'text-foreground' : 'text-foreground/40 hover:text-foreground/70'}"
      >
        {link.label}
      </a>
    {/each}
  </div>
</nav>
