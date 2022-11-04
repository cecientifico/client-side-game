import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index.js";
import { getAuth } from "firebase/auth";
import "axios";
/* empty css                                                     */import { C as Cloud } from "../../../chunks/Cloud.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page.svelte-1uyodxv.svelte-1uyodxv{background-color:transparent;display:flex}.page.svelte-1uyodxv .card.svelte-1uyodxv{cursor:url(../../lib/assets/cursors/pre-get.png), default;position:relative;overflow:hidden;width:100%;height:500px;max-width:800px;background-color:rgb(var(--bg-card-color));border-radius:var(--brd-radius);display:flex;align-items:center;justify-content:flex-start;flex-direction:column;margin:auto;box-shadow:0px 0px 12px rgba(0, 0, 0, 0.1)}@media(max-width: 800px){.page.svelte-1uyodxv .card.svelte-1uyodxv{border-radius:0;height:100%}}.page.svelte-1uyodxv .card .score.svelte-1uyodxv{width:200px;height:auto;position:absolute;top:0;right:0;padding:0.5em;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:1}.page.svelte-1uyodxv .card .score h2.svelte-1uyodxv{font-size:var(--fs-h2)}@media(max-width: 800px){.page.svelte-1uyodxv .card .score h2.svelte-1uyodxv{font-size:calc(var(--fs-h2) - 0.2em)}}.page.svelte-1uyodxv .card .score h3.svelte-1uyodxv{font-size:var(--fs-h3);color:rgb(var(--primary-color))}@media(max-width: 800px){.page.svelte-1uyodxv .card .score h3.svelte-1uyodxv{font-size:calc(var(--fs-h3) - 0.2em)}}.page.svelte-1uyodxv .card .faults.svelte-1uyodxv{width:200px;height:auto;position:absolute;top:0;left:0;padding:0.5em;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:1}.page.svelte-1uyodxv .card .faults h2.svelte-1uyodxv{font-size:var(--fs-h2)}@media(max-width: 800px){.page.svelte-1uyodxv .card .faults h2.svelte-1uyodxv{font-size:calc(var(--fs-h2) - 0.2em)}}.page.svelte-1uyodxv .card .faults h3.svelte-1uyodxv{font-size:var(--fs-h3);color:#b72a2a}@media(max-width: 800px){.page.svelte-1uyodxv .card .faults h3.svelte-1uyodxv{font-size:calc(var(--fs-h3) - 0.2em)}}@keyframes svelte-1uyodxv-cloud{to{left:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pontuation = 0;
  let faults = 7;
  getAuth();
  $$result.css.add(css);
  return `<main class="${"page svelte-1uyodxv"}">${``}
  <div class="${"card game-card diurnal svelte-1uyodxv"}">${``}
    <div class="${"score svelte-1uyodxv"}"><h2 class="${"svelte-1uyodxv"}">Pontua\xE7\xE3o</h2>
      <h3 class="${"svelte-1uyodxv"}">${escape(pontuation)}</h3></div>
    <div class="${"faults svelte-1uyodxv"}"><h2 class="${"svelte-1uyodxv"}">Faltas</h2>
      <h3 class="${"svelte-1uyodxv"}">${escape(faults)}/7</h3></div>
    <div class="${"sun-and-moon"}"></div>
    ${validate_component(Cloud, "Cloud").$$render($$result, {}, {}, {})}</div>
</main>`;
});
export {
  Page as default
};
