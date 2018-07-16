import Session from '../models/session';
import config from '../config'
import jwt from 'jsonwebtoken';


export function createSession(userId, rToken)
 {

    return new Session
    ({ user_id: userId, refresh_token: rToken })
    .save().then(session => session.refresh());
  }


  export function deleteSession(refresh_token) {
  return new Session({ refresh_token })
  .fetch()
  .then(session => session.destroy()).catch(()=>{res.json({FAILED: 'INVALID REFRESH TOKEN'})});
}


export function refreshSession(refresh_token)
{
  return new Session({refresh_token}).fetch()
  .then(
    data=>{
      if(!data)
    {
      throw 'Not logged In';
    }
  else if(data)
  {
    let accessToken = jwt.sign({id:data.attributes.userId}, config.secretaccess, {
      expiresIn: 60
    });
        return accessToken;
  }
})
}

export default Session;