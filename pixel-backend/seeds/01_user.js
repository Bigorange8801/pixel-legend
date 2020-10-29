require('dotenv').config();
const bcrypt = require('bcryptjs');
const {testUser} = process.env;
exports.seed = function(knex,Promise) {
  // Deletes ALL existing entries

  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          firstName: 'Jane',
          lastName: 'Doe',
          userName: 'Gamer Tag',
          password: bcrypt.hashSync('{testUser}', 255)
        }
      ]);
    });
};
