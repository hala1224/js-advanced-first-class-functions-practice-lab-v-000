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

const driversByRevenue = function (arr) {
  const newArr=[];
  arr.forEach(function (arr) {
    newArr.push(arr.revenue);
  });
  const numberSorter =function (num1,num2) {
    return num1-num2;
  }
  return newArr.sort(numberSorter);
}