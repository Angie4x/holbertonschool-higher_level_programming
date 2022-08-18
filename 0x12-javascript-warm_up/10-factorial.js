#!/usr/bin/node
<<<<<<< HEAD
function factorial (n) {
  return n === 0 || isNaN(n) ? 1 : n * factorial(n - 1);
}

console.log(factorial(Number(process.argv[2])));
=======
// script that computes and prints a factorial

function factorial (number) {
  if (!number) {
    return 1;
  }
  return number * factorial(number - 1);
}

const { argv } = require('process');
const number = parseInt(argv[2]);

console.log(factorial(number));
>>>>>>> 2c3fdb6041e16315ab58cd26b1a36fff4f106eb1
