var xArray = ["HTML","CSS","JavaScript/TypeScript","Angular","Java"];
var yArray = [60, 60, 60, 40, 55];

var data = [{
  x: xArray,
  y: yArray,
  type: "bar"  }];
var layout = {title:"My skills"};

Plotly.newPlot("myPlot", data, layout);