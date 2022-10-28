<script lang="ts">
  import "../styles/global.scss";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { firebaseConfig } from "../stores";
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import Loading from "../lib/Loading.svelte";
  let isLoading = true;
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  onMount(async () => {
    isLoading = false;
    const analytics = getAnalytics(app);
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        goto("/login");
      }
    });
  });
</script>

<main>
  <Loading {isLoading} />
</main>
{#if !isLoading}
  <slot />
{/if}
