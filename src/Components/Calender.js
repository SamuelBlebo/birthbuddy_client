import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import axios from "axios";

import "react-calendar/dist/Calendar.css";

// components
import Menu from "../Components/Menu";

export default function Calender() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Make an API request to fetch events from the server
    axios
      .get("https://birthbuddy-server.vercel.app/dates")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const currentDate = new Date();

  return (
    <div className="h-[700px] w-[380px] bg-[#D9D9D9] rounded-[18px] px-[35px] py-[50px] relative">
      {/* text and add new */}
      <div className="text-and-add flex flex-row justify-between items-end">
        <div>
          <h1 className="font-extrabold text-[22px] ">
            Birth<span className="bg-[#2CBA8D] rounded px-[5px]">Buzz</span>
          </h1>
          <p className="text-[14px]">Save dates and wish loved ones.</p>
        </div>
        <div>
          <Link to="/add">
            <button className="bg-[#2CBA8D] px-[6px] py-[3px] text-[14px] font-bold rounded-[5px]">
              + Add New
            </button>
          </Link>
        </div>
      </div>

      {/* Heading and List */}
      <div className="mt-[30px]">
        <div>
          <h1 className="font-[700] text-[40px]">Calender</h1>
        </div>
      </div>
      <Calendar
        value={currentDate} // Set the current date for the calendar
        tileClassName={({ date }) => {
          // Add a custom CSS class to highlight the date cell if true
          const eventForDate = events.find(
            (event) => event.event_date === date.toISOString()
          );

          if (eventForDate && !isSameDay(currentDate, date)) {
            return "highlighted-date";
          }

          return null;
        }}
      />

      <div className="absolute bottom-0 mb-[20px] mx-[6%]">
        <Menu />
      </div>
    </div>
  );
}

// Function to check if two dates are the same day
function isSameDay(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}
