import * as categoriesServices from '../services/categoriesService';

function findCategory(req,res,next)
{
    return categoriesServices
    .getCategory(req.params.id)
    .then(()=>next())
    .catch(err=>res.json({Error:'CATEGORY ID NOT FOUND'}));                                                                                                          
}

export {findCategory};