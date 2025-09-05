import React from "react";
import ProgressBar from "./ProgressBar";
import HabitItem from "./HabitItem";

const HabitRow = ({ date, habits, habitsState, setHabits }) => {
  const toggleHabit = (index) => {
    const newHabits = { ...habitsState };
    newHabits[date][index].completed = !newHabits[date][index].completed;
    setHabits(newHabits);
  };

  const completedCount = habits.filter(h => h.completed).length;
  const percentage = habits.length ? Math.round((completedCount / habits.length) * 100) : 0;

  return (
    <tr>
      <td>{date}</td>
      <td>
        {habits.map((habit, index) => (
          <HabitItem key={index} habit={habit} toggle={() => toggleHabit(index)} />
        ))}
      </td>
      <td><ProgressBar percentage={percentage} /></td>
    </tr>
  );
};

export default HabitRow;
