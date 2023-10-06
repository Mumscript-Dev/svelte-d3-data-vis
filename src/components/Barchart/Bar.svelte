<script lang="ts">
  import type { Country } from "$lib/appConfig/types";
  import getDisplayValue from "$lib/getDisplayValue";
  import * as d3 from "d3";
  import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
  export let year: number; 
  export let data: Country[];
  export let width: number; 
  export let height: number;

  const margin = {
    top: 40,
    bottom: 20,
    left: 20,
    right: 180,
  };
 
  $: innerHeight = height - margin.top - margin.bottom - 100;
  $: innerWidth = width - margin.left - margin.right;
  let filter: string = "Population"
  $: console.log(filter)
  const filterOptions = ["Population", "Life expectancy", "GDP Per Capita"]
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

  $: countryCount = (continent: string, filteredData: Country[]) => {
    return filteredData.filter((row:Country) => row.continent ===continent).length
  }
 
  $: yDomain = filteredData.map(row => row.country) 
  $: yScale = d3.scaleBand().domain(yDomain).range([0, innerHeight]).paddingInner(0.1).paddingOuter(0.2)
  $: xScale = getXScale(filter)
  const getXScale = (filter:string) => {
    if (filter === "Population") 
      return d3.scaleLinear().domain([2000, 1400000000]).range([0, innerWidth])
    if (filter ==="Life expectancy")
      return d3.scaleLinear().domain([0, 90]).range([0, innerWidth])
    return d3
    .scaleLog()
    .base(10)
    .domain([1400, 150000])
    .range([0, innerWidth]);
  }
</script>

<div class="container" bind:clientWidth={width}>
  <header>
    <h3>Top 20 countries in the World by {filter} in Year {year}</h3>
    <div class="filter">
      <select bind:value={filter} id="cars">
        {#each filterOptions as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
    </div>
  </header>
  <svg {width} height={height-100}>
    <g transform="translate({margin.left}, {margin.top})" >
      {#each filteredData as row,i (row)}
      <g 
      animate:flip={{ delay: 250, duration: 250, easing: quintOut }}
      > 
        {#if filter === "Population"}
          <rect x={0} y={yScale(row.country)} height={yScale.bandwidth()} width={xScale(row.population)} fill={colors(row.continent)} />
          <text x={xScale(row.population)} dx={5} y={yScale(row.country) +( yScale.bandwidth()/2+5)} text-anchor="start" stroke="white" fill="white">{row.country}: {getDisplayValue(row.population)}</text>
        {:else if  filter === "Life expectancy"}
          <rect x={0} y={yScale(row.country)} height={yScale.bandwidth()} width={xScale(row.life_exp)} fill={colors(row.continent)} />
          <text x={xScale(row.life_exp)} dx={5} y={yScale(row.country) +( yScale.bandwidth()/2+5)} text-anchor="start" stroke="white" fill="white">{row.country}: {row.life_exp} years</text>
        {:else}
          <rect x={0} y={yScale(row.country)} height={yScale.bandwidth()} width={xScale(row.income)} fill={colors(row.continent)} />
          <text x={xScale(row.income)} dx={5} y={yScale(row.country) +( yScale.bandwidth()/2+5)} text-anchor="start" stroke="white" fill="white">{row.country}: $ {getDisplayValue(row.income)}</text>
        {/if}
        
      </g>
      {/each}
    </g>
  </svg>
</div>

<style>
  header {
    text-align: center;
    color:#00bcd4;
  }

  .container {
    width:80%
  }
  .country {

  }
  .continent {
    display: inline-block;
    padding: 1rem, 2rem; 
    margin-inline: 0.5rem;
    background-color: blue;
  }
</style>