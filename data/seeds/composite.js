
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('composite').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('composite').insert([
        {project_id: 1, resource_id: 1},
          {project_id: 1, resource_id: 2},
          {project_id: 1, resource_id: 3}
      ]);
    });
};
