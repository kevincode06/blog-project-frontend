import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Login from "./components/Login"; 
import Signup from "./components/Signup";
import PostBlog from "./components/PostBlog";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />  {/* Make sure this is here */}
        <Route path="/signup" element={<Signup />} /> {/* Make sure this is here */}
        <Route path="/postblog" element={<PostBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
