import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import postReducer from './postReducer';
import adminReducer from './adminReducer';

export default combineReducers({
  auth: authReducer,
  post: postReducer,
  admin: adminReducer,
});
