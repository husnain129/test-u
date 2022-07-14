import { User } from '@prisma/client';
import API from '../API';

const Auth = () => {
  const URL = 'user';
  const api = API();
  return {
    singup: (body: Omit<User, 'id'>) => {
      return api.post<Omit<User, 'id'>>(URL, body) as Promise<User>;
    },
  };
};

export default Auth;
