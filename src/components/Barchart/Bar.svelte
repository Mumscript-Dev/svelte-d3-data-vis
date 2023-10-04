<script lang="ts">
  import type { Country } from "$lib/appConfig/types";
  import getDisplayValue from "$lib/getDisplayValue";
  import * as d3 from "d3";

  export let year: number; 
  export let data: Country[];
  export let width: number; 
  export let height: number;

  const margin = {
    top: 50,
    bottom: 80,
    left: 100,
    right: 80,
  };
  $: innerHeight = height - margin.top - margin.bottom - 100;
  $: innerWidth = width - margin.left - margin.right;
  let filter: string = "Population"
  
  $: filteredData = getFilteredData(filter, data)
  $: colors = d3.scaleOrdinal(continents).range(d3.schemePastel2);
  const continents = ["americas", "europe", "asia", "africa"];
  const getFilteredData = (filter: string, data: Country[]) => {
    if (filter === "Population") 
      return data.filter(row => row.population !== null).sort((a, b) => b.population - a.population).slice(0, 20)
    if (filter ==="Life expectancy")
      return data.filter(row => row.life_exp !== null).sort((a, b) => b.life_exp - a.life_exp).slice(0, 20)
    return data.filter(row => row.income !== null).sort((a, b) => b.income - a.income).slice(0, 20)
  }
  // $: rankedData = getRankedData(filteredData)
 
  // $: yDomain = d3.extent(filteredData)
  $: console.log(filteredData)
 
  $: yDomain = filteredData.map(row => row.country) 
  $: yScale = d3.scaleBand().domain(yDomain).range([0, innerHeight]).paddingInner(0.1).paddingOuter(0.2)
  $: xScale = d3.scaleLinear().domain([2000, 1400000000]).range([0, innerWidth])

</script>

<div class="container">
  <header>
    <h3>Top 20 countries in the World by {filter} in Year {year}</h3>
  </header>
  <svg {width} height={height-100}>
    <g transform="translate({margin.left}, {margin.top})">
      {#each filteredData as row}

      {console.log(yScale(row.country))}
        <rect x={0} y={yScale(row.country)} height={yScale.bandwidth()} width={xScale(row.population)} fill={colors(row.continent)}  />
        {#if xScale(row.population) < innerWidth/2}
          <text x={xScale(row.population)} dx={5} y={yScale(row.country) +( yScale.bandwidth()/2+5)} text-anchor="start" stroke="white">{row.country}: {getDisplayValue(row.population)}</text>
        {:else}
           <text x={xScale(row.population)/2}  y={yScale(row.country) +( yScale.bandwidth()/2+5)} text-anchor="middle" stroke="white">{row.country}: {getDisplayValue(row.population)}</text>
        {/if}
      {/each}
    </g>
  </svg>
</div>

<style>
  header {
    text-align: center;
    color:#00bcd4;
  }
</style>