import jwt from 'jsonwebtoken';
import { Router } from 'express';
import * as sessionService from '../services/seesionServices';
import * as userService from '../services/userService';
import * as config from '../config'

const router = Router();

router.get('/', (req, res, next) => {
    sessionService
    .refreshSession(req.headers.refreshtoken)
    .then(data=>{res.json({DATA:data})})
    .catch((err)=>{res.json(err)});
  
});

export default router;
