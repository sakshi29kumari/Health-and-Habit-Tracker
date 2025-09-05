import React from "react";

const DateInput = ({ selectedDate, setSelectedDate }) => {
    return (
    <div className="dateSection">
        <label htmlFor="inputDate">Select Date:</label>
        <input
        type="date"
        id="inputDate"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        />
    </div>
    );
};

export default DateInput;
