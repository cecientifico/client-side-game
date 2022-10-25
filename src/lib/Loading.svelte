<script lang="ts">
  import { fade } from "svelte/transition";
  import pensador from "./msgsLoading";
  const index = Math.round(Math.random() * 21);
  export let isLoading: boolean = false;
  let msgLoading: string = pensador[index].texto;
  let author: string = pensador[index].autor;
</script>

{#if isLoading}
  <main class="loading" transition:fade={{ duration: 200 }}>
    <div class="loading-animation">
      <div class="ball ball-ne" />
      <div class="ball ball-nw" />
      <div class="ball ball-sw" />
      <div class="ball ball-se" />
    </div>
    <div class="container">
      <p class="loading__msg">"{msgLoading}"</p>
      <p class="author">--{author}</p>
    </div>
  </main>
{/if}

<style lang="scss">
  .loading {
    width: 100%;
    height: 100%;
    max-width: 1400px;
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    right: 0;
    bottom: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: rgb(var(--text-color));
    row-gap: 1em;
    padding: 0.5em;
    & .loading-animation {
      --loading-ball-size: 10px;
      --loading-spacing-size: 15px;
      --loading-ball-spacing-size: calc(
        (var(--loading-ball-size) + var(--loading-spacing-size))
      );
      --loading-total-size: calc(
        (var(--loading-ball-size) * 2 + var(--loading-spacing-size))
      );
    }
    .container {
      display: flex;
      align-items: center;
      width: 60%;
      justify-content: center;
      flex-direction: column;
    }
    .loading__msg {
      font-size: 1em;
    }
    .author {
      align-self: flex-end;
      font-size: 0.7em;
    }
  }
</style>
