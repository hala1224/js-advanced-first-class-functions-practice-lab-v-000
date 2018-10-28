// Code your solution in this file!
const logDriverNames = function (arr) {
  arr.forEach( function (arr) {
    console.log(arr.name);
  });
};

const logDriversByHometown = function (arr, str) {
  arr.forEach(function (arr) {
    if (arr.hometown === str) {
      console.log(arr.name);
    }
  });
  
};

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue;
  })
}

function totalRevenue(drivers) {
  const revenues = [];
  drivers.forEach(function(driver){revenues.push(driver.revenue)})
  return revenues.reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
  })
}