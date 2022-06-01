'use strict';

// input: arr, callback
// output: arr

// callback
// input: elem
// output: boolean

// algo
// Кожен елемент масиву буде проходити по функції яка задана(колбек)
// В колбеку треба задати якусь умову(згідно задачі)
// if callback = true => resArr.push()

const filterArrayElements = (arr, callback) => {
  const resArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index])) {
      resArr.push(arr[index]);
    }
  }

  return resArr;
};

//test data
const arr = ['Liza', 'Bob', 'Tom', 'Kate'];
const callback = el => el.includes('m');
console.log(filterArrayElements(arr, callback));

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const callback1 = elem => elem > 4;
console.log(filterArrayElements(arr1, callback1));

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const callback2 = el => el % 2 === 0;
console.log(filterArrayElements(arr2, callback2));

const arr3 = ['Liza', 'Bob', 'Tom', 'Kate'];
const callback3 = el => el.length > 3;
console.log(filterArrayElements(arr3, callback3));

// -----
function sum(a, b) {
  console.log(arguments);
}

console.log(sum(5, 9));
