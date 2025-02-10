import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Blog.css';
import fashion1 from '../assets/fashion1.jpg';
import fashion2 from '../assets/fashion2.jpg';
import fashion3 from '../assets/fashion3.jpg';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  // Array of images to assign randomly to posts (if no image field is in backend)
  const images = [fashion1, fashion2, fashion3];

  return (
    <div className="blog">
      <h2>Latest Fashion Articles</h2>

      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div className="blog-post" key={post.id}>
            <img src={images[index % images.length]} alt={`Fashion Post ${index + 1}`} /> 
            <div>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <a href="#">Read More</a>
            </div>
          </div>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
};

export default Blog;
