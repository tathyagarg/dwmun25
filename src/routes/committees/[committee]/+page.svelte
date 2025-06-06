<script lang="ts">
  import { onMount } from "svelte";
  import * as echarts from "echarts";
  import world from "$lib/countries.geo.json";

  import Chair from "$lib/components/chair.svelte";

  let { data } = $props();
  let { committee, allos } = data;

  let chart;

  function lowerOpacity(hex: string, opacity: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  onMount(() => {
    // chart = echarts.init(document.getElementById("chart"));
    // echarts.registerMap("world", world);
    // const option = {
    //   tooltip: {
    //     trigger: "item",
    //     formatter: (params) => {
    //       const { name, data } = params;
    //       if (data && data.status) {
    //         if (data.info) {
    //           return `<b>${name}</b> (${data.info})<br/>${data.status}`;
    //         }
    //         return `<b>${name}</b><br/>${data.status}`;
    //       }
    //       return;
    //     },
    //   },
    //   visualMap: {
    //     show: false,
    //     min: 0,
    //     max: 2,
    //     inRange: {
    //       color: ["black", "green", "red"],
    //     },
    //   },
    //   series: [
    //     {
    //       type: "map",
    //       map: "world",
    //       roam: true,
    //       emphasis: {
    //         label: { show: false },
    //         itemStyle: {
    //           areaColor: lowerOpacity("#cccccc", 0.9),
    //           opacity: 0.9,
    //         },
    //       },
    //       itemStyle: {
    //         normal: {
    //           areaColor: "#cccccc",
    //           borderColor: "#999999",
    //         },
    //       },
    //       data: [
    //         {
    //           name: "United States of America",
    //           value: 1,
    //           info: "P5",
    //           status: "Available",
    //           emphasis: {
    //             itemStyle: { areaColor: lowerOpacity("#00ff00", 0.9) },
    //           },
    //         },
    //         {
    //           name: "Canada",
    //           value: 1,
    //           status: "Available",
    //           emphasis: {
    //             itemStyle: { areaColor: lowerOpacity("#00ff00", 0.9) },
    //           },
    //         },
    //         {
    //           name: "China",
    //           value: 2,
    //           status: "Unavailable",
    //           emphasis: {
    //             itemStyle: { areaColor: lowerOpacity("#ff0000", 0.9) },
    //           },
    //         },
    //         {
    //           name: "Russia",
    //           value: 2,
    //           status: "Unavailable",
    //           emphasis: {
    //             itemStyle: { areaColor: lowerOpacity("#ff0000", 0.9) },
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // };
    // chart.setOption(option);
  });

  let curr = $state(0);

  function goTo(index: number) {
    curr = index;
  }
</script>

<!--
<div id="chart" style="width:100%; height:80vh; position:relative;"></div>
-->

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
          class="w-[90%] h-[90%] m-[5%] object-cover rounded-tl-2xl opacity-10"
        />
      </div>
      <div class="flex-2 flex flex-col items-center justify-center">
        <h1 class="text-9xl m-4">{committee.name}</h1>
        <p class="text-center text-2xl">{committee.agenda}</p>
      </div>
      <div class="flex-1 flex flex-col items-center justify-start">
        <h2 class="text-4xl w-full border-b-2 border-(--text) mb-4">
          About the Committee
        </h2>
        <p class="text-lg">{committee.description}</p>
      </div>
    </div>
    <div
      class="col-start-4 col-span-2 row-start-1 row-span-6 flex flex-col rounded-2xl overflow-hidden"
    >
      <div
        class="flex-2 flex flex-col items-center p-4 relative border-b-2 border-(--text)"
      >
        <h2 class="text-4xl">Chairpersons</h2>
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
            <h3 class="text-2xl font-black">{allo.alloc}</h3>
            {#if allo.other}
              <p class="text-lg">{allo.other}</p>
            {/if}
            <p class="text-lg">{allo.filled ? "Filled" : "Available"}</p>
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
