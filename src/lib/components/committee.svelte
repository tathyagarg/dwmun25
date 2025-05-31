<script lang="ts">
  export let data;
</script>

<div
  class="min-w-[75vw] h-[75vh] bg-(--bg1) flex flex-col justify-center items-center shrink rounded-md border-2 border-(--text) relative"
>
  <div
    class="absolute w-full h-full top-0 left-0 z-0 bg-cover bg-center"
    style="background-image: url({data.bg}); background-blend-mode: overlay; background-color: rgba(from var(--bg2) r g b / 0.9);"
  ></div>
  <div
    class="flex flex-col w-full h-full justify-center items-center text-center text-(--text) z-10"
  >
    <h1 class="text-8xl">{data.name}</h1>
    <p class="text-2xl whitespace-pre-line">{data.agenda}</p>
  </div>
</div>
