// Code your solution in this file!
const logDriverNames = function (arr) {
  arr.forEach( function (arr) {
    console.log(arr.name);
  });
};

const logDriversByHometown = function (arr, str) {
  arr.forEach(function (arr) {
    if (arr.location === str) {
      console.log(arr.name);
    }
  });
  
};