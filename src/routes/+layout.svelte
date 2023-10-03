
<body>
  <header>
    <nav>
        <ul>
          <li><a href="/">Dashboard</a></li>
            <li><a href="/scatterplot">ScatterPlot</a></li>
            <li><a href="/map">Map</a></li>
            <li><a href="/beeswarm">BeeSwarm</a></li>
            <li><a href="/bar">Bar Chart</a></li>
        </ul>
    </nav>
  </header>
  <div class="container">
    <slot />
  </div>
</body>

<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #333
  }
  header {
    background-color: #333;
    color: #fff;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav li {
    font-size:1.2rem;
    display: inline-block;
    margin: 0 20px;
}

nav a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #00bcd4;
}
</style>
