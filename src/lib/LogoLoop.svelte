<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  type ImgLogo = { src: string; alt?: string; href?: string; title?: string };
  type NodeLogo = { html: string; href?: string; title?: string; ariaLabel?: string };
  export type LogoItem = ImgLogo | NodeLogo;

  interface Props {
    logos: LogoItem[];
    speed?: number;
    direction?: 'left' | 'right';
    logoHeight?: number;
    targetWidth?: number;
    maxHeightScale?: number;
    gap?: number;
    pauseOnHover?: boolean;
    hoverSpeed?: number;
    fadeOut?: boolean;
    fadeOutColor?: string;
    scaleOnHover?: boolean;
    ariaLabel?: string;
    class?: string;
  }

  let {
    logos,
    speed = 120,
    direction = 'left',
    logoHeight = 28,
    targetWidth = 130,
    maxHeightScale = 2,
    gap = 32,
    pauseOnHover = false,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    ariaLabel = 'Partner logos',
    class: className = '',
  }: Props = $props();

  let containerEl: HTMLDivElement;
  let trackEl: HTMLDivElement;
  let seqEl: HTMLUListElement;

  let seqWidth = $state(0);
  let copyCount = $state(2);
  let hovered = $state(false);

  const effectiveHoverSpeed = $derived(
    hoverSpeed !== undefined ? hoverSpeed : pauseOnHover ? 0 : undefined
  );

  const targetVelocity = $derived(
    Math.abs(speed) * (direction === 'left' ? 1 : -1) * (speed < 0 ? -1 : 1)
  );

  let raf: number | null = null;
  let lastTs: number | null = null;
  let offset = 0;
  let velocity = 0;
  const SMOOTH_TAU = 0.25;

  function measure() {
    if (!containerEl || !seqEl) return;
    const rect = seqEl.getBoundingClientRect();
    if (rect.width > 0) {
      seqWidth = Math.ceil(rect.width);
      const need = Math.ceil(containerEl.clientWidth / seqWidth) + 2;
      copyCount = Math.max(2, need);
    }
  }

  function tick(ts: number) {
    if (lastTs === null) lastTs = ts;
    const dt = Math.max(0, ts - lastTs) / 1000;
    lastTs = ts;

    const target = hovered && effectiveHoverSpeed !== undefined ? effectiveHoverSpeed : targetVelocity;
    const ease = 1 - Math.exp(-dt / SMOOTH_TAU);
    velocity += (target - velocity) * ease;

    if (seqWidth > 0) {
      let next = offset + velocity * dt;
      next = ((next % seqWidth) + seqWidth) % seqWidth;
      offset = next;
      if (trackEl) trackEl.style.transform = `translate3d(${-offset}px, 0, 0)`;
    }
    raf = requestAnimationFrame(tick);
  }

  let ro: ResizeObserver | null = null;

  onMount(() => {
    measure();
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => measure());
      ro.observe(containerEl);
      ro.observe(seqEl);
    } else {
      window.addEventListener('resize', measure);
    }
    const allImgs = containerEl?.querySelectorAll('img') ?? [];
    const sized = (img: HTMLImageElement) => {
      const aspect = img.naturalWidth / Math.max(1, img.naturalHeight);
      if (!isFinite(aspect) || aspect <= 0) return;
      const idealH = targetWidth / aspect;
      const h = Math.min(logoHeight * maxHeightScale, Math.max(logoHeight, idealH));
      img.style.height = `${h}px`;
      img.style.maxHeight = 'none';
    };
    let pending = allImgs.length;
    if (pending === 0) measure();
    allImgs.forEach((img) => {
      const i = img as HTMLImageElement;
      if (i.complete && i.naturalWidth > 0) {
        sized(i);
        pending--; if (pending === 0) measure();
      } else {
        const done = () => { sized(i); pending--; if (pending === 0) measure(); };
        i.addEventListener('load', done, { once: true });
        i.addEventListener('error', () => { pending--; if (pending === 0) measure(); }, { once: true });
      }
    });
    raf = requestAnimationFrame(tick);
  });

  onDestroy(() => {
    if (raf !== null) cancelAnimationFrame(raf);
    ro?.disconnect();
    if (typeof window !== 'undefined') window.removeEventListener('resize', measure);
  });

  const onEnter = () => { if (effectiveHoverSpeed !== undefined) hovered = true; };
  const onLeave = () => { if (effectiveHoverSpeed !== undefined) hovered = false; };

  const isImg = (l: LogoItem): l is ImgLogo => 'src' in l;
