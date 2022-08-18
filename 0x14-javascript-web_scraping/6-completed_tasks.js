#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (err, response, body) {
  if (err) console.log(err);
  else {
    const json = JSON.parse(body);
    const usersTaksOK = {};

    for (const item of json) {
      if (!item.completed) {
        continue;
      }
      const { userId, completed } = item;
      if (usersTaksOK[userId] === undefined) {
        usersTaksOK[userId] = 0;
      }
      usersTaksOK[userId] += Number(completed);
    }
    console.log(usersTaksOK);
  }
});
