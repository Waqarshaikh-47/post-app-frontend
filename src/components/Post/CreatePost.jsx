import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewPost } from '../../actions/postActions';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });
  const dispatch = useDispatch();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onFileChange = e => {
  //   setFormData({ ...formData, images: e.target.files });
  // };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(createNewPost(formData));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create Post</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={onChange}
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="images" className="form-label">Images:</label>
          <input
            type="file"
            className="form-control"
            id="images"
            name="images"
            multiple
            onChange={onFileChange}
          />
        </div> */}
        <button type="submit" className="btn btn-primary">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
