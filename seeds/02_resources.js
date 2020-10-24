
exports.seed = async function(knex) {
      await knex('resources').insert([
        {name: 'Cohort', description: 'Look in your help channel, lecture notes, and for help from TL'},
        {name: 'W3shools', description: 'A resource for coding help'},
        {name: 'Documentation', description: 'Read the documentation for a library or software'},
        {name: 'stackOverflow', description: 'A help thread for code troubles'}
      ]);
};
