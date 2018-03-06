const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

let lastName = process.argv[2]

function findLastName(lastName) {
  query = `
    SELECT *
    FROM famous_people
    WHERE last_name = $1 OR first_name = $1;`
  client.query(query, [lastName], (err, result) => {
      if (err) {
        callback(err)
        return console.error("error running query", err);
      }
      console.log("Searching...");
      console.log(`Found ${result.rows.length} record(s):`)
      for (let row of result.rows){
        console.log(`${row.id}: ${row.first_name} ${row.last_name}, born ${row.birthdate}`);
      }
  });
}

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  findLastName(lastName);
  client.end();
});