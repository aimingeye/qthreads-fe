import React from "react";
import RegistrationForm from "@/components/RegistrationForm";

const RegisterPage: React.FC = () => {
  const handleRegistration = (data: {
    email: string;
    password: string;
    username: string;
  }) => {
    console.log("Registration data:", data); // Replace with actual registration logic
  };

  return (
    <div>
      <h1>Register</h1>
      <RegistrationForm onSubmit={handleRegistration} />
    </div>
  );
};

export default RegisterPage;
