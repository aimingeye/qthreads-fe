// src/app/page.tsx

"use client"; // Add this line to mark the component as a client component

import React from "react";
import RegistrationForm from "@/components/RegistrationForm";
import AsciiArt from "@/components/AsciiArt";
import styles from "./page.module.css"; // Import CSS module for page styles

const Home: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(`yay`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.asciiArt}>
        <AsciiArt />
      </div>
      <div className={styles.registrationForm}>
        <RegistrationForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Home;
