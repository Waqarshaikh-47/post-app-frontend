import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthToken } from '../../utils/setAuthToken';
import { logoutUser } from '../../actions/authActions';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Set token on re-render
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
  }

  const handleLogout = () => {
    dispatch(logoutUser());
    alert('Logout successful!');
    navigate('/')
  };

  const guestLinks = (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Signup</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin/login">Admin Login</Link>
      </li>
    </>
  );

  const userLinks = (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/posts">Posts</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/posts/create">Create Post</Link>
      </li>
      <li className="nav-item">
        <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
      </li>
    </>
  );

  const adminLinks = (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/admin/users">Manage Users</Link>
      </li>
      <li className="nav-item">
        <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Post-App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {auth.isAuthenticated ? (auth.user.user.role === 'admin' ? adminLinks : userLinks) : guestLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
