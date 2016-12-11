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
  };

  var requestComplete = function() {
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var restaurants = JSON.parse(jsonString);
    populateList(restaurants)
  };

  var populateList = function(restaurants){


    const getRestaurants = restaurants.restaurants
    const table = document.getElementById('rContainer')
    console.log(getRestaurants[0].restaurant)

    getRestaurants.forEach(function(restaurant){
      let r = restaurant.restaurant;
      const tr1 = createE('tr');
      const td1 = createE('td', "Restaurnt name: " + r.name);
      const tr2 = createE('tr');
      const td2 = createE('td', "Cuisine: " + r.cuisines);
      const tr3 = createE('tr');
      const td3 = createE('td', "Average cost for two: £" + r.average_cost_for_two);
      const tr4 = createE('tr');
      const td4 = createE('a', "Menu:");
      const tr5 = createE('tr')
      const img = createE('img');
      td4.href = r.menu_url;
      img.src = r.featured_image;

      
      table.appendChild(tr1)
      table.appendChild(td1)
      table.appendChild(tr2)
      table.appendChild(td2)
      table.appendChild(tr3)
      table.appendChild(td3)
      table.appendChild(tr4)
      table.appendChild(td4)
      table.appendChild(tr5)
      table.appendChild(img)

    });
  };


    function createE( tag, innerText ) {
      let e = document.createElement( tag );
      if (innerText) {
        e.innerText = innerText;
      } 
      return e;
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