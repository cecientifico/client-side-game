<script>
  import {onMount} from "svelte";
  import Music from "$lib/Music.svelte";
  import {connectionAPI, isMusic} from "../../stores";
  import axios from "axios";
  import {getAuth} from "firebase/auth";

  const auth = getAuth();
  let userName = auth.currentUser?.displayName;
  let userEmail = auth.currentUser?.email;
  let userID = auth.currentUser?.uid;
  let modality = "arcade";

  onMount(() => {

    const score = document.querySelector("#score");
    const containerWrapper = document.querySelector(".container-wrapper");
    const gameArea = document.querySelector("#gameArea");

    let player = {speed: 15, score: 0};

    let keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowRight: false,
      ArrowLeft: false,
    };

    containerWrapper.addEventListener("click", start);
    document.addEventListener("keydown", pressOn);
    document.addEventListener("keyup", pressOff);
    const buttons = document.querySelectorAll(".controll-game button");

    buttons.forEach(btn => {
      btn.addEventListener("touchstart", (e) => {
        keys[e.srcElement.dataset.dir] = true;
        let road = gameArea.getBoundingClientRect();

        if (keys.ArrowDown && player.y < road.bottom - 237) {
          player.y += player.speed;
        }
      });
      btn.addEventListener("touchend", (e) => {
        keys[e.srcElement.dataset.dir] = false;
      })
    });

    // MOVE AS LINHAS E LIXEIRAS
    function moveObjects() {
      let lines = document.querySelectorAll(".line");

      lines.forEach((item) => a(item, player.speed));

      function a(item, speed) {
        if (item.y > 1500) {
          item.y -= 1500;
        }
        item.y += speed;
        item.style.top = item.y + "px";
      }
    }

    function isCollide(a, b) {
      let aRect = a.getBoundingClientRect();
      let bRect = b.getBoundingClientRect();
      return !(
        aRect.bottom < bRect.top ||
        aRect.top > bRect.bottom ||
        aRect.right < bRect.left ||
        aRect.left > bRect.right
      );
    }

    function moveDrop(car) {
      let ele = document.querySelectorAll(".drop");

      ele.forEach(function (item) {
        if (isCollide(car, item)) {
          endGame();
          document.querySelectorAll(".trash").forEach(t => {
            t.classList.remove("anim");
          });
          document.querySelectorAll(".house").forEach(t => {
            t.classList.remove("anim");
          });
        }
        if (item.y > 1500) {
          item.y = -600;
          const random = Math.floor(Math.random() * (gameArea.clientWidth - 50));
          item.style.left = random + "px";
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
      });
    }

    function playGame() {
      let car = document.querySelector(".car");
      let road = gameArea.getBoundingClientRect();

      moveObjects();
      moveDrop(car);

      if (player.start) {
        if (keys.ArrowUp && player.y > road.top - 542) {
          player.y -= player.speed;
        }
        if (keys.ArrowDown && player.y < road.bottom - 237) {
          player.y += player.speed;
        }
        if (keys.ArrowLeft && player.x > 0) {
          player.x -= player.speed;
        }
        if (keys.ArrowRight && player.x < road.width - 54) {
          player.x += player.speed;
        }
        car.style.left = player.x + "px";
        car.style.top = player.y + "px";
        window.requestAnimationFrame(playGame);
        player.score++;
        score.innerText = player.score;
      }
    }

    function pressOn(e) {
      e.preventDefault();
      keys[e.key] = true;

      if (e.which === 66 && player.start === true) {
        const audio = document.querySelector('.buzina-audio-html');
        audio.volume = 0.07;
        audio.play();
      }

    }

    function pressOff(e) {
      e.preventDefault();
      keys[e.key] = false;
    }

    function endGame() {
      player.start = false;
      containerWrapper.classList.remove("hide");
      isMusic.update(() => {
        return false
      })
      if (auth.currentUser.isAnonymous) return
      axios.post(`${connectionAPI}/new-result`, {
        userName,
        userEmail,
        userID,
        modality,
        userResult: player.score,
      })
        .then((response) => {
          console.log(response)
        }).catch((error) => {
        console.log(error)
      })
    }

    function start() {
      containerWrapper.classList.add("hide");

      document.querySelectorAll(".trash").forEach(t => {
        t.classList.add("anim");
      });

      document.querySelectorAll(".house").forEach(t => {
        t.classList.add("anim");
      });


      gameArea.innerHTML = "";
      player.start = true;
      player.score = 0;

      // criar linhas do asphalto
      for (let x = 0; x < 10; x++) {
        let div = document.createElement("div");
        div.classList.add("line");
        div.y = x * 150;
        div.style.top = x * 150 + "px";
        gameArea.appendChild(div);


      }

      window.requestAnimationFrame(playGame);
      let car = document.createElement("div");

      car.setAttribute("class", "car");
      gameArea.appendChild(car);

      player.x = car.offsetLeft;
      player.y = car.offsetTop;

      for (let x = 0; x < 3; x++) {
        let drop = document.createElement("div");
        drop.classList.add("drop");
        drop.y = (x + 1) * 600 * -1;
        drop.style.top = drop.y + "px";

        const random = Math.floor(Math.random() * (gameArea.clientWidth - drop.clientWidth));
        drop.style.left = random + "px";

        drop.style.backgroundImage = randomBackgroundDrop();
        gameArea.appendChild(drop);
      }
    }

    function randomBackgroundDrop() {
      const a = Math.floor(Math.random() * 5)
      return "url('https://recicla-game/src/lib/assets/images/icons/organico-" + a + ".png')"
    }
  })

</script>
<main class="arcade-container">

  <div class="container">
    <audio class="buzina-audio-html" src="https://recicla-game/src/lib/assets/sounds/buzina.mp3"></audio>
    <div class="container-wrapper">
      <div class="music">
        <Music/>
      </div>
      <h1>Clique para começar</h1>
      <p>Toda a cidade foi contaminada desvie o maximo possivel</p>
      <!-- BOTAO DE VOLLUME VAI AQUI -->
    </div>

    <div class="game-content">
      <h1 class="most-score">
        Score:
        <span id="score">0</span>
      </h1>
      <div class="content-game-area">
        <div class="trash"></div>
        <div class="trash"></div>

        <div class="house"></div>
        <div class="house"></div>
        <div class="house"></div>
        <div class="house"></div>

        <div id="gameArea"></div>
      </div>
    </div>
  </div>

  <div class="controll-game">

    <div>
      <button data-dir="ArrowLeft">left</button>
      <button data-dir="ArrowRight">right</button>
    </div>

  </div>

</main>

<style>
    * {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;

    }

    .music {
        position: absolute;
        bottom: 0.5em;
        left: 0.5em;
    }

    body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
