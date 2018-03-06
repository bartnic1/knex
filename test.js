var knex = require('knex')(require('./knexfile').development);

newid = knex('famous_people').max('id').then(function(rows){
  let thing = rows;
  console.log(typeof thing[0].max);
}).then(console.log(thing));
// console.log(newid);
