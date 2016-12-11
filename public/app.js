var app = function() {
  // var url = "https://developers.zomato.com/api/v2.1/search?lat=" + lat + "&lon=" + lon + "&sort=rating&order=desc"
  var url = "https://developers.zomato.com/api/v2.1/search?entity_id=76&sort=rating&order=desc"
  // var button = document.querySelector('button');
  // button.onclick = handleButtonClick; 
  populateCities(cityData)
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("user-key", key1);
  request.onload = callback; // need to change this later to onclick//
  request.send();
};

var requestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var restaurants = JSON.parse(jsonString);
  populateList(restaurants)
};

function populateCities(cityData) {
  const tag = document.getElementById('city')
  cityData.forEach(function(city) {
    const a = createE('option', city[0])
    tag.appendChild(a)
  })
}

var populateList = function(restaurants){
  const getRestaurants = restaurants.restaurants
  const table = document.getElementById('rContainer')
  console.log(getRestaurants[0].restaurant)
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

function createE( tag, innerText ) {
  let e = document.createElement( tag );
  if (innerText) {
    e.innerText = innerText;
  } 
  return e;
}

var handleSelectChanged = function(event){
  var tag = document.querySelector('#select-result');
  tag.innerText = this.value;
  console.log(event);
}

  // var urlConstructer = function(e, cityData) {
  // // for selected city take lat then take lon
  // var lat = 
  // var lon = event.
  //   cityData.filter(function(city) {
  //     const a = createE('option', city[1])
  //     const b = createE('option', city[2])
  //     tag.appendChild(a)
  //     tag.appendChild(b)
  // }

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