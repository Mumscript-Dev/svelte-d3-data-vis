<script lang="ts">
  import type { Country } from "$lib/appConfig/types";
  export let data: Country [];
  // export let year: number;
  import * as d3 from "d3";
  console.log(data)

  let width = 900;
  let height = 700;
  const margin = {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50,
  };
  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;
  // const continents = ["americas", "europe", "asia", "africa"];
  // $: colors = d3.scaleOrdinal().domain(continents).range(d3.schemePastel2);
  // $: yScale = d3.scaleBand().domain(continents).range([innerHeight, 0]).paddingOuter(0.1)

  // $: xScale = d3.scaleLinear().domain([0,90]).range([0, innerWidth])

  // let simulation = d3.forceSimulation(data)
</script>

<div class="container" bind:clientWidth={width} bind:clientHeight={height}>
  <svg {width} {height}>
    <g transform="translate({margin.left}, {margin.top})">
     
    </g>
  </svg>
</div>