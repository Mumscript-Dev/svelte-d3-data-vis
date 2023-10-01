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
  <text class="label" x={margin.right / 2} y={20} text-anchor="middle"
    >Year</text
  >
  <text class="value" x={margin.right / 2} y={50} text-anchor="middle"
    >{year}</text
  >
  <text class="label" x={margin.right} y={80} text-anchor="end">Continents</text
  >
  {#each continents as continent, index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <circle
      cx={margin.right / 2}
      cy={110 + 60 * index}
      r={15}
      fill={colors(continent)}
      on:click={() => filterContinent(continent)}
      tabindex="0"
      role="button"
    />
    <text x={margin.right / 2} y={110 + 60 * index + 25} text-anchor="middle"
      >{continent}</text
    >
  {/each}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <g on:click={resetContinentFilter} tabindex="0" role="button">
    {#each continents as continent, index}
      <circle
        cx={index * 12 + 10}
        cy={340}
        r={6}
        fill={colors(continent)}
        dx={10}
      />
    {/each}
  </g>
  <!-- <circle cx={margin.right / 2} cy={}>Reset</circle> -->
  <text class="label" x={margin.right} y={380} text-anchor="end"
    >Population</text
  >
  <circle
    cx={margin.right / 2}
    cy={400}
    r={Math.sqrt(area(populationDomain[0]) / Math.PI)}
    fill="none"
    stroke="grey"
  />
  <text x={margin.right / 2} y={420} text-anchor="middle"
    >{populationDomain[0]}</text
  >
  <circle
    cx={margin.right/2}
    cy={470}
    r={Math.sqrt(area(populationDomain[1]) / Math.PI)}
    fill="none"
    stroke="grey"
  />
  <text x={margin.right} y={530} text-anchor="end">{populationDomain[1]}</text>
</g>

<style>
  .label {
    font-size: 20px;
  }
  .value {
    font-size: 15px;
  }
</style>
