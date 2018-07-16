import { Router } from 'express';
import * as sessionService from '../services/seesionServices';

const router = Router();

router.delete('/', (req, res, next) => {
  console.log("-----------------",req.headers.refreshtoken);
  sessionService
    .deleteSession(req.headers.refreshtoken)
    .then(data => res.json({ Success : 'User Logged Out' }))
    .catch(() => {res.json({Failed : 'User Not LOGGED IN' })});
});

export default router;
