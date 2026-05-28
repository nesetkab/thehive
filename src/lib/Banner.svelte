<script lang="ts">
  interface Props {
    award: string;
    year: string;
    event: string;
  }
  let { award, year, event }: Props = $props();
</script>

<div class="banner">
  <div class="banner-inner">
    <div class="banner-top">
      <svg viewBox="0 0 64 64" class="banner-icon" aria-hidden="true">
        <polygon points="32,4 60,18 60,46 32,60 4,46 4,18" fill="none" stroke="currentColor" stroke-width="3"/>
        <polygon points="32,18 48,26 48,42 32,50 16,42 16,26" fill="currentColor" opacity="0.9"/>
      </svg>
      <span class="banner-award">{award}</span>
    </div>

    <span class="banner-winner">WINNER</span>

    <div class="banner-bottom">
      <span class="banner-year">{year}</span>
      <span class="banner-event">{event}</span>
    </div>
  </div>
</div>

<style>
  .banner {
    --banner-bg: #e8651b;
    --banner-fg: #ffffff;
    width: 100%;
    max-width: 220px;
    aspect-ratio: 5 / 7;
    background: var(--banner-bg);
    color: var(--banner-fg);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 88%, 0 100%);
    padding: 1.25rem 1rem 2.25rem;
    box-shadow: 0 20px 40px -20px rgba(232, 101, 27, 0.35);
    transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  .banner:hover {
    transform: translateY(-4px);
  }
  .banner-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 100%;
    gap: 0.5rem;
  }
  .banner-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .banner-icon {
    width: 56px;
    height: 56px;
    color: var(--banner-fg);
  }
  .banner-award {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    opacity: 0.9;
  }
  .banner-winner {
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 0.05em;
    border-top: 1px solid rgba(255, 255, 255, 0.35);
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
    padding: 0.5rem 1rem;
  }
  .banner-bottom {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    padding-bottom: 0.5rem;
  }
  .banner-year {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.05em;
  }
  .banner-event {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.85;
  }
</style>
