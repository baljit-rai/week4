exports.up = function(knex, Promise) {
  return knex.schema.createTable('famous_people2', (table) => {
    table.increments();
    table.string('description');
    table.date('date_achieved');
    table.string('famous_person_id');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('famous_people2');

};