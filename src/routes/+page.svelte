<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import Profile from "$lib/Profile.svelte";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import axios from "axios";
  import { currentTrash, connectionAPI } from "../stores";

  let isProfile: boolean = false;
  const auth = getAuth();
  let urlProfileImageUser: any = "";
  let displayNameUser: string = "";
  let emailProfileUser: string = "";
  let scoreLoaded: boolean = false;
  let lastResult: number = 0;
  onMount(async () => {
    document.body.addEventListener("click", () => {
      isProfile = false;
    });
    onAuthStateChanged(auth, (user) => {
      urlProfileImageUser = user?.photoURL;
      displayNameUser = user?.displayName || "";
      emailProfileUser = user?.email || "";
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
    isProfile = !isProfile;
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
    <svg
      class="cloud"
      width="916"
      height="145"
      viewBox="0 0 916 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.6866 20.3332H52.4866C51.2395 15.5032 48.6626 11.1199 45.0487 7.68124C41.4349 4.24259 36.9289 1.88656 32.043 0.880839C27.157 -0.124878 22.0869 0.260053 17.4087 1.99189C12.7306 3.72373 8.63203 6.73303 5.57874 10.6779C2.52545 14.6227 0.639866 19.3448 0.136257 24.3078C-0.367353 29.2707 0.531202 34.2754 2.72982 38.7531C4.92844 43.2309 8.33895 47.0022 12.5738 49.6385C16.8087 52.2747 21.6982 53.6703 26.6866 53.6666H56.6866C61.1068 53.6666 65.3461 51.9106 68.4717 48.785C71.5973 45.6594 73.3532 41.4202 73.3532 36.9999C73.3532 32.5796 71.5973 28.3404 68.4717 25.2148C65.3461 22.0892 61.1068 20.3332 56.6866 20.3332Z"
        fill="url(#paint0_linear_107_2)"
        fill-opacity="0.4"
      />
      <path
        d="M660.463 33.75H653.019C650.809 25.5994 646.242 18.2024 639.837 12.3997C633.433 6.59701 625.447 2.6212 616.788 0.924053C608.129 -0.773094 599.143 -0.123523 590.853 2.79895C582.562 5.72143 575.298 10.7996 569.887 17.4565C564.476 24.1134 561.134 32.0821 560.241 40.457C559.349 48.8319 560.941 57.2773 564.838 64.8335C568.734 72.3898 574.779 78.7538 582.284 83.2025C589.789 87.6513 598.454 90.0063 607.295 90H660.463C668.296 90 675.809 87.0368 681.349 81.7624C686.888 76.4879 690 69.3342 690 61.875C690 54.4158 686.888 47.2621 681.349 41.9876C675.809 36.7132 668.296 33.75 660.463 33.75Z"
        fill="url(#paint1_linear_107_2)"
        fill-opacity="0.4"
      />
      <path
        d="M103.687 47H99.4866C98.2395 42.17 95.6626 37.7866 92.0487 34.348C88.4349 30.9093 83.9289 28.5533 79.043 27.5476C74.157 26.5419 69.0869 26.9268 64.4087 28.6586C59.7306 30.3905 55.632 33.3998 52.5787 37.3446C49.5254 41.2894 47.6399 46.0116 47.1363 50.9745C46.6326 55.9374 47.5312 60.9421 49.7298 65.4199C51.9284 69.8976 55.339 73.6689 59.5738 76.3052C63.8087 78.9415 68.6982 80.337 73.6866 80.3333H103.687C108.107 80.3333 112.346 78.5774 115.472 75.4518C118.597 72.3262 120.353 68.0869 120.353 63.6667C120.353 59.2464 118.597 55.0072 115.472 51.8815C112.346 48.7559 108.107 47 103.687 47Z"
        fill="url(#paint2_linear_107_2)"
        fill-opacity="0.7"
      />
      <path
        d="M707.463 60.4167H700.019C697.809 52.2661 693.242 44.8692 686.837 39.0665C680.433 33.2638 672.447 29.2879 663.788 27.5908C655.129 25.8937 646.143 26.5432 637.853 29.4657C629.562 32.3882 622.298 37.4664 616.887 44.1233C611.476 50.7802 608.134 58.7488 607.241 67.1237C606.349 75.4987 607.941 83.9441 611.838 91.5003C615.734 99.0565 621.779 105.421 629.284 109.869C636.789 114.318 645.454 116.673 654.295 116.667H707.463C715.296 116.667 722.809 113.704 728.349 108.429C733.888 103.155 737 96.001 737 88.5417C737 81.0825 733.888 73.9288 728.349 68.6544C722.809 63.3799 715.296 60.4167 707.463 60.4167Z"
        fill="url(#paint3_linear_107_2)"
        fill-opacity="0.7"
      />
      <path
        d="M305.279 29.625H299.553C297.853 23.195 294.34 17.3597 289.413 12.782C284.487 8.20431 278.344 5.06784 271.683 3.72898C265.022 2.39011 258.11 2.90255 251.733 5.20806C245.355 7.51358 239.768 11.5197 235.605 16.7713C231.443 22.0228 228.872 28.3092 228.186 34.9161C227.499 41.523 228.724 48.1854 231.721 54.1465C234.719 60.1075 239.368 65.128 245.141 68.6375C250.915 72.1471 257.58 74.0049 264.381 74H305.279C311.305 74 317.084 71.6624 321.345 67.5014C325.606 63.3405 328 57.697 328 51.8125C328 45.928 325.606 40.2845 321.345 36.1236C317.084 31.9626 311.305 29.625 305.279 29.625Z"
        fill="url(#paint4_linear_107_2)"
        fill-opacity="0.7"
      />
      <path
        d="M392.687 87H388.487C387.239 82.17 384.663 77.7866 381.049 74.348C377.435 70.9093 372.929 68.5533 368.043 67.5476C363.157 66.5419 358.087 66.9268 353.409 68.6586C348.731 70.3905 344.632 73.3998 341.579 77.3446C338.525 81.2894 336.64 86.0116 336.136 90.9745C335.633 95.9374 336.531 100.942 338.73 105.42C340.928 109.898 344.339 113.669 348.574 116.305C352.809 118.941 357.698 120.337 362.687 120.333H392.687C397.107 120.333 401.346 118.577 404.472 115.452C407.597 112.326 409.353 108.087 409.353 103.667C409.353 99.2464 407.597 95.0072 404.472 91.8815C401.346 88.7559 397.107 87 392.687 87Z"
        fill="url(#paint5_linear_107_2)"
        fill-opacity="0.7"
      />
      <path
        d="M264.279 53.625H258.553C256.853 47.195 253.34 41.3597 248.413 36.782C243.487 32.2043 237.344 29.0678 230.683 27.729C224.022 26.3901 217.11 26.9026 210.733 29.2081C204.355 31.5136 198.768 35.5197 194.605 40.7713C190.443 46.0228 187.872 52.3092 187.186 58.9161C186.499 65.523 187.724 72.1854 190.721 78.1465C193.719 84.1075 198.368 89.128 204.141 92.6375C209.915 96.1471 216.58 98.0049 223.381 98H264.279C270.305 98 276.084 95.6624 280.345 91.5014C284.606 87.3405 287 81.697 287 75.8125C287 69.928 284.606 64.2845 280.345 60.1236C276.084 55.9626 270.305 53.625 264.279 53.625Z"
        fill="url(#paint6_linear_107_2)"
        fill-opacity="0.4"
      />
      <path
        d="M351.687 111H347.487C346.239 106.17 343.663 101.787 340.049 98.348C336.435 94.9093 331.929 92.5533 327.043 91.5476C322.157 90.5419 317.087 90.9268 312.409 92.6586C307.731 94.3905 303.632 97.3998 300.579 101.345C297.525 105.289 295.64 110.012 295.136 114.975C294.633 119.937 295.531 124.942 297.73 129.42C299.928 133.898 303.339 137.669 307.574 140.305C311.809 142.941 316.698 144.337 321.687 144.333H351.687C356.107 144.333 360.346 142.577 363.472 139.452C366.597 136.326 368.353 132.087 368.353 127.667C368.353 123.246 366.597 119.007 363.472 115.882C360.346 112.756 356.107 111 351.687 111Z"
        fill="url(#paint7_linear_107_2)"
        fill-opacity="0.4"
      />
      <path
        d="M484.373 20H480.173C478.926 15.17 476.349 10.7866 472.735 7.34798C469.121 3.90934 464.615 1.5533 459.729 0.547587C454.844 -0.45813 449.773 -0.0731991 445.095 1.65864C440.417 3.39048 436.319 6.39978 433.265 10.3446C430.212 14.2894 428.326 19.0116 427.823 23.9745C427.319 28.9374 428.218 33.9421 430.416 38.4199C432.615 42.8976 436.025 46.6689 440.26 49.3052C444.495 51.9415 449.385 53.337 454.373 53.3333H484.373C488.793 53.3333 493.033 51.5774 496.158 48.4518C499.284 45.3262 501.04 41.0869 501.04 36.6667C501.04 32.2464 499.284 28.0072 496.158 24.8815C493.033 21.7559 488.793 20 484.373 20Z"
        fill="url(#paint8_linear_107_2)"
        fill-opacity="0.4"
      />
      <path
        d="M898.373 60H894.173C892.926 55.17 890.349 50.7866 886.735 47.348C883.121 43.9093 878.615 41.5533 873.729 40.5476C868.844 39.5419 863.773 39.9268 859.095 41.6586C854.417 43.3905 850.319 46.3998 847.265 50.3446C844.212 54.2894 842.326 59.0116 841.823 63.9745C841.319 68.9374 842.218 73.9421 844.416 78.4199C846.615 82.8976 850.025 86.6689 854.26 89.3052C858.495 91.9415 863.385 93.337 868.373 93.3333H898.373C902.793 93.3333 907.033 91.5774 910.158 88.4518C913.284 85.3262 915.04 81.0869 915.04 76.6667C915.04 72.2464 913.284 68.0072 910.158 64.8815C907.033 61.7559 902.793 60 898.373 60Z"
        fill="url(#paint9_linear_107_2)"
        fill-opacity="0.4"
      />
      <path
        d="M465.687 46H461.487C460.239 41.17 457.663 36.7866 454.049 33.348C450.435 29.9093 445.929 27.5533 441.043 26.5476C436.157 25.5419 431.087 25.9268 426.409 27.6586C421.731 29.3905 417.632 32.3998 414.579 36.3446C411.525 40.2894 409.64 45.0116 409.136 49.9745C408.633 54.9374 409.531 59.9421 411.73 64.4199C413.928 68.8976 417.339 72.6689 421.574 75.3052C425.809 77.9415 430.698 79.337 435.687 79.3333H465.687C470.107 79.3333 474.346 77.5774 477.472 74.4518C480.597 71.3262 482.353 67.0869 482.353 62.6667C482.353 58.2464 480.597 54.0072 477.472 50.8815C474.346 47.7559 470.107 46 465.687 46Z"
        fill="url(#paint10_linear_107_2)"
        fill-opacity="0.7"
      />
      <path
        d="M879.687 86H875.487C874.239 81.17 871.663 76.7866 868.049 73.348C864.435 69.9093 859.929 67.5533 855.043 66.5476C850.157 65.5419 845.087 65.9268 840.409 67.6586C835.731 69.3905 831.632 72.3998 828.579 76.3446C825.525 80.2894 823.64 85.0116 823.136 89.9745C822.633 94.9374 823.531 99.9421 825.73 104.42C827.928 108.898 831.339 112.669 835.574 115.305C839.809 117.941 844.698 119.337 849.687 119.333H879.687C884.107 119.333 888.346 117.577 891.472 114.452C894.597 111.326 896.353 107.087 896.353 102.667C896.353 98.2464 894.597 94.0072 891.472 90.8815C888.346 87.7559 884.107 86 879.687 86Z"
        fill="url(#paint11_linear_107_2)"
        fill-opacity="0.7"
      />
      <defs>
        <linearGradient
          id="paint0_linear_107_2"
          x1="20.1865"
          y1="1.20913e-06"
          x2="32.1865"
          y2="51.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5B99FF" />
          <stop offset="1" stop-color="#0F5CDC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_107_2"
          x1="595.775"
          y1="-0.562361"
          x2="615.15"
          y2="86.7637"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5B99FF" />
          <stop offset="1" stop-color="#0F5CDC" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_107_2"
          x1="67.1865"
          y1="26.6667"
          x2="79.1865"
          y2="78.1667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5B99FF" />
          <stop offset="1" stop-color="#0F5CDC" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_107_2"
          x1="642.775"
          y1="26.1044"
          x2="662.15"
          y2="113.43"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5B99FF" />
          <stop offset="1" stop-color="#0F5CDC" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_107_2"
          x1="255.52"
          y1="2.55636"
          x2="271.157"
          y2="71.28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5B99FF" />
          <stop offset="1" stop-color="#0F5CDC" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_107_2"
          x1="356.187"
          y1="66.6667"
          x2="368.187"
          y2="118.167"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5B99FF" />
          <stop offset="1" stop-color="#0F5CDC" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_107_2"
          x1="214.52"
          y1="26.5564"
          x2="230.157"
          y2="95.28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5B99FF" />
          <stop offset="1" stop-color="#0F5CDC" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_107_2"
          x1="315.187"
          y1="90.6667"
          x2="327.187"
          y2="142.167"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5B99FF" />
          <stop offset="1" stop-color="#0F5CDC" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_107_2"
          x1="447.873"
          y1="-0.333251"
          x2="459.873"
          y2="51.1667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5B99FF" />
          <stop offset="1" stop-color="#0F5CDC" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_107_2"
          x1="861.873"
          y1="39.6667"
          x2="873.873"
          y2="91.1667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5B99FF" />
          <stop offset="1" stop-color="#0F5CDC" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_107_2"
          x1="429.187"
          y1="25.6667"
          x2="441.187"
          y2="77.1667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5B99FF" />
          <stop offset="1" stop-color="#0F5CDC" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_107_2"
          x1="843.187"
          y1="65.6667"
          x2="855.187"
          y2="117.167"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5B99FF" />
          <stop offset="1" stop-color="#0F5CDC" />
        </linearGradient>
      </defs>
    </svg>
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
    & .cloud {
      position: absolute;
      top: 50px;
      left: -120%;
      transition: translateX(-50%);
      will-change: left;
      animation: cloud 10000ms linear 0s forwards infinite;
    }
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
        width: 95%;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5em;
        z-index: 100000;
        & .profile {
          position: relative;
          width: 300px;
          height: 50px;
          display: flex;
          justify-content: center;
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
              width: 250px;
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
            color: rgb(var(--text-secondary));
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
            color: rgb(var(--text-secondary));
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
            color: rgb(var(--text-secondary));
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
  @keyframes cloud {
    from {
      left: -1000px;
    }
    to {
      left: 100%;
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
