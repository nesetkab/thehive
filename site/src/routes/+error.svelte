<script lang="ts">
  import { page } from "$app/state";
</script>

<main
  class="flex min-h-screen flex-col items-start justify-center px-6 sm:px-16 max-w-3xl mx-auto -mt-16">
  <div class="flex flex-col gap-8">
    <p
      class="text-sm tracking-widest uppercase text-foreground/40 rise"
      style="animation-delay:0ms">
      Error {page.status}
    </p>
    <h1
      class="font-light leading-[0.95] tracking-tight rise"
      style="animation-delay:120ms; font-size: clamp(3rem, 11vw, 3rem)">
      {#if page.status === 404}
        Page not found :(
      {:else}
        Something broke :(
      {/if}
    </h1>
    <div
      class="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4 rise"
      style="animation-delay:360ms">
      <a
        href="/"
        class="px-5 py-2.5 border border-foreground/20 hover:border-foreground/60 transition-colors text-foreground text-base">
        Back to home
      </a>
    </div>
  </div>
</main>
