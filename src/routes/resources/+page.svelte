<script>
  const divs = [
    { id: 1, text: "Hello" },
    { id: 2, text: "World" },
    { id: 3, text: "!" },
    { id: 1, text: "Hello" },
    { id: 2, text: "World" },
    { id: 3, text: "!" },
  ];

  const colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
  ];
</script>

<div class="flex gap-[2em]" id="marq">
  {#each divs.concat(divs) as _, i}
    <div
      class="min-w-[33vw] aspect-square"
      style="background-color: {colors[i % colors.length]};"
    ></div>
  {/each}
</div>

<style>
  #marq {
    animation: marq 2s linear infinite;
    width: fit-content;
  }

  @keyframes marq {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>
