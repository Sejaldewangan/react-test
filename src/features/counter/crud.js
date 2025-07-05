import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("data", JSON.stringify(state.list));
    },

    addUsers: (state, action) => {
      state.list.push(...action.payload);
      localStorage.setItem("data", JSON.stringify(state.list));
    },

    // 👇 Reducer to set list from passed array
    setUsersFromStorage: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { addUser, addUsers, setUsersFromStorage } = userSlice.actions;
export default userSlice.reducer;
