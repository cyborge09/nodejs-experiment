
import Todo from '../models/todo';
import Categories from '../models/categories';

/**
 * Get all Todos.
 *
 * @return {Promise}
 */
export function getAllTodos() {
  return Todo.fetchAll();
}


/**
 * 
 * @param {object} title 
 * @return {promise}
 */
export function getTitle(title)
{
  return Todo.query
  ((queryobject)=>{queryobject.where('title','LIKE',title);})
  .fetchAll();

}

export function getPagination(page)
{
  const offset = (page.page-1)*page.perpage;
  return Todo.query
  ((queryobject)=>{queryobject.offset(offset).limit(page.perpage)}).fetchAll();
}



export function getCategory(categoryname)
{
  return Categories.forge({category_name: categoryname}).fetch({ withRelated :'hasTodo'})
  .then(todo =>{
    if(!todo){
        throw 'item not found';
    }
    return todo;
})
}


/**
 * 
 * @param {object} query
 * @returns {promise} 
 */
  export function getSorted(query)
  {    
    return new Todo().orderBy(query.sortfrom,query.sortby).fetchAll(); 
  }
/**
 * Get a Todo.
 *
 * @param  {Number|String}  id
 * @return {Promise}
 */
export function getTodo(id) {
  return new Todo({ id }).fetch().then(todo => {
    if (!todo) {
      // throw new Boom.notFound('Todo not found');
      throw "ToDo not found";

    }
    return todo;
  });
}

/**
 * Create new Todo.
 *
 * @param  {Object}  todo
 * @return {Promise}
 */
export function createTodo(todo) {
  return new Todo({
    title:todo.title,
    name:todo.name 
  }).save().then(todo => todo.refresh());
}

/**
 * Update a Todo.
 *
 * @param  {Number|String}  id
 * @param  {Object}         Todo
 * @return {Promise}
 */
export function updateTodo(id, todo) {
  return new Todo({ id }).save({
    title:todo.title ,
    name: todo.name 
  }).then(todo => todo.refresh());
}

/**
 * Delete a Todo.
 *
 * @param  {Number|String}  id
 * @return {Promise}
 */
export function deleteTodo(id) {
  return new Todo({ id }).fetch().then(todo => todo.destroy());
}
