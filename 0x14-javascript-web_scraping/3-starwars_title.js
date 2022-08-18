#!/usr/bin/node

const request = require('request');
const starWarsAPI = 'https://swapi-api.hbtn.io/api/films/';
const episode = process.argv[2];

request(`${starWarsAPI}${episode}`, function (err, response, body) {
  if (err) console.log(err);
  else {
    const json = JSON.parse(body);
    console.log(json.title);
  }
});
