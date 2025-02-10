import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Home.css";

// Import images
import fashion1 from "../assets/fashion1.jpg";
import fashion2 from "../assets/fashion2.jpg";
import fashion3 from "../assets/fashion3.jpg";

const Home = () => {
  const [posts, setPosts] = useState([]); // Store posts from backend

  // Fetch posts from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts") // Backend API URL
      .then((response) => {
        setPosts(response.data); // Store the fetched posts in state
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="home">
      <header className="hero">
        <h1>Fashion Trends</h1>
        <p>Stay updated with the latest fashion styles, trends, and insights!</p>
      </header>

      {/* Static Fashion Trends */}
      <section className="latest-trends">
        <h2>Latest in Trends</h2>
        <div className="trend-grid">
          <div className="trend-card">
            <img src={fashion1} alt="Trend 1" />
            <p>The Top Fall 2025 Copenhagen Fashion Week Trends</p>
          </div>
          <div className="trend-card">
            <img src={fashion2} alt="Trend 2" />
            <p>What's New? The Spring 2025 Collections Have the Answer</p>
          </div>
          <div className="trend-card">
            <img src={fashion3} alt="Trend 3" />
            <p>The Fall 2025 Menswear Trends Paint a Portrait of Fashion</p>
          </div>
        </div>
      </section>

      {/* Dynamic Blog Posts from Backend */}
      <section className="blog-posts">
        <h2>Latest Blog Posts</h2>
        {posts.length > 0 ? (
          <div className="post-grid">
            {posts.map((post) => (
              <div key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading posts...</p>
        )}
      </section>
    </div>
  );
};

export default Home;

