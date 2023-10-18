import React, { useState } from "react";

export default function AddNew() {
  // Define initial values for day, month, and year
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Create arrays for days, months, and years
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => 2023 - i); // Adjust the range as needed

  return (
    <div>
      <div className="Text-And-Close-Icon">
        <div className="Text">
          <h1>Add New Date</h1>
          <p>Enter details of this special day.</p>
        </div>
        <div className="Close-Icon">
          <button>Close Button</button>
        </div>
      </div>

      <div className="Forms">
        <div>
          <label htmlFor="day">Day:</label>
          <select
            id="day"
            name="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          >
            <option value="">Select Day</option>
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          <label htmlFor="month">Month:</label>
          <select
            id="month"
            name="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="">Select Month</option>
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <label htmlFor="year">Year:</label>
          <select
            id="year"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
