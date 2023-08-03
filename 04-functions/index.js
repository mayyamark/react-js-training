// log1();
// log2();
// log3();
// log4();

function log1() {
  console.log("Function declaration");
}

var log2 = function() {
  console.log("Function expression with var");
}

const log3 = function() {
  console.log("Function expression with const");
}

const log4 = () => {
  console.log("Arrow");
}

// log1();
// log2();
// log3();
// log4();

// const sum = (...nums) => {
//   return nums.reduce((acc, num) => {
//     return acc + num;
//   }, 0);
// }
const sum = (...nums) => (
  nums.reduce((acc, num) => acc + num, 0)
)

console.log(sum(1, 2, 3));
