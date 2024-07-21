import axios from 'axios';
import { createPost, getPosts } from '../reducers/postReducer';

export const createNewPost = postData => async dispatch => {
  try {
    const res = await axios.post('https://post-app-backend-0fex.onrender.com/api/posts', postData);
    dispatch(createPost(res.data));
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
