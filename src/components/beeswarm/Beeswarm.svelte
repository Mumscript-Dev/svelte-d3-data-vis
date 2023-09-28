<script lang="ts">
  import type { Country } from "$lib/appConfig/types";
  export let data: Country [];
  export let year: number;
  import * as d3 from "d3";

  let width = 900;
  let height = 600;
  const margin = {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50,
  };
  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;
  const continents = ["americas", "europe", "asia", "africa"];
  $: colors = d3.scaleOrdinal(continents).range(d3.schemePastel2);
  $: yScale = d3.scaleBand().domain(continents).range([innerHeight, 0]).paddingOuter(0.1)

  $: xScale = d3.scaleLinear().domain([0,90]).range([0, innerWidth])

  let simulation = d3.forceSimulation(data)

  let nodes = []; // Create an empty array to be populated when simulation ticks
simulation.on("tick", () => {
    nodes = simulation.nodes(); // Repopulate and update
});

// Run the simulation whenever any of the variables inside of it change
$: {
simulation
    .force("x", d3.forceX()
        .x(d => xScale(d['life-exp']))
        .strength(0.8)
    )
    .force("y", d3.forceY()
        .y(d => yScale(d.continent))
        .strength(0.2)
    )
    // .force("collide", forceCollide().radius(RADIUS))
    // .alpha(0.3) // [0, 1] The rate at which the simulation finishes. You should increase this if you want a faster simulation, or decrease it if you want more "movement" in the simulation.
    // .alphaDecay(0.0005) // [0, 1] The rate at which the simulation alpha approaches 0. you should decrease this if your bubbles are not completing their transitions between simulation states.
    // .restart(); // Restart the simulation

  console.log(simulation)
}

</script> 