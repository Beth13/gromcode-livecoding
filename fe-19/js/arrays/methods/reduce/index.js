'use strict';

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

//reduce

//input: callback, init acc(optional)
//output: acc(number)

//callback

//input: acc, value(element of arr), index(optional), arr(optional)
//output: new acc
const res = transactions.reduce((acc, elem) => acc + elem);
console.log(res);
