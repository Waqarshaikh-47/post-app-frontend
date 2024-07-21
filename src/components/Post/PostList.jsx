import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Posts</h1>
      <div className="row">
        {posts.map(post => (
          <div key={post._id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                {/* Uncomment the following lines if you want to display post images */}
                {/* <div className="post-images">
                  {post.images.map((image, index) => (
                    <img key={index} src={image} alt={post.title} className="img-fluid" />
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
