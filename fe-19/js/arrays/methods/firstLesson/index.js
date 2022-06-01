// ---------------------------------------------
//filter
// const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

//input: func
//return: array

//callback
//input: element, index (optional), array (optional)
//return: boolean

//OPTION1
// function filterCallback(num) {
//   console.log('filterCallback is called' + num);

//   return num > 5;
// }

// const filterRes = anotherNumbersList.filter(filterCallback);
// console.log(filterRes);

// //OPTION2
// const filterRes = anotherNumbersList.filter(function (num) {
//   return num > 5;
// });
// console.log(filterRes);

//OPTION3
// const filterRes = anotherNumbersList.filter(num => num > 5);
// console.log(filterRes);

// ---------------------------------------------
//map

//input: callback, obj
//return: array

const numbersList = [5, 0, 8, 10, -4, 50, 220];

//callback

//input: element
//return: modified element

const mapREs = numbersList.map(elem => {
  if (elem < 0) {
    return 'number is negative';
  }
  return elem * elem;
});
console.log(mapREs);

// ---------------------------------------------
//find

//input: callback
//output: element

//callback

//input: element
//output: boolean

//OPTION1
// const findRes = numbersList.find(elem => {
//   if (elem % 2 === 1) {
//     return true;
//   } else return false;
// });

// console.log(findRes);

//OPTION2

const findRes = numbersList.find(elem => elem % 2 === 1);

console.log(findRes);

// ---------------------------------------------
//some

//input: callback
//return: boolean

// ---------------------------------------------
//forEach

//input: callback
//return: undefined

//callback

//input: element
//return: undefined

numbersList.forEach(elem => {
  if (elem < 0) {
    console.log(elem);
  }
});
