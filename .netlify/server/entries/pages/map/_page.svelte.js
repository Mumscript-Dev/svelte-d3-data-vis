import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import * as d3 from "d3";
import "topojson";
import { d as data } from "../../../chunks/data.js";
const Tooltip_svelte_svelte_type_style_lang = "";
const Legend_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".label.svelte-i1vmig{color:whitesmoke;font-size:20px}.value.svelte-i1vmig{color:antiquewhite;font-size:15px}",
  map: null
};
const Legend = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { year } = $$props;
  let { margin } = $$props;
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  $$result.css.add(css$2);
  return `<g><text class="label svelte-i1vmig"${add_attribute("x", 0, 0)}${add_attribute("y", 20, 0)} text-anchor="end" stroke="whitesmoke">Year</text><text class="value svelte-i1vmig"${add_attribute("x", 0, 0)}${add_attribute("y", 50, 0)} text-anchor="end" stroke="whitesmoke">${escape(year)}</text></g>`;
});
const Map_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".countries.svelte-1mma6ky:hover{opacity:1\n  }svg.svelte-1mma6ky{overflow:visible}",
  map: null
};
const width = 900;
const height = 670;
let degreePerFrame = 0.4;
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerHeight;
  let innerWidth;
  let projection;
  let { data: data2 } = $$props;
  let { year } = $$props;
  const margin = { top: 20, bottom: 50, left: 40, right: 60 };
  let rotation = 0;
  d3.timer((elapsed) => {
    if (isDragging)
      return;
    rotation += degreePerFrame;
  });
  let globe;
  let isDragging = false;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  $$result.css.add(css$1);
  innerHeight = height - margin.top - margin.bottom;
  innerWidth = width - margin.left - margin.right;
  projection = d3.geoOrthographic().scale(innerWidth / 2 - 150).rotate([rotation, 0]).translate([innerWidth / 2, innerHeight / 2]);
  d3.geoPath(projection);
  return `<div class="container" role="tooltip"><svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} class="svelte-1mma6ky"${add_attribute("this", globe, 0)}><defs><filter id="glow" height="130%"><feGaussianBlur in="SourceAlpha" stdDeviation="7.5"></feGaussianBlur><feOffset dx="0" dy="0" result="offsetblur"></feOffset><feFlood flood-color="rgba(173, 216, 230, .85)"></feFlood><feComposite in2="offsetblur" operator="in"></feComposite><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g transform="${"translate(" + escape(margin.left, true) + ", " + escape(margin.top, true) + ")"}"><circle filter="url('#glow')"${add_attribute("cx", innerWidth / 2, 0)}${add_attribute("cy", innerHeight / 2, 0)}${add_attribute("r", innerWidth / 2 - 150, 0)} stroke="grey" fill="lightblue"></circle>${``}<g transform="${"translate(" + escape(margin.left + innerWidth, true) + ", " + escape(margin.top, true) + ")"}">${validate_component(Legend, "Legend").$$render($$result, { year, margin }, {}, {})}</g></g></svg></div> ${``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".year-control.svelte-1fhacn2{width:800px}.control-panel.svelte-1fhacn2{padding-top:0.5rem;display:flex;justify-content:center}.container.svelte-1fhacn2{background-color:rgb(1, 1, 32);width:100vw;display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let years;
  let filteredData;
  let year = 1800;
  $$result.css.add(css);
  years = data.map((row) => parseInt(row.year));
  filteredData = data.filter((row) => row.year === year.toString())[0];
  return `<div class="container svelte-1fhacn2"> ${validate_component(Map, "Map").$$render($$result, { data: filteredData.countries, year }, {}, {})}</div> <div class="control-panel svelte-1fhacn2"><button data-svelte-h="svelte-hwi9e6">Play</button> <button data-svelte-h="svelte-1oedsdl">Pause</button> <button data-svelte-h="svelte-cmh0h7">Reset</button> <input class="year-control svelte-1fhacn2" type="range"${add_attribute("min", Math.min(...years), 0)}${add_attribute("max", Math.max(...years), 0)}${add_attribute("value", year, 0)}> </div>`;
});
export {
  Page as default
};
