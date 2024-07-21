import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  posts: [],
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    setPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export const { setUsers, setPosts } = adminSlice.actions;
export default adminSlice.reducer;
