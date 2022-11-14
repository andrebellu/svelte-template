import { c as create_ssr_component, a as subscribe, d as each, e as escape, f as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { A as Animate } from "../../../chunks/Animate.js";
import { d as derived, w as writable } from "../../../chunks/index2.js";
const term = writable("");
const items = writable([
  {
    name: "CodeWars solved katas",
    description: "I solved some katas on codewars, you can see them here",
    badge: "python",
    color: "badge-info",
    link: "https://github.com/andrebellu/CodeWars"
  },
  {
    name: "Leetcode solved problems",
    description: "I solved some problems on leetcode, you can see them here",
    badge: "python",
    color: "badge-info",
    link: "https://github.com/andrebellu/LeetCode"
  },
  {
    name: "Webapp for a company",
    description: "Webapp made with SAPUI5",
    badge: "javascript",
    color: "badge-warning",
    link: "https://github.com/andrebellu/WebappRegesta"
  },
  {
    name: "Portfolio",
    description: "This portfolio",
    badge: "svelte",
    color: "badge-error",
    link: ""
  },
  {
    name: "RGB Arduino",
    description: "RGB led controlled by a telegram bot",
    badge: "arduino",
    color: "badge-success",
    link: "https://github.com/andrebellu/RGBarduino"
  },
  {
    name: "Emoji Search Engine",
    description: "Search engine for emojis",
    badge: "javascript",
    color: "badge-warning",
    link: "https://github.com/andrebellu/ESE"
  },
  {
    name: "Ulam Spiral",
    description: "Ulam Spiral made with processing",
    badge: "processing",
    color: "badge-default",
    link: "https://github.com/andrebellu/UlamSpiral"
  },
  {
    name: "Airport Search Engine",
    description: "Search engine for airports",
    badge: "javascript",
    color: "badge-warning",
    link: "https://github.com/andrebellu/ASE"
  },
  {
    name: "Pok\xE8dex",
    description: "Pok\xE8dex made with python notebook",
    badge: "python",
    color: "badge-info",
    link: "https://github.com/andrebellu/Pokedex"
  },
  {
    name: "IP Locator",
    description: "IP locator made with javascript",
    badge: "javascript",
    color: "badge-warning",
    link: "https://github.com/andrebellu/IPLocator"
  },
  {
    name: "todo-list",
    description: "Todo list made with plain javascript",
    badge: "javascript",
    color: "badge-warning",
    link: "https://github.com/andrebellu/todo.list"
  },
  {
    name: "Encrypter",
    description: "Encrypter made with Java",
    badge: "java",
    color: "badge-primary",
    link: "https://github.com/andrebellu/Encrypter"
  }
]);
const filtered = derived(
  [term, items],
  ([$term, $items]) => $items.filter((x) => x.badge.includes($term))
);
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $filtered, $$unsubscribe_filtered;
  $$unsubscribe_filtered = subscribe(filtered, (value) => $filtered = value);
  $$unsubscribe_filtered();
  return `<main><div class="${"cards flex justify-around flex-wrap gap-9 mx-10 mb-10"}">${each($filtered, (project) => {
    return `<div class="${"card w-96 bg-base-100 shadow-xl outline-dashed outline-primary"}"><div class="${"card-body"}"><h2 class="${"card-title justify-center"}">${escape(project.name)}
            <div class="${"badge " + escape(project.color, true)}">${escape(project.badge)}</div></h2>
          <p class="${"card-subtitle text-sm text-center"}">${escape(project.description)}</p>
          
          <a${add_attribute("href", project.link, 0)} class="${"btn btn-primary text-white"}" target="${"_blank"}">View Repository</a></div>
      </div>`;
  })}</div></main>`;
});
const Filter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let val = "";
  {
    term.set(val);
  }
  return `<main><input class="${"bg-transparent focus:ring-2 focus:ring-glitch focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-full py-2 pl-10 ring-1 shadow-sm m-2"}" type="${"text"}" aria-label="${"Filter projects"}" placeholder="${"Filter projects..."}"${add_attribute("value", val, 0)}></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Animate, "Animate").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"flex justify-center flex-col items-center m-5"}"><h1 class="${"text-6xl text-glitch mb-2"}">Projects</h1>
			${validate_component(Filter, "Filter").$$render($$result, {}, {}, {})}</div>



    ${validate_component(Cards, "Cards").$$render($$result, {}, {}, {})}`;
    }
  })}</main>`;
});
export {
  Page as default
};
