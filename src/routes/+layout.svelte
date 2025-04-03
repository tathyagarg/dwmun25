<script lang="ts">
  import logo from "$lib/images/logo.png";
  import { onMount } from "svelte";

  let { children } = $props();
  let isVisible = $state(false);

  onMount(() => {
    const nav = document.querySelector("nav");

    nav?.addEventListener("mouseover", () => {
      isVisible = true;
    });

    nav?.addEventListener("mouseleave", () => {
      isVisible = false;
    });
  });
</script>

<nav>
  <div id="right">
    <a href="/">
      <img src={logo} alt="logo" id="logo" />
    </a>
  </div>
  <div id="links" class:visible={isVisible}>
    <hr style="width: 5em;" />
    <a href="/resources">Resources</a>
    <a href="/committees">Committees</a>
    <a href="/secratariat">Secratariat</a>
  </div>
</nav>

{@render children()}

<style>
  @font-face {
    font-family: "Kuchek";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/Kuchek.ttf") format("truetype");
  }

  @font-face {
    font-family: "JuliusSans";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/JuliusSansOne.ttf") format("truetype");
  }

  :global(:root) {
    --bg1: #141f14;
    --bg2: #1a241a;
    --bg3: #1a3421;
    --bg4: #1a2421;

    --text: #cfc8b5;
    --text-emphasis: #fff;
  }

  :global(body) {
    background-color: var(--bg1);
    color: var(--text);

    height: 100vh;
    width: 100vw;

    margin: 0;
    padding: 0;

    font-family: "JuliusSans";
  }

  :global(a:not(.default)) {
    color: var(--text);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--text-emphasis);
    }
  }

  nav {
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    position: absolute;
    width: fit-content;
  }

  #links a {
    text-align: left;
    padding: 0.5em 1em;
    font-size: 1.2em;
  }

  #links hr {
    border-top: 1px solid var(--text);
    margin: 1em;
  }

  #right {
    padding: 1em 0 0 1em;
    width: fit-content;

    width: 7em;
  }

  #right a {
    margin: 0 auto;
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

  #links {
    display: flex;
    flex-direction: column;
    transform: translateX(-10em);
    transition: transform 0.2s;

    width: 7em;
  }

  #links.visible {
    transform: translateX(0);
    transition: transform 0.2s;
  }
</style>
