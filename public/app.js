var app = function() {
  var selectBox = document.querySelector('select');
  populateCities(cityData)
  selectBox.onchange = handleSelectChange;
}

function populateCities(cityData) {
  const tag = document.getElementById('city')
  cityData.forEach(function(city, index) {
    const a = createE('option', city[0], index)
    tag.appendChild(a)
  })
}

var populateList = function(restaurants){
  const table = document.getElementById('rContainer')
  table.innerHTML = ""
  const getRestaurants = restaurants.restaurants
  const rName = createE('th', "Restaurant name");
  const cuisine = createE('th', "Cuisine");
  const aCost = createE('th', "Average cost for two £");
  const menu = createE('th', "Menu")
  table.appendChild(rName);
  table.appendChild(cuisine);
  table.appendChild(aCost);
  table.appendChild(menu);

  getRestaurants.forEach(function(restaurant){
    let r = restaurant.restaurant;
    const tr = createE('tr');
    const td1 = createE('td', r.name);
    const td2 = createE('td', r.cuisines);
    const td3 = createE('td', r.average_cost_for_two);
      const a = createE('td', "menu");
      a.href = r.menu_url;
      table.appendChild(tr);
      table.appendChild(td1);
      table.appendChild(td2);
      table.appendChild(td3);
      table.appendChild(a);
    });
};

var handleSelectChange = function(e){
  console.log(this.value)
  var lat = cityData[this.value][1]
  var lon = cityData[this.value][2]
  console.log(lat, lon)

  url = "https://developers.zomato.com/api/v2.1/search?lat=" + lat + "&lon=" + lon + "&entity_type=city&sort=rating&order=desc"
  makeRequest(url); 
}

function populateChart(restaurants) {
  var name = []
  var price = []

  const getRestaurants = restaurants.restaurants
  getRestaurants.forEach( function (restaurant) {
    let r = restaurant.restaurant;
    if (r.average_cost_for_two < 50) {
      name.push(r.name);
      price.push(r.average_cost_for_two);
    } else {
      return;
    }

    var columnChartData = {
      title: "Places to eat for two under £50",
      seriesName: "Restaurant",
      seriesData: price,
      xAxisCategories: name  
    }

    new ColumnChart(columnChartData);
  })
}

window.onload = app;