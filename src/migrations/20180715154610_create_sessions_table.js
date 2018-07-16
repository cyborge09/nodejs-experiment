/**
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('sessions', table => {
    table.increments();
    table
      .integer('user_id')
      .unique()
      .references('users.id')
      .onDelete('CASCADE');
    table.string('refresh_token');
  });
}

/**
 * Drop todo table.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('sessions');
}
