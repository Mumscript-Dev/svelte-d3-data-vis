<script lang="ts">
  export let xScale: any;
  export let innerWidth: number;
  export let innerHeight: number;
  export let xTicks: number[];
</script>

<g>
  <line
    x1={0}
    y1={innerHeight}
    x2={innerWidth}
    y2={innerHeight}
    stroke="grey"
  />
  {#each xTicks as tick}
    <line
      x1={xScale(tick)}
      y1={innerHeight}
      x2={xScale(tick)}
      y2={innerHeight - 5}
      stroke="grey"
    />
    <text x={xScale(tick)} y={innerHeight + 20} text-anchor="middle"
      >{tick}</text
    >
  {/each}
</g>