<script lang="ts">
  import axios from 'axios';
  import {getAuth, onAuthStateChanged} from "firebase/auth";
  import {connectionAPI} from "../../stores";
  import {onMount} from "svelte";

  let points = {
    modality: ['adventure', 'casually', 'arcade'],
    displayName: ['Aventura', 'Casual', 'Arcade'],
    index: 0,
    points: [],
    userRecord: 0,
  }
  let scoreLoaded = false;
  let loadingUserResults = true;
  let loadingWorldResults = true;
  const auth = getAuth();

  onMount(async () => {
    const navItems = document.querySelectorAll('.nav-items')
    navItems.forEach((value) => {
      value.classList.remove('active')
    })
    navItems[points.index].classList.add('active')
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        return;
      }
      loadingWorldResults = false;
      axios
        .get(`${connectionAPI}/all-results/${points.modality[points.index]}/`)
        .then((response) => {

          points.points = response.data.results;
          const ul = document.querySelector('.ranks')
          ul.innerHTML = ''
          points.points.forEach((value, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
              <p>${index + 1} - ${value.name}</p>
              <h3>${value[points.modality[points.index]][0].results}</h3>
            `
            ul.appendChild(li)
          })
          scoreLoaded = true;
        })
        .catch(() => {
          loadingWorldResults = false;
          points.points = [];
          scoreLoaded = true;
        });
      if (user.isAnonymous) {
        loadingUserResults = false;
        points.userRecord = 0;
        scoreLoaded = true;
        return;
      }
      axios
        .get(`${connectionAPI}/user-results/${points.modality[points.index]}/${user.uid}`)
        .then((response) => {
          loadingUserResults = false;
          const results = response.data.result[points.modality[points.index]][0].results;
          points.userRecord = results;
          scoreLoaded = true;
        })
        .catch(() => {
          loadingUserResults = true;
          points.userRecord = 0;
          scoreLoaded = true;
        });

    })
  })
  const turnModalityResults = async (type: number) => {
    scoreLoaded = false;
    points.index = type;
    loadingWorldResults = true;
    loadingUserResults = true;
    const ul = document.querySelector('.ranks')
    const navItems = document.querySelectorAll('.nav-items')
    navItems.forEach((value) => {
      value.classList.remove('active')
    })
    navItems[points.index].classList.add('active')
    ul.innerHTML = ''
    axios
      .get(`${connectionAPI}/all-results/${points.modality[points.index]}/`)
      .then((response) => {
        points.points = response.data.results;
        const ul = document.querySelector('.ranks')
        ul.innerHTML = ''
        points.points.forEach((value, index) => {
          const li = document.createElement('li');
          li.innerHTML = `
              <p>${index + 1} - ${value.name}</p>
              <h3>${value[points.modality[points.index]][0].results}</h3>
            `
          ul.appendChild(li)
        })
        scoreLoaded = true;
      })
      .catch(() => {
        loadingWorldResults = false;
        points.points = [];
        scoreLoaded = true;
      });

    if(auth.currentUser.isAnonymous) {
      loadingUserResults = false;
      points.userRecord = 0;
      scoreLoaded = true;
      return
    }
    axios
      .get(`${connectionAPI}/user-results/${points.modality[points.index]}/${auth.currentUser.uid}`)
      .then((response) => {
        loadingUserResults = false;
        const results = response.data.result[points.modality[points.index]][0].results;
        points.userRecord = results;
        scoreLoaded = true;
      })
      .catch(() => {
        loadingUserResults = false;
        points.userRecord = 0;
        scoreLoaded = true;
      });



  }
</script>
<main class="page">
  <div class="card">
    <header>
      <nav>
        <div class="nav-items" on:click={() => turnModalityResults(0)}>Aventura</div>
        <div class="nav-items" on:click={() => turnModalityResults(1)}>Casual</div>
        <div class="nav-items" on:click={() => turnModalityResults(2)}>Arcade</div>
      </nav>
    </header>
    <main>
      <div class="user-record">
        {#if loadingUserResults}
          <div class="loading-animation">
            <div class="ball ball-ne"></div>
            <div class="ball ball-nw"></div>
            <div class="ball ball-sw"></div>
            <div class="ball ball-se"></div>
          </div>
        {/if}
        {#if !loadingUserResults}
          <h3>{points.userRecord}</h3>
          <p>Seu recorde</p>
        {/if}
      </div>
      <div class="world-ranking">
          <h3>Ranking mundial</h3>
          <ul class="ranks world-hanks">

          </ul>
      </div>
    </main>

  </div>
</main>
<style lang="scss">
  .page {
    background-color: transparent;
    display: flex;

    .card {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 500px;
      max-width: 800px;
      background-color: rgb(var(--bg-card-color));
      border-radius: var(--brd-radius);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      margin: auto;
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
      cursor: url(../../lib/assets/cursors/cursor.png), default;
      @media (max-width: 800px) {
        border-radius: 0;
        height: 100%;
      }
      @media (max-width: 700px) {
        flex-direction: column;
        width: 100%;
      }

      & header {
        width: 100%;
        height: 2.5em;
        display: flex;
        align-items: center;
        justify-content: center;

        & nav {
          width: max-content;
          height: max-content;
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: 0.5em;

          & div {
            font-size: var(--fs-p);
            cursor: url(../../lib/assets/cursors/pointer.png), pointer;
            padding: 0.3em 0.5em;
            border-radius: var(--brd-radius);
            transition: background-color linear 200ms, color linear 200ms;
          }
        }
      }

      & main {
        width: 100%;
        height: calc(100% - 2.5em);

        & .user-record {
          width: 200px;
          height: max-content;
          margin: 0.5em;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column-reverse;

          & p {
            font-size: var(--fs-p);
          }

          & h3 {
            font-size: var(--fs-h3);
          }
        }
        & .world-ranking {
          position: absolute;
          bottom: 0.5em;
          right: 0.5em;
          width: 300px;
          max-height: 400px;
          overflow-y: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
      }
    }
  }
</style>