import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    email: 'ingfabianavellaneda@gmail.com',
    password: 'Lenovo9325*'
  },
  reducers: {
    setUser: (state, action) => {
      return {
        user: action.payload
      }
    }
  }
});

export const { setUser } = user.actions;
export default user.reducer;