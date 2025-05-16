<script lang="ts">
  const committees = {
    ccc: "/images/logos/CCC.png",
    unsc: "/images/logos/SC.png",
    unhrc: "/images/logos/HRC.png",
    unodc: "/images/logos/ODC.png",
    loksabha: "/images/logos/LS.png",
    ipc: "/images/logos/IPC.png",
  };
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

<section>
  <h1 class="text-8xl w-full text-center">Committees</h1>
  <div class="grid grid-cols-3 grid-rows-2 gap-[2em] w-[90%] mx-auto">
    {#each Object.entries(committees) as [committee, logo]}
      <div class="flex flex-col items-center justify-center relative">
        <h2
          class="text-2xl absolute text-(--bg1) bg-(--text) top-0 left-0 w-[45%] h-[10%] z-10 rounded-br-xl rounded-tl-xl px-4 flex items-center justify-center"
        >
          {committee}
        </h2>
        <div
          class="bg-(--bg1)/10 overflow-hidden relative w-full backdrop-blur-md border-2 rounded-[5%]"
          style="clip-path: url(#customShape);"
        >
          <img src={logo} alt={committee} class="w-full h-full bg-cover p-4" />
        </div>
      </div>
    {/each}
  </div>
</section>

