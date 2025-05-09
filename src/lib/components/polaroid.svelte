<script lang="ts">
  export let src: string;
  export let alt: string;

  export let rotate: number = 0;

  const width = 18;
</script>

<div
  class="aspect-[13/16] bg-(--text) p-[1vw] shadow-2xl shadow-black"
  style="width: {width}vw; rotate: {rotate}deg;"
>
  <img
    {src}
    {alt}
    class="object-cover aspect-square"
    style="width: {width - 2}vw;"
  />
  <p class="text-(--bg1) text-center text-xl m-[1vw]">{alt}</p>
</div>
