<script lang="ts">
  import LogoLoop from '$lib/LogoLoop.svelte';

  // Drop new thumbnails into site/static/ig/ and update this list when you post.
  const igPosts = [
    { img: '/ig/1.jpg', url: 'https://www.instagram.com/thehive3747/reel/DVQeuYqiMVZ/', caption: 'Most recent reel' },
    { img: '/ig/2.jpg', url: 'https://www.instagram.com/thehive3747/reel/DUGdhYHiNCp/', caption: '' },
    { img: '/ig/3.jpg', url: 'https://www.instagram.com/thehive3747/reel/DSY-Uz5DCqm/', caption: '' },
    { img: '/ig/4.jpg', url: 'https://www.instagram.com/thehive3747/reel/DSLtoqCkoCZ/', caption: '' },
  ];

  const sponsorLogos = [
    { src: '/logos/BeehiveAcademy.svg',     alt: 'Beehive Academy',          href: 'https://beehiveacademy.org' },
    { src: '/logos/Aquaveo.svg',            alt: 'Aquaveo',                  href: 'https://aquaveo.com/' },
    { src: '/logos/Dodstem.svg',            alt: 'DoD STEM',                 href: 'https://www.dodstem.us/' },
    { src: '/logos/Haas.svg',               alt: 'Haas Foundation',          href: 'https://www.ghaasfoundation.org/' },
    { src: '/logos/Motorola.svg',           alt: 'Motorola',                 href: 'https://motorola.com/' },
    { src: '/logos/Parker.svg',             alt: 'Parker',                   href: 'https://www.parker.com/' },
    { src: '/logos/LayshiaClarendon.svg',   alt: 'Layshia Clarendon Found.', href: 'https://www.athletesforimpact.com/thelayshiaclarendonfoundation' },
    { src: '/logos/STEMActionCenter.svg',   alt: 'Utah STEM Action Center',  href: 'https://stem.utah.gov/' },
    { src: '/logos/Utahrealestate.svg',     alt: 'Utah Real Estate',         href: 'https://www.utahrealestate.com/' },
    { src: '/logos/JacobsenInnovation.svg', alt: 'Jacobsen Innovations',     href: 'https://jacobseninnovations.com/' },
  ];
</script>

<main class="flex min-h-screen flex-col px-5 sm:px-10 lg:px-16 pt-24 sm:pt-32 pb-20 sm:pb-24 max-w-6xl mx-auto">
  <h1 class="lg:hidden text-4xl sm:text-6xl font-light leading-[1.05] tracking-tight mb-8 rise" style="animation-delay:0ms">
    A robotics team inspiring <span class="text-accent">STEM</span> in youth
  </h1>

  <section class="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center mb-20 sm:mb-32">
    <div class="flex flex-col gap-7 order-2 lg:order-1">
      <h1 class="hidden lg:block text-7xl font-light leading-[1.05] tracking-tight rise" style="animation-delay:0ms">
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

  <section class="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center mb-20 sm:mb-32">
    <figure class="rise" style="animation-delay:0ms">
      <div class="overflow-hidden border border-foreground/10 aspect-square">
        <img
          src="/robot.png"
          alt="The Hive 3747's competition robot."
          class="w-full h-full object-cover block"
        />
      </div>
    </figure>

    <div class="flex flex-col gap-6">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight rise" style="animation-delay:120ms">
        Build robots. <span class="text-accent">Grow STEM</span>
      </h2>
      <p class="text-lg text-foreground/60 leading-relaxed rise" style="animation-delay:280ms">
        Each season, we design, build, and program a semi-autonomous robot that
        competes in 2v2 matches against teams from across the country.
      </p>
      <p class="text-lg text-foreground/60 leading-relaxed rise" style="animation-delay:360ms">
        Alongside the technical work, we reach out to our community — and
        internationally — to grow STEM in youth through camps, workshops, and
        mentorship.
      </p>
    </div>
  </section>

  <section class="flex flex-col gap-5 sm:gap-6 mb-20 sm:mb-32">
    <div class="flex flex-col gap-4 rise">
      <h2 class="text-3xl sm:text-4xl font-light max-w-xl">Our sponsors make it possible</h2>
    </div>
    <div class="border-y border-foreground/10 py-8 rise" style="animation-delay:140ms">
      <LogoLoop
        logos={sponsorLogos}
        speed={50}
        direction="left"
        logoHeight={36}
        gap={64}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#0f0f14"
        ariaLabel="The Hive sponsors"
      />
    </div>
    <a href="/sponsors" class="text-foreground/60 hover:text-foreground transition-colors text-sm w-fit rise" style="animation-delay:260ms">
      View all sponsors →
    </a>
  </section>

  <section class="flex flex-col gap-6 mb-20 sm:mb-32">
    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 rise">
      <h2 class="text-3xl sm:text-4xl font-light max-w-xl">From The Hive on Instagram</h2>
      <a
        href="https://www.instagram.com/thehive3747/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-foreground/60 hover:text-accent transition-colors text-sm whitespace-nowrap"
      >
        @thehive3747 →
      </a>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 rise" style="animation-delay:140ms">
      {#each igPosts as post, i}
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={post.caption || `Instagram post ${i + 1}`}
          class="group relative block aspect-[3/4] overflow-hidden border border-foreground/10 bg-foreground/5"
        >
          <img
            src={post.img}
            alt={post.caption || ''}
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onerror={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.style.display = 'none';
              const parent = img.parentElement;
              if (parent) parent.classList.add('after:content-[\'IG\'] after:absolute after:inset-0 after:flex after:items-center after:justify-center after:text-foreground/20 after:text-xl after:tracking-widest');
            }}
          />
          <div class="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-end justify-start p-3">
            <span class="text-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View post →
            </span>
          </div>
        </a>
      {/each}
    </div>
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
