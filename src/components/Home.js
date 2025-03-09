import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

// Import images
import fashion1 from '../assets/fashion1.jpg';
import fashion8 from '../assets/fashion8.jpg';
import fashion3 from '../assets/fashion3.jpg';  
import fashion4 from '../assets/fashion4.jpg';
import fashion5 from '../assets/fashion5.jpg';
import fashion6 from '../assets/fashion6.jpg';

const posts = [
  { id: "fashion1", img: fashion1, title: "The Top Fall 2025 Copenhagen Fashion Week Trends" },
  { id: "fashion8", img: fashion8, title: "The Fall 2025 Menswear Trends Paint a Portrait of Fashion" },
  { id: "fashion3", img: fashion3, title: "Ultimate Guide to Fall Fashion 2025" },
  { id: "fashion4", img: fashion4, title: "Latest Winter Fashion Collection 2025" },
  { id: "fashion5", img: fashion5, title: "How to Dress Stylishly on a Budget" },
  { id: "fashion6", img: fashion6, title: "The Best Summer Fashion Trends in 2025" }
];

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
      <h1 style={{ color: "#FE572E" }}>Fashion Trends</h1>
        <p>Stay updated with the latest fashion styles, trends, and insights!</p>
      </header>

      <section className="latest-trends">
        <h2>Latest in Trends</h2>
        <div className="trend-grid">
          {posts.map((post) => (
            <div key={post.id} className="trend-card">
              <img src={post.img} alt={post.title} />
              <p>{post.title}</p>
              <Link to={`/blog?post=${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

