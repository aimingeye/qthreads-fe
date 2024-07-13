// components/NavigationButtons.tsx

import React from "react";
import styles from "../styles/NavigationButtons.module.css"; // Import CSS module for styling

const NavigationButtons: React.FC = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>Button 1</button>
      <button className={styles.button}>Button 2</button>
      <button className={styles.button}>Button 3</button>
      <button className={styles.button}>Button 4</button>
      <button className={styles.button}>Button 5</button>
    </div>
  );
};

export default NavigationButtons;
