import { c as create_ssr_component } from "./index.js";
const Music_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-2tap3x.svelte-2tap3x{border:none;width:1.5em;height:1.5em;display:flex;align-items:center;justify-content:center;cursor:url(../lib/assets/cursors/pointer.png), pointer;border-radius:var(--brd-radius);background-color:white}button.svelte-2tap3x svg.svelte-2tap3x{pointer-events:none}",
  map: null
};
const Music = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<button class="${"music svelte-2tap3x"}">${``}
  ${`<svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-2tap3x"}"><path d="${"M11 5L6 9H2V15H6L11 19V5Z"}" stroke="${"rgb(var(--text-secondary))"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M23 9L17 15"}" stroke="${"rgb(var(--text-secondary))"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M17 9L23 15"}" stroke="${"rgb(var(--text-secondary))"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`}
</button>`;
});
export {
  Music as M
};
