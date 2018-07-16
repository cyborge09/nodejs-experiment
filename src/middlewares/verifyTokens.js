import jwt from 'jsonwebtoken';
import * as config from '../config'



export function checkAccessToken(req, res, next) {
    let token = req.headers['authorization'];
    if (token) {
      jwt.verify(token, config.secretaccess, function(err,decoded) {
       
        if (err) {
       
          res.status(500).json({Code:500, Error:'UNAUTHORIZED' })
          
        } else {
          next();
        }
      });
    } else {
      res.status(422).json({Code:422, Error:'ACCESS TOKEN NOT FOUND' })

    } 
  }