</script>

<div
  bind:this={containerEl}
  class="logoloop {fadeOut ? 'logoloop--fade' : ''} {scaleOnHover ? 'logoloop--scale-hover' : ''} {className}"
  style="--logoloop-gap: {gap}px; --logoloop-logoHeight: {logoHeight}px; {fadeOutColor ? `--logoloop-fadeColor: ${fadeOutColor};` : ''}"
  role="region"
  aria-label={ariaLabel}
>
  <div
    class="logoloop__track"
    bind:this={trackEl}
    onmouseenter={onEnter}
    onmouseleave={onLeave}
    role="presentation"
  >
    {#each Array(copyCount) as _, c}
      <ul
        class="logoloop__list"
        role="list"
        aria-hidden={c > 0}
        bind:this={seqEl}
      >
        {#each logos as logo, i (c + '-' + i)}
          <li class="logoloop__item" role="listitem">
            {#if logo.href}
              <a class="logoloop__link" href={logo.href} target="_blank" rel="noreferrer noopener" aria-label={isImg(logo) ? (logo.alt ?? logo.title ?? '') : (logo.ariaLabel ?? logo.title ?? '')}>
                {#if isImg(logo)}
                  <img src={logo.src} alt={logo.alt ?? ''} title={logo.title} loading="lazy" decoding="async" draggable="false" />
                {:else}
                  <span class="logoloop__node">{@html logo.html}</span>
                {/if}
              </a>
            {:else if isImg(logo)}
              <img src={logo.src} alt={logo.alt ?? ''} title={logo.title} loading="lazy" decoding="async" draggable="false" />
            {:else}
              <span class="logoloop__node">{@html logo.html}</span>
            {/if}
          </li>
        {/each}
      </ul>
    {/each}
  </div>
</div>

<style>
  .logoloop {
    position: relative;
    overflow: hidden;
    --logoloop-gap: 32px;
    --logoloop-logoHeight: 28px;
    --logoloop-fadeColor: transparent;
  }
  .logoloop--scale-hover {
    padding-top: calc(var(--logoloop-logoHeight) * 0.1);
    padding-bottom: calc(var(--logoloop-logoHeight) * 0.1);
  }
  .logoloop__track {
    display: flex;
    width: max-content;
    will-change: transform;
    user-select: none;
    position: relative;
    z-index: 0;
  }
  .logoloop__list {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .logoloop__item {
    flex: 0 0 auto;
    margin-right: var(--logoloop-gap);
    font-size: var(--logoloop-logoHeight);
    line-height: 1;
  }
  .logoloop__item img {
    height: var(--logoloop-logoHeight);
    width: auto;
    display: block;
    object-fit: contain;
    image-rendering: -webkit-optimize-contrast;
    pointer-events: none;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
    opacity: 0.8;
  }
  .logoloop__item:hover img {
    opacity: 1;
  }
  .logoloop__node {
    display: inline-flex;
    align-items: center;
  }
  .logoloop--scale-hover .logoloop__item:hover img,
  .logoloop--scale-hover .logoloop__item:hover .logoloop__node {
    transform: scale(1.15);
    transform-origin: center;
  }
  .logoloop__link {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    border-radius: 4px;
  }
  .logoloop--fade::before,
  .logoloop--fade::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: clamp(24px, 10%, 140px);
    pointer-events: none;
    z-index: 10;
  }
  .logoloop--fade::before {
    left: 0;
    background: linear-gradient(to right, var(--logoloop-fadeColor) 0%, rgba(0,0,0,0) 100%);
  }
  .logoloop--fade::after {
    right: 0;
    background: linear-gradient(to left, var(--logoloop-fadeColor) 0%, rgba(0,0,0,0) 100%);
  }
  @media (prefers-reduced-motion: reduce) {
    .logoloop__track { transform: translate3d(0,0,0) !important; }
    .logoloop__item img { transition: none !important; }
  }
</style>
