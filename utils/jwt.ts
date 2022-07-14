import * as jwt from 'jsonwebtoken';
import getEnv from 'settings';
const JWT = () => {
  return {
    sign: (id: string) => jwt.sign(id, getEnv('JWT_SECRET') as string),
    verify: (token: string) =>
      jwt.verify(token, getEnv('JWT_SECRET') as string),
  };
};

export default JWT;
