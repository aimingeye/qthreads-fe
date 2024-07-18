// components/NavigationButtons.tsx

import React from "react";

const NavigationButtons: React.FC = () => {
  return (
    <div className="flex flex-col">
      {["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"].map(
        (buttonLabel, idx) => (
          <button
            key={idx}
            className="p-3 bg-white rounded-lg shadow-md hover:bg-gray-200"
          >
            {buttonLabel}
          </button>
        )
      )}
    </div>
  );
};

export default NavigationButtons;
