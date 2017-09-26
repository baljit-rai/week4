const settings = require("./settings"); // settings.json

const input = process.argv.slice(2);

var knex = require('knex')({
  client: 'pg',
  connection: {
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
  }
});

function addPeople(inputA) {
  knex.insert({
    first_name: inputA[0],
    last_name: inputA[1],
    birthdate: inputA[2]
  }).into('famous_people').asCallback(function(err, results) {
    if (err) return console.error(err);
    console.log("Person has been added to famous_people")
  });
}

addPeople(input)