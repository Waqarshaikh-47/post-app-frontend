import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost, updatePost } from '../../actions/postActions';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts.posts);
  const totalPages = useSelector(state => state.post.posts.totalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const [search, setSearch] = useState('');
  const [editPostId, setEditPostId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    description: ''
  });

  useEffect(() => {
    dispatch(fetchPosts(currentPage, limit, search));
  }, [dispatch, currentPage, search]);

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(editPostId, editFormData));
    setEditPostId(null);
    setEditFormData({ title: '', description: '' });
  };

  const handleEditClick = (post) => {
    setEditPostId(post._id);
    setEditFormData({ title: post.title, description: post.description });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Posts</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search posts..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      {posts && posts.length > 0 ? (
        <div className="row">
          {posts.map(post => (
            <div key={post._id} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  {editPostId === post._id ? (
                    <form onSubmit={handleEditSubmit}>
                      <div className="form-group">
                        <label>Title:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          value={editFormData.title}
                          onChange={handleEditChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Description:</label>
                        <textarea
                          className="form-control"
                          name="description"
                          value={editFormData.description}
                          onChange={handleEditChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-success mt-2">Update</button>
                    </form>
                  ) : (
                    <>
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.description}</p>
                      <button
                        className="btn btn-danger m-2"
                        onClick={() => handleDelete(post._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-primary ml-2"
                        onClick={() => handleEditClick(post)}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No posts found</p>
      )}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePagination(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PostList;
