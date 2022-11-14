import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { A as Animate } from "../../../chunks/Animate.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Animate, "Animate").$$render($$result, {}, {}, {
    default: () => {
      return `<div><h1 class="${"text-4xl text-glitch"}">WHOAMI</h1>
      <p>I&#39;m a student at the Itis Castelli in Brescia</p></div>

    <div><h1 class="${"text-4xl text-glitch"}">SKILLS</h1>
      <p>I&#39;m still studying so i don&#39;t have any skills yet, but i&#39;m confident in PYTHON, JAVA, some JS</p></div>`;
    }
  })}</main>`;
});
export {
  Page as default
};
