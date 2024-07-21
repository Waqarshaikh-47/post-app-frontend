import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, activateUserById } from '../../actions/adminActions';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.admin.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const activateUser = userId => {
    dispatch(activateUserById(userId));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User List</h1>
      <div className="row">
        {users.map(user => (
          <div key={user._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
                <button
                  className={`btn ${user.isActive ? 'btn-success' : 'btn-primary'}`}
                  onClick={() => activateUser(user._id)}
                  disabled={user.isActive}
                >
                  {user.isActive ? 'Activated' : 'Activate'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
