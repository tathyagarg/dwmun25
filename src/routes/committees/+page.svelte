<script lang="ts">
  import { onMount } from "svelte";

  const committees: Record<string, { logo: string; bg: string; name: string }> =
    {
      ccc: {
        logo: "/images/logos/CCC.png",
        bg: "/images/bgs/ccc.jpeg",
        name: "CCC",
      },
      unsc: {
        logo: "/images/logos/SC.png",
        bg: "/images/bgs/sc.jpeg",
        name: "UNSC",
      },
      unhrc: {
        logo: "/images/logos/HRC.png",
        bg: "/images/bgs/hrc.jpeg",
        name: "UNHRC",
      },
      unodc: {
        logo: "/images/logos/ODC.png",
        bg: "/images/bgs/odc.jpeg",
        name: "UNODC",
      },
      ipc: {
        logo: "/images/logos/IPC.png",
        bg: "/images/bgs/ipc.jpeg",
        name: "IPC",
      },
      ls: {
        logo: "/images/logos/LS.png",
        bg: "/images/bgs/lok-sabha.jpeg",
        name: "Lok Sabha",
      },
    };

  let title = "CCC";

  onMount(() => {
    if (
      window.matchMedia("(pointer: fine)").matches &&
      navigator.maxTouchPoints === 0
    ) {
      const comms = document.getElementsByClassName("comm");
      const blurry = document.querySelector(".blurry");
      const info = document.querySelector(".info");

      for (let i = 0; i < comms.length; i++) {
        const committee = Object.keys(committees)[i];
        console.log(committee, i);

        comms[i].addEventListener("mouseover", () => {
          blurry?.classList.remove("opacity-0");
          info?.classList.remove("opacity-0");
          info?.classList.remove("translate-y-[100%]");

          info?.style.setProperty("--bg", `url(${committees[committee].bg})`);
          title = committees[committee].name;
        });

        comms[i].addEventListener("mouseout", () => {
          blurry?.classList.add("opacity-0");
          info?.classList.add("opacity-0");
          info?.classList.add("translate-y-[100%]");
        });
      }
    }
  });
</script>

<svg width="0" height="0" style="position: absolute;">
  <defs>
    <clipPath id="customShape" clipPathUnits="objectBoundingBox">
      <path
        d="
        M 0,0.1 
        L 0.4,0.1 
        A 0.05,0.05 0 0 0 0.45,0.05 
        L 0.45,0 
        L 0.95,0 
        A 0.05,0.05 0 0 1 1,0.05 
        L 1,0.95 
        A 0.05,0.05 0 0 1 0.95,1
        L 0.05,1 
        A 0.05,0.05 0 0 1 0,0.95
        Z
      "
      />
    </clipPath>
  </defs>
</svg>

<div
  class="w-screen h-full top-0 bg-black/10 fixed z-2 pointer-events-none opacity-0 blurry backdrop-blur-xl transition-opacity duration-300"
></div>
<div
  class="w-screen aspect-square fixed top-[30%] left-0 z-10 rounded-full pointer-events-none opacity-0 translate-y-[100%] info transition-all duration-300 bg-cover bg-center overflow-hidden"
  style="background-image: var(--bg); background-color: rgba(from var(--bg1) r g b / 0.5); background-blend-mode: multiply;"
>
  <div class="h-1/2 w-full flex flex-col items-center justify-center">
    <h1 class="text-8xl text-center p-4">
      {title}
    </h1>
  </div>
</div>

<section>
  <h1 class="text-8xl w-full text-center portrait:text-5xl">Committees</h1>
  <div
    class="grid grid-cols-3 grid-rows-2 gap-[4em] w-[90%] mx-auto portrait:grid-cols-1 portrait:grid-rows-6"
  >
    {#each Object.entries(committees) as [committee, { logo, name }]}
      <div
        class="flex flex-col items-center justify-center relative cursor-pointer comm"
      >
        <h2
          class="text-2xl absolute text-(--bg1) bg-(--text) top-0 left-0 w-[45%] z-1 h-[10%] rounded-br-xl rounded-tl-xl px-4 flex items-center justify-center"
        >
          {name}
        </h2>
        <div
          class="bg-(--bg1)/10 overflow-hidden relative w-full aspect-square backdrop-blur-md border-2 rounded-[5%]"
          style="clip-path: url(#customShape);"
        >
          <img src={logo} alt={name} class="w-full h-full object-cover p-4" />
        </div>
      </div>
    {/each}
  </div>
</section>
