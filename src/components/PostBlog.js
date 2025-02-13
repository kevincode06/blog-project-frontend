import { useState } from "react";
import "./styles/PostBlog.css";


const PostBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = { title, content };

    try {
      const response = await fetch("http://localhost:4000/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        alert("Post added successfully!");
        setTitle("");
        setContent("");
      } else {
        alert("Error posting blog");
      }
    } catch (error) {
      console.error("Error posting:", error);
    }
  };

  return (
    <div className="post-blog-container">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostBlog;

