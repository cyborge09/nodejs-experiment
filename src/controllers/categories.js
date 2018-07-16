import { Router } from 'express';
import * as categoriesService from '../services/categoriesService';
import {findCategory} from '../validators/categoriesValidator';

const router = Router();

/**
 * @returns {promise}
 */
router.get('/',(req,res,next)=>{
    categoriesService
    .getAllCategories()
    .then(data=>res.json({data}))
    .catch(()=>{res.json({Error:'NO CATEGORY FOUND'})});
});

router.get('/:id',findCategory,(req,res,next)=>{
    console.log(req.params.id);
    categoriesService
    .getCategory(req.params.id)
    .then(data=>{res.json({data})})
    .catch(()=>{res.json({Error: 'Data Not Found'})});
});


router.post('/',(req,res,next)=>
{
    categoriesService
    .createCategory(req.body)
    .then(data=>{
        res.status(200).json({data});
    })
    .catch((err)=>{res.json({ERROR: err})});
});


router.put('/:id',(req,res,next)=>
{
    categoriesService
    .updateCategory(req.params.id,req.body)
    .then(data=>{res.json({data})})
    .catch(()=>{res.json({ERROR:'Cannot Update'})})
});


router.delete('/:id',findCategory,(req,res,next)=>{

    
    categoriesService
    .deleteCategory(req.params.id)
    .then(data=>{res.status(403).json({id:req.params.id,delete:data})})
    .catch(()=>{res.json({ERROR:'CANNOT DELETE'})});
});

export default router;