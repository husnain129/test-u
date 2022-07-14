import { User } from '@prisma/client';
import { createReducer } from '@reduxjs/toolkit';
import { UserActions } from './../actions/user';

type InitialState = {
  user: User;
  loading: boolean;
  error: boolean;
};
const initialState = {} as unknown as InitialState;

const { signup } = UserActions;

export const userReducer = createReducer(initialState, ({ addCase }) => {
  addCase(signup.pending, (state) => {
    state.loading = true;
  })
    .addCase(signup.rejected, (state) => {
      state.error = true;
      state.loading = false;
    })
    .addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.user.id = action.payload.id;
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
    });
});
