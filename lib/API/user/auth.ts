import { User } from '@prisma/client';
import API from '../API';

type Login = {
  email: string;
  password: string;
};

const Auth = () => {
  const api = API();
  return {
    singup: async (body: Omit<User, 'id' | 'createdAt'>) => {
      return (
        await api.post<Omit<User, 'id' | 'createdAt'>>('auth/signup', body)
      ).user as Promise<User>;
    },
    login: async (body: Login) => {
      return (await api.post<Login>('auth/login', body)).user as Promise<User>;
    },
  };
};

export default Auth;
