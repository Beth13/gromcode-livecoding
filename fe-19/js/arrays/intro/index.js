'use strict';

//var, let, const
// let message = 'hello';
// console.log(message);

const numbersList1 = [1, 2, 3, 4, 5];
// const numbersList1 = new Array(1, 2, 3, 4, 5);

// ---------------------------------------------
// pop

console.log('before pop: ', numbersList1);

//input: none
//return: element

console.log(numbersList1.pop());
console.log('after pop: ', numbersList1);

// ---------------------------------------------
//push

const numbersList2 = [1, 2, 3, 4, 5];

console.log('before push: ', numbersList2);

//input: element
//return: length(number)

console.log(numbersList2.push(88));
console.log('after push: ', numbersList2);

// ---------------------------------------------
//shift

const numbersList3 = [1, 2, 3, 4, 5];
console.log('before shift: ', numbersList3);

//input: none
//return: deleted element

console.log(numbersList3.shift());
console.log('after shift: ', numbersList3);

// ---------------------------------------------
//unshift

const numbersList4 = [1, 2, 3, 4, 5];
console.log('before unshift: ', numbersList4);

//input: element
//return: length(number)

console.log(numbersList4.unshift());
console.log('after unshift: ', numbersList4);
