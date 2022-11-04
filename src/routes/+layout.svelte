<script lang="ts">
  import "../styles/global.scss";
  import {onMount} from "svelte";
  import {goto} from "$app/navigation";
  import {firebaseConfig, isMusic, loading, musics} from "../stores";
  import {initializeApp} from "firebase/app";
  import {getAnalytics} from "firebase/analytics";
  import {getAuth, onAuthStateChanged} from "firebase/auth";
  import Loading from "../lib/Loading.svelte";

  let isLoading = true;

  $: loading.subscribe((value) => {
    isLoading = value;
  })


  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  let loadingAudio = false;
  onMount(async () => {
    $: isMusic.subscribe( async(value) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const audio = document.querySelector<HTMLAudioElement>('audio.sound-background')!;
      if (value) {
        musics.index = Math.round(Math.random() * 9)
        audio.src = musics.musics[musics.index];
        audio.load();
        loadingAudio= true;
        await audio.play();
        loadingAudio = false;
        audio.onended = async() => {
          musics.index = Math.round(Math.random() * 9)
          audio.src = musics.musics[musics.index];
          audio.load();
          loadingAudio= true;
          await audio.play();
          loadingAudio = false;
        };

      } else {
        audio.pause()
      }
    })
    loading.update(() => false);
    const analytics = getAnalytics(app);
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        goto("/login");
      }
    });
  });

</script>

<main>
  <div class="load-audio">
    {#if loadingAudio}
      <div class="loading-animation">
        <div class="ball ball-ne"></div>
        <div class="ball ball-nw"></div>
        <div class="ball ball-sw"></div>
        <div class="ball ball-se"></div>
      </div>
    {/if}
  </div>
  <audio class="sound-background"></audio>
  <Loading {isLoading}/>
</main>
{#if !isLoading}
    <slot />

{/if}

<style lang="scss">
  .load-audio {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }
</style>
