<script lang="ts">
  export let href: string;
  export let icon: string;
  export let alt: string;
</script>

<div
  class="w-1/4 portrait:w-1/2 aspect-square rounded-lg border-2 border-(--bg1) bg-(--bg1)/20 backdrop-blur-2xl"
>
  <a
    class="flex flex-col items-center justify-center text-center w-full h-full py-2"
    {href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img class="w-full h-full mb-4 p-4" src={icon} {alt} />
    <span class="text-lg font-semibold">{alt}</span>
  </a>
</div>
