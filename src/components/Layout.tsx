// src/components/Layout.tsx
"use client";

import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
        {children}
      </div>
    </div>
  );
};

export default Layout;
