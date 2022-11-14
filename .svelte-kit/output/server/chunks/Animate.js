import { c as create_ssr_component } from "./index.js";
const Animate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Animate as A
};
