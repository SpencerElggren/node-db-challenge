
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description:'purchase all parts'},
        {project_id: 1, description:'build'},
        {project_id: 1, description:'install OS'}
      ]);
    });
};
