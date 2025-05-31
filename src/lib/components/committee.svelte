<script lang="ts">
  export let data;
</script>

<div
  class="min-w-[75vw] h-[75vh] bg-(--bg1) flex flex-col justify-center items-center shrink rounded-2xl border-2 border-(--text) relative overflow-hidden"
>
  <div
    class="absolute w-full h-full top-0 left-0 z-0 bg-cover bg-center"
    style="background-image: url({data.bg}); background-color: rgba(from var(--bg2) r g b / 0.99); background-blend-mode: overlay;"
  ></div>
  <div
    class="flex flex-col w-full h-full justify-center items-center text-center text-(--text) z-10"
  >
    <h1 class="text-9xl">{data.name}</h1>
    <p class="text-3xl whitespace-pre-line">{data.agenda}</p>
  </div>
</div>
