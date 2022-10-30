<script lang="ts">
  type Game = {
    game: string;
    displayName: string;
  }
  import {currentGame} from '../../stores';
  import {goto} from "$app/navigation";
  import Cloud from "$lib/Cloud.svelte";

  let gameSelected = false;
  let currentGameFromStores = '';
  let displayName = '';
  let dumpstersSelected = [];
  currentGame.subscribe(async (value: Game) => {
    if (!value.game || value.game.trim() === "") {
      await goto('/')
    }
    currentGameFromStores = value.game;
    displayName = value.displayName;
    gameSelected = true;
  })
  console.log(currentGameFromStores)
  const selectedItem = (event) => {
    if (dumpstersSelected.length < 4) {
      if (dumpstersSelected.filter(value => value === event.target.id).length === 0) {
        dumpstersSelected.push(event.target.id);
        return;
      }
      dumpstersSelected = dumpstersSelected.filter(value => value !== event.target.id);
      return;
    }
    event.target.checked = false;
  }
</script>
{#if gameSelected}
  <main class="page">
    {#if currentGameFromStores === 'adventure'}
      <div class="card">
        sei la
      </div>
    {/if}
    {#if currentGameFromStores === 'eventual'}
      <div class="card">
        <Cloud/>
        <div class="container">
          <header>
            <h2>{displayName}</h2>
          </header>
          <main>
            <div class="row">
              <div class="dumpsters">
                <header>
                  <h4>Escolha as lixeiras(Max - 4)</h4>
                </header>
                <div class="item">
                  <input type="checkbox" id="eletronic" name="trash" on:change={(event) => selectedItem(event)}>
                  <label for="eletronic">Eletrônico</label>
                </div>
                <div class="item">
                  <input type="checkbox" id="glass" name="trash" on:change={(event) => selectedItem(event)}>
                  <label for="glass">Vidro</label>
                </div>
                <div class="item">
                  <input type="checkbox" id="organic" name="trash" on:change={(event) => selectedItem(event)}>
                  <label for="organic">Orgânico</label>
                </div>
                <div class="item">
                  <input type="checkbox" id="metal" name="trash" on:change={(event) => selectedItem(event)}>
                  <label for="metal">Metal</label>
                </div>
                <div class="item">
                  <input type="checkbox" id="paper" name="trash" on:change={(event) => selectedItem(event)}>
                  <label for="paper">Papel</label>
                </div>
                <div class="item">
                  <input type="checkbox" id="plastic" name="trash" on:change={(event) => selectedItem(event)}>
                  <label for="plastic">Plástico</label>
                </div>
              </div>
              <div class="music">
                Musicas
                <label class="wk-switch">
                  <input type="checkbox" class="wk-switch__input">
                  <span class="wk-switch__slider"></span>
                </label>
              </div>
            </div>
            <div class="row">
              <button>Iniciar</button>
            </div>
          </main>
        </div>
      </div>
    {/if}
  </main>
{/if}

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
      @media (max-width: 800px) {
        border-radius: 0;
        height: 100%;
      }
      @media (max-width: 700px) {
        flex-direction: column;
        width: 100%;
      }

      & .container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(62px);

        & header {
          width: 100%;
          height: 2.5em;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(255, 255, 255);
        }

        & main {
          width: 100%;
          height: calc(100% - 2.5em);
          padding: 0.5em;
          row-gap: 0.5em;
          display: flex;
          flex-direction: column;

          & .row {
            width: 100%;
            display: flex;
            column-gap: 0.5em;
            display: flex;
            align-items: center;
            justify-content: center;

            & .music {
              padding: 0.5em;
              height: min-content;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: var(--fs-p);
              color: rgb(var(--text-secondary));
              column-gap: 0.5em;
              background-color: white;
              border-radius: var(--brd-radius);

              & .wk-switch {
                --active-bg: rgba(var(--primary-color), 0.5);
                --active-circle: rgb(var(--primary-color));
                --unactive-bg: rgba(var(--text-secondary), 0.5);
                --unactive-circle: rgb(var(--text-secondary));
              }
            }

            & button {
              width: 50%;
              height: 2em;
              background-color: rgb(var(--primary-color));
              color: rgb(255, 255, 255);
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: var(--brd-radius);
              border: none;
              outline: none;
            }

          }

          & .dumpsters {
            padding: 0.5em;
            border-radius: var(--brd-radius);
            background-color: white;
            width: 300px;

            & header {
              width: 100%;
              height: 1.5em;
              display: flex;
              align-items: center;
              justify-content: center;

              & h4 {
                color: rgb(var(--text-secondary));
                font-size: var(--fs-h4);
              }
            }

            & .item {
              & label {
                font-size: var(--fs-p);
                color: rgb(var(--text-secondary));
              }
            }
          }
        }
      }
    }

    .wk-switch {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      cursor: pointer;
      background-color: var(--unactive-bg);
      width: 46px;
      height: 26px;
      border-radius: 1em
    }

    .wk-switch__input {
      visibility: hidden
    }

    .wk-switch__input:checked + .wk-switch__slider {
      background-color: var(--active-bg)
    }

    .wk-switch__input:checked + .wk-switch__slider::before {
      background-color: var(--active-circle);
      height: 22px;
      width: 22px;
      left: 21px;
      margin: 0px
    }

    .wk-switch__input:disabled + .wk-switch___slider {
      cursor: not-allowed
    }

    .wk-switch__slider {
      display: flex;
      align-items: center;
      position: absolute;
      cursor: pointer;
      background-color: var(--unactive-bg);
      width: 100%;
      height: 100%;
      border-radius: 1em;
      transition: background-color .1s linear, border-color .1s linear
    }

    .wk-switch__slider::before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 3px;
      display: flex;
      align-items: center;
      background-color: var(--unactive-circle);
      border-radius: 1em;
      transition: left 175ms linear, background-color .1s linear, height 50ms linear, width 50ms linear, margin 50ms linear
    }

    /*# sourceMappingURL=switch.css.map */
  }

  @keyframes cloud {
    to {
      left: 100%;
    }
  }
</style>
