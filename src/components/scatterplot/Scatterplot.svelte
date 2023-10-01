<script lang="ts">
  import type { Country } from "$lib/appConfig/types";
  export let data: Country[];
  export let year: number;
  export let width: number;
  export let height:number; 
  import Tooltip from "./Tooltip.svelte";
  import AxisX from "./AxisX.svelte";
  import AxisY from "./AxisY.svelte";
  import Legend from "./Legend.svelte";
  import * as d3 from "d3";
  
  const margin = {
    top: 50,
    bottom: 80,
    left: 50,
    right: 80,
  };
  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;
  const continents = ["americas", "europe", "asia", "africa"];
  const yTicks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const xTicks = [140, 400, 4000, 40000, 150000];
  let chartData: Country[];
  let continentFilter: string | null = null;

  $: {
    if (!continentFilter) {
      chartData = data;
    } else {
      chartData = data.filter((row) => row.continent === continentFilter);
    }
  }
  $: xScale = d3
    .scaleLog()
    .base(10)
    .domain([140, 150000])
    .range([0, innerWidth]);
  $: colors = d3.scaleOrdinal(continents).range(d3.schemePastel2);
  $: yScale = d3.scaleLinear().domain([0, 90]).range([innerHeight, 0]);
  const populationDomain = [2000, 1400000000];
  // $: area = d3
  //   .scaleLinear()
  //   .range([25 * Math.PI, 1500 * Math.PI])
  //   .domain(populationDomain);

  $:area= d3.scaleSqrt()
    .domain(populationDomain) 
    .range([50, 2500]);

  const filterContinent = (continent: string) => {
    continentFilter = continent;
  };
  const resetContinentFilter = () => (continentFilter = null);
  let hoveredData: Country | null;
  const handleChartHover = (data: Country) => {
    hoveredData = data;
  };

  const handleLeaveChart = () => {
    hoveredData = null;
  };

  let mousePointWithMarginOffset = { x: 0, y: 0 };
  const handleMouseCoord = (event: any) => {
    mousePointWithMarginOffset.x = event.pageX - margin.left - margin.right;
    mousePointWithMarginOffset.y = event.pageY - margin.top - margin.bottom;
  };
</script>

<div role="tooltip" class="container" bind:clientHeight={height} bind:clientWidth={width} on:mousemove={handleMouseCoord}>
  <svg {width} {height}>
    <g transform="translate({margin.left}, {margin.top})">
      {#if chartData}
        {#each chartData as row, index}
          {#if row["life_exp"] && row.income}
            <circle
              cy={yScale(row["life_exp"])}
              fill={colors(row.continent)}
              r={Math.sqrt(area(row.population) / Math.PI)}
              cx={xScale(row.income)}
              on:mouseover={() => handleChartHover(row)}
              on:focus={() => handleChartHover(row)}
              on:mouseleave={() => handleLeaveChart()}
              tabIndex="0"
              role="tooltip"
            />
          {/if}
        {/each}
      {/if}

      <AxisX {xScale} {innerWidth} {innerHeight} {xTicks} />
      <AxisY {yScale} {innerHeight} {yTicks} />
    </g>
    <text
      class="yMeasure"
      x={10}
      y={innerHeight / 2 + margin.top}
      text-anchor="middle">Life Expectation (Years)</text
    >
    <text
      class="xMeasure"
      y={innerHeight + margin.top + 50}
      x={innerWidth / 2 + margin.left}
      text-anchor="middle">GDP Per Capita ($)</text
    >
    <g transform="translate({margin.left + innerWidth}, {margin.top})">
      <Legend
        {year}
        {margin}
        {continents}
        {colors}
        {area}
        {populationDomain}
        {filterContinent}
        {resetContinentFilter}
      />
    </g>
  </svg>
</div>
<div>
  {#if hoveredData}
    <Tooltip
      data={hoveredData}
      xPosition={mousePointWithMarginOffset.x}
      yPosition={mousePointWithMarginOffset.y}
    />
  {/if}
</div>

<style>
  .yMeasure {
    font-size: 20px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
  .container {
    width:80%
  }
</style>
