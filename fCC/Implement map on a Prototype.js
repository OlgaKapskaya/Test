// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
   this.forEach(elem => newArray.push(callback(elem)));
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});