var store = function(location,min,max,avg){
  this.location = location;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookies = avg;
  this.hourlySales = function(){
  return (Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgCookies ;
  };
}

var firstPike = new store('First Pike',23, 65, 6.3);
var seaTac = new store('Seatac',3, 24, 1.2);
var seattleCenter = new store('Seattle Center',11, 38, 3.7);
var capitolHill = new store('Capital Hill',20, 38, 2.3);
var alki = new store('Alki', 2, 16, 4.6);

var locations = [firstPike,seaTac,seattleCenter,capitolHill,alki];

function makeTable(arr) {
  var fragment = document.createDocumentFragment();

   for (var i = 0; i < arr.length; i++) {
        var row = document.createElement('tr');
        fragment.appendChild(row);

       for (var j = 0; j < 16; j++) {
            var cell = document.createElement('td');
            if(j == 0){
            cell.appendChild(document.createTextNode(arr[i].location));
          } else {
              cell.appendChild(document.createTextNode(arr[i].hourlySales().toFixed(2)));
          }
            row.appendChild(cell);
        }
    }

   var target = document.getElementById('target');
    target.appendChild(fragment);
}

makeTable(locations);
