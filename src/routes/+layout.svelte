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
  class="flex flex-row items-center gap-[4em] absolute w-full px-[2.5em] py-[1em] box-border
  z-10 portrait:gap-[2em]"
>
  <div>
    <a href="/">
      <img src="/logo.png" alt="logo" id="logo" />
    </a>
  </div>
  <a href="/resources">Resources</a>
  <a href="/committees">Committees</a>
  <a href="/secratariat">Secratariat</a>
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

  #logo {
    height: 5em;
    animation: fadeIn 5s ease infinite;
  }

  @keyframes fadeIn {
    from {
      filter: brightness(0.4);
    }
    50% {
      filter: brightness(1);
    }
    to {
      filter: brightness(0.4);
    }
  }

  @media (max-width: 1024px) {
    #logo {
      height: 3em;
    }
  }
</style>
