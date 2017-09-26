const pg = require("pg");
const settings = require("./settings"); // settings.json
const name = process.argv.slice(2);

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  findPerson();
});

function findPerson(person) {
  console.log('Searching......');
  client.query("SELECT * FROM famous_people WHERE last_name = $1::text", name, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    returnPerson(result);

    client.end();
  });
}

function returnPerson(result) {
  result.rows.forEach(function(element) {
    console.log('Found ' + result.rows.length + " person(s)" + ': ' + element.first_name + ' ' +
      element.last_name + ', ' + 'born' + " '" + element.birthdate.toISOString().substr(0, 10) + "'");

  });
}