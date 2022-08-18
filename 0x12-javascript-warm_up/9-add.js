#!/usr/bin/node

add(parseInt(process.argv[2]), parseInt(process.argv[3]));

function add(a, b) {
  console.log(a + b);
}
const { argv } = require('process');

const a = parseInt(argv[2]);
const b = parseInt(argv[3]);

console.log(add(a, b));
