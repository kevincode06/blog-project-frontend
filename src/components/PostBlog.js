import React, { useState } from "react";

const PostBlog = () => {
  // State for blog input
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]); // Stores all posts

  // Function to handle posting
  const handlePost = () => {
    if (title && content) {
      const newPost = { id: Date.now(), title, content };
      setPosts([...posts, newPost]);
      setTitle(""); // Clear input
      setContent(""); // Clear input
    }
  };

  // Function to delete a post
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h2>Create a Blog Post</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <textarea
        placeholder="Write your content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: "100%", height: "100px", padding: "8px", marginBottom: "10px" }}
      ></textarea>

      <button onClick={handlePost} style={{ padding: "10px", background: "#FE572E", color: "white", border: "none", cursor: "pointer" }}>
        Post Blog
      </button>

      <h3>All Posts</h3>
      {posts.length === 0 ? <p>No posts yet</p> : posts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0", borderRadius: "5px" }}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post.id)} style={{ padding: "5px", background: "red", color: "white", border: "none", cursor: "pointer" }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostBlog;
