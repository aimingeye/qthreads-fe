// src/components/RegistrationForm.tsx

import React from "react";
import styles from "../styles/RegistrationForm.module.css"; // Import CSS module

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
        <div className={styles.oauthContainer}>
          <p>Or register with:</p>
          <div className={styles.oauthButtons}>
            <button className={styles.googleButton}>
              {/* <img src="/images/google-logo.png" alt="Google" /> */}
            </button>
            <button className={styles.githubButton}>
              {/* <img src="/images/github-mark.png" alt="Github" /> */}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
