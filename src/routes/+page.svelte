<script lang="ts">
  import { onMount } from "svelte";
  import Polaroid from "$lib/components/polaroid.svelte";

  let width: number;

  const updateWidth = () => {
    width = window.innerWidth;
  };

  let radius = 50;

  let positions = Array.from({ length: 6 }, (_, i) => {
    const angle = (2 * Math.PI * i) / 6;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  });

  const images = [
    "/images/logos/CCC.png",
    "/images/logos/SC.png",
    "/images/logos/HRC.png",
    "/images/logos/ODC.png",
    "/images/logos/LS.png",
    "/images/logos/IPC.png",
  ];

  onMount(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    const countdownElement = document.getElementById("countdown");

    if (countdownElement) {
      const days = countdownElement.querySelector("#days");
      const hours = countdownElement.querySelector("#hours");
      const minutes = countdownElement.querySelector("#minutes");
      const seconds = countdownElement.querySelector("#seconds");

      if (days && hours && minutes && seconds) {
        const targetDate = new Date("2025-07-31T00:00:00Z");
        const countdownInterval = setInterval(() => {
          const now = new Date();
          const timeLeft = targetDate.getTime() - now.getTime();

          if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Event has started!";
            return;
          }

          const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hoursLeft = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          );
          const minutesLeft = Math.floor(
            (timeLeft % (1000 * 60 * 60)) / (1000 * 60),
          );
          const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

          days.textContent = daysLeft.toString();
          hours.textContent = hoursLeft.toString().padStart(2, "0");
          minutes.textContent = minutesLeft.toString().padStart(2, "0");
          seconds.textContent = secondsLeft.toString().padStart(2, "0");
        }, 1000);
      }
    }

    if (width >= 1024) {
      setInterval(() => {
        positions = positions.map(
          (_, i) => positions[(i + 1) % positions.length],
        );
      }, 5000);
    }
  });
</script>

<section
  class="flex flex-row justify-between items-center w-full h-screen portrait:flex-col"
>
  <div
    class="flex-1/2 w-full flex flex-col justify-center h-full pl-[2.5em] portrait:mt-[1em]"
  >
    <h2 class="[font-size:clamp(1em,2vw,2em)]">
      July 31, 2025 - August 2, 2025
    </h2>
    <h1 class="[font-size:clamp(3em,8vw,8em)] ipshita-is-gay">DWMUN'25</h1>
    <div class="flex [font-size:clamp(1em,2vw,2em)] gap-[0.5em]">
      <h2>Bigger.</h2>
      <h2>Better.</h2>
      <h2>Brighter.</h2>
    </div>
    <div id="buttons" class="[font-size:clamp(.5em,3vw,1.5em)]">
      <a href="/register" class="animate-bounce">Register</a>
      <a href="/committees">Committees</a>
    </div>
    <div id="countdown">
      <h2 id="days">10</h2>
      <h2 id="hours">00</h2>
      <h2 id="minutes">00</h2>
      <h2 id="seconds">00</h2>
    </div>
  </div>
  <div
    class="flex-1/2 w-full h-full overflow-hidden portrait:max-h-[33vw] absolute top-0 left-0 pointer-events-none portrait:relative"
  >
    <div
      class="absolute top-0 right-[-50vh] h-full aspect-square rounded-full border-[var(--text)]/10 border-dotted border-[1em] portrait:hidden"
    ></div>
    <div
      class="absolute top-0 left-1/2 w-1/2 h-full portrait:w-fit portrait:h-[33vw]! portrait:relative portrait:left-0 portrait:flex! portrait:items-start portrait:gap-4"
      class:marquee={width < 1024}
    >
      {#each positions.concat(positions) as { x, y }, i}
        <div
          class="h-1/3 aspect-square absolute top-1/2 left-full bg-cover bg-center transition-all duration-400 portrait:relative portrait:m-0 portrait:top-0 portrait:left-0 portrait:w-[33vw] portrait:h-[33vw] portrait:transform-none!"
          style="transform: translate(-50%, -50%) translate({x}vh, {y}vh); background-image: url({images[
            i % images.length
          ]});"
        ></div>
      {/each}
    </div>
  </div>
