// components/ProfileSection.tsx

import React from "react";
import styles from "../styles/ProfileSection.module.css"; // Import CSS module for styling

interface ProfileSectionProps {
  name: string;
  username: string;
  // Add more profile data as needed
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ name, username }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileBox}>
        <h2>{name}</h2>
        <p>@{username}</p>
        {/* Add more profile details */}
      </div>
    </div>
  );
};

export default ProfileSection;
