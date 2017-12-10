(function() {
  var margin = { top: 20, left: 100, right: 30, bottom: 30},
    height = 400 - margin.top - margin.bottom,
    width = 600 - margin.left - margin.right;

  // Build your SVG
  var svg = d3.select("#graphic-1")
        .append("svg")
        .attr("height", height + margin.top + margin.bottom)
        .attr("width", width + margin.left + margin.right)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  /* 
    Create a few scales 
    xPositionScale - gdp_per_capita
    yPositionScale - life expectancy
    barYPositionScale - continent
    barWidthScale - average life expectancy
  */ 
  var xPositionScale = d3.scaleBand()
    .padding(0.25)
    .domain(["China", "Germany", "India", "Japan", "Mexico", "United States"])
    .range([0, width])

  var yPositionScale = d3.scaleLinear()
    .domain([-0.5, 2.40])
    .range([height, 0])

  // var barYPositionScale = d3.scaleBand()
  //   .range([height, 0])

  // var barWidthScale = d3.scaleLinear()
  //   .domain([0, 80])
  //   .range([0, width])

  d3.queue()
    .defer(d3.csv, "data.csv", function(d) {
      // Convert to numbers in case we forget later
      d.creatives = +d.creatives
      d.technology = +d.technology
      d.teachers = +d.teachers
      d.managers = +d.managers
      d.builders = +d.builders
      d.care = +d.care
      d.professionals = +d.professionals
      return d
    })
    .await(ready)

  function ready(error, datapoints) {
    console.log(datapoints)
    /* 
      Set the maximums for the scales (gdp + life expectancy) 
    */
    

    /*
      Listen for events
    */

    d3.select("#creatives").on('stepin', function() {
      svg.selectAll('rect').remove()

      svg.selectAll("rect")
        .data(datapoints)
        .enter().append("rect")
        .attr("height", function(d) {
          return Math.abs(yPositionScale(0) - yPositionScale(d['creative']))
        })
        .attr("width", xPositionScale.bandwidth())
        .attr("y", function(d){
          if(d['creative'] < 0) {
            return yPositionScale(0)
          } else {
            return yPositionScale(d['creative'])
          }
        })
        .attr("x", function(d, i){
          return xPositionScale(d['country']);
        })
        .attr("fill", '#66c2a5')
    })


    d3.select("#technology").on('stepin', function() {
      
      svg.selectAll('rect').remove()

      svg.selectAll("rect")
        .data(datapoints)
        .enter().append("rect")
        .attr("height", function(d) {
          return Math.abs(yPositionScale(0) - yPositionScale(d['technology']))
        })
        .attr("width", xPositionScale.bandwidth())
        .attr("y", function(d){
          if(d['technology'] < 0) {
            return yPositionScale(0)
          } else {
            return yPositionScale(d['technology'])
          }
        })
        .attr("x", function(d, i){
          return xPositionScale(d['country']);
        })
        .attr("fill", "#fc8d62")
    })

    d3.select("#teachers").on('stepin', function() {
      
      svg.selectAll('rect').remove()

      svg.selectAll("rect")
        .data(datapoints)
        .enter().append("rect")
        .attr("height", function(d) {
          return Math.abs(yPositionScale(0) - yPositionScale(d['teacher']))
        })
        .attr("width", xPositionScale.bandwidth())
        .attr("y", function(d){
          if(d['teacher'] < 0) {
            return yPositionScale(0)
          } else {
            return yPositionScale(d['teacher'])
          }
        })
        .attr("x", function(d, i){
          return xPositionScale(d['country']);
        })
        .attr("fill", "#e78ac3")
    })


    d3.select("#managers").on('stepin', function() {
      
      svg.selectAll('rect').remove()

      svg.selectAll("rect")
        .data(datapoints)
        .enter().append("rect")
        .attr("height", function(d) {
          return Math.abs(yPositionScale(0) - yPositionScale(d['manager']))
        })
        .attr("width", xPositionScale.bandwidth())
        .attr("y", function(d){
          if(d['manager'] < 0) {
            return yPositionScale(0)
          } else {
            return yPositionScale(d['manager'])
          }
        })
        .attr("x", function(d, i){
          return xPositionScale(d['country']);
        })
        .attr("fill", "#1f78b4")
    })



    d3.select("#builders").on('stepin', function() {
      
      svg.selectAll('rect').remove()

      svg.selectAll("rect")
        .data(datapoints)
        .enter().append("rect")
        .attr("height", function(d) {
          return Math.abs(yPositionScale(0) - yPositionScale(d['builder']))
        })
        .attr("width", xPositionScale.bandwidth())
        .attr("y", function(d){
          if(d['builder'] < 0) {
            return yPositionScale(0)
          } else {
            return yPositionScale(d['builder'])
          }
        })
        .attr("x", function(d, i){
          return xPositionScale(d['country']);
        })
        .attr("fill", '#a6d854')
    })


    d3.select("#cares").on('stepin', function() {
      
      svg.selectAll('rect').remove()

      svg.selectAll("rect")
        .data(datapoints)
        .enter().append("rect")
        .attr("height", function(d) {
          return Math.abs(yPositionScale(0) - yPositionScale(d['care']))
        })
        .attr("width", xPositionScale.bandwidth())
        .attr("y", function(d){
          if(d['care'] < 0) {
            return yPositionScale(0)
          } else {
            return yPositionScale(d['care'])
          }
        })
        .attr("x", function(d, i){
          return xPositionScale(d['country']);
        })
        .attr("fill", "#ffd92f")
    })

    d3.select("#professionals").on('stepin', function() {
      
      svg.selectAll('rect').remove()

      svg.selectAll("rect")
        .data(datapoints)
        .enter().append("rect")
        .attr("height", function(d) {
          return Math.abs(yPositionScale(0) - yPositionScale(d['professional']))
        })
        .attr("width", xPositionScale.bandwidth())
        .attr("y", function(d){
          if(d['professional'] < 0) {
            return yPositionScale(0)
          } else {
            return yPositionScale(d['professional'])
          }
        })
        .attr("x", function(d, i){
          return xPositionScale(d['country']);
        })
        .attr("fill", "#8c510a")
    })

     /*
      Draw some axis
    */

    var xAxis = d3.axisBottom(xPositionScale)

    svg.append("g")
      .attr("class", "axis x-axis")
      .attr("transform", "translate(0," + yPositionScale(0) + ")")
      .call(xAxis)

    var yAxis = d3.axisLeft(yPositionScale).ticks(6).tickFormat(d3.format(".0%")).tickSize(-width)
    svg.append("g")
      .attr("class", "axis y-axis")
      .call(yAxis);

    svg.selectAll(".tick line")
      .attr("stroke-dasharray", 2)
      .attr("fill", "#d9d9d9")

    svg.selectAll(".domain").remove()


  }

})();









