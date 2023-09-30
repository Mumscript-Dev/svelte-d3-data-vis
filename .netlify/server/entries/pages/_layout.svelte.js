import { c as create_ssr_component } from "../../chunks/ssr.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-1aqveb2.svelte-1aqveb2{font-family:Arial, sans-serif;margin:0;padding:0;background-color:#333\n  }header.svelte-1aqveb2.svelte-1aqveb2{background-color:#333;color:#fff;text-align:center}nav.svelte-1aqveb2 ul.svelte-1aqveb2{list-style:none;padding:0}nav.svelte-1aqveb2 li.svelte-1aqveb2{display:inline-block;margin:0 20px}nav.svelte-1aqveb2 a.svelte-1aqveb2{text-decoration:none;color:#fff;font-weight:bold;transition:color 0.3s ease}nav.svelte-1aqveb2 a.svelte-1aqveb2:hover{color:#00bcd4}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-1aqveb2"><header class="svelte-1aqveb2" data-svelte-h="svelte-qvobmw"><nav class="svelte-1aqveb2"><ul class="svelte-1aqveb2"><li class="svelte-1aqveb2"><a href="/scatterplot" class="svelte-1aqveb2">ScatterPlot</a></li> <li class="svelte-1aqveb2"><a href="/map" class="svelte-1aqveb2">Map</a></li> <li class="svelte-1aqveb2"><a href="/beeswarm" class="svelte-1aqveb2">BeeSwarm</a></li> <li class="svelte-1aqveb2"><a href="/bar" class="svelte-1aqveb2">Bar Chart</a></li></ul></nav></header> <div class="container">${slots.default ? slots.default({}) : ``}</div> </body>`;
});
export {
  Layout as default
};
