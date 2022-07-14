import { User } from '@prisma/client';
import { createReducer } from '@reduxjs/toolkit';
import { UserActions } from './../actions/user';

type InitialState = {
  user: User;
  loading: boolean;
  error: boolean;
};

const initialState: InitialState = {
  user: {} as unknown as User,
  loading: false,
  error: false,
};

const { signup, login } = UserActions;

export const userReducer = createReducer(initialState, ({ addCase }) => {
  //------- Signup -------//
  addCase(signup.pending, (state) => {
    state.loading = true;
  })
    .addCase(signup.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.user.id = payload.id;
      state.user.email = payload.email;
      state.user.name = payload.name;
      state.user.role = payload.role;
      state.user.createdAt = payload.createdAt;
    })
    .addCase(signup.rejected, (state) => {
      state.error = true;
      state.loading = false;
    })
    // ------- Login ------- //
    .addCase(login.pending, (state) => {
      state.loading = true;
    })

    .addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.user.id = payload.id;
      state.user.email = payload.email;
      state.user.name = payload.name;
      state.user.role = payload.role;
      state.user.createdAt = payload.createdAt;
    })
    .addCase(login.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
});
