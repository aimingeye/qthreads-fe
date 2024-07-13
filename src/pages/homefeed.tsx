// src/pages/home.tsx

"use client"; // Ensures this is a client-side component

import React, { useEffect, useState } from "react";
import styles from "../styles/HomeFeed.module.css"; // Import CSS module for styles

interface Post {
  id: number;
  username: string;
  content: string;
}

const HomeFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Mock fetch function
    const fetchPosts = async () => {
      // Replace with your actual API call
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className="header">Home Feed</h1>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <h2>{post.username}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeFeed;
