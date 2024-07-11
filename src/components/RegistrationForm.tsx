// src/components/RegistrationForm.tsx

import React from "react";
import styles from "./RegistrationForm.module.css"; // Import CSS module

interface RegistrationFormProps {
  onSubmit: (data: any) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
    onSubmit({}); // Replace with actual form data
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" className={styles.registerButton}>
          Register
        </button>
      </form>
      <div className={styles.oauthContainer}>
        <p>Or register with:</p>
        <div className={styles.oauthButtons}>
          <button className={styles.googleButton}>Google</button>
          <button className={styles.githubButton}>GitHub</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
