import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
import "d3";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  let width = 900;
  let height = 700;
  const margin = { top: 50, bottom: 50, left: 50, right: 50 };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container"><svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}><g transform="${"translate(" + escape(margin.left, true) + ", " + escape(margin.top, true) + ")"}"></g></svg></div>`;
});
export {
  Page as default
};
