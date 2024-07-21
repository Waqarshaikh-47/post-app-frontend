import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import CreatePost from './components/Post/CreatePost';
import PostList from './components/Post/PostList';
import UserList from './components/Admin/UserList';
import AdminLogin from './components/Auth/AdminLogin';
import Navbar from './components/Layout/Navbar';
import AdminDashboard from './components/Admin/AdminDashboard';
import Home from './components/Home/Home';





const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/posts/create" element={<CreatePost />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/admin/users" element={<UserList />} />
          {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}

        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
