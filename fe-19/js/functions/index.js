//1
function getSenseOfLife() {
  return 42;
}

console.log(getSenseOfLife());

//2
function getSquared(num) {
  return num * num;
}

console.log(getSquared(4));
const res = getSquared(-8);
console.log(res);

//3
// function sum(firstNum, secondNum) {
//   console.log(firstNum);
//   console.log(secondNum);
//   return firstNum + secondNum;
// }

//test data
// console.log(sum(5, 10));
// console.log(sum(111));

// const first = 8;
// const second = 10;
// console.log(sum(first, second));

//4
function print(age) {
  console.log('I am ' + age + ' years old');
  console.log('Sense of life is ' + getSenseOfLife());
  //   return age;
}
print(34);

//5
function sendEmail(userID) {
  const email = getEmailById(userID);

  //send email
}

//arrow funcs

//1
//option1
// const mult = (first, second) => {
//     return first * second;
// }
//option 2
const mult = (first, second) => first * second;

//test data
console.log(mult(20, 14));

//2
const squaredArrow = num => num * num; //сигнатура функции

//test data
console.log(squaredArrow(100));

//3
const getMagicNumber = () => 17;

//test data
console.log(getMagicNumber());

console.log((() => 17)() === (() => 17)());
