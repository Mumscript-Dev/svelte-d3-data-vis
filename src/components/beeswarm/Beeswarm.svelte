<script lang="ts">
  import type { Country } from "$lib/appConfig/types";
  export let data: Country [];
  export let year: number;
  import * as d3 from "d3";
  import Tooltip from "./Tooltip.svelte";
  import AxisX from "./AxisX.svelte";
  import AxisY from "./AxisY.svelte";
  export let width: number;
  export let height:number; 

  const margin = {
    top: 30,
    bottom: 50,
    left: 70,
    right: 30,
  };
  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;
  const continents = ["americas", "europe", "asia", "africa"];
  $: colors = d3.scaleOrdinal(continents).range(d3.schemePastel2);
  $: yScale = d3.scaleBand().domain(continents).range([innerHeight, 50]).paddingOuter(0.1)

  $: xScale = d3
    .scaleLog()
    .base(10)
    .domain([140, 150000])
    .range([0, innerWidth]);
    const xTicks = [140, 400, 4000, 40000, 150000];
  const RADIUS =10
  $: simulation = d3.forceSimulation(data)

  let nodes = []; // Create an empty array to be populated when simulation ticks
  $: simulation.on("tick", () => {
      nodes = simulation.nodes(); // Repopulate and update
  });

// Run the simulation whenever any of the variables inside of it change
$: {
      simulation
          .force("x", d3.forceX()
              .x(d => xScale(d.income))
              .strength(0.8)
          )
          .force("y", d3.forceY()
              .y(d => yScale(d.continent))
              .strength(0.2)
          )
    .force("collide", d3.forceCollide().radius(RADIUS))
    .alpha(0.3) // [0, 1] The rate at which the simulation finishes. You should increase this if you want a faster simulation, or decrease it if you want more "movement" in the simulation.
    .alphaDecay(0.0005) // [0, 1] The rate at which the simulation alpha approaches 0. you should decrease this if your bubbles are not completing their transitions between simulation states.
    .restart(); // Restart the simulation
}
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
    <g class="inner-chart" transform="translate({margin.left}, {margin.top})">  
      <text x={innerWidth/2} y={innerHeight*2/3} text-anchor="middle" class="year" stroke="lightgray" style="font-size: {innerWidth/3};" >{year}</text>  
      {#each nodes as node}
        {console.log(node)}
        {#if node.income !== null }
        <circle cx={node.x} cy={node.y} r={RADIUS} fill={colors(node.continent)}
        on:mouseover={() => handleChartHover(node)}
        on:focus={() => handleChartHover(node)}
        on:mouseleave={() => handleLeaveChart()}
        tabIndex="0"
        role="tooltip"/>
        {/if}
      {/each}
      <AxisX {xScale} {innerWidth} {innerHeight} {xTicks} />
      <AxisY {yScale} {innerHeight} {continents} />
    </g>
    <text
    class="yMeasure"
    x={10}
    y={innerHeight / 2 + margin.top}
    text-anchor="middle">Continents</text
  >
  <text
    class="xMeasure"
    y={innerHeight + margin.top + 40}
    x={innerWidth / 2 + margin.left}
    text-anchor="middle">GDP Per Capita ($)</text
  >
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
   .year {
    font-size: var(--font-size);
    stroke: lightgray;
    fill:lightgray
  }
  .container {
    width:80%
  }
  .yMeasure {
    font-size: 20px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
</style>