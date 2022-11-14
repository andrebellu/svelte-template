import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index.js";
import { A as Animate } from "../../chunks/Animate.js";
const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hours;
  let minutes;
  let seconds;
  let time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();
  return `<main><span class="${"countdown font-mono text-2xl text-glitch opacity-60"}"><span style="${"--value:" + escape(hours, true) + ";"}"></span>h
    <span style="${"--value:" + escape(minutes, true) + ";"}"></span>m
    <span style="${"--value:" + escape(seconds, true) + ";"}"></span>s
  </span></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Animate, "Animate").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"navbar flex justify-end px-1"}">${validate_component(Clock, "Clock").$$render($$result, {}, {}, {})}</div>

    <div class="${"flex justify-center items-center flex-col h-[calc(100vh-100px)] text-center px-1"}"><div class="${"greetings"}"><h1 class="${"text-4xl"}">Hello, I&#39;m Andrea</h1>
        <h2 class="${"text-2xl"}">IT student</h2></div>

      <div class="${"flex flex-row justify-between"}"><div class="${"px-2"}"><a class="${"text-2xl glitch nav"}" href="${"/about"}">About me</a></div>

        <div class="${"px-2"}"><a class="${"text-2xl glitch nav"}" href="${"/projects"}">Project Showcase</a></div>

        <div class="${"px-2"}"><a class="${"text-2xl glitch nav"}" href="${"#"}">Contacts</a></div></div></div>

    <div class="${"footer flex justify-start px-1"}"><p class="${"text-2xl text-glitch opacity-60"}">Made with Svelte</p></div>`;
    }
  })}</main>`;
});
export {
  Page as default
};
