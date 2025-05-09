<script lang="ts">
  import { onMount } from "svelte";

  export let src: string;
  export let alt: string;

  export let rotate: number = 0;

  const width = 18;
  var actualWidth: number;

  onMount(() => {
    const polaroid = document.getElementById("polaroid");
    if (polaroid) {
      actualWidth = polaroid.clientWidth;
    }
  });
</script>

<div
  class="aspect-[13/16] bg-(--text) p-[1vw] min-w-[100px] shadow-2xl shadow-black"
  style="width: {width}vw; rotate: {rotate}deg;"
  id="polaroid"
>
  <img
    {src}
    {alt}
    class="object-cover aspect-square"
    style="width: calc({actualWidth}px - 2vw);"
  />
  <p class="text-(--bg1) text-center text-xl m-[1vw] portrait:text-sm">{alt}</p>
</div>
