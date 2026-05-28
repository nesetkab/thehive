<script lang="ts">
  import { slide } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  let openYear = $state<string | null>(null);
  const toggle = (year: string) => {
    openYear = openYear === year ? null : year;
  };

  const banners = [
    { src: "/banners/2023-inspire.svg", label: "2023 · Inspire Award" },
    { src: "/banners/2023-winner.svg", label: "2023 · Winning Alliance" },
    { src: "/banners/2024-inspire.svg", label: "2024 · Inspire Award" },
    { src: "/banners/2024-winner.svg", label: "2024 · Winning Alliance" },
    { src: "/banners/2025-inspire.svg", label: "2025 · Inspire Award" },
  ];

  type Event = { name: string; awards: string[] };
  type Season = { year: string; events: Event[] };

  const seasons: Season[] = [
    {
      year: "2025",
      events: [
        {
          name: "UT-Beehive Scrimmage",
          awards: ["Winning Alliance 1st Team Selected"],
        },
        {
          name: "Treasure Valley FTC Qualifying Event",
          awards: ["Think Award", "Winning Alliance Captain"],
        },
        {
          name: "Freedom Preparatory Academy Qualifier",
          awards: ["Finalist Alliance Captain", "Inspire Award"],
        },
        {
          name: "Hurricane Qualifier",
          awards: ["Think Award", "Winning Alliance Captain"],
        },
        {
          name: "Freedom Preparatory Academy Scrimmage",
          awards: ["Winning Alliance Captain"],
        },
        {
          name: "Hillcrest Husky STEAM Labs Qualifier",
          awards: [
            "FIRST® Leadership Award Semi-Finalists",
            "Think Award",
            "Winning Alliance Captain",
          ],
        },
        {
          name: "Utah Championship",
          awards: [
            "FIRST® Leadership Award Finalists",
            "Compass Award",
            "Finalist Alliance 1st Team Selected",
            "Inspire Award",
          ],
        },
        {
          name: "FIRST Championship — Jackson Division",
          awards: ["Innovate Award sponsored by RTX, 2nd Place"],
        },
        { name: "FIRST Championship — FIRST Tech Challenge", awards: [] },
      ],
    },
    {
      year: "2024",
      events: [
        {
          name: "Beehive Academy Checkpoint Scrimmage",
          awards: ["Finalist Alliance 1st Team Selected"],
        },
        {
          name: "Freedom Prep Qualifier",
          awards: ["Finalist Alliance 1st Team Selected", "Inspire Award"],
        },
        {
          name: "Hurricane High Qualifier",
          awards: [
            "Innovate Award sponsored by RTX",
            "Winning Alliance 1st Team Selected",
          ],
        },
        {
          name: "FPA Phoenix Qualifier",
          awards: [
            "Connect Award, 2nd Place",
            "Design Award",
            "Winning Alliance Captain",
          ],
        },
        {
          name: "Park City Qualifier",
          awards: ["Connect Award", "Winning Alliance Captain"],
        },
        {
          name: "Utah Championship",
          awards: [
            "Dean's List Finalists",
            "Inspire Award",
            "Volunteer Award",
            "Winning Alliance Captain",
          ],
        },
        {
          name: "FIRST Championship — Franklin Division",
          awards: ["Motivate Award, 3rd Place"],
        },
        { name: "FIRST Championship — FIRST Tech Challenge", awards: [] },
      ],
    },
    {
      year: "2023",
      events: [
        {
          name: "UT Freedom Prep Academy Qualifier",
          awards: [
            "Connect Award, 2nd Place",
            "Innovate Award sponsored by RTX",
          ],
        },
        {
          name: "UT Hurricane High School Qualifier",
          awards: ["Inspire Award", "Winning Alliance Captain"],
        },
        { name: "UT American Academy of Innovation Qualifier", awards: [] },
        {
          name: "UT Park City High School Qualifier",
          awards: [
            "Control Award",
            "Motivate Award, 2nd Place",
            "Winning Alliance Captain",
          ],
        },
        {
          name: "Utah FTC Championship",
          awards: [
            "Connect Award, 3rd Place",
            "Inspire Award",
            "Winning Alliance Captain",
          ],
        },
        { name: "FIRST Championship presented by BAE Systems", awards: [] },
      ],
    },
    {
      year: "2022",
      events: [
        { name: "UT Freedom Prep Academy Qualifier", awards: [] },
        { name: "UT American Academy of Innovation Qualifier", awards: [] },
        {
          name: "UT AAI 2nd Qualifier",
          awards: ["Design Award", "Think Award, 3rd Place"],
        },
        { name: "Utah Championship", awards: [] },
      ],
    },
    {
      year: "2021",
      events: [
        {
          name: "UT Freedom Prep Academy Qualifier",
          awards: ["Winning Alliance 1st Team Selected"],
        },
        {
          name: "UT American Academy of Innovation Qualifier",
          awards: [
            "Innovate Award sponsored by Raytheon Technologies, 3rd Place",
            "Winning Alliance 1st Team Selected",
          ],
        },
        { name: "Utah Championship at Southern Utah University", awards: [] },
        { name: "Idaho State Championship", awards: [] },
      ],
    },
    {
      year: "2020",
      events: [
        {
          name: "UT FTC West High School Qualifier",
          awards: ["Judges' Award"],
        },
        {
          name: "UT FTC Freedom Prep Academy Qualifier",
          awards: [
            "Design Award, 2nd Place",
            "Inspire Award",
            "Motivate Award, 2nd Place",
            "Winning Alliance Captain",
          ],
        },
        {
          name: "UT FTC American Academy of Innovation Qualifier",
          awards: ["Design Award", "Finalist Alliance Captain"],
        },
        {
          name: "UT FTC State Championship",
          awards: ["Finalist Alliance 1st Team Selected"],
        },
      ],
    },
    {
      year: "2019",
      events: [
        { name: "West High Qualifier", awards: ["Compass Award"] },
        {
          name: "Park City Qualifier",
          awards: ["Collins Aerospace Innovate Award, 3rd Place"],
        },
        {
          name: "Southern Utah University Qualifier",
          awards: [
            "Connect Award, 3rd Place",
            "Design Award, 3rd Place",
            "Inspire Award, 3rd Place",
          ],
        },
        {
          name: "FIRST Tech Challenge Wyoming State Championship",
          awards: [
            "Collins Aerospace Innovate Award",
            "Finalist Alliance Captain",
          ],
        },
        { name: "FTC UT State Championship", awards: [] },
      ],
    },
  ];
