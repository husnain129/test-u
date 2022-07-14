import * as jwt from 'jsonwebtoken';
import getEnv from 'settings';
const useJWT = () => {
  return {
    sign: (id: string) =>
      jwt.sign(
        {
          data: id,
        },
        getEnv('JWT_SECRET') as string
      ),
    verify: (token: string) =>
      jwt.verify(token, getEnv('JWT_SECRET') as string),
  };
};

export default useJWT;
