import { c as create_ssr_component } from "../../chunks/index.js";
import { getAuth } from "firebase/auth";
import "axios";
/* empty css                                                */const Play_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.page.svelte-sszsmz.svelte-sszsmz{background-color:transparent;display:flex}.page.svelte-sszsmz .card.svelte-sszsmz{position:relative;overflow:hidden;width:100%;height:500px;max-width:800px;background-color:rgb(var(--bg-card-color));border-radius:var(--brd-radius);display:flex;align-items:center;justify-content:flex-start;flex-direction:column;margin:auto;box-shadow:0 0 12px rgba(0, 0, 0, 0.1);cursor:url(../lib/assets/cursors/cursor.png), default}@media(max-width: 800px){.page.svelte-sszsmz .card.svelte-sszsmz{border-radius:0;height:100%}}@media(max-width: 700px){.page.svelte-sszsmz .card.svelte-sszsmz{flex-direction:column;width:100%}}.page.svelte-sszsmz .card header.svelte-sszsmz{width:100%;height:90px;display:flex;align-items:center;justify-content:space-between;padding:0.5em;z-index:100000}.page.svelte-sszsmz .card header .profile.svelte-sszsmz{position:relative;width:250px;height:50px;display:flex;justify-content:flex-start;align-items:center;cursor:url(../lib/assets/cursors/pointer.png), pointer}.page.svelte-sszsmz .card header .profile img.svelte-sszsmz{width:50px;height:50px;border-radius:50%;pointer-events:none}.page.svelte-sszsmz .card header .profile ul.svelte-sszsmz{display:flex;flex-direction:column}.page.svelte-sszsmz .card header .profile ul li.svelte-sszsmz{margin-left:0.5em;font-size:var(--fs-p);list-style:none;width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:start}@media(max-width: 800px){.page.svelte-sszsmz .card header .profile ul li.svelte-sszsmz{width:200px}}@media(max-width: 700px){.page.svelte-sszsmz .card header .profile ul li.svelte-sszsmz{width:100px}}.page.svelte-sszsmz .card header .profile ul li.svelte-sszsmz:last-child{display:flex;align-items:center;justify-content:flex-start;width:20px}.page.svelte-sszsmz .card header .score.svelte-sszsmz{display:flex;align-items:center;justify-content:center;flex-direction:column}.page.svelte-sszsmz .card header .score h3.svelte-sszsmz{font-size:var(--fs-h3);animation:sky-color 60s linear 0s forwards infinite;transition:color 1s ease-out}.page.svelte-sszsmz .card header .score h2.svelte-sszsmz{font-size:var(--fs-h2);color:rgb(var(--text-primary))}.page.svelte-sszsmz .card main.svelte-sszsmz{width:100%;height:calc(100% - 70px);display:flex;align-items:flex-end;justify-content:space-between;padding:0.5em;position:relative}.page.svelte-sszsmz .card main .left.svelte-sszsmz{position:relative;display:flex;align-items:center;justify-content:center;flex-direction:column;row-gap:1em}@media(max-width: 800px){.page.svelte-sszsmz .card main .left.svelte-sszsmz{position:absolute;top:20%;left:0.5em}}@media(max-width: 700px){.page.svelte-sszsmz .card main .left.svelte-sszsmz{position:absolute;top:20%;left:0.5em}}.page.svelte-sszsmz .card main .left svg.svelte-sszsmz{width:170px;height:170px}.page.svelte-sszsmz .card main .left h4.svelte-sszsmz{font-size:var(--fs-h4)}.page.svelte-sszsmz .card main .left ul.svelte-sszsmz{position:absolute;bottom:0;left:0;width:100%;height:170px;display:flex;align-items:center;justify-content:center;row-gap:0.3em;flex-direction:column;padding:0.5em}.page.svelte-sszsmz .card main .left ul li.svelte-sszsmz{width:100%;height:50px;background-color:rgba(0, 0, 0, 0.1);border-radius:var(--brd-radius);display:flex;padding:0.5em;align-items:flex-start;justify-content:center;flex-direction:column;cursor:url(../lib/assets/cursors/pointer.png), pointer;backdrop-filter:blur(62px)}.page.svelte-sszsmz .card main .left ul li.svelte-sszsmz:nth-child(2){transform:translateX(50px)}.page.svelte-sszsmz .card main .left ul li.svelte-sszsmz:nth-child(3){transform:translate(120px)}.page.svelte-sszsmz .card main .left ul li p.svelte-sszsmz{font-size:var(--fs-p)}.page.svelte-sszsmz .card main .left ul li span.svelte-sszsmz{font-size:0.5em}.page.svelte-sszsmz .card main .right.svelte-sszsmz{position:relative;display:flex;align-items:center;justify-content:center;flex-direction:column;row-gap:1em}@media(max-width: 800px){.page.svelte-sszsmz .card main .right.svelte-sszsmz{position:absolute;bottom:0.5em;right:0.5em}}@media(max-width: 700px){.page.svelte-sszsmz .card main .right.svelte-sszsmz{position:absolute;bottom:0.5em;right:0.5em}}.page.svelte-sszsmz .card main .right .menu.svelte-sszsmz{position:relative;overflow-y:hidden;width:200px;height:300px;display:flex;align-items:flex-end;justify-content:center}.page.svelte-sszsmz .card main .right .menu .trash-image.svelte-sszsmz{position:absolute;left:0;right:0;bottom:0;width:170px;height:170px}.page.svelte-sszsmz .card main .right .menu:not(.active) ul.svelte-sszsmz{top:0;animation:svelte-sszsmz-active-verso linear 200ms forwards;animation-delay:400ms}.page.svelte-sszsmz .card main .right .menu:not(.active) ul li.svelte-sszsmz{width:100%;animation:svelte-sszsmz-expand-verso linear 200ms forwards;animation-delay:200ms}.page.svelte-sszsmz .card main .right .menu:not(.active) ul li svg.svelte-sszsmz{left:initial;right:0}.page.svelte-sszsmz .card main .right .menu:not(.active) ul li p.svelte-sszsmz{left:50%;opacity:1;transform:translateX(-50%);animation:svelte-sszsmz-visibility-verso linear 400ms forwards}.page.svelte-sszsmz .card main .right .menu.active ul.svelte-sszsmz{top:100%;animation:svelte-sszsmz-active linear 200ms forwards}.page.svelte-sszsmz .card main .right .menu.active ul li.svelte-sszsmz{animation:svelte-sszsmz-expand linear 200ms forwards;animation-delay:200ms}.page.svelte-sszsmz .card main .right .menu.active ul li .icon.svelte-sszsmz{left:initial;right:0}.page.svelte-sszsmz .card main .right .menu.active ul li p.svelte-sszsmz{animation:svelte-sszsmz-visibility linear 400ms forwards;animation-delay:200ms}.page.svelte-sszsmz .card main .right .menu ul.svelte-sszsmz{position:absolute;top:100%;left:0;right:0;bottom:0;width:100%;height:300px;max-height:300px;display:flex;align-items:flex-end;justify-content:flex-end;flex-direction:column;transition:top linear 200ms;row-gap:0.5em;overflow-y:auto;padding-bottom:60px}.page.svelte-sszsmz .card main .right .menu ul li.svelte-sszsmz{position:relative;width:50px;height:50px;min-height:50px;color:rgb(255, 255, 255);background-color:rgba(var(--primary-color), 0.5);border-radius:var(--brd-radius);display:flex;align-items:center;justify-content:center;font-size:var(--fs-p);overflow:hidden;cursor:url(../lib/assets/cursors/pointer.png), pointer;backdrop-filter:blur(62px)}.page.svelte-sszsmz .card main .right .menu ul li .icon.svelte-sszsmz{width:35px;height:35px;background-position:center center;background-repeat:no-repeat;background-size:contain;position:absolute;left:50%;transform:translateX(-50%)}.page.svelte-sszsmz .card main .right .menu ul li .icon.adventure.svelte-sszsmz{background-image:url("https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/icons%2Fadventure.png?alt=media&token=879df8a7-0ffb-4e2a-9853-73ef3851a5c7")}.page.svelte-sszsmz .card main .right .menu ul li .icon.eventual.svelte-sszsmz{background-image:url("https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/icons%2Fdice.png?alt=media&token=bf204161-731d-4890-9453-65eb4768f835")}.page.svelte-sszsmz .card main .right .menu ul li .icon.action.svelte-sszsmz{background-image:url("https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/icons%2Ftruck.png?alt=media&token=d0b0eaf4-1ee0-4e61-b5e1-a435ac1c4193")}.page.svelte-sszsmz .card main .right .menu ul li p.svelte-sszsmz{position:absolute;left:-500px;opacity:0}.page.svelte-sszsmz .card main .right .menu button.svelte-sszsmz{width:100%;height:50px;display:flex;font-size:var(--fs-p);align-items:center;justify-content:center;background-color:rgba(var(--primary-color), 0.5);border-radius:var(--brd-radius);color:rgb(255, 255, 255);padding:0.5em;z-index:10000000;cursor:url(../lib/assets/cursors/pointer.png), pointer;backdrop-filter:blur(62px)}@keyframes svelte-sszsmz-active{to{top:0}}@keyframes svelte-sszsmz-active-verso{to{top:100%}}@keyframes svelte-sszsmz-expand{to{width:100%}}@keyframes svelte-sszsmz-expand-verso{to{width:50px}}@keyframes svelte-sszsmz-visibility{to{left:50%;opacity:1;transform:translateX(-50%)}}@keyframes svelte-sszsmz-visibility-verso{to{left:-300px;opacity:0;transform:translateX(0)}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getAuth();
  $$result.css.add(css);
  return `${``}`;
});
export {
  Page as default
};