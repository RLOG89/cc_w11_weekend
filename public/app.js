var app = function() {
  var url = 'https://developers.zomato.com/api/v2.1/search?entity_id=76&entity_type=city&sort=rating&order=desc'
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("user-key", key);
    request.onload = callback;
    request.send();
  }

  var requestComplete = function() {
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var restaurants = JSON.parse(jsonString);
    console.log(restaurants)
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
  //   use filter to find out what user wants to search, pass into params
  //     construct url with requested fillters
  // }

window.onload = app;