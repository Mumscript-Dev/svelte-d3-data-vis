<script lang="ts">
  import data from "$lib/data/data.json"
  import Dashboard from "../components/Dashboard.svelte"
  let width = 900;
  let height = 670;
  let year: number = 1800;
  $: years = data.map((row: any) => parseInt(row.year));

  $: filteredData = data.filter((row:any) => row.year === year.toString())[0];

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
      }, 200);
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
<div class="container" bind:clientHeight={height} >
  <Dashboard {width} {height} data={filteredData.countries} {year}/>
</div>
<div class="control-panel">
  <button on:click={yearIncrement}>Let time fly</button>
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
  .year-control {
    width: 800px;
  }
  .control-panel {
    padding-top:0.5rem;
    display: flex;
    justify-content: center;
  }
  .container {
    background-color:white;
    height:88vh;
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  </style>