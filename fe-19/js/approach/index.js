// How to work on tech tasks. Step by step guide

// 1. Learn requirement /(WHAT&) +++
// 2. Create step by step algo (& input/output for functions) /(HOW?) +++
// 3. Write draft solution & testing +++
// 4. Refactoring & final testing -> final solution

//algo
//1. iterate numbers from 2 to num +++
// ---------------------------------
//2. check if prime
////2.1 iterate all numbers from 2 to index +++
////2.2 if index / secondIndex === 0 - not prime +++
// ---------------------------------
//3. if prime - console +++
// ---------------------------------

// if i do not understand algo:
// 9
// 2 ==> 2 / 2 === 0 - true
// 3 ==> 3 / 2 === 1, 3 / 3 === 0 - true
//4 ==> 4 / 2 === 0, 4 / 3 === 1, 4 / 4 === 0 - false
// 5 ....

//input: number
//return: undefined
function getPrimes(num) {
  for (let index = 2; index <= num; index += 1) {
    // console.log('INDEX IS ' + index);
    let isPrime = true;
    for (let secondIndex = 2; secondIndex < index; secondIndex += 1) {
      //   console.log('secondIndex IS ' + secondIndex);

      if (index % secondIndex === 0) {
        // console.log('index IS not prime ' + index);
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(index);
    }
  }
}

//test data
getPrimes(10);
