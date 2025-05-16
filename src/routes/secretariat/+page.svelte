<script>
  const people = [
    {
      name: "Chirantana Hedge",
      role: "Secretary General",
      image: "/images/secretariat/chirantana.png",
    },
  ];
</script>

<section>
  <h1 class="text-center text-8xl">Secretariat</h1>
  <div class="grid grid-cols-3 grid-rows-3 w-[90%] mx-auto">
    {#each people as person}
      <div class="">
        <div
          class="border-(--text) border-x-2 border-t-2 pt-4 rounded-t-xl bg-(--bg1)"
        >
          <h1 class="text-4xl text-center">{person.name}</h1>
          <h2 class="text-center">{person.role}</h2>
          <br />
        </div>
        <div
          class="w-full overflow-hidden bg-(--text) p-4 rounded-b-xl border-(--bg1) border-x-2 border-b-2"
        >
          <img
            src={person.image}
            alt={person.name}
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    {/each}
  </div>
</section>
