import { Router } from 'express';
import * as todoService from '../services/todoService';
// import HttpStatus from 'http-status-codes';
import * as verifyToken from '../middlewares/verifyTokens';
import { findTodo} from '../validators/todoValidator';


const router = Router();

router.get('/',(req, res, next) => {


  if(req.query.title)
  {
    todoService
    .getTitle(req.query.title)
    .then(data =>{res.json({data})})
    .catch(()=>{res.json({error:'data not found'})});

  }
  else if(req.query.category)
  {
    todoService
    .getCategory(req.query.category)
    .then(data=>{res.json({data})})
    .catch(()=>{res.json({ERROR:'data not found cateo=goty'})});
  }

  else if(req.query.sortfrom || req.query.sortby)
  { 
    todoService
    .getSorted(req.query)
    .then(data=>{res.json({data})})
    .catch(()=>{res.json({Error:'Data not found for sorting'})});
  }

  else if(req.query.page||req.query.perpage)
  {
    todoService
    .getPagination(req.query)
    .then(data=>{res.json({data})})
    .catch(()=>{res.json({ERROR:'Data not found for pagination'})});
  }
  else{
    todoService
    .getAllTodos()

    .then(data =>{
      res.json({data });
    })
    .catch(()=>{
      res.json({ error :"NO DATA FOUND"});
    })
  } 
  })

  router.get('/:id',findTodo,(req,res,next)=>{
    todoService
    .getTodo(req.params.id)
    .then(data=>res.json({data}))
    .catch(err=> next(err));
  })

router.post('/',(req, res, next) => {
    todoService
      .createTodo(req.body)
      .then(data => res.status(200).json({ data }))
      .catch(err => next(err));
  });
  
  /**
 * PUT /api/users/:id
 */
router.put('/:id', findTodo, (req, res, next) => {
  todoService
    .updateTodo(req.params.id, req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

/* delete todos id*/
router.delete('/:id',findTodo,(req,res,next)=>{
  todoService
  .deleteTodo(req.params.id)
  .then(data=>res.status(403).json({data}))
  .catch(err=>next(err));
}) 
  export default router;