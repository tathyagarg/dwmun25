<script>
  import { onMount } from "svelte";

  let radius = 40;
  let width = 0;

  const committeeCount = 6;

  const updateWidth = () => {
    width = window.innerWidth;
  };

  $: radius = width >= 1024 ? 40 : width >= 768 ? 20 : 10;

  $: positions = Array.from({ length: committeeCount }, (_, i) => {
    const angle = (2 * Math.PI * i) / committeeCount;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  });

  let divs = Array.from({ length: committeeCount }, (_, i) => ({
    id: i,
    pos: i,
  }));

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
          const timeLeft = targetDate - now;

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

    setInterval(() => {
      divs = divs.map((div) => ({
        ...div,
        pos: (div.pos + 1) % divs.length,
      }));
    }, 10000);
  });
</script>

<section
  class="flex flex-row justify-between items-center w-[calc(100vw-5em)] h-screen portrait:flex-col"
>
  <div class="flex-1/2 flex flex-col justify-center h-full">
    <h2 class="[font-size:clamp(1em,2vw,2em)]">
      July 31, 2025 - August 2, 2025
    </h2>
    <h1 class="[font-size:clamp(3em,8vw,8em)]">DWMUN'25</h1>
    <div class="flex [font-size:clamp(1em,2vw,2em)] gap-[0.5em]">
      <h2>Bigger.</h2>
      <h2>Better.</h2>
      <h2>Brighter.</h2>
    </div>
    <div id="buttons" class="[font-size:clamp(.5em,3vw,1.5em)]">
      <a href="/register">Register</a>
      <a href="/committees">Committees</a>
    </div>
    <div id="countdown">
      <h2 id="days">00</h2>
      <h2 id="hours">00</h2>
      <h2 id="minutes">00</h2>
      <h2 id="seconds">00</h2>
    </div>
  </div>
  <div class="flex-1/2 w-full h-full relative overflow-hidden">
    <div id="ring" style="--radius: {radius}em"></div>
    <div id="committees-container">
      {#each divs as div}
        <div
          class="committee-logo portrait:w-[33vw]"
          style="
            --i: {div.id};
            --size: {radius / 2}em;
            --x: {positions[div.pos].x}em;
            --y: {positions[div.pos].y}em;
          "
          class:translated={width >= 1024}
        ></div>
      {/each}
    </div>
  </div>
</section>
<section></section>

<style>
  .translated {
    transform: translate(-50%, -50%) translate(var(--x), var(--y));
  }

  section {
    height: 100vh;
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

  #ring {
    position: absolute;
    top: -25%;
    left: 25%;

    height: 150%;
    aspect-ratio: 1;

    border-radius: 50%;

    border: 1em dotted rgba(from var(--text) r g b / 0.1);
  }

  #committees-container {
    position: absolute;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
  }

  .committee-logo {
    width: 20vw;
    aspect-ratio: 1;

    background-color: var(--text);

    position: absolute;
    top: 50%;
    left: 100%;

    transition: transform 0.5s ease-in-out;
  }

  @media (orientation: portrait) {
    #countdown {
      gap: 0.2em;
      margin-top: 1em;
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

    #committees-container {
      transform: unset;
      position: relative;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);

      gap: 1em;
    }

    #ring {
      display: none;
    }

    .committee-logo {
      top: 0;
      left: 50%;
      transform: translateX(-50%);

      position: relative !important;
      margin: 0 0;
    }
  }
</style>
