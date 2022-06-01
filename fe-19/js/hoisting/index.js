// exmpl1----------------------------------
// var message;
// console.log(message);
// message = 'Hoisting is here!';

// console.log(message);
// var message = 'Hoisting is here!';

// exmpl2----------------------------------
// var a;
// a = 55;
// console.log(a);

// if (a) {
//   a = 1;
//   console.log(a);
// }

// console.log(a);

// var a = 55;
// console.log(a);

// if (a) {
//   var a = 1;

//   console.log(a);
// }

// console.log(a);

// exmpl3----------------------------------
// var a;
// a = 77;
// console.log(a);

// function print() {
//   var a;
//   a = 2;
//   console.log(a);
// }
// print();

// console.log(a);

// var a = 77;
// console.log(a);

// function print() {
//   var a = 2;
//   console.log(a);
// }

// print();

// console.log(a);

// exmpl4----------------------------------

// run();

// function run() {
//   console.log('RUN');
// }

// stop();

// const stop = function () {
//   console.log('STOP');
// };

const locationUrl = 'orderField=id&page=22&orderMode=desc&status=1';

const getPage = url =>
  url
    .split('&')
    .find(el => el.includes('page'))
    .split('=')[1];

console.log(getPage(locationUrl));
