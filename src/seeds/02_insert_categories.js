/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('categories')
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex('categories').insert([
          {
            category_name : 'assignment1',
            updated_at: new Date()
          },
          {
            category_name : 'assignment2',
            updated_at: new Date()
          }
        ])
      ]);
    });
}