</section>
<section style="height: fit-content">
  <div class="flex flex-col h-fit p-[2.5em] box-border">
    <h1 class="[font-size:clamp(1.5em,4vw,4em)]">
      Letter from the Secretary General
    </h1>
    <br />
    <div class="flex flex-row my-8 portrait:flex-col">
      <div
        class="flex flex-col h-screen justify-between px-4 border-box portrait:flex-row portrait:h-fit"
      >
        <Polaroid src="/images/UNSC.jpeg" alt="UNSC" rotate={-7} />
        <Polaroid src="/images/Committee X.jpeg" alt="Committee X" rotate={7} />
      </div>
      <div
        class="flex flex-col h-fit gap-2 px-16 py-8 border-box text-2xl/8 portrait:px-0 portrait:text-sm portrait:*:m-0"
      >
        <i class="ml-4"> Greetings delegates! </i>
        <i class="ml-4 mt-4">
          It is with great pride and enthusiasm that the Organising Committee
          extends a warm invitation to you to attend DWMUN’25, hosted by Delhi
          Public School, Whitefield. Scheduled to take place on 31st July and
          1st and 2nd of August, this prestigious conference promises to be a
          platform for young minds to engage in meaningful dialogue, critical
          problem-solving, and diplomacy. DWMUN’25 brings together delegates
          from across schools to simulate international diplomacy, as they
          represent various nations and address pressing global issues, just as
          diplomats do on real-world stages.
        </i>
        <i class="ml-4 mt-4">
          This year, DWMUN will focus on promoting global cooperation,
          peacebuilding, and innovative solutions across various committees.
          Participants will not only gain a deeper understanding of
          international relations, conflict resolution, and policy-making but
          also develop leadership, oratory, and negotiation skills in a
          collaborative environment. We would be honored by your presence at the
          event in celebrating the spirit of diplomacy and youth engagement at
          DWMUN’25.
        </i>
        <i class="ml-4 mt-4">
          Warm regards,<br />Organising Committee<br />DWMUN’25<br />Delhi
          Public School, Whitefield
        </i>
      </div>
      <div
        class="flex flex-col h-screen justify-between px-4 border-box portrait:flex-row portrait:h-fit"
      >
        <Polaroid src="/images/IPC.jpeg" alt="IPC" rotate={12} />
        <Polaroid src="/images/UNHRC.jpeg" alt="UNHRC" rotate={-8} />
      </div>
    </div>
  </div>
</section>
<section style="height: fit-content; padding: 2.5em; box-sizing: border-box;">
  <h1 class="[font-size:clamp(1.5em,4vw,4em)]">Letter from Principal</h1>
  <div
    class="flex flex-col h-fit gap-2 py-8 border-box text-2xl/8 portrait:px-0 portrait:text-sm portrait:*:m-0"
  >
    <i class="mt-4">
      We are happy to invite you to the 7th edition of our Model United Nations
      Conference (DWMUN 2025) to be held from Thursday 31st July to Saturday 2nd
      August. MUN is a platform where young minds become global leaders. It is
      not just a simulation of a diplomatic arena—DWMUN is a transformative
      experience. It empowers students to think critically, speak confidently,
      negotiate thoughtfully, and understand global issues from diverse
      perspectives. It’s one of the best platforms to build leadership,
      diplomacy and problem-solving skills that last a lifetime.
    </i>
    <i class="mt-4">
      In a world grappling with geopolitical tensions, economic uncertainty,
      climate change and humanitarian crises, the need for informed, empathetic
      and solution- driven dialogue has never been greater.
    </i>
    <i class="mt-4">
      Join us as delegates, debate real -world issues, craft resolutions and
      collaborate across cultures to shape a better tomorrow. Whether you are a
      seasoned MUNer, or first timer, this is your moment to make a difference
      and your chance to shine.
    </i>
    <i class="mt-4">
      My best wishes to all the young delegates as they take on this exciting
      challenge. May your voices be strong, your ideas bold and your diplomacy
      impactful!
    </i>
    <i class="mt-4"> Mrs. Lovely Dutta Prusty </i>
  </div>
</section>

<style>
  .marquee {
    white-space: nowrap;
    overflow: hidden;
    display: block;
    animation: marquee 10s linear infinite;

    width: fit-content;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  #buttons {
    margin-top: 2em;

    display: flex;
    align-items: center;

    gap: 2em;
  }

  #buttons a {
    padding: 0.5em 2em;
    font-weight: 600;
    text-align: center;

    border-radius: 2.5em;
    text-decoration: none;

    transition: all 0.2s;
  }

  #buttons a:first-child {
    background-color: var(--text);
    color: var(--bg1);
  }

  #buttons a:last-child {
    border: 1px solid var(--text);
  }

  #countdown {
    display: flex;
    align-items: center;

    margin-top: 2em;
  }

  #countdown > h2 {
    font-size: 3em;
    font-weight: 400;
    margin: 0.5em 0;
    font-family: "Kuchek";
  }

  #countdown > h2::before {
    font-family: "JuliusSans";
    font-size: 0.25em;
  }

  #countdown > h2:not(:last-child)::after {
    content: ":";
    margin: 0 1em;
  }

  #days::before {
    content: "Days";
    display: block;
  }

  #hours::before {
    content: "Hours";
    display: block;
  }

  #minutes::before {
    content: "Minutes";
    display: block;
  }

  #seconds::before {
    content: "Seconds";
    display: block;
  }

  @media (orientation: portrait) {
    #countdown {
      gap: 0.2em;
      margin-top: 0em;
    }

    #countdown > h2 {
      font-size: 2em;
    }

    #countdown > h2::before {
      font-size: 0.1em;
    }

    #countdown > h2:not(:last-child)::after {
      content: ":";
      margin: 0 0.2em;
    }
  }
</style>
