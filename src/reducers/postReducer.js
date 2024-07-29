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
      state.posts.posts = [action.payload, ...state.posts.posts];
    },
    getPosts(state, action) {
      state.posts = action.payload;
    },
    getDeletePost(state, action) {
      console.log(state.posts.posts,action.payload)
      state.posts.posts = state.posts.posts.filter(post => post._id !== action.payload)
    },
    getUpdatePost(state, action) {
      state.posts.posts = state.posts.posts.map(post =>
        post._id === action.payload._id ? action.payload : post
      )
    },
    
  },
});

export const { createPost, getPosts, getUpdatePost, getDeletePost } = postSlice.actions;
export default postSlice.reducer;
