import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around", padding: "10px", background: "#FE572E" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>Blog</Link>
      <Link to="/postblog" style={{ color: "white", textDecoration: "none" }}>Post Blog</Link>
      <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Log In</Link>
      <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>Sign Up</Link>
    </nav>
  );
};

export default Navbar;
