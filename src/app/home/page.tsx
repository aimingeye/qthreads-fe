// pages/Home.tsx

import React from "react";
import UserDetails from "@/components/UserDetails";

const HomePage: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="p-5 bg-gray-800">
        <h1>abhsdad</h1>
        {/* Main content of the page */}
      </div>
      <UserDetails name="John Doe" username="johndoe" />
    </div>
  );
};

export default HomePage;
