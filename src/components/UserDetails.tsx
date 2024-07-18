// components/UserDetails.tsx

import React from "react";
import ProfileSection from "./ProfileSection";
import NavigationButtons from "./NavigationButtons";

interface UserDetailsProps {
  name: string;
  username: string;
  // Add more profile data as needed
}

const UserDetails: React.FC<UserDetailsProps> = ({ name, username }) => {
  return (
    <div>
      <ProfileSection name={name} username={username} />
      <NavigationButtons />
    </div>
  );
};

export default UserDetails;