</script>

<main
  class="flex min-h-screen flex-col px-5 sm:px-10 lg:px-16 pt-24 sm:pt-40 pb-20 sm:pb-24 max-w-5xl mx-auto"
>
  <section class="flex flex-col gap-5 mb-10 sm:mb-12 max-w-3xl">
    <h1
      class="text-4xl sm:text-6xl font-light leading-[1.05] tracking-tight rise"
      style="animation-delay:0ms"
    >
      Building <span class="text-accent">engineers</span>, not just robots
    </h1>
    <p
      class="text-lg text-foreground/60 leading-relaxed rise"
      style="animation-delay:220ms"
    >
      The Hive is a student-led
      <a
        href="https://www.firstinspires.org/programs/ftc/"
        target="_blank"
        rel="noopener noreferrer"
        style="text-decoration: underline; text-decoration-color: #ededed; text-decoration-thickness: 1px; text-underline-offset: 4px;"
        class="text-foreground hover:text-accent transition-colors"
        ><em>FIRST</em> Tech Challenge</a
      >
      team out of
      <a
        href="https://beehiveacademy.org"
        target="_blank"
        rel="noopener noreferrer"
        style="text-decoration: underline; text-decoration-color: #ededed; text-decoration-thickness: 1px; text-underline-offset: 4px;"
        class="text-foreground hover:text-accent transition-colors"
        >Beehive Academy</a
      >
      in Sandy, Utah.
    </p>
  </section>

  <section
    class="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 mb-12 sm:mb-16 rise"
    style="animation-delay:340ms"
  >
    <div class="bg-background flex flex-col gap-1 px-4 sm:px-5 py-6 sm:py-8">
      <span class="text-3xl sm:text-5xl font-light text-foreground">2009</span>
      <span class="text-xs text-foreground/40 uppercase tracking-wider"
        >Founded</span
      >
    </div>
    <div class="bg-background flex flex-col gap-1 px-4 sm:px-5 py-6 sm:py-8">
      <span class="text-3xl sm:text-5xl font-light text-foreground"
        >100<span class="text-accent">%</span></span
      >
      <span class="text-xs text-foreground/40 uppercase tracking-wider"
        >Student-led</span
      >
    </div>
    <div class="bg-background flex flex-col gap-1 px-4 sm:px-5 py-6 sm:py-8">
      <span class="text-3xl sm:text-5xl font-light text-foreground"
        >3<span class="text-accent">×</span></span
      >
      <span class="text-xs text-foreground/40 uppercase tracking-wider"
        >Inspire Awards</span
      >
    </div>
    <div class="bg-background flex flex-col gap-1 px-4 sm:px-5 py-6 sm:py-8">
      <span class="text-3xl sm:text-5xl font-light text-foreground">3</span>
      <span class="text-xs text-foreground/40 uppercase tracking-wider"
        >Worlds appearances</span
      >
    </div>
  </section>

  <section
    class="flex flex-col gap-6 mb-20 sm:mb-24 max-w-3xl rise"
    style="animation-delay:460ms"
  >
    <p class="text-foreground/60 leading-relaxed text-lg">
      Every decision & design, and all of our outreach is led by students. We do
      have industry mentors, but purely as a guide. Our overall team goal is to
      grow students that will become effective leaders in their respective
      communities.
    </p>
  </section>

  <section class="flex flex-col gap-10 mb-32">
    <div class="flex flex-col gap-4 max-w-3xl rise">
      <h2 class="text-3xl sm:text-4xl font-light">Outreach by the numbers</h2>
      <p class="text-foreground/60 leading-relaxed">
        Beyond competing, The Hive runs camps, workshops, and mentorship
        programs to bring robotics to students across Utah. We also are the
        Program Delivery Organization for Utah <em>FIRST</em> Lego League, delivering
        robotics to 187 teams.
      </p>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 rise"
      style="animation-delay:140ms"
    >
      <div class="bg-background flex flex-col gap-1 px-4 sm:px-5 py-6 sm:py-8">
        <span class="text-3xl sm:text-5xl font-light text-foreground"
          >2,028</span
        >
        <span class="text-xs text-foreground/40 uppercase tracking-wider"
          >Outreach hours</span
        >
      </div>
      <div class="bg-background flex flex-col gap-1 px-4 sm:px-5 py-6 sm:py-8">
        <span class="text-3xl sm:text-5xl font-light text-foreground">87</span>
        <span class="text-xs text-foreground/40 uppercase tracking-wider"
          >Outreach events</span
        >
      </div>
      <div class="bg-background flex flex-col gap-1 px-4 sm:px-5 py-6 sm:py-8">
        <span class="text-3xl sm:text-5xl font-light text-foreground">8</span>
        <span class="text-xs text-foreground/40 uppercase tracking-wider"
          >Teams mentored</span
        >
      </div>
    </div>
  </section>

  <section class="flex flex-col gap-12 mb-32">
    <div class="flex flex-col gap-4 rise">
      <h2 class="text-3xl sm:text-4xl font-light max-w-2xl">
        A team built season by season
      </h2>
      <p class="text-foreground/60 max-w-2xl leading-relaxed">
        Since 2009, The Hive has competed across Utah and at the World
        Championship, earning awards for engineering, outreach, and robot
        performance along the way.
      </p>
    </div>

    <div class="grid grid-cols-5 gap-1.5 sm:gap-4 items-end">
      {#each banners as b, i}
        <img
          src={b.src}
          alt={b.label}
          class="block w-full h-auto transition-transform duration-300 hover:-translate-y-1 drop-shadow-[0_18px_30px_rgba(250,90,0,0.18)] rise"
          style="animation-delay:{200 + i * 80}ms"
        />
      {/each}
    </div>

    <div class="flex flex-col">
      {#each seasons as season}
        {@const awardCount = season.events.reduce(
          (n, e) => n + e.awards.length,
          0,
        )}
        {@const isOpen = openYear === season.year}
        <div class="border-t border-foreground/10 last:border-b">
          <button
            type="button"
            onclick={() => toggle(season.year)}
            class="w-full grid grid-cols-[60px_1fr_auto] sm:grid-cols-[120px_1fr_auto] items-center gap-4 sm:gap-6 py-5 text-left group cursor-pointer"
            aria-expanded={isOpen}
          >
            <h3
              class="text-2xl sm:text-4xl font-light text-foreground/80 leading-none group-hover:text-accent transition-colors"
            >
              {season.year}
            </h3>
            <span
              class="text-foreground/60 text-xs sm:text-base group-hover:text-foreground transition-colors"
            >
              {season.events.length} event{season.events.length === 1
                ? ""
                : "s"} · {awardCount} award{awardCount === 1 ? "" : "s"}
            </span>
            <span
              class="text-foreground/40 text-sm select-none transition-transform duration-300 ease-out"
              style="transform: rotate({isOpen ? 45 : 0}deg)">+</span
            >
          </button>

          {#if isOpen}
            <ul
              transition:slide={{ duration: 300, easing: cubicOut }}
              class="flex flex-col gap-5 pb-8 pl-0 sm:pl-[120px] pr-2 overflow-hidden"
            >
              {#each season.events.slice().reverse() as event}
                <li class="flex flex-col gap-1.5">
                  <span class="text-foreground">{event.name}</span>
                  {#if event.awards.length}
                    <ul class="flex flex-col gap-1 pl-0">
                      {#each event.awards as award}
                        <li class="text-foreground/60 text-sm flex gap-3">
                          <span class="text-accent select-none">•</span>
                          <span>{award}</span>
                        </li>
                      {/each}
                    </ul>
                  {/if}
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      {/each}
    </div>
  </section>

  <section
    class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 py-12 border-t border-foreground/10"
  >
    <div class="flex flex-col gap-2 max-w-md">
      <h2 class="text-2xl sm:text-3xl font-light">Want to hear more?</h2>
      <p class="text-foreground/60">
        We'd love to hear from sponsors, mentors, prospective students, and
        anyone that has a question!
      </p>
    </div>
    <a
      href="/contact"
      class="text-foreground hover:text-accent transition-colors text-lg whitespace-nowrap"
    >
      Reach out →
    </a>
  </section>
</main>
