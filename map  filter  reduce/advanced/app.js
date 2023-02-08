const users = [
  { name: "Arun Deshan", address: "Matara", age: "22" },
  { name: "Nimal Jay", address: "Galle", age: "20" },
  { name: "Silva De", address: "colombo", age: "22" },
  { name: "Sil De", address: "Jafna", age: "20" },
];

//list of name with address
const nameWithAddress = users.map((user) => {
  return user.name + " " + user.address;
});

// console.log(nameWithAddress);

//how many people are with particular age
// {22:2, 21:1}

const numberOfPeople = users.reduce(function (count, crr) {
  if (crr.age == 22) count += 1;
  return count;
}, 0);
// console.log(numberOfPeople);

const NumberOfAgeWithArray = users.map((user) => {
  const numberOfPeople = users.reduce(function (count, crr) {
    if (crr.age == user.age) count += 1;
    return count;
  }, 0);
  return user.age + ":" + numberOfPeople;
});
// console.log(NumberOfAgeWithArray);

const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    // if particular age present or not in the acc object
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);

// let obj = { age: 1 };
// obj["name"] = "arun";
// obj["age"] = obj.age + 1;
// console.log(obj);

//name of  who is the age less than 21
const output2 = users
  .filter((user) => {
    return user.age < 21;
  })
  .map((user) => {
    return user.name;
  });

console.log(output2);

const output3 = users.reduce(function (acc, curr) {
  console.log(curr.age);
  if (curr.age < 21) acc.push(curr.name);
  return acc;
}, []);

console.log(output3);
