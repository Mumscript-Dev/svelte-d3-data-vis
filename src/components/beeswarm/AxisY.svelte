<script lang="ts">
  export let yScale: any;
  export let innerHeight: number;
  export let continents: string [];
</script>

<g>
  <line x1={0} y1={0} x2={0} y2={innerHeight} stroke="grey" />
  {#each continents as continent}
    <line x1={0} y1={yScale(continent)} y2={yScale(continent)} x2={4} stroke="grey" />
    <text class="yTicks" text-anchor="end" y={yScale(continent)}  dy={5}
      >{continent}</text
    >
  {/each}
</g>

<style>
  .yTicks {
    font-size: 15px;
  }
</style>