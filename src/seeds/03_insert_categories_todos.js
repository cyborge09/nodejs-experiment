/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('categories_todos')
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex('categories_todos').insert([
          {
            todo_id:1,
            category_id:2,
            updated_at: new Date()
          },
          {
            todo_id:2,
            category_id:1,
            updated_at: new Date()
          },
          {
            todo_id:3,
            category_id:1,
            updated_at: new Date()
          },
          {
            todo_id:4,
            category_id:2,
            updated_at: new Date()
          },
          {
            todo_id:5,
            category_id:2,
            updated_at: new Date()
          }
          
        ])
      ]);
    });
}
