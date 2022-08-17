#!/usr/bin/node
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
