import axios from 'axios';
import { createPost, getPosts, getUpdatePost , getDeletePost } from '../reducers/postReducer';

export const createNewPost = postData => async dispatch => {
  try {
    const res = await axios.post('https://post-app-backend-0fex.onrender.com/api/posts', postData);
    dispatch(createPost(res.data));
    alert('Post Created Successful!');

  } catch (err) {
    console.error(err.response.data);
  }
};

export const fetchPosts = (page, limit, search) => async dispatch => {
  try {
    const res = await axios.get('https://post-app-backend-0fex.onrender.com/api/posts', {
      params: { page, limit, search },
    });
    dispatch(getPosts(res.data));
  } catch (err) {
    console.error(err.response.data);
  }
};

// Delete post
export const deletePost = (id) => async dispatch => {
  try {
    await axios.delete(`https://post-app-backend-0fex.onrender.com/api/posts/${id}`);
    dispatch(getDeletePost(id));
  } catch (err) {
    console.error(err);
  }
};

// Update post
export const updatePost = (id, postData) => async dispatch => {
  try {
    const res = await axios.put(`https://post-app-backend-0fex.onrender.com/api/posts/${id}`, postData);
    dispatch(getUpdatePost(res.data));
  } catch (err) {
    console.error(err);
  }
};