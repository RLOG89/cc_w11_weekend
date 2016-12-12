makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("user-key", key1);
  request.onload = callback; 
  request.send();
}

requestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var restaurants = JSON.parse(jsonString);
  populateList(restaurants)
  populateChart(restaurants)
};

createE = function ( tag, innerText, value ) {
  let e = document.createElement( tag );
  if (innerText) {
    e.innerText = innerText;
  } 
  if (value) {
    e.value = value
  }
  return e;
}
