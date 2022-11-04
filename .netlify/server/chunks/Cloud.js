import { c as create_ssr_component } from "./index.js";
/* empty css                                     */const css = {
  code: ".cloud.svelte-kkhqce{position:absolute;top:50px;left:-120%;transition:translateX(-50%);will-change:left;animation:svelte-kkhqce-cloud 10000ms linear 0s forwards infinite;will-change:left}@media(max-width: 800px){.cloud.svelte-kkhqce{animation:none}}@media(max-width: 700px){.cloud.svelte-kkhqce{animation:none}}@keyframes svelte-kkhqce-cloud{from{left:-1000px}to{left:100%}}",
  map: null
};
const Cloud = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main><svg class="${"cloud svelte-kkhqce"}" width="${"916"}" height="${"145"}" viewBox="${"0 0 916 145"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M56.6866 20.3332H52.4866C51.2395 15.5032 48.6626 11.1199 45.0487 7.68124C41.4349 4.24259 36.9289 1.88656 32.043 0.880839C27.157 -0.124878 22.0869 0.260053 17.4087 1.99189C12.7306 3.72373 8.63203 6.73303 5.57874 10.6779C2.52545 14.6227 0.639866 19.3448 0.136257 24.3078C-0.367353 29.2707 0.531202 34.2754 2.72982 38.7531C4.92844 43.2309 8.33895 47.0022 12.5738 49.6385C16.8087 52.2747 21.6982 53.6703 26.6866 53.6666H56.6866C61.1068 53.6666 65.3461 51.9106 68.4717 48.785C71.5973 45.6594 73.3532 41.4202 73.3532 36.9999C73.3532 32.5796 71.5973 28.3404 68.4717 25.2148C65.3461 22.0892 61.1068 20.3332 56.6866 20.3332Z"}" fill="${"url(#paint0_linear_107_2)"}" fill-opacity="${"0.4"}"></path><path d="${"M660.463 33.75H653.019C650.809 25.5994 646.242 18.2024 639.837 12.3997C633.433 6.59701 625.447 2.6212 616.788 0.924053C608.129 -0.773094 599.143 -0.123523 590.853 2.79895C582.562 5.72143 575.298 10.7996 569.887 17.4565C564.476 24.1134 561.134 32.0821 560.241 40.457C559.349 48.8319 560.941 57.2773 564.838 64.8335C568.734 72.3898 574.779 78.7538 582.284 83.2025C589.789 87.6513 598.454 90.0063 607.295 90H660.463C668.296 90 675.809 87.0368 681.349 81.7624C686.888 76.4879 690 69.3342 690 61.875C690 54.4158 686.888 47.2621 681.349 41.9876C675.809 36.7132 668.296 33.75 660.463 33.75Z"}" fill="${"url(#paint1_linear_107_2)"}" fill-opacity="${"0.4"}"></path><path d="${"M103.687 47H99.4866C98.2395 42.17 95.6626 37.7866 92.0487 34.348C88.4349 30.9093 83.9289 28.5533 79.043 27.5476C74.157 26.5419 69.0869 26.9268 64.4087 28.6586C59.7306 30.3905 55.632 33.3998 52.5787 37.3446C49.5254 41.2894 47.6399 46.0116 47.1363 50.9745C46.6326 55.9374 47.5312 60.9421 49.7298 65.4199C51.9284 69.8976 55.339 73.6689 59.5738 76.3052C63.8087 78.9415 68.6982 80.337 73.6866 80.3333H103.687C108.107 80.3333 112.346 78.5774 115.472 75.4518C118.597 72.3262 120.353 68.0869 120.353 63.6667C120.353 59.2464 118.597 55.0072 115.472 51.8815C112.346 48.7559 108.107 47 103.687 47Z"}" fill="${"url(#paint2_linear_107_2)"}" fill-opacity="${"0.7"}"></path><path d="${"M707.463 60.4167H700.019C697.809 52.2661 693.242 44.8692 686.837 39.0665C680.433 33.2638 672.447 29.2879 663.788 27.5908C655.129 25.8937 646.143 26.5432 637.853 29.4657C629.562 32.3882 622.298 37.4664 616.887 44.1233C611.476 50.7802 608.134 58.7488 607.241 67.1237C606.349 75.4987 607.941 83.9441 611.838 91.5003C615.734 99.0565 621.779 105.421 629.284 109.869C636.789 114.318 645.454 116.673 654.295 116.667H707.463C715.296 116.667 722.809 113.704 728.349 108.429C733.888 103.155 737 96.001 737 88.5417C737 81.0825 733.888 73.9288 728.349 68.6544C722.809 63.3799 715.296 60.4167 707.463 60.4167Z"}" fill="${"url(#paint3_linear_107_2)"}" fill-opacity="${"0.7"}"></path><path d="${"M305.279 29.625H299.553C297.853 23.195 294.34 17.3597 289.413 12.782C284.487 8.20431 278.344 5.06784 271.683 3.72898C265.022 2.39011 258.11 2.90255 251.733 5.20806C245.355 7.51358 239.768 11.5197 235.605 16.7713C231.443 22.0228 228.872 28.3092 228.186 34.9161C227.499 41.523 228.724 48.1854 231.721 54.1465C234.719 60.1075 239.368 65.128 245.141 68.6375C250.915 72.1471 257.58 74.0049 264.381 74H305.279C311.305 74 317.084 71.6624 321.345 67.5014C325.606 63.3405 328 57.697 328 51.8125C328 45.928 325.606 40.2845 321.345 36.1236C317.084 31.9626 311.305 29.625 305.279 29.625Z"}" fill="${"url(#paint4_linear_107_2)"}" fill-opacity="${"0.7"}"></path><path d="${"M392.687 87H388.487C387.239 82.17 384.663 77.7866 381.049 74.348C377.435 70.9093 372.929 68.5533 368.043 67.5476C363.157 66.5419 358.087 66.9268 353.409 68.6586C348.731 70.3905 344.632 73.3998 341.579 77.3446C338.525 81.2894 336.64 86.0116 336.136 90.9745C335.633 95.9374 336.531 100.942 338.73 105.42C340.928 109.898 344.339 113.669 348.574 116.305C352.809 118.941 357.698 120.337 362.687 120.333H392.687C397.107 120.333 401.346 118.577 404.472 115.452C407.597 112.326 409.353 108.087 409.353 103.667C409.353 99.2464 407.597 95.0072 404.472 91.8815C401.346 88.7559 397.107 87 392.687 87Z"}" fill="${"url(#paint5_linear_107_2)"}" fill-opacity="${"0.7"}"></path><path d="${"M264.279 53.625H258.553C256.853 47.195 253.34 41.3597 248.413 36.782C243.487 32.2043 237.344 29.0678 230.683 27.729C224.022 26.3901 217.11 26.9026 210.733 29.2081C204.355 31.5136 198.768 35.5197 194.605 40.7713C190.443 46.0228 187.872 52.3092 187.186 58.9161C186.499 65.523 187.724 72.1854 190.721 78.1465C193.719 84.1075 198.368 89.128 204.141 92.6375C209.915 96.1471 216.58 98.0049 223.381 98H264.279C270.305 98 276.084 95.6624 280.345 91.5014C284.606 87.3405 287 81.697 287 75.8125C287 69.928 284.606 64.2845 280.345 60.1236C276.084 55.9626 270.305 53.625 264.279 53.625Z"}" fill="${"url(#paint6_linear_107_2)"}" fill-opacity="${"0.4"}"></path><path d="${"M351.687 111H347.487C346.239 106.17 343.663 101.787 340.049 98.348C336.435 94.9093 331.929 92.5533 327.043 91.5476C322.157 90.5419 317.087 90.9268 312.409 92.6586C307.731 94.3905 303.632 97.3998 300.579 101.345C297.525 105.289 295.64 110.012 295.136 114.975C294.633 119.937 295.531 124.942 297.73 129.42C299.928 133.898 303.339 137.669 307.574 140.305C311.809 142.941 316.698 144.337 321.687 144.333H351.687C356.107 144.333 360.346 142.577 363.472 139.452C366.597 136.326 368.353 132.087 368.353 127.667C368.353 123.246 366.597 119.007 363.472 115.882C360.346 112.756 356.107 111 351.687 111Z"}" fill="${"url(#paint7_linear_107_2)"}" fill-opacity="${"0.4"}"></path><path d="${"M484.373 20H480.173C478.926 15.17 476.349 10.7866 472.735 7.34798C469.121 3.90934 464.615 1.5533 459.729 0.547587C454.844 -0.45813 449.773 -0.0731991 445.095 1.65864C440.417 3.39048 436.319 6.39978 433.265 10.3446C430.212 14.2894 428.326 19.0116 427.823 23.9745C427.319 28.9374 428.218 33.9421 430.416 38.4199C432.615 42.8976 436.025 46.6689 440.26 49.3052C444.495 51.9415 449.385 53.337 454.373 53.3333H484.373C488.793 53.3333 493.033 51.5774 496.158 48.4518C499.284 45.3262 501.04 41.0869 501.04 36.6667C501.04 32.2464 499.284 28.0072 496.158 24.8815C493.033 21.7559 488.793 20 484.373 20Z"}" fill="${"url(#paint8_linear_107_2)"}" fill-opacity="${"0.4"}"></path><path d="${"M898.373 60H894.173C892.926 55.17 890.349 50.7866 886.735 47.348C883.121 43.9093 878.615 41.5533 873.729 40.5476C868.844 39.5419 863.773 39.9268 859.095 41.6586C854.417 43.3905 850.319 46.3998 847.265 50.3446C844.212 54.2894 842.326 59.0116 841.823 63.9745C841.319 68.9374 842.218 73.9421 844.416 78.4199C846.615 82.8976 850.025 86.6689 854.26 89.3052C858.495 91.9415 863.385 93.337 868.373 93.3333H898.373C902.793 93.3333 907.033 91.5774 910.158 88.4518C913.284 85.3262 915.04 81.0869 915.04 76.6667C915.04 72.2464 913.284 68.0072 910.158 64.8815C907.033 61.7559 902.793 60 898.373 60Z"}" fill="${"url(#paint9_linear_107_2)"}" fill-opacity="${"0.4"}"></path><path d="${"M465.687 46H461.487C460.239 41.17 457.663 36.7866 454.049 33.348C450.435 29.9093 445.929 27.5533 441.043 26.5476C436.157 25.5419 431.087 25.9268 426.409 27.6586C421.731 29.3905 417.632 32.3998 414.579 36.3446C411.525 40.2894 409.64 45.0116 409.136 49.9745C408.633 54.9374 409.531 59.9421 411.73 64.4199C413.928 68.8976 417.339 72.6689 421.574 75.3052C425.809 77.9415 430.698 79.337 435.687 79.3333H465.687C470.107 79.3333 474.346 77.5774 477.472 74.4518C480.597 71.3262 482.353 67.0869 482.353 62.6667C482.353 58.2464 480.597 54.0072 477.472 50.8815C474.346 47.7559 470.107 46 465.687 46Z"}" fill="${"url(#paint10_linear_107_2)"}" fill-opacity="${"0.7"}"></path><path d="${"M879.687 86H875.487C874.239 81.17 871.663 76.7866 868.049 73.348C864.435 69.9093 859.929 67.5533 855.043 66.5476C850.157 65.5419 845.087 65.9268 840.409 67.6586C835.731 69.3905 831.632 72.3998 828.579 76.3446C825.525 80.2894 823.64 85.0116 823.136 89.9745C822.633 94.9374 823.531 99.9421 825.73 104.42C827.928 108.898 831.339 112.669 835.574 115.305C839.809 117.941 844.698 119.337 849.687 119.333H879.687C884.107 119.333 888.346 117.577 891.472 114.452C894.597 111.326 896.353 107.087 896.353 102.667C896.353 98.2464 894.597 94.0072 891.472 90.8815C888.346 87.7559 884.107 86 879.687 86Z"}" fill="${"url(#paint11_linear_107_2)"}" fill-opacity="${"0.7"}"></path><defs><linearGradient id="${"paint0_linear_107_2"}" x1="${"20.1865"}" y1="${"1.20913e-06"}" x2="${"32.1865"}" y2="${"51.5"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#5B99FF"}"></stop><stop offset="${"1"}" stop-color="${"#0F5CDC"}"></stop></linearGradient><linearGradient id="${"paint1_linear_107_2"}" x1="${"595.775"}" y1="${"-0.562361"}" x2="${"615.15"}" y2="${"86.7637"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#5B99FF"}"></stop><stop offset="${"1"}" stop-color="${"#0F5CDC"}"></stop></linearGradient><linearGradient id="${"paint2_linear_107_2"}" x1="${"67.1865"}" y1="${"26.6667"}" x2="${"79.1865"}" y2="${"78.1667"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#5B99FF"}"></stop><stop offset="${"1"}" stop-color="${"#0F5CDC"}"></stop></linearGradient><linearGradient id="${"paint3_linear_107_2"}" x1="${"642.775"}" y1="${"26.1044"}" x2="${"662.15"}" y2="${"113.43"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#5B99FF"}"></stop><stop offset="${"1"}" stop-color="${"#0F5CDC"}"></stop></linearGradient><linearGradient id="${"paint4_linear_107_2"}" x1="${"255.52"}" y1="${"2.55636"}" x2="${"271.157"}" y2="${"71.28"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#5B99FF"}"></stop><stop offset="${"1"}" stop-color="${"#0F5CDC"}"></stop></linearGradient><linearGradient id="${"paint5_linear_107_2"}" x1="${"356.187"}" y1="${"66.6667"}" x2="${"368.187"}" y2="${"118.167"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#5B99FF"}"></stop><stop offset="${"1"}" stop-color="${"#0F5CDC"}"></stop></linearGradient><linearGradient id="${"paint6_linear_107_2"}" x1="${"214.52"}" y1="${"26.5564"}" x2="${"230.157"}" y2="${"95.28"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#5B99FF"}"></stop><stop offset="${"1"}" stop-color="${"#0F5CDC"}"></stop></linearGradient><linearGradient id="${"paint7_linear_107_2"}" x1="${"315.187"}" y1="${"90.6667"}" x2="${"327.187"}" y2="${"142.167"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#5B99FF"}"></stop><stop offset="${"1"}" stop-color="${"#0F5CDC"}"></stop></linearGradient><linearGradient id="${"paint8_linear_107_2"}" x1="${"447.873"}" y1="${"-0.333251"}" x2="${"459.873"}" y2="${"51.1667"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#5B99FF"}"></stop><stop offset="${"1"}" stop-color="${"#0F5CDC"}"></stop></linearGradient><linearGradient id="${"paint9_linear_107_2"}" x1="${"861.873"}" y1="${"39.6667"}" x2="${"873.873"}" y2="${"91.1667"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#5B99FF"}"></stop><stop offset="${"1"}" stop-color="${"#0F5CDC"}"></stop></linearGradient><linearGradient id="${"paint10_linear_107_2"}" x1="${"429.187"}" y1="${"25.6667"}" x2="${"441.187"}" y2="${"77.1667"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#5B99FF"}"></stop><stop offset="${"1"}" stop-color="${"#0F5CDC"}"></stop></linearGradient><linearGradient id="${"paint11_linear_107_2"}" x1="${"843.187"}" y1="${"65.6667"}" x2="${"855.187"}" y2="${"117.167"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#5B99FF"}"></stop><stop offset="${"1"}" stop-color="${"#0F5CDC"}"></stop></linearGradient></defs></svg>
</main>`;
});
export {
  Cloud as C
};
