import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    post: {},
    loading: false,
  },
  reducers: {
    createPost(state, action) {
      state.posts = [action.payload, ...state.posts];
    },
    getPosts(state, action) {
      state.posts = action.payload.posts;
    },
  },
});

export const { createPost, getPosts } = postSlice.actions;
export default postSlice.reducer;
