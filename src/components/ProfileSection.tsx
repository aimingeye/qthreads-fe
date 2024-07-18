// components/ProfileSection.tsx

import React from "react";

interface ProfileSectionProps {
  name: string;
  username: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ name, username }) => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
    </div>
  );
};

export default ProfileSection;
