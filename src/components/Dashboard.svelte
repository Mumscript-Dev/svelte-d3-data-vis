<script lang="ts">
  import type { Country } from "$lib/appConfig/types";
  import getDisplayValue from "$lib/getDisplayValue";
  export let data:Country[];
  export let width:number;
  export let height: number;
  export let year:number;
  console.log(data)

  $: totalPopulation = data.reduce((total:number, current:Country) => Number(total + current.population), 0 )

  $: GDP = data.map(country => country.income).filter(income => income !== null).map(income => income as number)

  $: lifeExpectation = data.map((country:Country) => country.life_exp).filter(life_exp => life_exp !== null).map(lifeExp => lifeExp as number) 

  $: totalLifeExp = lifeExpectation.reduce((total:number, current) =>  Number(total + current), 0 )
  $: averageLifeExp = totalLifeExp/lifeExpectation.length

  $: totalGDP = GDP.reduce((total:number, current) =>  Number(total + current), 0 )
  $: averageGDP = totalGDP/GDP.length
</script> 

<div class="container">
  <header>
    <h1>Dashboard</h1>
    <div>
      In year <span class="variable">{year}</span>, we have <span class="variable">{totalPopulation.toFixed(0)}</span> people in <span class="variable">the World</span>, GDP per  capita is $<span class="variable">{averageGDP.toFixed(2)}</span>, and life expectancy is around <span class="variable">{averageLifeExp.toFixed(0)}</span> years.
    </div>  
  </header>
  
</div>

<style>
  h1 {
    color: #00bcd4;
  }
  p {
    color: #00bcd4;
  }
  header {
    text-align: center;
  }

  .variable {
    color: #00bcd4;
    font-size: 20px;
  }
</style>