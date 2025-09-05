import React from "react";

const ResetButton = ({ setHabits }) => {
  const resetAll = () => {
    if(window.confirm("Are you sure you want to reset all habits?")){
      setHabits({});
      localStorage.clear();
    }
  };

  return (
    <button id="resetBtn" onClick={resetAll}>Reset</button>
  );
};

export default ResetButton;
