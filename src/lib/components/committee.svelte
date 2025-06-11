<script lang="ts">
  export let data;
</script>

<a href="/committees/{data.slug}">
  <div
    class="min-w-[75vw] h-[75vh] bg-(--bg1) flex flex-col justify-center items-center shrink rounded-2xl border-2 border-(--text) relative overflow-hidden"
  >
    <div
      class="absolute w-full h-full top-0 left-0 z-0 bg-cover bg-center"
      style="background-image: url({data.img}); background-color: rgba(var(--bg2), 0.99); background-blend-mode: overlay;"
    ></div>
    <div
      class="flex flex-col w-[75%] h-full justify-center items-center text-center text-(--text) z-10"
    >
      <h1 class="text-9xl mb-12 portrait:text-3xl">{data.name}</h1>
      <p class="text-3xl whitespace-pre-line portrait:text-sm">{data.agenda}</p>
    </div>
  </div>
</a>
