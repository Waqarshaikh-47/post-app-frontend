import axios from 'axios';
import { setAuthToken } from '../utils/setAuthToken';
import { jwtDecode } from 'jwt-decode';
import { setCurrentUser } from '../reducers/authReducer';

export const registerUser = (userData, navigate) => async dispatch => {
  try {
    const res = await axios.post('https://post-app-backend-0fex.onrender.com/api/auth/register', userData);
    alert('Registration successful!');
    navigate('/login');
  } catch (err) {
    console.error(err.response.data);
    alert('Registration failed. Please try again.');
  }
};

export const loginUser = (userData, navigate) => async dispatch => {
  try {
    const res = await axios.post('https://post-app-backend-0fex.onrender.com/api/auth/login', userData);
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    const decoded = jwtDecode(token);
    dispatch(setCurrentUser(decoded));
    alert('Login successful!');
    navigate('/posts');
  } catch (err) {
    console.error(err.response.data);
    alert(err.response.data.msg);
  }
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
