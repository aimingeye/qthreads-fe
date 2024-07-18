// src/components/RegistrationForm.tsx

import React, { useState } from "react";
import styles from "../styles/RegistrationForm.module.css"; // Import CSS module
import Input from "./Input";

interface RegistrationFormProps {
  onSubmit: (data: any) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
    console.log(formData); // Log the form data
    onSubmit(formData);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Register</h2>
        <Input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          placeholder="Username"
          onChange={handleChange}
        />
        <Input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        />
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
