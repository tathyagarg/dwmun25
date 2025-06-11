<script lang="ts">
  import Footer from "$lib/components/footer.svelte";
  import "$lib/styles/global.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>DWMUN'25</title>
  <link rel="icon" href="/logo.png" type="image/png" />
</svelte:head>

<nav
  class="flex flex-row items-center gap-[4em] w-full px-[2.5em] py-[1em] box-border
  z-10 portrait:gap-[1em] portrait:px-[1em]"
>
  <div>
    <a href="/" class="h-fit w-fit">
      <img
        src="/logo.png"
        alt="logo"
        class="h-[5em] aspect-square animate-fadein portrait:h-[3em] portrait:min-w-[3em]"
      />
    </a>
  </div>
  <a href="/committees">Committees</a>
  <a href="/secretariat">Secretariat</a>
  <a href="/register">Register</a>
  <a href="https://rcb1934.in/"
    ><img src="/images/rotary.png" alt="logo" class="h-[3em]" /></a
  >
</nav>

<div>
  {@render children()}
</div>

<Footer />

<style>
  a {
    height: fit-content;
    font-size: clamp(0.5em, 2.5vw, 1em);
  }
</style>
