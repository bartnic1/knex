var knex = require('knex')(require('./knexfile').development)

let newPerson = process.argv.slice(2);

function addName(firstName, lastName, dateOfBirth){
  let newId;
  knex('famous_people').max('id').then(function(rows){
    newid = Number(rows[0].max) + 1;
    knex.insert({id: newid, first_name: firstName, last_name: lastName, birthdate: dateOfBirth}).into('famous_people').then(function(id){console.log(id)});
  });
};

addName(newPerson[0], newPerson[1], newPerson[2]);