import React from 'react';
import './styles/Blog.css';
import fashion1 from '../assets/fashion1.jpg';  // Import the first image
import fashion2 from '../assets/fashion2.jpg';  // Import the second image
import fashion3 from '../assets/fashion3.jpg';  // Import the third image

const Blog = () => {
  return (
    <div className="blog">
      <h2>Latest Fashion Articles</h2>

      {/* Blog Post 1 */}
      <div className="blog-post">
        <img src={fashion1} alt="Fashion Post 1" />  {/* First image */}
        <div>
          <h3>How to Style Your Outfits in 2025</h3>
          <p>Discover the best outfit combinations for this year.</p>
          <a href="#">Read More</a>
        </div>
      </div>

      {/* Blog Post 2 */}
      <div className="blog-post">
        <img src={fashion2} alt="Fashion Post 2" />  {/* Second image */}
        <div>
          <h3>Top Trends for Spring 2025</h3>
          <p>Explore the hottest fashion trends for the upcoming season.</p>
          <a href="#">Read More</a>
        </div>
      </div>

      {/* Blog Post 3 */}
      <div className="blog-post">
        <img src={fashion3} alt="Fashion Post 3" />  {/* Third image */}
        <div>
          <h3>Ultimate Guide to Fall Fashion 2025</h3>
          <p>Get ready for the best outfits to wear this fall.</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
