makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("user-key", key1);
  request.onload = callback; 
  request.send();
}

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