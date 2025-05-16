<script>
  const people = [
    {
      name: "Chirantana Hedge",
      role: "Secretary General",
      image: "/images/secretariat/chirantana.png",
    },
    {
      name: "Saachi Pathak",
      role: "Director General",
      image: "/images/secretariat/saachi.png",
    },
    {
      name: "Aarav Sinha",
      role: "Head of OC",
      image: "/images/secretariat/aarav.png",
    },
    {
      name: "Ipshita Basu",
      role: "Head of Design",
      image: "/images/secretariat/ipshita.png",
    },
    {
      name: "Advika",
      role: "Head of Design",
      image: "/images/secretariat/advika.png",
    },
    {
      name: "Niona Chakma",
      role: "Head of Social Media",
      image: "/images/secretariat/niona.png",
    },
    {
      name: "Tathya Garg",
      role: "Head of Tech",
      image: "/images/secretariat/tathya.png",
    },
    {
      name: "Kanika Mohan",
      role: "Head of Delegate Affairs",
      image: "/images/secretariat/kanika.png",
    },
    {
      name: "Tejus Reddy B",
      role: "Head of Logistics",
      image: "/images/secretariat/tejus.png",
    },
  ];
</script>

<section>
  <h1 class="text-center text-8xl mt-5 mb-25 portrait:text-5xl">Secretariat</h1>
  <div
    class="grid grid-cols-3 grid-rows-3 gap-[3em] w-[90%] mx-auto portrait:grid-cols-1 portrait:grid-rows-9 portrait:gap-[2em]"
  >
    {#each people as person}
      <div>
        <div
          class="aspect-square overflow-hidden rounded-full border-(--text) border-2 bg-(--text) w-[90%] mx-auto"
        >
          <div>
            <img
              src={person.image}
              alt={person.name}
              class="h-full w-full object-cover grayscale sepia-[0.3]"
            />
          </div>
        </div>
        <div class="border-(--text) p-4">
          <h1 class="text-[2.75rem] text-center mt-4">{person.name}</h1>
          <h2 class="text-2xl text-center">{person.role}</h2>
        </div>
      </div>
    {/each}
  </div>
</section>
