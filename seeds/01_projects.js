
exports.seed = async function(knex) {
      await knex('projects').insert([
        {name: 'DB1', description: 'Build a basic database'},
        {name: 'Flex', description: 'Learn to use flexbox'},
        {name: 'GitFlow', description: 'Learn the gitflow'},
      ]);
};
