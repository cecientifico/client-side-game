<script>
  import {onMount} from "svelte";
  import Image from '../../lib/assets/images/Group-65.png'

  onMount(() => {
    const score = document.querySelector("#score");
    const containerWrapper = document.querySelector(".container-wrapper");
    const gameArea = document.querySelector("#gameArea");
    const truck = document.querySelector(".truck");

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

    function moveLines() {
      let lines = document.querySelectorAll(".line");

      lines.forEach(function (item) {
        if (item.y > 1500) {
          item.y -= 1500;
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
      });
    }

    function isCollide(a, b) {
      var aRect = a.getBoundingClientRect();
      var bRect = b.getBoundingClientRect();
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
        }
        if (item.y > 1500) {
          item.y = -600;
          const random = Math.floor(Math.random() * (gameArea.clientWidth - 50));
          truck.style.left = (random - (truck.clientWidth / 2)) + "px";

          if (truck.style.animation != "truck 3s linear infinite") {
            truck.style.animation = "truck 3s linear infinite";
          }
          item.style.left = random + "px";
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
      });
    }

    function playGame() {
      let car = document.querySelector(".car");
      let road = gameArea.getBoundingClientRect();

      moveLines();
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
    }

    function pressOff(e) {
      e.preventDefault();
      keys[e.key] = false;
    }

    function endGame() {
      player.start = false;
      containerWrapper.classList.remove("hide");
      truck.style.animation = "";
    }

    function start() {
      containerWrapper.classList.add("hide");

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
        truck.style.left = (random - (truck.clientWidth / 2)) + "px";
        drop.style.left = random + "px";

        drop.style.backgroundImage = randomBackgroundDrop();
        gameArea.appendChild(drop);
      }
    }

    function randomBackgroundDrop() {
      const a = Math.floor(Math.random() * 5)
      return "url('../../lib/assets/images/icons/organico-" + a + ".png')"
    }
  })

</script>
<div class="container">
  <div class="container-wrapper">
    <h1>Clique para começar</h1>
    <p>Desvie o maximo possivel dos objetos </p>
    <!-- BOTAO DE VOLLUME VAI AQUI -->
  </div>

  <div class="game-content">
    <h1 class="most-score">
      Score:
      <span id="score">0</span>
    </h1>
    <div class="content-game-area">
      <img class="truck" src={Image}>
      <div id="gameArea"></div>
    </div>
  </div>
</div>

<div class="controll-game">
  <div>
    <button data-dir="ArrowUp">top</button>
  </div>
  <div>
    <button data-dir="ArrowLeft">left</button>
    <button data-dir="ArrowRight">right</button>
  </div>
  <div>
    <button data-dir="ArrowDown">bottom</button>
  </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    * {
        margin: 0px;
        padding: 0px;
        font-family: 'Inter', sans-serif;

    }

    body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hide {
        display: none !important;
        opacity: 0 !important;
    }

    .drop {
        width: 50px;
        height: 50px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 30;
    }

    .car,
    .drop {
        position: absolute;
        bottom: 100px;
        margin: auto;
        background-size: cover;
    }

    .car {
        z-index: 1000;
        background: red;
        background: url("./images/truck-blue.svg");
        background-size: cover;
        width: 50px;
        height: 100px;
        transition: 0.02s linear;
    }

    .truck {
        position: absolute;
        z-index: 10;
        top: -300px;
        left: 225px;
        width: 140px;
        transition: 0.2s linear;
    }

    @keyframes truck {
        0% {
            top: -250px;
        }

        30% {
            top: -150px;
        }

        40% {
            top: -180px;
        }

        80% {
            top: -150px;
        }

        100% {
            top: -250px;
        }

    }

    .container {
        width: 800px;
        height: 500px;
        background-color: white;
        border-radius: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
    }

    .container .container-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        background-color: rgba(2, 13, 26, 0.616);
        color: white;
        transition: 0.3s linear;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        user-select: none;
        cursor: pointer;
    }

    .container .container-wrapper h1 {
        color: blue;
        text-shadow: 0px 0px 4px rgba(0, 0, 255, 0.452);
    }

    .most-score {
        font-size: 20px;
        color: blue;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 100000;
    }

    .most-score #score {
        display: block;
        color: white;
        font-size: 22px;
        transition: 0.3s linear;
    }

    .container .game-content {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        background-color: rgb(123, 212, 88);
    }

    .content-game-area {
        width: 450px;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .container #gameArea {
        width: 100%;
        height: 100%;
        background-color: rgb(125, 131, 134);
        overflow: hidden;
        position: absolute;

    }

    .line {
        position: absolute;
        height: 100px;
        width: 10px;
        margin-top: -100px;
        margin-left: calc(50% - 5px);
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.658);
    }

    .controll-game {
        z-index: 1000000;
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 200px;
        background-color: rgb(255, 255, 255);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        display: none;
    }

    .controll-game div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
    }

    .controll-game button {
        width: 200px;
        height: 50px;
        border-radius: 6px;
        border: none;
        outline: none;
        cursor: pointer;
        user-select: none;
    }

    @media screen and (max-width: 600px) {
        .container {
            width: 100vw;
            height: calc(100vh - 200px);
            border-radius: 0px;
            top: 0px;
            left: 0px;
            transform: translate(0px, 0px);
            padding: 0px;
        }

        .container #gameArea {
            width: 80%;
            margin: 0px auto;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%
        }

        .controll-game {
            display: flex;
            position: fixed;
            bottom: 0px;
            left: 0px;
        }
    }
</style>
