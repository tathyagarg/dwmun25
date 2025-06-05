<script lang="ts">
  import { onMount } from "svelte";
  import * as echarts from "echarts";
  import world from "$lib/countries.geo.json";

  import Chair from "$lib/components/chair.svelte";

  let { data } = $props();

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
    class="grid grid-cols-5 grid-rows-4 w-full h-full p-8 gap-4 *:rounded-md *:border-2 *:border-(--text) *:bg-(--bg1)"
  >
    <div
      class="col-start-1 col-span-3 row-start-1 row-span-2 flex flex-col justify-center items-center p-8"
    >
      <h1 class="text-8xl m-4">{data.name}</h1>
      <p class="text-center text-lg">{data.agenda}</p>
    </div>
    <div class="col-start-1 col-span-3 row-start-3 row-span-2 p-8">
      <h2 class="text-4xl w-full border-b-2 border-(--text) mb-4">
        About the Committee
      </h2>
      <p class="text-lg">{data.description}</p>
    </div>
    <div
      class="col-start-4 col-span-1 row-start-1 row-span-2 flex flex-col items-center py-8 px-4 relative"
    >
      <h2 class="text-4xl">Chairpersons</h2>
      <Chair data={data.chairpersons[curr]} />
      <div
        class="flex w-full h-full flex-row justify-between items-center absolute *:shadow-xl *:shadow-black"
      >
        <button
          class="w-12 h-12 rounded-full bg-(--text) text-(--bg1) transition-colors ml-4"
          onclick={() =>
            goTo(
              (curr - 1 + data.chairpersons.length) % data.chairpersons.length,
            )}
        >
          &lt;
        </button>
        <button
          class="w-12 h-12 rounded-full bg-(--text) text-(--bg1) transition-colors mr-4"
          onclick={() => goTo((curr + 1) % data.chairpersons.length)}
        >
          &gt;
        </button>
      </div>
    </div>
    <div class="col-start-5 col-span-1 row-start-1 row-span-2"></div>
    <div class="col-start-4 col-span-2 row-start-3 row-span-2"></div>
  </div>
</section>
