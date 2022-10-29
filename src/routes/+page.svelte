<script lang="ts">
  type User = {
    photoURL: string;
    displayName: string;
  }
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import axios from "axios";
  import { currentTrash, connectionAPI } from "../stores";
  import Cloud from "$lib/Cloud.svelte"

  const auth = getAuth();
  let urlProfileImageUser: any = "";
  let displayNameUser = "";
  let scoreLoaded = false;
  let lastResult = 0;
  onMount(async () => {
    onAuthStateChanged(auth, (user: User) => {
      console.log(user)
      urlProfileImageUser = user.photoURL;
      displayNameUser = user.displayName;
      axios
        .get(`${connectionAPI}/user-results/${user?.uid}`)
        .then((response: any) => {
          lastResult = response.data.result.results[0].results;
          scoreLoaded = true;
        })
        .catch((error: any) => {
          scoreLoaded = true;
        });
    });
  });
  let menu: any = null;
  onMount(() => {
    menu = document.querySelector(".menu");
  });
  const active = () => {
    menu.classList.toggle("active");
  };
  const setTrash = (trash: string) => {
    currentTrash.set(trash);
    goto("/game");
  };
  const toggleProfile = (event: any) => {
    event.stopPropagation();
  };
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
</script>

<main class="page">
  <div class="card diurnal">
    <Cloud/>
    <div class="sun-and-moon" />
    <header>
      <div class="profile" on:click={(event) => toggleProfile(event)}>
        <!-- svelte-ignore a11y-missing-attribute -->
        {#if scoreLoaded}
          <img src={urlProfileImageUser} />
        {/if}
        <ul>
          <li>
            {displayNameUser}
          </li>
          <li on:click={() => signOutUser()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              viewBox="0 0 512 512"
            >
              <path
                d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </li>
        </ul>
      </div>
      <div class="score">
        {#if !scoreLoaded}
          <div class="loading-animation">
            <div class="ball ball-ne" />
            <div class="ball ball-nw" />
            <div class="ball ball-sw" />
            <div class="ball ball-se" />
          </div>
        {/if}
        {#if scoreLoaded}
          <h3>Score</h3>
          <h2>{lastResult}</h2>
        {/if}
      </div>
    </header>
    <main class="content">
      <div class="left">
        <h4>Melhores Pontuações</h4>
        <svg
          width="205"
          height="200"
          viewBox="0 0 205 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M205 167.998C205 187.358 170.654 182.442 146.963 182.442C123.271 182.442 115 162.415 115 143.055C115 123.695 133.154 108 156.846 108C180.537 108 205 148.637 205 167.998Z"
            fill="url(#paint0_radial_26_1734)"
          />
          <g filter="url(#filter0_f_26_1734)">
            <ellipse
              cx="108"
              cy="174"
              rx="56"
              ry="13"
              fill="black"
              fill-opacity="0.29"
            />
          </g>
          <path
            d="M41.9835 40.7343C40.9337 32.9358 46.9984 26 54.8673 26H160.085C167.971 26 174.04 32.9634 172.964 40.7749L155.047 170.775C154.16 177.208 148.663 182 142.169 182H72.3673C65.8579 182 60.3519 177.186 59.4835 170.734L41.9835 40.7343Z"
            fill="url(#paint1_linear_26_1734)"
          />
          <rect
            x="37.5356"
            y="10.9951"
            width="52"
            height="17"
            rx="8.5"
            transform="rotate(-12.2071 37.5356 10.9951)"
            fill="url(#paint2_linear_26_1734)"
          />
          <rect
            y="31.3931"
            width="142"
            height="17"
            rx="8.5"
            transform="rotate(-12.2071 0 31.3931)"
            fill="url(#paint3_linear_26_1734)"
          />
          <rect
            x="56"
            y="47.3774"
            width="17.3686"
            height="95.1972"
            rx="8.68429"
            transform="rotate(-7.86739 56 47.3774)"
            fill="url(#paint4_linear_26_1734)"
          />
          <rect
            width="17.3686"
            height="115.82"
            rx="8.68429"
            transform="matrix(-0.990588 -0.136881 -0.136881 0.990588 160.236 47.3774)"
            fill="url(#paint5_linear_26_1734)"
          />
          <rect
            width="17.3686"
            height="95.1972"
            rx="8.68429"
            transform="matrix(0.99934 -0.036312 -0.036312 -0.99934 100.734 138.481)"
            fill="url(#paint6_linear_26_1734)"
          />
          <path
            d="M22 167.998C22 187.358 56.3459 182.442 80.0373 182.442C103.729 182.442 112 162.415 112 143.055C112 123.695 93.8456 108 70.1542 108C46.4627 108 22 148.637 22 167.998Z"
            fill="url(#paint7_radial_26_1734)"
          />
          <defs>
            <filter
              id="filter0_f_26_1734"
              x="39"
              y="148"
              width="138"
              height="52"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="6.5"
                result="effect1_foregroundBlur_26_1734"
              />
            </filter>
            <radialGradient
              id="paint0_radial_26_1734"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(152.009 147.713) rotate(90) scale(35.0549 42.8972)"
            >
              <stop stop-color="#524F4F" />
              <stop offset="1" stop-color="#413F3F" />
            </radialGradient>
            <linearGradient
              id="paint1_linear_26_1734"
              x1="90.5"
              y1="26"
              x2="142"
              y2="177.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AFB3B0" />
              <stop offset="0.826394" stop-color="#878787" />
              <stop offset="1" stop-color="#747474" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_26_1734"
              x1="63.5356"
              y1="10.9951"
              x2="63.5356"
              y2="27.9951"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CECECE" />
              <stop offset="1" stop-color="#7F7F7F" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_26_1734"
              x1="71"
              y1="31.3931"
              x2="71"
              y2="48.3931"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AFB3B0" />
              <stop offset="1" stop-color="#747474" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_26_1734"
              x1="64.6843"
              y1="47.3774"
              x2="64.2136"
              y2="141.355"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#747474" stop-opacity="0.29" />
              <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17" />
              <stop offset="1" stop-color="#747474" stop-opacity="0.33" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_26_1734"
              x1="8.68429"
              y1="0"
              x2="7.9876"
              y2="114.334"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#747474" stop-opacity="0.29" />
              <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17" />
              <stop offset="1" stop-color="#747474" stop-opacity="0.33" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_26_1734"
              x1="8.68429"
              y1="0"
              x2="8.21361"
              y2="93.9774"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#747474" stop-opacity="0.29" />
              <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17" />
              <stop offset="1" stop-color="#747474" stop-opacity="0.33" />
            </linearGradient>
            <radialGradient
              id="paint7_radial_26_1734"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(74.9907 147.713) rotate(90) scale(35.0549 42.8972)"
            >
              <stop stop-color="#524F4F" />
              <stop offset="1" stop-color="#413F3F" />
            </radialGradient>
          </defs>
        </svg>
        <ul>
          <li>
            <p data-content="Lorem ipsum dolor sit amet">Zezin</p>
            <span>52000</span>
          </li>
          <li>
            <p>Zezin</p>
            <span>52000</span>
          </li>
          <li>
            <p>Zezin</p>
            <span>52000</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="menu">
          <svg
            width="205"
            height="200"
            viewBox="0 0 205 200"
            fill="none"
            class="trash-image"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M205 167.998C205 187.358 170.654 182.442 146.963 182.442C123.271 182.442 115 162.415 115 143.055C115 123.695 133.154 108 156.846 108C180.537 108 205 148.637 205 167.998Z"
              fill="url(#paint0_radial_26_1734)"
            />
            <g filter="url(#filter0_f_26_1734)">
              <ellipse
                cx="108"
                cy="174"
                rx="56"
                ry="13"
                fill="black"
                fill-opacity="0.29"
              />
            </g>
            <path
              d="M41.9835 40.7343C40.9337 32.9358 46.9984 26 54.8673 26H160.085C167.971 26 174.04 32.9634 172.964 40.7749L155.047 170.775C154.16 177.208 148.663 182 142.169 182H72.3673C65.8579 182 60.3519 177.186 59.4835 170.734L41.9835 40.7343Z"
              fill="url(#paint1_linear_26_1734)"
            />
            <rect
              x="37.5356"
              y="10.9951"
              width="52"
              height="17"
              rx="8.5"
              transform="rotate(-12.2071 37.5356 10.9951)"
              fill="url(#paint2_linear_26_1734)"
            />
            <rect
              y="31.3931"
              width="142"
              height="17"
              rx="8.5"
              transform="rotate(-12.2071 0 31.3931)"
              fill="url(#paint3_linear_26_1734)"
            />
            <rect
              x="56"
              y="47.3774"
              width="17.3686"
              height="95.1972"
              rx="8.68429"
              transform="rotate(-7.86739 56 47.3774)"
              fill="url(#paint4_linear_26_1734)"
            />
            <rect
              width="17.3686"
              height="115.82"
              rx="8.68429"
              transform="matrix(-0.990588 -0.136881 -0.136881 0.990588 160.236 47.3774)"
              fill="url(#paint5_linear_26_1734)"
            />
            <rect
              width="17.3686"
              height="95.1972"
              rx="8.68429"
              transform="matrix(0.99934 -0.036312 -0.036312 -0.99934 100.734 138.481)"
              fill="url(#paint6_linear_26_1734)"
            />
            <path
              d="M22 167.998C22 187.358 56.3459 182.442 80.0373 182.442C103.729 182.442 112 162.415 112 143.055C112 123.695 93.8456 108 70.1542 108C46.4627 108 22 148.637 22 167.998Z"
              fill="url(#paint7_radial_26_1734)"
            />
            <defs>
              <filter
                id="filter0_f_26_1734"
                x="39"
                y="148"
                width="138"
                height="52"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="6.5"
                  result="effect1_foregroundBlur_26_1734"
                />
              </filter>
              <radialGradient
                id="paint0_radial_26_1734"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(152.009 147.713) rotate(90) scale(35.0549 42.8972)"
              >
                <stop stop-color="#524F4F" />
                <stop offset="1" stop-color="#413F3F" />
              </radialGradient>
              <linearGradient
                id="paint1_linear_26_1734"
                x1="90.5"
                y1="26"
                x2="142"
                y2="177.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#AFB3B0" />
                <stop offset="0.826394" stop-color="#878787" />
                <stop offset="1" stop-color="#747474" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_26_1734"
                x1="63.5356"
                y1="10.9951"
                x2="63.5356"
                y2="27.9951"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CECECE" />
                <stop offset="1" stop-color="#7F7F7F" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_26_1734"
                x1="71"
                y1="31.3931"
                x2="71"
                y2="48.3931"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#AFB3B0" />
                <stop offset="1" stop-color="#747474" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_26_1734"
                x1="64.6843"
                y1="47.3774"
                x2="64.2136"
                y2="141.355"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#747474" stop-opacity="0.29" />
                <stop
                  offset="0.50868"
                  stop-color="#7F7F7F"
                  stop-opacity="0.17"
                />
                <stop offset="1" stop-color="#747474" stop-opacity="0.33" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_26_1734"
                x1="8.68429"
                y1="0"
                x2="7.9876"
                y2="114.334"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#747474" stop-opacity="0.29" />
                <stop
                  offset="0.50868"
                  stop-color="#7F7F7F"
                  stop-opacity="0.17"
                />
                <stop offset="1" stop-color="#747474" stop-opacity="0.33" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_26_1734"
                x1="8.68429"
                y1="0"
                x2="8.21361"
                y2="93.9774"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#747474" stop-opacity="0.29" />
                <stop
                  offset="0.50868"
                  stop-color="#7F7F7F"
                  stop-opacity="0.17"
                />
                <stop offset="1" stop-color="#747474" stop-opacity="0.33" />
              </linearGradient>
              <radialGradient
                id="paint7_radial_26_1734"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(74.9907 147.713) rotate(90) scale(35.0549 42.8972)"
              >
                <stop stop-color="#524F4F" />
                <stop offset="1" stop-color="#413F3F" />
              </radialGradient>
            </defs>
          </svg>
          <ul>
            <li on:click={() => setTrash("paper")}>
              <p>Papel</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328"
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z"
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M240 128h64M240 192h64M112 256h192M112 320h192M112 384h192"
                />
                <path
                  fill="rgb(255, 255, 255)"
                  d="M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z"
                />
              </svg>
            </li>
            <li on:click={() => setTrash("plastic")}>
              <p>Plástico</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                viewBox="0 0 512 512"
                ><path
                  d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z"
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                /><path
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M69 153.99l187 110 187-110M256 463.99v-200"
                /></svg
              >
            </li>
            <li on:click={() => setTrash("metal")}>
              <p>Metal</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                viewBox="0 0 512 512"
                ><path
                  d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                /></svg
              >
            </li>
            <li on:click={() => setTrash("glass")}>
              <p>Vidro</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                viewBox="0 0 512 512"
                ><path
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M176 48h160M118 304h276M208 48v93.48a64.09 64.09 0 01-9.88 34.18L73.21 373.49C48.4 412.78 76.63 464 123.08 464h265.84c46.45 0 74.68-51.22 49.87-90.51L313.87 175.66a64.09 64.09 0 01-9.87-34.18V48"
                /></svg
              >
            </li>
            <li on:click={() => setTrash("organic")}>
              <p>Orgânico</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                viewBox="0 0 512 512"
                ><path
                  d="M404.76 123.08C358.37 104.18 309.69 96 256 96s-106.1 9-148.9 26.68c-8.08 3.3-15.26 9-10.07 19.5C101.24 150.71 203 375 241.66 455a15.94 15.94 0 0028.72 0l144.05-312.22c3.19-6.9.9-15.4-9.67-19.7z"
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  stroke-miterlimit="10"
                  stroke-width="32"
                /><path
                  d="M436.38 82.68C384.31 62.08 320.17 48 256 48S128.65 60.78 75.48 82.08C70.79 84 62 88.43 64.41 95.88L74.09 120c4 8.2 8.67 8.2 15.06 8.2 1.79 0 4.29-1 7.28-2.18A442.46 442.46 0 01256 96c56.76 0 114.91 12 159.6 30 3.59 1.4 5.59 2.18 7.28 2.18 6.58 0 10.38 2.19 15-8.1L447.65 96c2.01-6-4.99-10.82-11.27-13.32z"
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <circle fill="rgb(255, 255, 255)" cx="192" cy="192" r="32" />
                <circle fill="rgb(255, 255, 255)" cx="320" cy="208" r="32" />
                <circle
                  fill="rgb(255, 255, 255)"
                  cx="256"
                  cy="320"
                  r="32"
                /></svg
              >
            </li>
            <li on:click={() => setTrash("eletronic")}>
              <p>Eletrônico</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                viewBox="0 0 512 512"
                ><rect
                  x="80"
                  y="80"
                  width="352"
                  height="352"
                  rx="48"
                  ry="48"
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  stroke-linejoin="round"
                  stroke-width="32"
                /><rect
                  x="144"
                  y="144"
                  width="224"
                  height="224"
                  rx="16"
                  ry="16"
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  stroke-linejoin="round"
                  stroke-width="32"
                /><path
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M256 80V48M336 80V48M176 80V48M256 464v-32M336 464v-32M176 464v-32M432 256h32M432 336h32M432 176h32M48 256h32M48 336h32M48 176h32"
                /></svg
              >
            </li>
          </ul>
          <button class="btn-new-game"> Novo Jogo </button>
        </div>
      </div>
    </main>
  </div>
</main>

<style type="scss">
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
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
      cursor: url(../lib/assets/cursors/cursor.png), default;
      @media (max-width: 800px) {
        border-radius: 0;
        height: 100%;
      }
      @media (max-width: 700px) {
        flex-direction: column;
        width: 100%;
      }

      & header {
        width: 100%;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5em;
        z-index: 100000;
        & .profile {
          position: relative;
          width: 250px;
          height: 50px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          cursor: pointer;
          cursor: url(../lib/assets/cursors/pointer.png), default;
          & img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            pointer-events: none;
          }
          ul {
            display: flex;
            flex-direction: column;
            li {
              margin-left: 0.5em;
              font-size: var(--fs-p);
              list-style: none;
              text-align: center;
              width: 200px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              @media (max-width: 800px) {
                width: 200px;
              }
              @media (max-width: 700px) {
                width: 100px;
              }
              &:last-child {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 20px;
              }
            }
          }
        }
        & .score {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          h3 {
            font-size: var(--fs-h3);
            animation: sky-color 60s linear 0s forwards infinite;
            transition: color 1s ease-out;
          }
          h2 {
            font-size: var(--fs-h2);
            color: rgb(var(--text-primary));
          }
        }
      }
      & main {
        width: 100%;
        height: calc(100% - 70px);
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 0.5em;
        position: relative;
        & .left {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          row-gap: 1em;
          @media (max-width: 800px) {
            position: absolute;
            top: 20%;
            left: 0.5em;
          }
          @media (max-width: 700px) {
            position: absolute;
            top: 20%;
            left: 0.5em;
          }
          & svg {
            width: 170px;
            height: 170px;
          }
          & h4 {
            font-size: var(--fs-h4);
          }
          ul {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 170px;
            display: flex;
            align-items: center;
            justify-content: center;
            row-gap: 0.3em;
            flex-direction: column;
            padding: 0.5em;
            li {
              width: 100%;
              height: 50px;
              background-color: rgba(0, 0, 0, 0.1);
              border-radius: var(--brd-radius);
              display: flex;
              padding: 0.5em;
              align-items: flex-start;
              justify-content: center;
              flex-direction: column;
              & p {
                font-size: var(--fs-p);
              }
              & span {
                font-size: 0.5em;
              }
              cursor: pointer;
              cursor: url(../lib/assets/cursors/pointer.png), default;
              &:nth-child(2) {
                transform: translateX(50px);
              }
              &:nth-child(3) {
                transform: translate(120px);
              }
            }
          }
        }
        & .right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          row-gap: 1em;
          @media (max-width: 800px) {
            position: absolute;
            bottom: 0.5em;
            right: 0.5em;
          }
          @media (max-width: 700px) {
            position: absolute;
            bottom: 0.5em;
            right: 0.5em;
          }
          & .menu {
            position: relative;
            overflow-y: hidden;
            width: 200px;
            height: 300px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            & .trash-image {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              width: 170px;
              height: 170px;
            }
            &:not(.active) {
              ul {
                top: 0;
                animation: active-verso linear 200ms forwards;
                animation-delay: 400ms;
                li {
                  width: 100%;
                  animation: expand-verso linear 200ms forwards;
                  animation-delay: 200ms;
                  & svg {
                    left: initial;
                    right: 0;
                  }
                  & p {
                    left: 50%;
                    opacity: 1;
                    transform: translateX(-50%);
                    animation: visibility-verso linear 400ms forwards;
                  }
                }
              }
            }
            &.active {
              ul {
                top: 100%;
                animation: active linear 200ms forwards;
                li {
                  animation: expand linear 200ms forwards;
                  animation-delay: 200ms;
                  & svg {
                    left: initial;
                    right: 0;
                  }
                  & p {
                    animation: visibility linear 400ms forwards;
                    animation-delay: 200ms;
                  }
                }
              }
            }
            & ul {
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              bottom: 0;
              width: 100%;
              height: 300px;
              max-height: 300px;
              display: flex;
              align-items: flex-end;
              justify-content: flex-start;
              flex-direction: column;
              transition: top linear 200ms;
              row-gap: 0.5em;
              overflow-y: auto;
              padding-bottom: 60px;
              & li {
                position: relative;
                width: 50px;
                height: 50px;
                min-height: 50px;
                color: rgb(255, 255, 255);
                background-color: rgba(var(--primary-color), 0.5);
                border-radius: var(--brd-radius);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: var(--fs-p);
                overflow: hidden;
                cursor: pointer;
                cursor: url(../lib/assets/cursors/pointer.png), default;
                svg {
                  position: absolute;
                  left: 50%;
                  transform: translateX(-50%);
                }
                & p {
                  position: absolute;
                  left: -500px;
                  opacity: 0;
                }
              }
            }
            & button {
              width: 100%;
              height: 50px;
              display: flex;
              font-size: var(--fs-p);
              align-items: center;
              justify-content: center;
              background-color: rgba(var(--primary-color), 0.5);
              border-radius: var(--brd-radius);
              display: flex;
              color: rgb(255, 255, 255);
              padding: 0.5em;
              align-items: center;
              justify-content: center;
              z-index: 10000000;
              cursor: pointer;
              cursor: url(../lib/assets/cursors/pointer.png), default;
            }
          }
        }
      }
    }
  }

  @keyframes active {
    to {
      top: 0;
    }
  }
  @keyframes active-verso {
    to {
      top: 100%;
    }
  }
  @keyframes expand {
    to {
      width: 100%;
    }
  }
  @keyframes expand-verso {
    to {
      width: 50px;
    }
  }
  @keyframes visibility {
    to {
      left: 50%;
      opacity: 1;
      transform: translateX(-50%);
    }
  }
  @keyframes visibility-verso {
    to {
      left: -300px;
      opacity: 0;
      transform: translateX(0);
    }
  }
</style>
