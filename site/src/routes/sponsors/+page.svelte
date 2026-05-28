<script lang="ts">
  const sponsors = [
    { name: 'Beehive Academy',           logo: '/logos/BeehiveAcademy.svg',     url: 'https://beehiveacademy.org' },
    { name: 'Aquaveo',                   logo: '/logos/Aquaveo.svg',            url: 'https://aquaveo.com/' },
    { name: 'DoD STEM',                  logo: '/logos/Dodstem.svg',            url: 'https://www.dodstem.us/' },
    { name: 'Haas Foundation',           logo: '/logos/Haas.svg',               url: 'https://www.ghaasfoundation.org/' },
    { name: 'Layshia Clarendon Found.',  logo: '/logos/LayshiaClarendon.svg',   url: 'https://www.athletesforimpact.com/thelayshiaclarendonfoundation' },
    { name: 'Motorola',                  logo: '/logos/Motorola.svg',           url: 'https://motorola.com/' },
    { name: 'Parker',                    logo: '/logos/Parker.svg',             url: 'https://www.parker.com/' },
    { name: 'Utah STEM Action Center',   logo: '/logos/STEMActionCenter.svg',   url: 'https://stem.utah.gov/' },
    { name: 'Utah Real Estate',          logo: '/logos/Utahrealestate.svg',     url: 'https://www.utahrealestate.com/' },
    { name: 'Jacobsen Innovations',      logo: '/logos/JacobsenInnovation.svg', url: 'https://jacobseninnovations.com/' },
  ];
</script>

<main class="flex min-h-screen flex-col px-5 sm:px-10 lg:px-16 pt-24 sm:pt-40 pb-20 sm:pb-24 max-w-5xl mx-auto">
  <section class="flex flex-col gap-6 mb-16 sm:mb-24 max-w-3xl">
    <h1 class="text-4xl sm:text-6xl font-light leading-[1.05] tracking-tight rise" style="animation-delay:0ms">
      The partners powering <span class="text-accent">The Hive</span>
    </h1>
    <p class="text-lg text-foreground/60 leading-relaxed rise" style="animation-delay:220ms">
      Every part on our robot, every trip to a competition, and every camp we host
      is made possible by the companies and foundations who back The Hive. Thank you.
    </p>
  </section>

  <section class="mb-20 sm:mb-32 rise" style="animation-delay:340ms">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
      {#each sponsors as sponsor}
        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={sponsor.name}
          class="bg-background flex items-center justify-center p-5 sm:p-8 h-24 sm:h-32 group transition-colors hover:bg-foreground/5"
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            class="max-h-full max-w-full opacity-60 group-hover:opacity-100 transition-opacity"
          />
        </a>
      {/each}
    </div>
  </section>

  <section class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 py-12 border-t border-foreground/10">
    <div class="flex flex-col gap-2 max-w-md">
      <h2 class="text-2xl sm:text-3xl font-light">Interested in sponsoring?</h2>
      <p class="text-foreground/60">Reach out and we'll send over our sponsorship packet.</p>
    </div>
    <a href="/contact" class="text-foreground hover:text-accent transition-colors text-lg whitespace-nowrap">
      Get in touch →
    </a>
  </section>
</main>
