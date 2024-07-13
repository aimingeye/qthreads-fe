// components/UserDetails.tsx

import React from "react";
import ProfileSection from "./ProfileSection";
import NavigationButtons from "./NavigationButtons";
import styles from "../styles/UserDetails.module.css";

interface UserDetailsProps {
  name: string;
  username: string;
  // Add more profile data as needed
}

const UserDetails: React.FC<UserDetailsProps> = ({ name, username }) => {
  return (
    <div className={styles.userDetailsContainer}>
      <ProfileSection name={name} username={username} />
      <div className={styles.navigationContainer}>
        <NavigationButtons />
      </div>
    </div>
  );
};

export default UserDetails;
