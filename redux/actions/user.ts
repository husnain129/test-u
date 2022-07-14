import Auth from '@/lib/API/user/auth';
import { User } from '@prisma/client';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const UserActions = {
  signup: createAsyncThunk('user/create', (data: Omit<User, 'id'>) =>
    Auth().singup(data)
  ),
};
