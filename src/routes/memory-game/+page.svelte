<script lang="ts">
  type Matches = {
    part01: string;
    part02: string;
  };

  import { onMount } from "svelte";
  import { trashItems } from "../../stores";
  let items = [
    ...trashItems.trashs.eletronic,
    ...trashItems.trashs.eletronic,
    ...trashItems.trashs.glass,
    ...trashItems.trashs.glass,
    ...trashItems.trashs.metal,
    ...trashItems.trashs.metal,
    ...trashItems.trashs.organic,
    ...trashItems.trashs.organic,
    ...trashItems.trashs.paper,
    ...trashItems.trashs.paper,
    ...trashItems.trashs.plastic,
    ...trashItems.trashs.plastic,
  ];
  let time = 3;
  let isGaming = false;
  let selected = {
    class: "",
    index: -1,
  };
  let isProcessing = false;
  let maches: Matches[] = [];

  const countdown = () => {
    setTimeout(() => {
      time--;
      if (time > 0) {
        countdown();
      } else {
        const flipCard = document.querySelectorAll(".container");
        flipCard.forEach((item) => {
          item.classList.remove("open");
        });
        isGaming = true;
        initTime();
      }
    }, 1000);
  };
  const initTime = () => {
    setTimeout(() => {
      time++;
      if (isGaming) {
        initTime();
      }
    }, 1000);
  };
  onMount(async () => {
    const card = document.querySelector<HTMLDivElement>(".card")!;
    function randomArray(array: any) {
      for (let index = array.length; index; index--) {
        const indexRandom = Math.floor(Math.random() * index);
        const element = array[index - 1];
        array[index - 1] = array[indexRandom];

        array[indexRandom] = element;
      }
    }
    randomArray(items);
    items.forEach((item: any, index: any) => {
      const flipCardInner = document.createElement("div");
      const flipCardFront = document.createElement("div");
      const flipCardBack = document.createElement("div");
      const flipCard = document.createElement("div");
      flipCard.classList.add("container", "open");
      flipCard.setAttribute("data-item", item);
      flipCard.setAttribute("data-index", index);
      flipCardInner.classList.add("flip-card-inner");
      flipCardFront.classList.add("flip-card-front");
      flipCardBack.classList.add("flip-card-back", item);
      flipCardInner.appendChild(flipCardFront);
      flipCardInner.appendChild(flipCardBack);
      flipCard.appendChild(flipCardInner);
      card.appendChild(flipCard);
      flipCard.addEventListener("click", (event: any) => {
        if (
          !event.target.classList.contains("open") &&
          !event.target.classList.contains("matched")
        ) {
          if (isGaming && !isProcessing) {
            if (selected.class === "") {
              event.target.classList.add("open");
              selected.class = event.target.getAttribute("data-item");
              selected.index = event.target.getAttribute("data-index");
            } else {
              if (
                selected.class !== event.target.getAttribute("data-item") &&
                selected.index !== event.target.getAttribute("data-index")
              ) {
                selected.class = "";
                selected.index = -1;
                isProcessing = true;
                event.target.classList.add("open");
                setTimeout(() => {
                  document
                    .querySelectorAll(".container.open")
                    .forEach((item) => {
                      item.classList.remove("open");
                      isProcessing = false;
                    });
                }, 1000);
              } else {
                event.target.classList.add("open");
                const pairs = document.querySelectorAll(".container.open");
                isProcessing = true;
                maches.push({
                  pair01: pairs[0].getAttribute("data-index"),
                  pair02: pairs[1].getAttribute("data-index"),
                });
                console.log(maches);
                setTimeout(() => {
                  pairs.forEach((item) => {
                    item.classList.remove("open");
                    item.classList.add("matched");
                    isProcessing = false;
                  });
                }, 1000);
              }
            }
          }
        } else {
          console.log(selected);
        }
      });
      if (index === 59) {
        setTimeout(() => {
          countdown();
        }, 1000);
      }
    });
  });
</script>

<main class="page">
  <div class="temp">{time}</div>
  <div class="card" />
</main>

<style lang="scss">
  .page {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    & .temp {
      position: relative;
      overflow: hidden;
      width: 100%;
      max-width: 800px;
      background-color: rgb(var(--bg-card-color));
      border-radius: var(--brd-radius);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin: auto;
      column-gap: 5px;
      row-gap: 5px;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
      cursor: url(../../lib/assets/cursors/cursor.png), default;
    }
    & .card {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 500px;
      max-width: 800px;
      background-color: rgb(var(--bg-card-color));
      border-radius: var(--brd-radius);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin: auto;
      column-gap: 5px;
      row-gap: 5px;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
      cursor: url(../../lib/assets/cursors/cursor.png), default;
    }
  }
</style>
