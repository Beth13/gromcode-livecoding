'use strict';

// input: obj1, obj2
// output: boolean

// algo:

// ----------------------V1--------------------------
// function compareObjects(obj1, obj2) {
//   console.log(JSON.stringify(obj1));
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

// ----------------------V2--------------------------
// algo
// 1. get keys, get values
// 2. check keys length
// 3. compare every key/value with .every() method
// ** compare key/value, if some is not equal - false

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const values1 = Object.values(obj1);
  const values2 = Object.values(obj2);

  const isKeysEqual = keys1.every((value, index) => value === keys2[index]);
  const isValueEqual = values1.every((value, index) => value === values2[index]);

  if (!isKeysEqual || !isValueEqual || keys1.length !== keys2.length) {
    return false;
  }

  return true;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  name: 'Tom',
  id: 17,
};

console.log(compareObjects(obj1, obj3));
console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj1, obj4));
console.log(compareObjects(obj1, obj5));
