<script lang="ts">
  import '../app.css';
  import Nav from '$lib/Nav.svelte';

  let { children } = $props();
</script>

<div class="relative min-h-screen bg-background">
  <Nav />
  <div class="relative z-10">
    {@render children()}
  </div>
</div>
