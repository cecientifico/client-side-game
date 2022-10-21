<script lang="ts">
  import { fade } from 'svelte/transition'
  export let isLoading: boolean = false
  export let msgLoading: string = 'Loading...'
</script>

{#if isLoading}
  <main class="loading" transition:fade={{ duration: 200 }}>
    <div class="loading__box">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
    <h2 class="loading__msg">{msgLoading}</h2>
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
    div {
      position: relative;
    }
    &__box {
      position: relative;
      width: 96px;
      height: 96px;
      & div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 16px;
        height: 16px;
        margin: auto;
        border-radius: 50%;
        background-color: rgb(var(--primary-color));
        transform: rotate(0deg) translateY(-35px);
        animation: loading 2000ms infinite;
        &:nth-child(2) {
          width: 13px;
          height: 13px;
          animation: loading 2000ms 100ms infinite;
        }
        &:nth-child(3) {
          width: 11px;
          height: 11px;
          animation: loading 2000ms 200ms infinite;
        }
        &:nth-child(4) {
          width: 9px;
          height: 9px;
          animation: loading 2000ms 300ms infinite;
        }
        &:nth-child(5) {
          width: 7px;
          height: 7px;
          animation: loading 2000ms 400ms infinite;
        }
        &:nth-child(6) {
          width: 5px;
          height: 5px;
          animation: loading 2000ms 500ms infinite;
        }
      }
    }
    .loading__msg {
      font-size: 1.3em;
    }
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg) translateY(-35px);
    }
    100% {
      transform: rotate(360deg) translateY(-35px);
    }
  }
</style>
