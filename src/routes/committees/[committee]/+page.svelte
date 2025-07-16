<script lang="ts">
  import Chair from "$lib/components/chair.svelte";

  let { data } = $props();
  let { committee, allos } = data;

  let curr = $state(0);
  let curr_other = $state(0);

  function goTo(index: number) {
    curr = index;
  }

  function switchText() {
    curr_other = (curr_other + 1) % 2;
  }

  let p1_heading = "";
  let p2_heading = "";

  let p1_allos: any[] | null = null;
  let p2_allos: any[] = [];

  if (committee.name === "CCC") {
    let pakistan_pm_idx = 0;
    for (let i = 0; i < allos.length; i++) {
      if (allos[i].alloc === "Shehbaz Sharif") {
        pakistan_pm_idx = i;
        break;
      }
    }

    p1_heading = "Indian Cabinet";
    p2_heading = "Pakistan Cabinet";

    p1_allos = allos.slice(0, pakistan_pm_idx);
    p2_allos = allos.slice(pakistan_pm_idx);
  }

  console.log(p1_allos, p2_allos, allos);
</script>

<section class="w-screen h-screen portrait:h-fit">
  <div
    class="grid grid-cols-5 grid-rows-6 w-full h-full p-8 *:border-2 *:border-(--text) *:bg-(--bg1) gap-x-4 portrait:grid-cols-2 portrait:grid-rows-5 portrait:gap-y-2 portrait:h-[200vh]"
  >
    <div
      class="col-start-1 col-span-3 row-start-1 row-span-6 flex flex-col justify-center items-center p-8 portrait:p-2 rounded-2xl relative portrait:col-start-1 portrait:col-span-2 portrait:row-start-1 portrait:row-span-2"
    >
      <div
        class="absolute w-full h-full pointer-events-none flex items-center justify-center"
      >
        <img
          src={committee.logo}
          alt="Committee Logo"
          class="w-[90%] m-[5%] object-cover opacity-10"
        />
      </div>
      <div class="flex-2 flex flex-col items-center justify-center">
        <h1 class="m-4 portrait:text-5xl lg:text-9xl">{committee.name}</h1>
        <p
          class="text-center text-[1em] portrait:text-[0.5em] whitespace-pre-line"
        >
          {committee.agenda}
        </p>
      </div>
      <div class="flex-1 flex flex-col items-center justify-start relative">
        <h2
          class="text-[2em] portrait:text-sm w-full border-b-2 border-(--text) mb-4 portrait:mb-2"
        >
          {curr_other === 0 ? "About the Committee" : "Note"}
        </h2>
        <p class="text-[1em] portrait:text-[0.5em] whitespace-pre-line">
          {curr_other === 0 ? committee.description : committee.note}
        </p>
        {#if committee.note}
          <div
            class="flex w-full h-full flex-row justify-between items-end *:shadow-xl *:shadow-black"
          >
            <button
              class="w-12 h-12 rounded-full bg-(--text) text-(--bg1) transition-colors"
              onclick={() => switchText()}
            >
              &lt;
            </button>
            <button
              class="w-12 h-12 rounded-full bg-(--text) text-(--bg1) transition-colors"
              onclick={() => switchText()}
            >
              &gt;
            </button>
          </div>
        {/if}
      </div>
    </div>
    <div
      class="col-start-4 portrait:col-start-1 col-span-2 row-start-1 portrait:row-start-3 row-span-6 flex flex-col rounded-2xl overflow-hidden"
    >
      <div
        class="flex-2 portrait:flex-1 flex flex-col items-center p-4 relative border-b-2 border-(--text)"
      >
        <Chair data={committee.chairpersons[curr]} />
        <div
          class="flex w-full h-full flex-row justify-between items-center absolute *:shadow-xl *:shadow-black"
        >
          <button
            class="w-12 h-12 rounded-full bg-(--text) text-(--bg1) transition-colors ml-4 portrait:w-4"
            onclick={() =>
              goTo(
                (curr - 1 + committee.chairpersons.length) %
                  committee.chairpersons.length,
              )}
          >
            &lt;
          </button>
          <button
            class="w-12 h-12 rounded-full bg-(--text) text-(--bg1) transition-colors mr-4 portrait:w-4"
            onclick={() => goTo((curr + 1) % committee.chairpersons.length)}
          >
            &gt;
          </button>
        </div>
      </div>
      <div class="flex-3 portrait:flex-2 bg-(--bg1) overflow-y-scroll">
        {#if p1_heading}
          <div class="p-4 border-b-2 border-(--text) bg-blue-900">
            <h2 class="text-[1.5em] portrait:text-lg font-black">
              {p1_heading}
            </h2>
          </div>
        {/if}
        {#each p1_allos ?? allos as allo}
          <div
            class="p-4 border-b-2 border-(--text) bg-green-900"
            class:bg-red-900={allo.filled}
          >
            <h3 class="text-[1.5em] portrait:text-lg font-black">
              {allo.alloc}
            </h3>
            {#if allo.other}
              <p class="text-[.75em]">{allo.other}</p>
            {/if}
            <p class="text-[1em] portrait:text-sm">
              {allo.filled ? "Filled" : "Available"}
            </p>
          </div>
        {/each}
        {#if p2_heading}
          <div class="p-4 border-b-2 border-(--text) bg-blue-900">
            <h2 class="text-[1.5em] portrait:text-lg font-black">
              {p2_heading}
            </h2>
          </div>
          {#each p2_allos as allo}
            <div
              class="p-4 border-b-2 border-(--text) bg-green-900"
              class:bg-red-900={allo.filled}
            >
              <h3 class="text-[1.5em] portrait:text-lg font-black">
                {allo.alloc}
              </h3>
              {#if allo.other}
                <p class="text-[.75em]">{allo.other}</p>
              {/if}
              <p class="text-[1em] portrait:text-sm">
                {allo.filled ? "Filled" : "Available"}
              </p>
            </div>
          {/each}
        {/if}
      </div>
      <div class="flex-1 bg-(--bg1)">
        <a
          href={committee.guide}
          class="w-full h-full flex flex-col items-center justify-center p-4 border-t-2 border-(--text)"
        >
          <h1 class="text-5xl portrait:text-3xl text-center">
            Background Guide
          </h1>
          <h2>(Coming Soon!)</h2>
        </a>
      </div>
    </div>
  </div>
</section>
