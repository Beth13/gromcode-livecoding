'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

// algo
// 1.iterate keysList array
// 2. add key-value to the object

// ----------------------V1--------------------------
// function buildObject(keysList, valuesList) {
//   let obj = {};

//   for (let index = 0; index <= keysList.length; index += 1) {
//     obj[keysList[index]] = valuesList[index];
//   }

//   return obj;
// }

// ----------------------V2--------------------------
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     console.log(`acc is: ${acc}; key is: ${key}, index is: ${index}`);
//     acc[key] = valuesList[index];
//     return acc;
//   }, {});
// }

// ----------------------V3--------------------------
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     return { ...acc, [key]: valuesList[index] };
//   }, {});
// }

// ----------------------V4--------------------------
const buildObject = (keysList, valuesList) =>
  keysList.reduce((acc, key, index) => ({ ...acc, [key]: valuesList[index] }), {});

// if code doesn't work - split by steps

// test data
const keys = ['id', 'name', 'price', 'date'];
const values = ['1234', 'Iphone', 1500, new Date(2022, 5, 5)];
const result = buildObject(keys, values);
console.log(result);
