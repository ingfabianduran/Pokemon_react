import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    logIn: (state, action) => {
      return {
        user: action.payload
      }
    },
    logOut: (state, action) => {
      return {
        user: action.payload
      }
    }
  }
});

export const { logIn, logOut } = user.actions;
export default user.reducer;