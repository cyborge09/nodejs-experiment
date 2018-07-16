import bookshelf from '../db';

const TABLE_NAME = 'sessions';

/**
 * Session model.
 */
class Session extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }
}

export default Session;
