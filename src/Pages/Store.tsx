import { configureStore,createSlice } from '@reduxjs/toolkit';

export interface userSlice {
    username: string;
  }

 export const userSlice = createSlice({
    name: 'user',
    initialState: { username: '' } as userSlice,
    reducers: {
      login: (state, action) => {
        state.username = action.payload.username;
      },
      logout: (state) => {
        state.username = '';
      },
    },
  });
  
  export const { login , logout } = userSlice.actions;
  export const store = configureStore({ reducer: { user: userSlice.reducer } });
  
  export default store;