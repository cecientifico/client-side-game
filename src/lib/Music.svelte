<script lang="ts">
  let isMusic = false;
</script>
<button class="music" on:click={() => isMusic = !isMusic}>
  {#if isMusic}
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="rgb(var(--text-secondary))" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"/>
    </svg>
  {/if}
  {#if !isMusic}
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="rgb(var(--text-secondary))" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"/>
      <path d="M23 9L17 15" stroke="rgb(var(--text-secondary))" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"/>
      <path d="M17 9L23 15" stroke="rgb(var(--text-secondary))" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"/>
    </svg>
  {/if}
</button>
<style lang="scss">
  button {
    background-color: transparent;
    border: none;
    width: 1.5em;
    height: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: url(../lib/assets/cursors/pointer.png), pointer;
    border-radius: var(--brd-radius);
    & svg {
      pointer-events: none;
    }
  }
</style>