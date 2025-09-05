import React from "react";

const HabitItem = ({ habit, toggle }) => {
  return (
    <div>
      <span style={{ textDecoration: habit.completed ? "line-through" : "none" }}>
        {habit.text}
      </span>
      <input type="checkbox" checked={habit.completed} onChange={toggle} />
    </div>
  );
};

export default HabitItem;
