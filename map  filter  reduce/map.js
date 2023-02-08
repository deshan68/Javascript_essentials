const arr = [1, 2, 3, 4, 5];

//method 1
function double(x) {
  return x * 2;
}
const output = arr.map(double);

//method 2
const outputM2 = arr.map((item) => {
  return item * 2;
});

//method 3
const outputM3 = arr.map((item) => item * 2);

console.log(output);
console.log(outputM2);
console.log(outputM3);
