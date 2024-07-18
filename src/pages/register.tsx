import React from "react";
import RegistrationForm from "@/components/RegistrationForm";
import AsciiArt from "@/components/AsciiArt";
import styles from "../styles/register.module.css";

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
