// src/app/page.tsx
"use client";

import React from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import RegistrationForm from "@/components/RegistrationForm";

const Home: React.FC = () => {
  return (
    <Layout>
      <Header />
      <RegistrationForm />
    </Layout>
  );
};

export default Home;
