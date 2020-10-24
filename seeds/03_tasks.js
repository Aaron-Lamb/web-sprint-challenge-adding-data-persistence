
exports.seed = async function(knex) {
  await knex('tasks').insert([
        {description: 'Create a repository', project_id: 3},
        {description: 'Practice adding, commiting, pushing, and merging', project_id: 3},
        {description: 'Use knex to create a database', project_id: 1},
        {description: 'Create endpoints for the database', project_id: 1},
        {description: 'Rewrite a past project with flexbox', project_id: 2},
        {description: 'Use media query breakpoints', project_id: 2},
      ]);
};
