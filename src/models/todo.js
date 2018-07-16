import bookshelf from '../db';
import Categories from './categories';
const TABLE_NAME = 'todos';

/**
 * User model.
 */
class todo extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }

  hasCategories()
  {
    return this.belongsToMany(Categories);
  }
}

export default todo;
