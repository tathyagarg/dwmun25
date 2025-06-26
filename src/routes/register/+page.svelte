<script lang="ts">
  import Reglink from "$lib/components/reglink.svelte";
</script>

<section class="h-full pb-12">
  <h1 class="text-8xl text-center">Register</h1>
  <div class="flex flex-row justify-around items-center w-screen h-full mt-12">
    <Reglink
      href={"https://forms.gle/23wcSJvQYCubwBTh9"}
      icon={"/images/icons/individual.svg"}
      alt={"Individual Registration"}
    />
    <Reglink
      href={"https://forms.gle/NnjHAo3B1NCmF9mb8"}
      icon={"/images/icons/group.svg"}
      alt={"Delegation Registration"}
    />
  </div>
</section>
