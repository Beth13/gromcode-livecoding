'use strict';

// input: obj, string, any value
// output: obj

// -----------------------------------------
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// test data
const product = {
  name: 'Laptop',
};

const res = addPropertyV1(product, 'price', 250);
console.log(res);

// -----------------------------------------
function addPropertyV2(obj, key, value) {
  // input: obj1, obj2, ... obj N
  // output: obj
  return Object.assign(obj, { [key]: value });
}

// test data
const res2 = addPropertyV2(product, 'price', 260);
console.log(res2);
// console.log(product);

// -----------------------------------------
function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

// test data
const res3 = addPropertyV3(product, 'price', 270);
console.log(res3);
// console.log(product);

// -----------------------------------------
function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// test data
const res4 = addPropertyV4(product, 'price', 280);
console.log(res4);
console.log(addPropertyV4(res4, 'color', 'white'));
// console.log(product);
