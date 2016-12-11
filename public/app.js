var app = function() {
  var url = 'https://developers.zomato.com/api/v2.1/search?entity_id=76&entity_type=city&sort=rating&order=desc'
  // var button = document.querySelector('button');
  // button.onclick = handleButtonClick; 
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("user-key", key1);
    request.onload = callback; // need to change this later to onclick//
    request.send();
  }

  var requestComplete = function() {
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var restaurants = JSON.parse(jsonString);
    populateList(restaurants)
    // console.log(restaurants[0].location.address)
}

var populateList = function(restaurants){
  console.log(restaurants)
  console.log(restaurants[0])
  var ul = document.getElementById('list');

  restaurants.forEach(function(restaurant){
    var li = document.createElement('li');
    li.innerText = restaurant.name;
    ul.appendChild(li);
  });
}

var handleButtonClick = function() {

}

// use this later to get more results than the initial 20
  // var increment = function() {
  //   var counter = 0
  //   for (var i = 0; i < 100; i++) {
  //     counter += 20
  //     }
  //     return console.log(counter)
  // }

  // var urlConstructer = function() {
  //   // use filter to find out what user wants to search, pass into params
  //   //   construct url with requested fillters
  //   var url = 'https://developers.zomato.com/api/v2.1/search?'
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