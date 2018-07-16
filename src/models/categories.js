import bookshelf from '../db';
import Todos from './todo';
const TABLE_NAME ='categories';


/*categories model*/ 

class categories extends bookshelf.Model
{
    get tableName()
    {
        return TABLE_NAME;
    }

    get hasTimestamps()
    {
        return true;
    }

    hasTodo()
    {
        return this.belongsToMany(Todos);
    }
}

export default categories;