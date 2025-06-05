<script lang="ts">
  export let data;
</script>

<div class="h-full w-full">
  <div
    class="h-[90%] bg-cover bg-center"
    style="background-image: url({data.image})"
  ></div>
  <h1 class="text-lg text-center">{data.name}</h1>
  <p class="text-center">{data.role}</p>
</div>
