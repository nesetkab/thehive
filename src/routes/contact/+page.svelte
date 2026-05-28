<script lang="ts">
  const email = '3747hive@gmail.com';
  const address = '2165 E 9400 S, Sandy, UT 84093';

  const socials = [
    { name: 'Instagram', href: 'https://instagram.com/thehive3747' },
    { name: 'YouTube',   href: 'https://www.youtube.com/@thehive3747' },
    { name: 'GitHub',    href: 'https://github.com/The-Hive-3747' },
  ];
</script>

<main class="flex min-h-screen flex-col px-5 sm:px-10 lg:px-16 pt-24 sm:pt-40 pb-20 sm:pb-24 max-w-5xl mx-auto">
  <section class="flex flex-col gap-6 mb-12 sm:mb-20 max-w-3xl">
    <h1 class="text-4xl sm:text-6xl font-light leading-[1.05] tracking-tight rise" style="animation-delay:0ms">
      Let's <span class="text-accent">talk</span>
    </h1>
    <p class="text-lg text-foreground/60 leading-relaxed rise" style="animation-delay:220ms">
      Whether you're a student curious about joining, a company interested in sponsoring,
      or a teacher looking to bring STEM to your classroom — we'd love to hear from you.
    </p>
  </section>

  <section class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 mb-20 sm:mb-32">
    <form
      action="https://formspree.io/f/mpwdggon"
      method="POST"
      class="flex flex-col gap-6 rise"
      style="animation-delay:340ms"
    >
      <div class="flex flex-col gap-2">
        <label for="name" class="text-sm text-foreground/60">Name</label>
        <input
          type="text" name="name" id="name" required
          class="bg-transparent border-b border-foreground/20 focus:border-accent outline-none py-2 text-foreground"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="email" class="text-sm text-foreground/60">Email</label>
        <input
          type="email" name="email" id="email" required
          class="bg-transparent border-b border-foreground/20 focus:border-accent outline-none py-2 text-foreground"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="subject" class="text-sm text-foreground/60">Subject</label>
        <input
          type="text" name="subject" id="subject"
          class="bg-transparent border-b border-foreground/20 focus:border-accent outline-none py-2 text-foreground"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="message" class="text-sm text-foreground/60">Message</label>
        <textarea
          name="message" id="message" rows="5" required
          class="bg-transparent border-b border-foreground/20 focus:border-accent outline-none py-2 text-foreground resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        class="self-start mt-4 px-6 py-2.5 border border-foreground/20 hover:border-accent hover:text-accent transition-colors text-foreground text-base"
      >
        Send message →
      </button>
    </form>

    <aside class="flex flex-col gap-10 rise" style="animation-delay:460ms">
      <div class="flex flex-col gap-2">
        <a
          href="mailto:{email}"
          class="text-foreground/80 hover:text-accent transition-colors"
        >
          {email}
        </a>
      </div>

      <div class="flex flex-col gap-2">
        <p class="text-foreground/80 leading-relaxed">{address}</p>
        <a
          href="https://www.google.com/maps/search/?api=1&query={encodeURIComponent(address)}"
          target="_blank"
          rel="noopener noreferrer"
          class="text-foreground/60 hover:text-accent transition-colors text-sm w-fit"
        >
          Open in maps →
        </a>
      </div>

      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-2">
          {#each socials as social}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              class="text-foreground/80 hover:text-accent transition-colors w-fit"
            >
              {social.name} →
            </a>
          {/each}
        </div>
      </div>
    </aside>
  </section>
</main>
