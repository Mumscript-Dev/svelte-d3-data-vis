<script lang="ts">
  import type { Country } from "$lib/appConfig/types";
  export let data: Country[];
  export let year: number;
  export let width:number;
  export let height: number;
  import * as d3 from "d3"
  import {onMount} from "svelte";
  import world from "$lib/data/world.ts"
   // @ts-ignore
  import * as topojson from "topojson";
  import Tooltip from "./Tooltip.svelte";
  import Legend from "./Legend.svelte";

  const margin = {
    top: 50,
    bottom: 50,
    left: 80,
    right: 100
  };
  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;
  const continents = ["americas", "europe", "asia", "africa"];
  $: globeWidth = innerWidth/2-50
  let rotation: number = 0;
  let degreePerFrame = 0.4;
  const t = d3.timer((elapsed) => {
    if (isDragging) return 
    rotation += degreePerFrame
  })
  $: projection = d3.geoOrthographic()
  .scale(globeWidth)
  .rotate([rotation, 0])
  .translate([innerWidth/2, innerHeight/2]);
  $: path = d3.geoPath(projection);
  
  let globe: any;
  let countriesGeo: any;
  let isDragging = false;

  // const dataSrc = "dist/src/lib/data/world.topojson"
  onMount(async() => {
    // d3.json(dataSrc).then((data) => {
    //   // @ts-ignore
    // countriesGeo = topojson.feature(data, data.objects.countries).features;
    // }); 
    countriesGeo = await topojson.feature(world, world.objects.countries).features;
   const dragSensitivity = 0.15
   const myGlobe = d3.select(globe)
   myGlobe.call(
    d3.drag()
      .on("drag", (event) => {
        isDragging = true
        rotation = rotation + event.dx*dragSensitivity; 
      })
      .on("end", (event) => {
        isDragging =false;
      })
   )
  });

  $: getCountryInfo = (country: string|null, data:Country[]) => {
    if(!country)
      return null
    
    return data.filter(row => row.country === country)[0]
  }
  let hoveredCountry:null|Country = null;
	$: handleCircleHover = (country: string, data) => {
		hoveredCountry = getCountryInfo(country, data);
	}

	const handleLeaveChart = () => {
		hoveredCountry = null;
	}

  let mousePointWithMarginOffset = { x: 0, y: 0 };
	function handleMouseCoord(event: any) {
		mousePointWithMarginOffset.x = event.pageX - margin.left - margin.right;
		mousePointWithMarginOffset.y = event.pageY - margin.top - margin.bottom;
	}
  
</script>

<div class="container" role="tooltip"  bind:clientHeight={height} bind:clientWidth={width} 
on:mousemove={handleMouseCoord}>
<svg {width} {height} bind:this={globe}>
  <defs>
    <filter id="glow" height="130%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="7.5" />
      <feOffset dx="0" dy="0" result="offsetblur" />
      <feFlood flood-color="rgba(173, 216, 230, .85)" />
      <feComposite in2="offsetblur" operator="in" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <g transform="translate({margin.left}, {margin.top})">
    <circle filter="url('#glow')" cx={innerWidth/2} cy={innerHeight/2} r={globeWidth} stroke="grey" fill="lightblue"></circle>
    {#if countriesGeo}
    {#each countriesGeo as country}
      <path
        d={path(country)}
        class="countries"
        stroke="#787878"
        fill={country.properties.color}
        on:mouseover={() => handleCircleHover(country.properties.name, data)}
        on:focus={() => handleCircleHover(country.properties.name, data)}
        on:mouseleave={() => handleLeaveChart()}  
        role="tooltip"
        opacity={0.5}
      />
    {/each}
  {/if}
   <g transform="translate({margin.left + innerWidth}, {margin.top})">
      <Legend
        {year}
        {margin}
      />
    </g>
  </g>
</svg>
</div>


{#if hoveredCountry}
  <Tooltip country={hoveredCountry} xPosition={mousePointWithMarginOffset.x}
  yPosition={mousePointWithMarginOffset.y}/> 
{/if}

<style>
  .countries:hover {
    opacity: 1
  }
  svg {
  overflow: visible;
}
.container {
  
}
</style>