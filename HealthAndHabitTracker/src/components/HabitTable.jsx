import React from "react";
import HabitRow from "./HabitRow";

const HabitTable = ({ habits, setHabits, selectedDate }) => {
  return (
    <div className="table-container">
      <table id="habitTable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Habits</th>
            <th>Progress (%)</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(habits).length === 0 && (
            <tr>
              <td colSpan={3} style={{ fontStyle: "italic", color: "#777" }}>
                No habits added yet!
              </td>
            </tr>
          )}
          {Object.keys(habits).map(date => (
            <HabitRow key={date} date={date} habits={habits[date]} habitsState={habits} setHabits={setHabits} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HabitTable;
