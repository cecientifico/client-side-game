<script lang="ts">
  import {onMount} from "svelte";
  import {goto, beforeNavigate} from "$app/navigation";
  import {currentGame, trashItems, connectionAPI, isMusic} from "../../stores";
  import {getAuth, onAuthStateChanged} from "firebase/auth";
  import axios from "axios";
  import Modal from "$lib/Modal.svelte";
  import Overlay from "$lib/Overlay.svelte";
  import Cloud from "$lib/Cloud.svelte";

  let time = 1300;
  let transition = 5000;
  let currentItemTrash = "";
  let currentTrashSelected = '';
  let card = "";
  let pontuation = 0;
  let faults = 7;
  let gameOver = false;
  const auth = getAuth();

  // VARIABLES FOR SAVE RESULTS IN BACKEND
  let userName = "";
  let userEmail = "";
  let userID = "";
  let modality = "adventure";

  beforeNavigate(() => {
    gameOver = true;
    isMusic.update(value => {
      return false
    })
  })
  const initGame = () => {
    const allTrashsItems = [
      ...trashItems.trashs.eletronic,
      ...trashItems.trashs.glass,
      ...trashItems.trashs.metal,
      ...trashItems.trashs.organic,
      ...trashItems.trashs.paper,
      ...trashItems.trashs.plastic,
    ];
    const sorteTrashItem = () => {
      const index = Math.round(Math.random() * 30);
      let positionX = Math.round(Math.random() * 100);
      if(positionX > 90) {
        positionX = 90;
      }
      if(positionX < 5) {
        positionX = 5;
      }
      currentItemTrash = allTrashsItems[index];
      const item = document.createElement("div");
      item.classList.add("item-desc", currentItemTrash);
      if (index < 5) {
        item.setAttribute('data-trash', 'electronic')
      } else if (index > 4 && index < 10) {
        item.setAttribute('data-trash', 'glass')
      } else if (index > 9 && index < 15) {
        item.setAttribute('data-trash', 'metal')
      } else if (index > 14 && index < 20) {
        item.setAttribute('data-trash', 'organic')
      } else if (index > 19 && index < 25) {
        item.setAttribute('data-trash', 'paper')
      } else if (index > 24 && index < 30) {
        item.setAttribute('data-trash', 'plastic')
      }
      item.style.left = `${positionX}%`;
      item.animate([{top: "0"}, {top: "100%"}], {
        duration: transition,
        fill: "forwards",
      });
      let timeout
      timeout = setTimeout(() => {
        item.remove();
        if (item.dataset.trash === currentTrashSelected) {
          if (pontuation > 0) {
            pontuation = pontuation - 3
          }
          if (faults > 0) {
            faults--
          }
        }
      }, transition)
      card.appendChild(item);
      item.addEventListener('touchstart', (event) => {
        if (event.target.dataset.trash === currentTrashSelected) {
          pontuation = pontuation + 3;
        } else {
          if (pontuation > 0) {
            pontuation = pontuation - 3;
          }
          if (faults > 0) {
            faults--
          }

        }
        event.target.remove();
        clearTimeout(timeout)
        if (time > 200) {
          time = time - 50;
        }
        if (transition > 700) {
          transition = transition - 50;
        }
      })
      item.addEventListener("mousedown", (event) => {
        if (event.target.dataset.trash === currentTrashSelected) {
          pontuation = pontuation + 3;
        } else {
          if (pontuation > 0) {
            pontuation = pontuation - 3;
          }
          if (faults > 0) {
            faults--
          }

        }
        event.target.remove();
        clearTimeout(timeout)
        if (time > 200) {
          time = time - 50;
        }
        if (transition > 700) {
          transition = transition - 50;
        }
      });
    };
    sorteTrashItem();
    setTimeout(() => {
      if (!gameOver) {
        if (faults > 0) {
          initGame();
          return;
        } else {
          isMusic.update(value => {
            return false
          })
          gameOver = true;
          if(auth.currentUser.isAnonymous) return
          axios.post(`${connectionAPI}/new-result`, {
            userName,
            userEmail,
            userID,
            modality,
            userResult: pontuation,
          })
            .then((response) => {
              console.log(response)
            }).catch((error) => {
            console.log(error)
          })
        }
      }
    }, time);
  };

  onMount(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userName = user.displayName;
        userEmail = user.email;
        userID = user.uid;
      }
    });
    card = document.querySelector(".game-card")!;
    card.addEventListener("mousedown", () => {
      card.classList.add("clicked");
    });
    card.addEventListener("mouseup", () => {
      card.classList.remove("clicked");
    });
    currentGame.subscribe((item) => {
      if (!item.data.dumpsterSelected) {
        goto("/");
        return;
      }
      if (!item.data.dumpsterSelected[0] || !item.data.dumpsterSelected[0] === null || !item.data.dumpsterSelected[0] === undefined || !item.data.dumpsterSelected[0] === "") {
        goto("/");
        return;
      }
      currentTrashSelected = item.data.dumpsterSelected[0];
      initGame();
    });
  });
</script>

<main class="page">
  {#if gameOver}
    <Modal score={pontuation} displayName="Aventura" preGame="adventure"/>
  {/if}
  <div class="card game-card diurnal">
    {#if gameOver}
      <Overlay/>
    {/if}
    <div class="score">
      <h2>Pontuação</h2>
      <h3>{pontuation}</h3>
    </div>
    <div class="faults">
      <h2>Faltas</h2>
      <h3>{faults}/7</h3>
    </div>
    <div class="sun-and-moon"/>
    <Cloud/>
  </div>
</main>


<style lang="scss">
  .page {
    background-color: transparent;
    display: flex;

    & .cloud {
      position: absolute;
      top: 50px;
      left: -120%;
      transition: translateX(-50%);
      will-change: left;
      animation: cloud linear 10000ms forwards infinite;
    }

    .card {
      cursor: url(../../lib/assets/cursors/pre-get.png), default;
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
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

      @media (max-width: 800px) {
        border-radius: 0;
        height: 100%;
      }

      & .score {
        width: 200px;
        height: auto;
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.5em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;

        & h2 {
          font-size: var(--fs-h2);
          @media (max-width: 800px) {
            font-size: calc(var(--fs-h2) - 0.2em);
          }
        }

        & h3 {
          font-size: var(--fs-h3);
          color: rgb(var(--primary-color));
          @media (max-width: 800px) {
            font-size: calc(var(--fs-h3) - 0.2em);
          }
        }
      }

      & .faults {
        width: 200px;
        height: auto;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0.5em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;

        & h2 {
          font-size: var(--fs-h2);
          @media (max-width: 800px) {
            font-size: calc(var(--fs-h2) - 0.2em);
          }
        }

        & h3 {
          font-size: var(--fs-h3);
          color: #b72a2a;
          @media (max-width: 800px) {
            font-size: calc(var(--fs-h3) - 0.2em);
          }
        }
      }
    }
  }

  @keyframes cloud {
    to {
      left: 100%;
    }
  }
</style>
