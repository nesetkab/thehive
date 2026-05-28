<script lang="ts">
  import { page } from '$app/state';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Sponsors', href: '/sponsors' },
    { label: 'Contact', href: '/contact' },
  ];

  let open = $state(false);

  $effect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = open ? 'hidden' : '';
  });
</script>

<nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-4 sm:px-16 py-4 sm:py-5 bg-background/80 backdrop-blur-sm">
  <a href="/" aria-label="The Hive 3747 — home" class="flex items-center shrink-0 relative z-[60]">
    <img src="/hive-long.svg" alt="The Hive 3747" class="h-5 w-auto block" />
  </a>

  <!-- Desktop links -->
  <div class="hidden sm:flex gap-8">
    {#each links as link}
      <a
        href={link.href}
        class="text-base transition-colors {page.url.pathname === link.href ? 'text-foreground' : 'text-foreground/40 hover:text-foreground/70'}"
      >
        {link.label}
      </a>
    {/each}
  </div>

  <!-- Hamburger (mobile only) -->
  <button
    type="button"
    onclick={() => (open = !open)}
    aria-label={open ? 'Close menu' : 'Open menu'}
    aria-expanded={open}
    class="sm:hidden relative z-[60] flex flex-col justify-center items-end gap-1.5 w-8 h-8 cursor-pointer"
  >
    <span
      class="block h-px bg-foreground transition-all duration-300 origin-center"
      style="width: 20px; transform: {open ? 'translateY(3.5px) rotate(45deg)' : 'translateY(0) rotate(0)'};"
    ></span>
    <span
      class="block h-px bg-foreground transition-all duration-300 origin-center"
      style="width: 20px; transform: {open ? 'translateY(-3.5px) rotate(-45deg)' : 'translateY(0) rotate(0)'};"
    ></span>
  </button>
</nav>

<!-- Mobile fullscreen menu -->
{#if open}
  <div
    class="sm:hidden fixed inset-0 z-40 bg-background flex flex-col items-start justify-center px-8 gap-6"
    transition:fade={{ duration: 200 }}
  >
    {#each links as link, i}
      <a
        href={link.href}
        onclick={() => (open = false)}
        class="text-4xl font-light transition-colors {page.url.pathname === link.href ? 'text-accent' : 'text-foreground hover:text-accent'}"
        in:fly={{ y: 14, duration: 350, delay: 80 + i * 60, easing: cubicOut }}
      >
        {link.label}
      </a>
    {/each}
  </div>
{/if}
