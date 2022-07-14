import Auth from '@/lib/API/user/auth';
import { User } from '@prisma/client';
import { createAsyncThunk } from '@reduxjs/toolkit';

type Login = {
  email: string;
  password: string;
};

export const UserActions = {
  signup: createAsyncThunk(
    'user/create',
    async (data: Omit<User, 'id' | 'createdAt'>) => await Auth().singup(data)
  ),
  login: createAsyncThunk(
    'user/login',
    async (data: Login) => await Auth().login(data)
  ),
};
