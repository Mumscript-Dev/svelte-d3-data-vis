import { c as create_ssr_component, d as add_attribute, f as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import * as d3 from "d3";
import { d as data } from "../../../chunks/data.js";
const Tooltip_svelte_svelte_type_style_lang = "";
const AxisX = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { xScale } = $$props;
  let { innerWidth } = $$props;
  let { innerHeight } = $$props;
  let { xTicks } = $$props;
  if ($$props.xScale === void 0 && $$bindings.xScale && xScale !== void 0)
    $$bindings.xScale(xScale);
  if ($$props.innerWidth === void 0 && $$bindings.innerWidth && innerWidth !== void 0)
    $$bindings.innerWidth(innerWidth);
  if ($$props.innerHeight === void 0 && $$bindings.innerHeight && innerHeight !== void 0)
    $$bindings.innerHeight(innerHeight);
  if ($$props.xTicks === void 0 && $$bindings.xTicks && xTicks !== void 0)
    $$bindings.xTicks(xTicks);
  return `<g><line${add_attribute("x1", 0, 0)}${add_attribute("y1", innerHeight, 0)}${add_attribute("x2", innerWidth, 0)}${add_attribute("y2", innerHeight, 0)} stroke="grey"></line>${each(xTicks, (tick) => {
    return `<line${add_attribute("x1", xScale(tick), 0)}${add_attribute("y1", innerHeight, 0)}${add_attribute("x2", xScale(tick), 0)}${add_attribute("y2", innerHeight - 5, 0)} stroke="grey"></line> <text${add_attribute("x", xScale(tick), 0)}${add_attribute("y", innerHeight + 20, 0)} text-anchor="middle">${escape(tick)}</text>`;
  })}</g>`;
});
const AxisY_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".yTicks.svelte-xuvae2{font-size:15px}",
  map: null
};
const AxisY = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { yScale } = $$props;
  let { innerHeight } = $$props;
  let { yTicks } = $$props;
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0)
    $$bindings.yScale(yScale);
  if ($$props.innerHeight === void 0 && $$bindings.innerHeight && innerHeight !== void 0)
    $$bindings.innerHeight(innerHeight);
  if ($$props.yTicks === void 0 && $$bindings.yTicks && yTicks !== void 0)
    $$bindings.yTicks(yTicks);
  $$result.css.add(css$3);
  return `<g><line${add_attribute("x1", 0, 0)}${add_attribute("y1", 0, 0)}${add_attribute("x2", 0, 0)}${add_attribute("y2", innerHeight, 0)} stroke="grey"></line>${each(yTicks, (tick) => {
    return `<line${add_attribute("x1", 0, 0)}${add_attribute("y1", yScale(tick), 0)}${add_attribute("y2", yScale(tick), 0)}${add_attribute("x2", 4, 0)} stroke="grey"></line> <text class="yTicks svelte-xuvae2" text-anchor="end"${add_attribute("y", yScale(tick), 0)}${add_attribute("dx", -5, 0)}${add_attribute("dy", 5, 0)}>${escape(tick)}</text>`;
  })}</g>`;
});
const Legend_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".label.svelte-15ygk90{font-size:20px}.value.svelte-15ygk90{font-size:15px}",
  map: null
};
const Legend = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { year } = $$props;
  let { margin } = $$props;
  let { continents } = $$props;
  let { colors } = $$props;
  let { populationDomain } = $$props;
  let { area } = $$props;
  let { filterContinent } = $$props;
  let { resetContinentFilter } = $$props;
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.continents === void 0 && $$bindings.continents && continents !== void 0)
    $$bindings.continents(continents);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.populationDomain === void 0 && $$bindings.populationDomain && populationDomain !== void 0)
    $$bindings.populationDomain(populationDomain);
  if ($$props.area === void 0 && $$bindings.area && area !== void 0)
    $$bindings.area(area);
  if ($$props.filterContinent === void 0 && $$bindings.filterContinent && filterContinent !== void 0)
    $$bindings.filterContinent(filterContinent);
  if ($$props.resetContinentFilter === void 0 && $$bindings.resetContinentFilter && resetContinentFilter !== void 0)
    $$bindings.resetContinentFilter(resetContinentFilter);
  $$result.css.add(css$2);
  return `<g><text class="label svelte-15ygk90"${add_attribute("x", margin.right / 2, 0)}${add_attribute("y", 20, 0)} text-anchor="middle">Year</text><text class="value svelte-15ygk90"${add_attribute("x", margin.right / 2, 0)}${add_attribute("y", 50, 0)} text-anchor="middle">${escape(year)}</text><text class="label svelte-15ygk90"${add_attribute("x", margin.right, 0)}${add_attribute("y", 80, 0)} text-anchor="end">Continents</text>${each(continents, (continent, index) => {
    return ` <circle${add_attribute("cx", margin.right / 2, 0)}${add_attribute("cy", 110 + 60 * index, 0)}${add_attribute("r", 15, 0)}${add_attribute("fill", colors(continent), 0)} tabindex="0" role="button"></circle> <text${add_attribute("x", margin.right / 2, 0)}${add_attribute("y", 110 + 60 * index + 25, 0)} text-anchor="middle">${escape(continent)}</text>`;
  })}<g tabindex="0" role="button">${each(continents, (continent, index) => {
    return `<circle${add_attribute("cx", index * 12 + 10, 0)}${add_attribute("cy", 340, 0)}${add_attribute("r", 6, 0)}${add_attribute("fill", colors(continent), 0)}${add_attribute("dx", 10, 0)}></circle>`;
  })}</g><text class="label svelte-15ygk90"${add_attribute("x", margin.right, 0)}${add_attribute("y", 380, 0)} text-anchor="end">Population</text><circle${add_attribute("cx", margin.right / 2, 0)}${add_attribute("cy", 400, 0)}${add_attribute("r", Math.sqrt(area(populationDomain[0]) / Math.PI), 0)} fill="none" stroke="grey"></circle><text${add_attribute("x", margin.right / 2, 0)}${add_attribute("y", 420, 0)} text-anchor="middle">${escape(populationDomain[0])}</text><circle${add_attribute("cx", margin.right - Math.sqrt(area(populationDomain[1]) / Math.PI), 0)}${add_attribute("cy", 470, 0)}${add_attribute("r", Math.sqrt(area(populationDomain[1]) / Math.PI), 0)} fill="none" stroke="grey"></circle><text${add_attribute("x", margin.right, 0)}${add_attribute("y", 530, 0)} text-anchor="end">${escape(populationDomain[1])}</text></g>`;
});
const Scatterplot_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".yMeasure.svelte-1razing{font-size:20px;writing-mode:vertical-rl;text-orientation:mixed}",
  map: null
};
const width = 900;
const height = 670;
const Scatterplot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerHeight;
  let innerWidth;
  let xScale;
  let colors;
  let yScale;
  let area;
  let { data: data2 } = $$props;
  let { year } = $$props;
  const margin = { top: 20, bottom: 50, left: 40, right: 60 };
  const continents = ["americas", "europe", "asia", "africa"];
  const yTicks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const xTicks = [140, 400, 4e3, 4e4, 15e4];
  let chartData;
  let continentFilter = null;
  const populationDomain = [2e3, 14e8];
  const filterContinent = (continent) => {
    continentFilter = continent;
  };
  const resetContinentFilter = () => continentFilter = null;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  $$result.css.add(css$1);
  innerHeight = height - margin.top - margin.bottom;
  innerWidth = width - margin.left - margin.right;
  {
    {
      if (!continentFilter) {
        chartData = data2;
      } else {
        chartData = data2.filter((row) => row.continent === continentFilter);
      }
    }
  }
  xScale = d3.scaleLog().base(10).domain([140, 15e4]).range([0, innerWidth]);
  colors = d3.scaleOrdinal(continents).range(d3.schemePastel2);
  yScale = d3.scaleLinear().domain([0, 90]).range([innerHeight, 0]);
  area = d3.scaleSqrt().domain(populationDomain).range([50, 2500]);
  return `<div role="tooltip" class="container"><svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}><g transform="${"translate(" + escape(margin.left, true) + ", " + escape(margin.top, true) + ")"}">${chartData ? `${each(chartData, (row, index) => {
    return `${row["life_exp"] && row.income ? `<circle${add_attribute("cy", yScale(row["life_exp"]), 0)}${add_attribute("fill", colors(row.continent), 0)}${add_attribute("r", Math.sqrt(area(row.population) / Math.PI), 0)}${add_attribute("cx", xScale(row.income), 0)} tabindex="0" role="tooltip"></circle>` : ``}`;
  })}` : ``}${validate_component(AxisX, "AxisX").$$render($$result, { xScale, innerWidth, innerHeight, xTicks }, {}, {})}${validate_component(AxisY, "AxisY").$$render($$result, { yScale, innerHeight, yTicks }, {}, {})}</g><text class="yMeasure svelte-1razing"${add_attribute("x", 10, 0)}${add_attribute("y", innerHeight / 2 + margin.top, 0)} text-anchor="middle">Life Expectation (Years)</text><text class="xMeasure"${add_attribute("y", innerHeight + margin.top + 40, 0)}${add_attribute("x", innerWidth / 2 + margin.left, 0)} text-anchor="middle">GDP Per Capita ($)</text><g transform="${"translate(" + escape(margin.left + innerWidth, true) + ", " + escape(margin.top, true) + ")"}">${validate_component(Legend, "Legend").$$render(
    $$result,
    {
      year,
      margin,
      continents,
      colors,
      area,
      populationDomain,
      filterContinent,
      resetContinentFilter
    },
    {},
    {}
  )}</g></svg></div> <div>${``} </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".year-control.svelte-4er8y5{width:800px}.control-panel.svelte-4er8y5{padding-top:0.5rem;display:flex;justify-content:center}.container.svelte-4er8y5{background-color:white;display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let years;
  let filteredData;
  let year = 1800;
  $$result.css.add(css);
  years = data.map((row) => parseInt(row.year));
  filteredData = data.filter((row) => row.year === year.toString())[0];
  return `<div class="container svelte-4er8y5"> ${validate_component(Scatterplot, "Scatterplot").$$render($$result, { data: filteredData.countries, year }, {}, {})}</div> <div class="control-panel svelte-4er8y5"><button data-svelte-h="svelte-hwi9e6">Play</button> <button data-svelte-h="svelte-1oedsdl">Pause</button> <button data-svelte-h="svelte-cmh0h7">Reset</button> <input class="year-control svelte-4er8y5" type="range"${add_attribute("min", Math.min(...years), 0)}${add_attribute("max", Math.max(...years), 0)}${add_attribute("value", year, 0)}> </div>`;
});
export {
  Page as default
};
