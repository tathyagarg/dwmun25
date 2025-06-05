<script lang="ts">
  import Committee from "$lib/components/committee.svelte";
  import { onMount } from "svelte";
  import { on } from "svelte/events";
  import { committees } from "$lib/data";

  const items = [0, 1, 2, 3, 4, 5];
  let startIndex = 0;
  let translate = 0;
  let noTransition = false;
  let isTransitioning = false;

  function getVisible(start: number) {
    const res = [];
    for (let i = -2; i <= 2; i++) {
      res.push(items[(start + i + items.length) % items.length]);
    }
    return res;
  }

  $: visible = getVisible(startIndex);

  function goTo(index: number) {
    if (isTransitioning) return;

    let diff = index - startIndex;
    if (diff > 3) diff -= items.length;
    else if (diff < -3) diff += items.length;

    if (diff === 0) return;

    isTransitioning = true;
    translate -= diff;

    setTimeout(() => {
      startIndex = index;
      noTransition = true;
      translate = 0;
      setTimeout(() => {
        noTransition = false;
      }, 20);
      setTimeout(() => {
        isTransitioning = false;
      }, 150);
    }, 250);
  }

  function next() {
    goTo((startIndex + 1) % items.length);
  }

  function previous() {
    goTo((startIndex - 1 + items.length) % items.length);
  }

  onMount(() => {
    on(window, "keydown", (event) => {
      if (event.key === "ArrowRight") {
        next();
      } else if (event.key === "ArrowLeft") {
        previous();
      }
    });

    on(
      window,
      "wheel",
      (event) => {
        if (Math.abs(event.deltaX) > 30) {
          if (event.deltaX > 0) {
            next();
          } else if (event.deltaX < 0) {
            previous();
          }
        }
      },
      { passive: true },
    );
  });
</script>

<div class="flex justify-center items-center mb-8 text-2xl">
  {#each committees as committee, index (committee)}
    <button
      on:click={() => goTo(index)}
      class:border-r-2={index != 5}
      class="border-(--text) px-5 hover:text-white duration-250 transition-color cursor-pointer"
    >
      {committee.name}
    </button>
  {/each}
</div>

<div class="relative w-full h-[75vh] my-12">
  <div class="overflow-hidden w-full">
    <div
      class="flex gap-[7.5vw]"
      style="
      transform: translateX(calc(-152.5vw + {translate} * (75vw + 7.5vw)));
      transition: {noTransition ? 'none' : 'transform 0.25s ease-in-out'};
    "
    >
      {#each visible as item (item)}
        <Committee data={committees[item]} />
      {/each}
    </div>
  </div>

  <button
    class="absolute left-0 top-1/2 ml-4 text-8xl cursor-pointer"
    on:click={previous}>&lt;</button
  >
  <button
    class="absolute right-0 top-1/2 mr-4 text-8xl cursor-pointer"
    on:click={next}>&gt;</button
  >
</div>
