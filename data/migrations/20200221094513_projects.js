
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name').notNullable().unique();
      tbl.string('description');
      tbl.boolean('completed').notNullable().defaultTo(false);
  })
      .createTable('tasks', tbl => {
          tbl.increments();
          tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects');
          tbl.string('description').notNullable();
          tbl.string('notes');
          tbl.boolean('completed').notNullable().defaultTo(false);
      })
      .createTable('resources', tbl => {
          tbl.increments();
          tbl.string('name').notNullable().unique();
          tbl.string('description');
      })
      .createTable('composite', tbl => {
          tbl.primary(['project_id', 'resource_id']);
          tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects');
          tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resources');
      })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('composite')
};
