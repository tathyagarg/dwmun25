<section id="hero">
  <div id="left">
    <div id="slogan">
      <h2>Bigger.</h2>
      <h2>Better.</h2>
      <h2>Brighter.</h2>
    </div>
    <h1>DWMUN'25</h1>
    <h2 id="dates">July 31, 2025 - August 2, 2025</h2>
    <div id="buttons">
      <a href="/register">Register</a>
      <a href="/apply">Apply</a>
    </div>
  </div>
  <div id="right"></div>
</section>

<style>
  section {
    height: 100vh;
  }

  #hero {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    width: 100%;
  }

  #left {
    flex: 1;
    height: 100%;
    max-width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 2.5em;
    box-sizing: border-box;
  }

  #hero h1 {
    font-family: "Kuchek";
    font-size: 8em;
    margin: 0;
  }

  #slogan {
    width: 75%;

    display: flex;
    justify-content: space-between;
  }

  #slogan h2,
  #dates {
    font-size: 2em;
    font-weight: 400;
    margin: 0.5em 0;
  }

  #right {
    flex: 1;
    height: 100%;

    background-color: blue;
  }

  #buttons {
    display: flex;
    align-items: center;

    gap: 2em;
  }

  #buttons a {
    padding: 0.5em 2em;
    font-size: 1.5em;
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

  @media (max-width: 1024px) {
    #hero {
      flex-direction: column;
    }

    #left {
      padding: 0 1em;
    }

    #slogan {
      width: 100%;
    }

    #slogan h2,
    #dates {
      font-size: 1.5em;
    }

    #hero h1 {
      font-size: 4em;
    }

    #right {
      width: 100%;
      height: 50vh;
    }
  }
</style>
