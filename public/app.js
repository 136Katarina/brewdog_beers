var app = function(){
  var url = 'https://api.punkapi.com/v2/beers';

  var beer = JSON.parse(localStorage.getItem('beer'));
    makeRequest(url, requestComplete)

}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load',callback);
  request.send();
  }

  var requestComplete = function(){
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var beers = JSON.parse(jsonString);
    populateList(beers);
  }

  var populateList = function(beers){
    var ul = document.getElementById('drink-list');

    beers.forEach(function(beer){
      var li = document.createElement('li');
      var image = beer.image_url;
      var imageItem = beerListItem(image);
      li.innerText = beer.name;
      ul.appendChild(li);
      ul.appendChild(imageItem);
      ul.style.listStyleType = "none";
    });
  }

  var beerListItem = function(imageLink){
    var imageItem = document.createElement('li');
    var image = document.createElement('img');
    image.src = imageLink;
    image.style.width = "250px";
    image.style.height = '550px';
    imageItem.appendChild(image);
    return imageItem;
  }


document.addEventListener('DOMContentLoaded', app);
