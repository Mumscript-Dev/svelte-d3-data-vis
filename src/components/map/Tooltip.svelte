<script lang="ts">
  import type { Country } from "$lib/appConfig/types";
  export let country: Country;
  export let xPosition: number; 
  export let yPosition: number;
</script>

<div class="tooltip" style="position: absolute; top: {yPosition}px; left: {xPosition}px;">
  <h5>{country.country}</h5>
  <p>Continent: {country.continent}</p>
  <p>Life Expectation: {country?.life_exp} years</p>
  <p>GDP Per Capita: ${country?.income}</p>

</div>


<style>
h5 {
  margin: 0;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}
p {
  font-size: small;
  margin: 0;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}
.tooltip {
  padding: 0.2rem;
  border: solid 1px black;
  background: white;
  pointer-events: none;
  border-radius: 1rem;
  opacity: 0;
  animation: fadeIn 300ms ease-in forwards;
  color: #00bcd4;
}
@keyframes fadeIn {
  100% {
    opacity: 1;
  }
}
</style>