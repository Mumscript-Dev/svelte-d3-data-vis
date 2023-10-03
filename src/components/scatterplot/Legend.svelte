<script lang="ts">
  export let year: Number;
  export let margin: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  export let continents: string[];
  export let colors: any;
  export let populationDomain: number[];
  export let area: any;
  export let filterContinent: (continent: string) => void;
  export let resetContinentFilter: () => void;
</script>

<g>
  <text class="label" x={margin.right} y={20} text-anchor="end">Continents</text
  >
  {#each continents as continent, index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <circle
      cx={margin.right / 2}
      cy={50 + 60 * index}
      r={15}
      fill={colors(continent)}
      on:click={() => filterContinent(continent)}
      tabindex="0"
      role="button"
    />
    <text x={margin.right / 2} y={50 + 60 * index + 25} text-anchor="middle"
      >{continent}</text
    >
  {/each}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <g on:click={resetContinentFilter} tabindex="0" role="button">
    {#each continents as continent, index}
      <circle
        cx={index * 16 + 15 }
        cy={280}
        r={8}
        fill={colors(continent)}
        dx={10}
      />
    {/each}
  </g>
  <!-- <circle cx={margin.right / 2} cy={}>Reset</circle> -->
  <text class="label" x={margin.right} y={320} text-anchor="end"
    >Population</text
  >
  <circle
    cx={margin.right / 2}
    cy={350}
    r={Math.sqrt(area(populationDomain[0]) / Math.PI)}
    fill="none"
    stroke="grey"
  />
  <text x={margin.right / 2} y={380} text-anchor="middle"
    >{populationDomain[0]}</text
  >
  <circle
    cx={margin.right/2}
    cy={420}
    r={Math.sqrt(area(populationDomain[1]) / Math.PI)}
    fill="none"
    stroke="grey"
  />
  <text x={margin.right} y={470} text-anchor="end">{populationDomain[1]}</text>
</g>

<style>
  .label {
    font-size: 20px;
  }
  .value {
    font-size: 15px;
  }
</style>
