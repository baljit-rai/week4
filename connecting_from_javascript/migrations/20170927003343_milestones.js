exports.up = function(knex, Promise) {
  return knex.schema.createTable('famous_people1', (table) => {
    table.increments();
    table.string('description');
    table.date('date_achieved');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('famous_people1');

};