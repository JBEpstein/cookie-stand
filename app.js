'use strict'

function Store (location,min,max,avg){
  this.location = location;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookies = avg;
  this.hourlySales = function(){
  return Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgCookies) ;
  };
}

var firstPike = new Store('First Pike',23, 65, 6.3);
var seaTac = new Store('Seatac',3, 24, 1.2);
var seattleCenter = new Store('Seattle Center',11, 38, 3.7);
var capitolHill = new Store('Capital Hill',20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var locations = [firstPike,seaTac,seattleCenter,capitolHill,alki];

function makeTable(arr) {
  var fragment = document.createDocumentFragment();

   for (var i = 0; i < arr.length; i++) {
        var row = document.createElement('tr');
        fragment.appendChild(row);
        var total = 0;

       for (var j = 0; j < 16; j++) {
            var cell = document.createElement('td');
            if (j == 0){
            cell.appendChild(document.createTextNode(arr[i].location));
          } else {
              var hs = arr[i].hourlySales();
              cell.appendChild(document.createTextNode(hs));
              total = total + hs;
              console.log(total);
          }
            row.appendChild(cell);
        }
        var cellTotal = document.createElement('td');
        cellTotal.appendChild(document.createTextNode(total));
        row.appendChild(cellTotal);
    }

   var genTable = document.getElementById('genTable');
    genTable.appendChild(fragment);
}

makeTable(locations);
