import React, { useState } from "react";

const HabitInput = ({ selectedDate, habits, setHabits }) => {
  const [text, setText] = useState("");

  const addHabit = () => {
    if (!text || !selectedDate) return alert("Select date and enter habit!");
    const newHabits = { ...habits };
    if (!newHabits[selectedDate]) newHabits[selectedDate] = [];
    newHabits[selectedDate].push({ text, completed: false });
    setHabits(newHabits);
    setText("");
  };

  return (
    <div className="inputSection">
      <label htmlFor="inputHabit">Enter Habit:</label>
      <input
        type="text"
        id="inputHabit"
        placeholder="Enter a new habit"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button id="addBtn" onClick={addHabit}>Add Habit</button>
    </div>
  );
};

export default HabitInput;
