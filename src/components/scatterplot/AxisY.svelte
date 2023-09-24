<script lang="ts">
  export let yScale: any;
  export let innerHeight: number;
  export let yTicks: number[];
</script>

<g>
  <line x1={0} y1={0} x2={0} y2={innerHeight} stroke="grey" />
  {#each yTicks as tick}
    <line x1={0} y1={yScale(tick)} y2={yScale(tick)} x2={4} stroke="grey" />
    <text class="yTicks" text-anchor="end" y={yScale(tick)} dx={-5} dy={5}
      >{tick}</text
    >
  {/each}
</g>

<style>
  .yTicks {
    font-size: 15px;
  }
</style>
