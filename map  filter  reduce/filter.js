const arr = [1, 2, 3, 4, 5];

function isOdd(x) {
  return x % 2; //return true or false, then save true value element of the array
}
const output = arr.filter(isOdd);
console.log(output);
