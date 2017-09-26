const settings = require("./settings"); // settings.json

const name = process.argv.slice(2);
// const name = process.argv[2];

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



findPerson(name[0]);

function findPerson(lastname) {
  console.log('Searching......');
  knex.select('*').from('famous_people').where('last_name', lastname).asCallback(function(err, result) {
    returnPerson(result);
  });

}


function returnPerson(result) {
  console.log(result.length);
  result.forEach(function(element) {
    console.log('Found ' + result.length + " person(s)" + ': ' + element.first_name + ' ' +
      element.last_name + ', ' + 'born' + " '" + element.birthdate.toISOString().substr(0, 10) + "'");

  });
}