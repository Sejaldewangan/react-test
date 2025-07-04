// features/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {
    addUser:(state,action)=>{
      state.list.push(action.payload)
    }
  },
 
  },
);
export const {addUser}=userSlice.actions
export default userSlice.reducer;
