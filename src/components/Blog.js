import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/Blog.css';
import fashion1 from '../assets/fashion1.jpg';
import fashion8 from '../assets/fashion8.jpg';
import fashion3 from '../assets/fashion3.jpg';
import fashion4 from '../assets/fashion4.jpg';
import fashion5 from '../assets/fashion5.jpg';
import fashion6 from '../assets/fashion6.jpg';

const posts = {
  fashion1: { 
    img: fashion1, 
    title: "The Top Fall 2025 Copenhagen Fashion Week Trends", 
    text: "Discover the latest trends in fashion from Copenhagen Fashion Week, where top designers unveil their most creative and cutting-edge designs. From elegant runway pieces to bold street styles, get inspired by the fresh trends shaping the industry this season." 
  },
  fashion8: { 
    img: fashion8, 
    title: "The Fall 2025 Menswear Trends", 
    text: "Explore the hottest menswear fashion trends this season, from tailored suits with a modern twist to casual streetwear that makes a statement. Discover the must-have pieces and style tips to elevate your wardrobe effortlessly." 
  },
  fashion3: { 
    img: fashion3, 
    title: "Ultimate Guide to Fall Fashion 2025", 
    text: "Find out what to wear this fall and how to style it with expert tips on layering, color coordination, and essential wardrobe pieces. Whether you prefer a classic look or a trend-forward outfit, we’ve got you covered." 
  },
  fashion4: { 
    img: fashion4, 
    title: "Latest Winter Fashion Collection 2025", 
    text: "Stay warm and stylish with these winter fashion trends that blend comfort with high-end aesthetics. From cozy knitwear to sophisticated outerwear, discover how to beat the cold without sacrificing style." 
  },
  fashion5: { 
    img: fashion5, 
    title: "How to Dress Stylishly on a Budget", 
    text: "Learn how to stay fashionable without breaking the bank by mastering budget-friendly shopping hacks, styling tips, and must-have affordable fashion pieces. Looking great doesn’t have to come with a hefty price tag!" 
  },
  fashion6: { 
    img: fashion6, 
    title: "The Best Summer Fashion Trends in 2025", 
    text: "Discover the top summer fashion trends for 2025, featuring breezy fabrics, vibrant colors, and effortlessly chic outfits perfect for warm weather. Stay ahead of the style game with these must-have summer looks." 
  }
};

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate
  const query = new URLSearchParams(location.search);
  const postKey = query.get("post") || "fashion1"; 
  const post = posts[postKey];

  if (!post) {
    return <h2>Post Not Found</h2>;
  }

  const handleGoBack = () => {
    navigate('/'); // Navigates back to the home page
  };

  return (
    <div className="blog">
      <h2>{post.title}</h2>
      <div className="blog-post">
        <img src={post.img} alt={postKey} />
        <p>{post.text}</p>
      </div>
      <button onClick={handleGoBack} className="go-back-button">
        Go Back to Home
      </button>
    </div>
  );
};

export default Blog;
