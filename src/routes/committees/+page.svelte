<script lang="ts">
  import Committee from "$lib/components/committee.svelte";
  import { onMount } from "svelte";
  import { on } from "svelte/events";

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

  const committees = [
    {
      name: "UNHRC",
      agenda:
        "Human Rights Violations Arising from the Division of Cyprus with emphasis on the Protection of Displaced and Minority Communities.\n\nFreeze Date: August 16, 1974",
      bg: "/images/bgs/hrc.jpeg",
    },
    {
      name: "UNSC",
      agenda:
        "Deliberating on the situation in Western Sahara with special emphasis on reviewing and renewing the mandate of the United Nations Mission for the Referendum in Western Sahara (MINURSO)",
      bg: "/images/bgs/sc.jpeg",
    },
    {
      name: "CCC",
      agenda: "August 17th 1666\n27.1795° N, 78.0211°E",
      bg: "/images/bgs/ccc.jpeg",
    },
    {
      name: "Lok Sabha",
      agenda: "The 2002 Gujrat Riots\n\nFreeze Date: February 25, 2002",
      bg: "/images/bgs/lok-sabha.jpeg",
    },
    {
      name: "UNODC",
      agenda:
        "Countering the Surge of Synthetic Drug Production and Trafficking in Southeast Asia",
      bg: "/images/bgs/odc.jpeg",
    },
    {
      name: "IPC",
      agenda:
        "Discussing the Advent of Social Media as a Source of Information",
      bg: "/images/bgs/ipc.jpeg",
    },
  ];
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
        <!--<div class="card">meow {item}</div>-->
        <Committee data={committees[item]} />
      {/each}
    </div>
  </div>

  <div
    class="absolute w-[95%] h-full top-0 left-[2.5%] flex justify-between gap-4 text-6xl z-2"
  >
    <button on:click={previous}>&lt;</button>
    <button on:click={next}>&gt;</button>
  </div>
</div>
