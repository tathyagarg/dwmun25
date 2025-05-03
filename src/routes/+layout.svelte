<script lang="ts">
  import logo from "$lib/images/logo.png";
  import "$lib/styles/global.css";

  let { children } = $props();
</script>

<nav
  class="flex flex-row items-center gap-[2em] fixed w-full px-[2.5em] py-[1em] box-border
  bg-[var(--bg1)]/20 backdrop-blur-2xl z-10"
>
  <div>
    <a href="/">
      <img src={logo} alt="logo" id="logo" />
    </a>
  </div>
  <a href="/resources">Resources</a>
  <a href="/committees">Committees</a>
  <a href="/secratariat">Secratariat</a>
</nav>

<div class="py-[1em] px-[2.5em]">
  {@render children()}
</div>

<style>
  a {
    height: fit-content;
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
