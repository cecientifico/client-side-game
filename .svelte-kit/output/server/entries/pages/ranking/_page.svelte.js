import { c as create_ssr_component } from "../../../chunks/index.js";
import "axios";
import { getAuth } from "firebase/auth";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page.svelte-qj8gsu.svelte-qj8gsu{background-color:transparent;display:flex}.page.svelte-qj8gsu .card.svelte-qj8gsu{position:relative;overflow:hidden;width:100%;height:500px;max-width:800px;background-color:rgb(var(--bg-card-color));border-radius:var(--brd-radius);display:flex;align-items:center;justify-content:flex-start;flex-direction:column;margin:auto;box-shadow:0 0 12px rgba(0, 0, 0, 0.1);cursor:url(../../lib/assets/cursors/cursor.png), default}@media(max-width: 800px){.page.svelte-qj8gsu .card.svelte-qj8gsu{border-radius:0;height:100%}}@media(max-width: 700px){.page.svelte-qj8gsu .card.svelte-qj8gsu{flex-direction:column;width:100%}}.page.svelte-qj8gsu .card header.svelte-qj8gsu{width:100%;height:2.5em;display:flex;align-items:center;justify-content:center}.page.svelte-qj8gsu .card header nav.svelte-qj8gsu{width:max-content;height:max-content;display:flex;align-items:center;justify-content:center;column-gap:0.5em}.page.svelte-qj8gsu .card header nav div.svelte-qj8gsu{font-size:var(--fs-p);cursor:url(../../lib/assets/cursors/pointer.png), pointer;padding:0.3em 0.5em;border-radius:var(--brd-radius);transition:background-color linear 200ms, color linear 200ms}.page.svelte-qj8gsu .card main.svelte-qj8gsu{width:100%;height:calc(100% - 2.5em)}.page.svelte-qj8gsu .card main .user-record.svelte-qj8gsu{width:200px;height:max-content;margin:0.5em;display:flex;align-items:center;justify-content:center;flex-direction:column-reverse}.page.svelte-qj8gsu .card main .user-record p.svelte-qj8gsu{font-size:var(--fs-p)}.page.svelte-qj8gsu .card main .user-record h3.svelte-qj8gsu{font-size:var(--fs-h3)}.page.svelte-qj8gsu .card main .world-ranking.svelte-qj8gsu{position:absolute;bottom:0.5em;right:0.5em;width:300px;max-height:400px;overflow-y:auto;display:flex;align-items:center;justify-content:center;flex-direction:column}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getAuth();
  $$result.css.add(css);
  return `<main class="${"page svelte-qj8gsu"}"><div class="${"card svelte-qj8gsu"}"><header class="${"svelte-qj8gsu"}"><nav class="${"svelte-qj8gsu"}"><div class="${"nav-items svelte-qj8gsu"}">Aventura</div>
        <div class="${"nav-items svelte-qj8gsu"}">Casual</div>
        <div class="${"nav-items svelte-qj8gsu"}">Arcade</div></nav></header>
    <main class="${"svelte-qj8gsu"}"><div class="${"user-record svelte-qj8gsu"}">${`<div class="${"loading-animation svelte-qj8gsu"}"><div class="${"ball ball-ne svelte-qj8gsu"}"></div>
            <div class="${"ball ball-nw svelte-qj8gsu"}"></div>
            <div class="${"ball ball-sw svelte-qj8gsu"}"></div>
            <div class="${"ball ball-se svelte-qj8gsu"}"></div></div>`}
        ${``}</div>
      <div class="${"world-ranking svelte-qj8gsu"}"><h3 class="${"svelte-qj8gsu"}">Ranking mundial</h3>
          <ul class="${"ranks world-hanks"}"></ul></div></main></div>
</main>`;
});
export {
  Page as default
};
