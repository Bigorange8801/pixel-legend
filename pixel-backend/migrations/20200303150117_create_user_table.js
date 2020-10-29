
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user',table =>{
      table.increments();
      table.string( 'firstName', 128).notNullable();
      table.string('lastName', 255).notNullable();
      table.string('userName',255)
            .unique('uq_user_userName')
            .notNullable();
      table.string('password', 255).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
