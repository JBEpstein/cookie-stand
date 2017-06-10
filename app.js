'use strict'

// function avgHourReport(location) {
//   for (var i = 600; i <= 2000; i += 100) {
//     var rand = Math.floor(Math.random() * (location.maxCust - location.minCust + 1)) + location.minCust;
//     if (i < 1000) {
//       location.hourReport.push(('0' + i + ' hours:' + rand + 'cookies'))
//     } else {
//       location.hourReport.push((i + ' hours:' + rand + 'cookies'))
//     }
//   }
// }

function (minCust, maxCust, aCookieSale) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = aCookieSale;
}

function makeRow(item){
  //Step 1 - create element
  var newRowEl = document.createElement('tr');

  //Step 2 - Configure/Mutate the ROW element
    var itemDataEl = document.createElement('td');
  itemDataEl.textContent = item.name;
  newRowEl.appendChild(itemDataEl);

  var priceDataEl = document.createElement('td');
  priceDataEl.textContent = item.price;
  newRowEl.appendChild(priceDataEl);

  var colorEl = document.createElement('td');
  colorEl.textContent = item.color;
  newRowEl.appendChild(colorEl);

  //Step 3 - Append element to the DOM
  tableBodyEl.appendChild(newRowEl);
}

var = firstPike = new store(23, 65, 6.3);
var = seaTac = new store(3, 24, 1.2);
var = seattleCenter = new store(11, 38, 3.7);
var = capitolHill = new store(20, 38, 2.3);
var = alki = new store(2, 16, 4.6);



var firstPike = {
  minCust : 23,
  maxCust : 65,
  aCookieSale : 6.3,
  hourReport: [],
  report: function(){
    avgHourReport(firstPike);
  }
};

var alkiArr = [];

var alki = {
  minCust : 2,
  maxCust : 16,
  aCookieSale : 4.6,
  avgCust : ,
  var hourAvg = alki.avgCust();
  console.log(hourAvg);
};

console.log(alkiArr)


alki.avgCust = genHourlyCust(alki);

alkiArr.push(alki.avgCust);

console.log(alkiArr);
