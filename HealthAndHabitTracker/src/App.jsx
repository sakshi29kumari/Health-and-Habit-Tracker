import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import DateInput from "./components/DateInput";
import HabitInput from "./components/HabitInput";
import HabitTable from "./components/HabitTable";
import ProgressChart from "./components/ProgressChart";
import ResetButton from "./components/ResetButton";

function App() {
  const [habits, setHabits] = useState(() => JSON.parse(localStorage.getItem("habits")) || {});
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="wrapper">
      <Header theme={theme} setTheme={setTheme} />
      <DateInput selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <HabitInput selectedDate={selectedDate} habits={habits} setHabits={setHabits} />
      <HabitTable habits={habits} setHabits={setHabits} selectedDate={selectedDate} />
      <ProgressChart habits={habits} />
      <ResetButton setHabits={setHabits} />
    </div>
  );
}

export default App;
