import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { M as Music } from "../../../chunks/Music.js";
import "axios";
import { getAuth } from "firebase/auth";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1lpjcbi{margin:0px;padding:0px;font-family:'Inter', sans-serif}.music.svelte-1lpjcbi{position:absolute;bottom:0.5em;left:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c;
  const auth = getAuth();
  (_a = auth.currentUser) == null ? void 0 : _a.displayName;
  (_b = auth.currentUser) == null ? void 0 : _b.email;
  (_c = auth.currentUser) == null ? void 0 : _c.uid;
  $$result.css.add(css);
  return `<main class="${"arcade-container svelte-1lpjcbi"}"><div class="${"container svelte-1lpjcbi"}"><audio class="${"buzina-audio-html svelte-1lpjcbi"}" src="${"http://localhost:5173/src/lib/assets/sounds/buzina.mp3"}"></audio>
    <div class="${"container-wrapper svelte-1lpjcbi"}"><div class="${"music svelte-1lpjcbi"}">${validate_component(Music, "Music").$$render($$result, {}, {}, {})}</div>
      <h1 class="${"svelte-1lpjcbi"}">Clique para come\xE7ar</h1>
      <p class="${"svelte-1lpjcbi"}">Toda a cidade foi contaminada desvie o maximo possivel</p>
      </div>

    <div class="${"game-content svelte-1lpjcbi"}"><h1 class="${"most-score svelte-1lpjcbi"}">Score:
        <span id="${"score"}" class="${"svelte-1lpjcbi"}">0</span></h1>
      <div class="${"content-game-area svelte-1lpjcbi"}"><div class="${"trash svelte-1lpjcbi"}"></div>
        <div class="${"trash svelte-1lpjcbi"}"></div>

        <div class="${"house svelte-1lpjcbi"}"></div>
        <div class="${"house svelte-1lpjcbi"}"></div>
        <div class="${"house svelte-1lpjcbi"}"></div>
        <div class="${"house svelte-1lpjcbi"}"></div>

        <div id="${"gameArea"}" class="${"svelte-1lpjcbi"}"></div></div></div></div>

  <div class="${"controll-game svelte-1lpjcbi"}"><div class="${"svelte-1lpjcbi"}"><button data-dir="${"ArrowLeft"}" class="${"svelte-1lpjcbi"}">left</button>
      <button data-dir="${"ArrowRight"}" class="${"svelte-1lpjcbi"}">right</button></div></div>

</main>`;
});
export {
  Page as default
};
