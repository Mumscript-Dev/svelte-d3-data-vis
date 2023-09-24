<script lang="ts">
  import data from "../../data/data.json";
  import type { EntryData } from "$lib/appConfig/types";
  import Scatterplot from "../../components/scatterplot/Scatterplot.svelte";
  let year: number = 1800;
  $: years = data.map((row) => parseInt(row.year));

  $: filteredData = data.filter((row) => row.year === year.toString())[0];

  let interval: any;
  let isRunning: boolean = false;
  const yearIncrement = () => {
    if (isRunning === false) {
      isRunning = true;
      interval = setInterval(() => {
        if (year < 2014) {
          year++;
        } else {
          year = 1800;
          clearInterval(interval);
          isRunning = false;
        }
      }, 100);
    }
  };
  const resetYear = () => {
    isRunning = false;
    year = 1800;
    clearInterval(interval);
  };
  const pauseYear = () => {
    isRunning = false;
    clearInterval(interval);
  };
</script>

<div class="container">
  <Scatterplot data={filteredData.countries} {year} />
</div>
<div class="control-panel">
  <button on:click={yearIncrement}>Play</button>
  <button on:click={pauseYear}>Pause</button>
  <button on:click={resetYear}>Reset</button>
  <input
    class="year-control"
    type="range"
    min={Math.min(...years)}
    max={Math.max(...years)}
    bind:value={year}
  />
</div>

<style>
  .control-panel {
    display: flex;
    justify-content: center;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  .year-control {
    width: 800px;
  }
</style>
