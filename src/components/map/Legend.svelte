<script lang="ts">
  export let year: Number;
  export let margin: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
</script>

<g>
  <text class="label" x={0} y={20} text-anchor="end" stroke="whitesmoke"
    >Year</text
  >
  <text class="value" x={0} y={50} text-anchor="end" stroke="whitesmoke"
    >{year}</text
  >
</g>

<style>
  .label {
    color: whitesmoke;
    font-size: 20px;
  }
  .value {
    color:antiquewhite;
    font-size: 15px;
  }
</style>