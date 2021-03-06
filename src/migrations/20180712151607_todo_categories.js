/**
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('categories_todos',table =>{
    table.increments().primary();
    table
    .timestamp('created_at')
    .notNull()
    .defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull();
    table.integer('todo_id').references('todos.id');
    table.integer('category_id').references('categories.id');
  });
}

/**
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('categories_todos');
}
