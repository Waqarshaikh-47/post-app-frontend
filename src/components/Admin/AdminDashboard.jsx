import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchPosts } from '../../actions/adminActions';
import { Bar } from 'react-chartjs-2';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.admin.users);
  const posts = useSelector(state => state.admin.posts);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  }, [dispatch]);

  const userPostsCount = users.map(user => ({
    name: user.name,
    postCount: posts.filter(post => post.user === user._id).length,
  }));

  const data = {
    labels: userPostsCount.map(item => item.name),
    datasets: [
      {
        label: 'Number of Posts',
        data: userPostsCount.map(item => item.postCount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Bar data={data} />
    </div>
  );
};

export default AdminDashboard;
