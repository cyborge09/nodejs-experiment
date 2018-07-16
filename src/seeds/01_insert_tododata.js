/**
 * Seed users table.
 *
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
    // Deletes all existing entries
    return knex('todos')
      .del()
      .then(() => {
        return Promise.all([
          // Inserts seed entries
          knex('todos').insert([
            {
              title: 'todos 1',
              name:'SHRIJAN',
              updated_at: new Date()
            },
            {
              title: 'todos 2',
              name:'AKASH',
              updated_at: new Date()
            },
            {
              title: 'todos 3',
              name:'AKASH1',
              updated_at: new Date()
            },
            {
              title: 'todos 4',
              name:'AKASH2',
              updated_at: new Date()
            },
            {
              title: 'todos 5',
              name:'AKASH3',
              updated_at: new Date()
            },
          ])
        ]);
      });
  }
  