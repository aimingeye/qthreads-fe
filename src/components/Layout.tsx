// src/components/Layout.tsx
"use client";

import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  asciiArt: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, asciiArt }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-row items-center justify-center">
      <div className="flex-1 flex items-center justify-center p-8">
        {asciiArt}
      </div>
      <div className="flex-1 w-full max-w-md p-8 bg-white shadow-md rounded-md">
        {children}
      </div>
    </div>
  );
};

export default Layout;
