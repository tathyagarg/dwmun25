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
</script>

<section class="w-screen h-screen">
  <div
    class="grid grid-cols-5 grid-rows-6 w-full h-full p-8 *:border-2 *:border-(--text) *:bg-(--bg1) gap-x-4"
  >
    <div
      class="col-start-1 col-span-3 row-start-1 row-span-6 flex flex-col justify-center items-center p-8 rounded-2xl relative"
    >
      <div class="absolute w-full h-full">
        <img
          src={committee.logo}
          alt="Committee Logo"
          class="w-[90%] h-[90%] m-[5%] object-cover opacity-10"
        />
      </div>
      <div class="flex-2 flex flex-col items-center justify-center">
        <h1 class="m-4 text-[5em] lg:text-9xl">{committee.name}</h1>
        <p class="text-center text-[1em]">{committee.agenda}</p>
      </div>
      <div class="flex-1 flex flex-col items-center justify-start relative">
        <h2 class="text-[2em] w-full border-b-2 border-(--text) mb-4">
          {curr_other === 0 ? "About the Committee" : "Note"}
        </h2>
        <p class="text-[1em] whitespace-pre-line">
          {curr_other === 0 ? committee.description : committee.note}
        </p>
        {#if committee.note}
          <div
            class="flex w-full h-full flex-row justify-between items-end absolute *:shadow-xl *:shadow-black"
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
      class="col-start-4 col-span-2 row-start-1 row-span-6 flex flex-col rounded-2xl overflow-hidden"
    >
      <div
        class="flex-2 flex flex-col items-center p-4 relative border-b-2 border-(--text)"
      >
        <h2 class="text-[2em]">Chairpersons</h2>
        <Chair data={committee.chairpersons[curr]} />
        <div
          class="flex w-full h-full flex-row justify-between items-center absolute *:shadow-xl *:shadow-black"
        >
          <button
            class="w-12 h-12 rounded-full bg-(--text) text-(--bg1) transition-colors ml-4"
            onclick={() =>
              goTo(
                (curr - 1 + committee.chairpersons.length) %
                  committee.chairpersons.length,
              )}
          >
            &lt;
          </button>
          <button
            class="w-12 h-12 rounded-full bg-(--text) text-(--bg1) transition-colors mr-4"
            onclick={() => goTo((curr + 1) % committee.chairpersons.length)}
          >
            &gt;
          </button>
        </div>
      </div>
      <div class="flex-3 bg-(--bg1) overflow-y-scroll">
        {#each allos as allo}
          <div
            class="p-4 border-b-2 border-(--text) bg-green-900"
            class:bg-red-900={allo.filled}
          >
            <h3 class="text-[1.5em] font-black">{allo.alloc}</h3>
            {#if allo.other}
              <p class="text-[.75em]">{allo.other}</p>
            {/if}
            <p class="text-[1em]">{allo.filled ? "Filled" : "Available"}</p>
          </div>
        {/each}
      </div>
      <div class="flex-1 bg-(--bg1)">
        <a
          href={committee.guide}
          class="w-full h-full flex flex-col items-center justify-center p-4 border-t-2 border-(--text)"
        >
          <h1 class="text-5xl text-center">Background Guide</h1>
          <h2>(Coming Soon!)</h2>
        </a>
      </div>
    </div>
  </div>
</section>
