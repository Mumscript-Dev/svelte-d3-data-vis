
<script lang="ts">
  import Beeswarm from "../../components/beeswarm/Beeswarm.svelte"
  import data from "$lib/data/data.json"
  let year: number = 1800;
  let width = 900;
  let height = 670;
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
      }, 500);
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
<div class="container" bind:clientHeight={height}>
  <Beeswarm data={filteredData.countries} {year} {width} {height}/>
</div>
<div class="control-panel">
  <!-- <button on:click={yearIncrement}>Let time fly</button>
  <button on:click={pauseYear}>Pause</button>
  <button on:click={resetYear}>Reset</button> -->
  <label>Time Slider</label>
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
    height:88vh;
    width: 100vw;
    background-color: white;
    display: flex;
    justify-content: center;
  }
  label {
    color: whitesmoke;
    padding-right:0.5rem;
  }
  </style>