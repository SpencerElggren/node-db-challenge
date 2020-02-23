
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'desktop parts', description:'hardware'},
        {name: 'OS', description: 'Windows, Kali'},
        {name: 'peripherals', description:'monitor, keyboard, mouse'}
      ]);
    });
};
