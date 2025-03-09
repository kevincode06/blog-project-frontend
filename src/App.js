import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PostBlog from "./components/PostBlog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/postblog" element={<PostBlog />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
