// pages/Home.tsx

import React from "react";
import UserDetails from "../components/UserDetails";
import styles from "../styles/Home.module.css"; // Import CSS module for page styles

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>{/* Main content of the page */}</div>
      <div className={styles.userDetails}>
        <UserDetails name="John Doe" username="johndoe" />
      </div>
    </div>
  );
};

export default Home;
