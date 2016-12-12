var app = function() {
  // var url = "https://developers.zomato.com/api/v2.1/"
  // url = "https://developers.zomato.com/api/v2.1/search?entity_id=76&sort=rating&order=desc"
  url = "https://developers.zomato.com/api/v2.1/search?entity_id=76&entity_type=city&sort=rating&order=desc"
  // url = ""
  var selectBox = document.querySelector('select');
  populateCities(cityData)
  selectBox.onchange = handleSelectChange;
  // url = urlConstructer;
  // console.log(url)

  makeRequest(url, requestComplete);
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
      // const a = createE('td', r.menu_url);
      // a.href = r.menu_url;
      table.appendChild(tr);
      table.appendChild(td1);
      table.appendChild(td2);
      table.appendChild(td3);
      // table.appendChild(a);
    });
};

var handleSelectChange = function(e){
 cityData[this.value][1], cityData[this.value][2];
 var lat = cityData[this.value][1]
 var lon = cityData[this.value][2]
 url = "https://developers.zomato.com/api/v2.1/search?lat=" + lat + "&lon=" + lon + "&entity_type=city&sort=rating&order=desc"

 // urlConstructer() 
}

var urlConstructer = function(e) {
  // var lat = cityData[this.value][1]
  // var lon = cityData[this.value][2]
  url = "https://developers.zomato.com/api/v2.1/search?lat=" + lat + "&lon=" + lon + "&sort=rating&order=desc"
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


// var mainMap = {};

// var initialize = function(){
//   var mapDiv = document.getElementById('main-map');
//   var center = {lat: 55.946723, lng: -3.202866};
//   //   var input = document.getElementById('pac-input');
//   //   var searchBox = new google.maps.places.SearchBox(input);
//   //   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


//   // mainMap.addSearchBox();
//   mainMap.addMarker(center);
//   mainMap.addClickEvent();
//   var button = document.getElementById('place-search');
//   button.onclick = handleButtonClick;
// }

// var handleButtonClick = function() {
//   var input = document.getElementById('pac-input');
//   var searchBox = new google.maps.places.SearchBox(input);
//   mainMap.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
// }

// window.onload = initialize;