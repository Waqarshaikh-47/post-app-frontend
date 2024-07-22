import axios from 'axios';
import { setUsers, setPosts } from '../reducers/adminReducer';
import { setAuthToken } from '../utils/setAuthToken';
import { jwtDecode } from "jwt-decode";
import { setCurrentUser } from '../reducers/authReducer';


// Admin login
export const loginAdmin = (adminData, navigate) => async dispatch => {
  try {
    const res = await axios.post('https://post-app-backend-0fex.onrender.com/api/admin/login', adminData);
    alert('Login successful!');
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    const decoded = jwtDecode(token);
    dispatch(setCurrentUser(decoded));
    navigate('/admin/users');
  } catch (err) {
    alert(`Login failed!`);
    console.error(err);
  }
};

// Action to fetch users
export const fetchUsers = () => async dispatch => {
  try {
    const res = await axios.get('https://post-app-backend-0fex.onrender.com/api/admin/users');
    dispatch(setUsers(res.data));
  } catch (err) {
    console.error(err);
  }
};

// Action to activate a user
export const activateUserById = userId => async dispatch => {
  try {
    await axios.put(`https://post-app-backend-0fex.onrender.com/api/admin/activate/${userId}`);
    dispatch(fetchUsers()); 
  } catch (err) {
    console.error(err.response.data);
  }
};

// Action to fetch all posts
export const fetchPosts = () => async dispatch => {
  try {
    const res = await axios.get('https://post-app-backend-0fex.onrender.com/api/admin/posts');
    dispatch(setPosts(res.data));
  } catch (err) {
    console.error(err.response.data);
  }
};
