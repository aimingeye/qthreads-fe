// const RegisterPage: React.FC = () => {
//   const handleRegistration = (data: {
//     email: string;
//     password: string;
//     username: string;
//   }) => {
//     console.log("Registration data:", data); // Replace with actual registration logic
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       <RegistrationForm onSubmit={handleRegistration} />
//     </div>
//   );
// };

// src/app/page.tsx

"use client"; // Add this line to mark the component as a client component

import React from "react";
import RegistrationForm from "@/components/RegistrationForm";
import AsciiArt from "@/components/AsciiArt";
import styles from "../styles/register.module.css"; // Import CSS module for page styles

const RegisterPage: React.FC = () => {
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

export default RegisterPage;
