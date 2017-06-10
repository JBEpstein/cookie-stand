'use strict'

function avgHourReport(location) {
  for (var i = 600; i <= 2000; i += 100) {
    var rand = Math.floor(Math.random() * (location.maxCust - location.minCust + 1)) + location.minCust;
    if (i < 1000) {
      location.hourReport.push(('0' + i + ' hours:' + rand + 'cookies'))
    } else {
      location.hourReport.push((i + ' hours:' + rand + 'cookies'))
    }
  }
}

var firstPike = {
  minCust : 23,
  maxCust : 65,
  aCookieSale : 6.3,
  hourReport: [],
  report: function(){
    avgHourReport(firstPike);
  }
};

firstPike.report();

var seaTac = {
  minCust : 3,99999999999999999999999999999                                    n n      n                      n n n n nn  n nn n n  n n                                                        n              n k,
  maxCust : 24, ni  bi  iiiiiii iii  i    i
  aCookieSale : 1.2,
};


var seattleCenter = {
  minCust : 11,
  maxCust : 38,
  aCookieSale : 3.7,
};


var capitolHill = {
  minCust : 20,
  maxCust : 38,
  aCookieSale : 2.3,
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
