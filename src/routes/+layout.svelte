<script lang="ts">
  let { children } = $props();
  import logo from "$lib/images/logo.png";
</script>

<nav>
  <div id="left">
    <a href="/">
      <img src={logo} alt="logo" id="logo" />
    </a>
  </div>
  <div id="right">
    <a href="/commitees">Commitees</a>
    <a href="/resources">Resources</a>
    <a href="/secretariat">Secretariat</a>
  </div>
</nav>

<div id="blobs">
  {#each Array(20)}
    <div
      class="blob"
      style="
        top: {Math.random() * 100}%;
        left: {Math.random() * 100}%;
        width: {Math.random() * 100 + 100}px;
        background-color: var(--bg{Math.floor(Math.random() * 4) + 1});
        filter: blur(20px);
      "
    ></div>
  {/each}
</div>

{@render children()}

<style>
  :global(:root) {
    --bg: #141f14;
    --bg2: #192616;
    --bg3: #212e1c;
    --bg4: #22321b;

    --text: #cfc8b5;
    --text-emphasis: #fff;
  }

  :global(body) {
    background-color: var(--bg);
    color: var(--text);
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
    justify-content: space-between;
    padding: 0 5em;
  }

  #right {
    flex-grow: 0.5;
    padding: 1.5em;

    display: flex;
    gap: 2em;

    justify-content: space-around;
  }

  #logo {
    height: 4em;
  }

  #blobs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;

    overflow: hidden;
  }

  .blob {
    position: absolute;

    aspect-ratio: 1;

    border-radius: 50%;
    opacity: 0.5;

    animation: move 10s infinite;
  }
</style>
