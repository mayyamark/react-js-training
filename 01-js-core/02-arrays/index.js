const numbers = [1, 2, 3];

const nums = numbers;
nums[0] = 0;
console.log(nums, numbers);

const nums = numbers.slice();
nums[0] = 0;
console.log(nums, numbers);

const nums = [...numbers];
nums[0] = 0;
console.log(nums, numbers);

// MAP
const double = numbers.map((num) => num * 2);
console.log(double);

// FILTER
const odds = numbers.filter((num) => num % 2 !== 0);
console.log(odds);

// FIND
const seven = numbers.find((num, index) => {
  return num === 7;
});
console.log(seven);

// REDUCE
const averge = numbers.reduce((acc, num) => {
  return acc + num / numbers.length;
}, 0);
console.log(averge);

const users = [{ id: 1, name: "Sveti" }, { id: 2, name: "Pesho" }];
const shallowCopy = [...users];
shallowCopy[0].name = "Mayya";
console.log(users, shallowCopy);

const reducedUsers = users.reduce((acc, u) => {
  if (u.name === "Pesho") {
    return [...acc, { id: u.id, name: "Peshoslav" }]
  }
  return [...acc, u];
}, []);

console.log(users, reducedUsers);

// const [state, setState] = useState();
// const state = useState()[0];
// const setState = useState()[1];
