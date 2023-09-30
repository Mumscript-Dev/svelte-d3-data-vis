import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/ssr.js";
import * as d3 from "d3";
import { d as data } from "../../../chunks/data.js";
let width = 900;
let height = 600;
const Beeswarm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerHeight;
  let innerWidth;
  let yScale;
  let xScale;
  let { data: data2 } = $$props;
  let { year } = $$props;
  const margin = { top: 50, bottom: 50, left: 50, right: 50 };
  const continents = ["americas", "europe", "asia", "africa"];
  let simulation = d3.forceSimulation(data2);
  simulation.on("tick", () => {
    simulation.nodes();
  });
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  innerHeight = height - margin.top - margin.bottom;
  innerWidth = width - margin.left - margin.right;
  d3.scaleOrdinal(continents).range(d3.schemePastel2);
  yScale = d3.scaleBand().domain(continents).range([innerHeight, 0]).paddingOuter(0.1);
  xScale = d3.scaleLinear().domain([0, 90]).range([0, innerWidth]);
  {
    {
      simulation.force("x", d3.forceX().x((d) => xScale(d["life-exp"])).strength(0.8)).force("y", d3.forceY().y((d) => yScale(d.continent)).strength(0.2));
      console.log(simulation);
    }
  }
  return ``;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".year-control.svelte-se51a8{width:800px}.control-panel.svelte-se51a8{display:flex;justify-content:center}.container.svelte-se51a8{display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let years;
  let filteredData;
  let year = 1800;
  $$result.css.add(css);
  years = data.map((row) => parseInt(row.year));
  filteredData = data.filter((row) => row.year === year.toString())[0];
  return `<div class="container svelte-se51a8">${validate_component(Beeswarm, "Beeswarm").$$render($$result, { data: filteredData.countries, year }, {}, {})}</div> <div class="control-panel svelte-se51a8"><button data-svelte-h="svelte-hwi9e6">Play</button> <button data-svelte-h="svelte-1oedsdl">Pause</button> <button data-svelte-h="svelte-cmh0h7">Reset</button> <input class="year-control svelte-se51a8" type="range"${add_attribute("min", Math.min(...years), 0)}${add_attribute("max", Math.max(...years), 0)}${add_attribute("value", year, 0)}> </div>`;
});
export {
  Page as default
};
