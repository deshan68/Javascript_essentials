const arr = [10, 2, 3, 4];

// sum of the each element of an array
const output = arr.reduce(function (acc, crr) {
  acc = acc + crr;
  return acc;
}, 0);
console.log(output);

//find maximum number of an array
const maxNum = arr.reduce(function (max, crr) {
  if (crr > max) max = crr;
  return max;
}, 0);

console.log(maxNum);
