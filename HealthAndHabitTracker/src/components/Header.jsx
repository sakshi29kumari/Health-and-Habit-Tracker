import React from "react";

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="upperCont">
      <h1>Personal Health & Habit Tracker</h1>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
