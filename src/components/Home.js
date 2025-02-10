import React from 'react';
import './styles/Home.css';

// Import images
import fashion1 from '../assets/fashion1.jpg';
import fashion2 from '../assets/fashion2.jpg';
import fashion3 from '../assets/fashion3.jpg';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Fashion Trends</h1>
        <p>Stay updated with the latest fashion styles, trends, and insights!</p>
      </header>

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
    </div>
  );
};

export default Home;
