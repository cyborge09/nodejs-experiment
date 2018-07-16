import jwt from 'jsonwebtoken';
import { Router } from 'express';
import * as sessionService from '../services/seesionServices';
import * as userService from '../services/userService';
import * as config from '../config'

const router = Router();

router.post('/', (req, res, next) => {
 
  let user = {
    user_email: req.body.email
  };
  console.log("email",req.body.email);
  userService
    .getUserEmail(user.user_email)
    .then(data => {
      console.log("data",data);
      
      let accessToken = jwt.sign({id:data.attributes.id}, config.secretaccess, {
        expiresIn: 60
      });
      const uuidv4 = require('uuid/v4');
      let refreshToken = uuidv4();
      
      sessionService
        .createSession(data.attributes.id, refreshToken)
        .then(data => res.json({ data, accessToken: accessToken }))
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

export default router;
