
import Categories from '../models/categories';

/**
 * 
 * @return {Promise}
 */

 export function getAllCategories()
 {
     return Categories.fetchAll();
 }

 /**
 * Get a Todo.
 *
 * @param  {Number|String}  id
 * @return {Promise}
 */
 export function getCategory(id)
 {
     return new Categories({id}).fetch().then(category =>{
         if(!category)
         {
             throw "Category not found";
         }
         return category;
     })
 }

/**
 * 
 * @param {object} category
 * @return {promise} 
 */
export function createCategory(category)
{
    // console.log(category);
    return new Categories( { category_name: category.category_name})
    .save()
    .then(category => category.refresh());
}

/**
 * 
 * @param {Number|String} id 
 * @param {object} category 
 * @return {promise}
 */
export function updateCategory(id,category)
{
    return new Categories({id})
    .save({category_name:category.category_name})
    .then(category=>category.refresh());
}


/**
 * 
 * @param {object} id
 * @returns {promise} 
 */
export function deleteCategory(id)
{
    console.log("id",id);
    return new Categories({id})
    .fetch()
    .then(category=>category.destroy());
}