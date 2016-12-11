var fs = require('fs');
var buffer = fs.readFileSync("../data/cities.txt");
var cities = buffer.toString().split('\n');

var cityData = cities.map(function(line) {
  var cityI = line.split(/\s+/)
  return console.log(cityI)
});


