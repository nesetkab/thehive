<script lang="ts">
  const sponsors = [
    { name: 'Beehive Academy', logo: '/logos/BeehiveAcademy.svg', url: 'https://beehiveacademy.org' },
    { name: 'Aquaveo', logo: '/logos/Aquaveo.svg', url: 'https://aquaveo.com/' },
    { name: 'DoD STEM', logo: '/logos/Dodstem.svg', url: 'https://www.dodstem.us/' },
    { name: 'Haas Foundation', logo: '/logos/Haas.svg', url: 'https://www.ghaasfoundation.org/' },
    { name: 'Motorola', logo: '/logos/Motorola.svg', url: 'https://motorola.com/' },
    { name: 'Parker', logo: '/logos/Parker.svg', url: 'https://www.parker.com/' },
  ];
</script>

<main class="flex min-h-screen flex-col px-6 sm:px-16 pt-32 pb-24 max-w-6xl mx-auto">
  <section class="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center mb-32">
    <div class="flex flex-col gap-7 order-2 lg:order-1">
      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight rise" style="animation-delay:0ms">
        A robotics team inspiring <span class="text-accent">STEM</span> in youth
      </h1>
      <p class="text-lg text-foreground/60 max-w-xl leading-relaxed rise" style="animation-delay:220ms">
        The Hive is a student-led high school robotics team based out of Sandy, Utah,
        competing in
        <a
          href="https://www.firstinspires.org/programs/ftc/"
          target="_blank"
          rel="noopener noreferrer"
          style="text-decoration: underline; text-decoration-color: #ededed; text-decoration-thickness: 1px; text-underline-offset: 4px;"
          class="text-foreground hover:text-accent transition-colors"
        ><em>FIRST</em> Tech Challenge</a>.
        We work to prepare and inspire the next generation of STEM innovators.
      </p>
      <div class="flex flex-wrap items-center gap-x-6 gap-y-3 mt-2 rise" style="animation-delay:340ms">
        <a href="/about" class="px-5 py-2.5 border border-foreground/20 hover:border-foreground/60 transition-colors text-foreground text-base">
          Learn more
        </a>
        <a href="/sponsors" class="px-5 py-2.5 text-accent hover:text-foreground transition-colors text-base">
          Our sponsors →
        </a>
      </div>
    </div>

    <figure class="flex flex-col gap-3 order-1 lg:order-2 rise" style="animation-delay:160ms">
      <div class="overflow-hidden border border-foreground/10">
        <img
          src="/winners.jpg"
          alt="The Hive 3747 celebrating after winning the 2024 Utah Championship."
          class="w-full h-auto block"
        />
      </div>
      <figcaption class="text-sm text-foreground/40 tracking-wide">
        The team after winning the <span class="text-foreground/70">2024 Utah Championship</span>.
      </figcaption>
    </figure>
  </section>

  <section class="flex flex-col gap-12 mb-32">
    <div class="flex flex-col gap-4 rise">
      <p class="text-sm tracking-widest uppercase text-foreground/40">Supported by</p>
      <h2 class="text-3xl sm:text-4xl font-light max-w-xl">Our sponsors make it possible</h2>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-foreground/10 border border-foreground/10 rise" style="animation-delay:140ms">
      {#each sponsors as sponsor}
        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={sponsor.name}
          class="bg-background flex items-center justify-center p-6 h-24 group"
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            class="max-h-full max-w-full opacity-50 group-hover:opacity-100 transition-opacity"
          />
        </a>
      {/each}
    </div>
    <a href="/sponsors" class="text-foreground/60 hover:text-foreground transition-colors text-sm w-fit rise" style="animation-delay:260ms">
      View all sponsors →
    </a>
  </section>

  <section class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 py-14 border-t border-foreground/10">
    <div class="flex flex-col gap-3 max-w-md">
      <h2 class="text-2xl sm:text-3xl font-light">Want to support the team?</h2>
      <p class="text-foreground/60 leading-relaxed">We'd love to hear from sponsors, mentors, and prospective students.</p>
    </div>
    <a href="/contact" class="text-foreground hover:text-accent transition-colors text-lg whitespace-nowrap">
      Get in touch →
    </a>
  </section>
</main>
