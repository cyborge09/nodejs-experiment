import { Router } from 'express';
import * as userService from '../services/userService';

const router = Router();

router.post('/', async (req, res, next) => {
 
    try{
        const data = await userService.createUser( req.body );
        res.json('done');
    }catch(err)
    {
        res.json({ERROR:'User not created'});
        
    }
});

export default router;