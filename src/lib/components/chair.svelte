<script lang="ts">
  export let data;
</script>

<div class="h-full w-[90%] flex flex-row">
  <div
    class="h-full max-w-[50%] flex-1 bg-cover bg-center"
    style="background-image: url({data.image})"
  ></div>
  <div class="flex-1 flex flex-col justify-center">
    <h1 class="text-3xl text-center">{data.name}</h1>
    <p class="text-2xl text-center">{data.role}</p>
  </div>
</div>
