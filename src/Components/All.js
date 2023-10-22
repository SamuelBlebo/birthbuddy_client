import { React, useEffect, useState } from "react";
import axios from "axios";

import Menu from "../Components/Menu";

export default function All() {
  const [dates, setDates] = useState([]); // Changed the state variable name

  const getAll = () => {
    axios
      .get("https://birthbuddy-server.vercel.app/dates")
      .then((res) => {
        const jsonData = res.data; // Use res.data to access JSON
        console.log(jsonData);
        setDates(jsonData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function formatDate(eventDateStr) {
    const eventDate = new Date(eventDateStr);
    const day = eventDate.getDate().toString().padStart(2, "0"); // Ensure two digits
    const month = (eventDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = eventDate.getFullYear();

    return `${day}-${month}-${year}`;
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="h-[700px] w-[380px] bg-[#D9D9D9] rounded-[18px] px-[35px] pt-[30px] pb-[70px] relative">
      {/* text and add new */}
      <div className="text-and-add flex flex-row justify-between items-end">
        <div>
          <h1 className="font-extrabold text-[22px] ">
            Birth<span className="bg-[#2CBA8D] rounded px-[5px]">Buzz</span>
          </h1>
          <p className="text-[14px]">Save dates and wish loved ones.</p>
        </div>
        <div>
          <button className="bg-[#2CBA8D] px-[6px] py-[3px] text-[14px] font-bold rounded-[5px]">
            + Add New
          </button>
        </div>
      </div>

      {/* Heading and List */}
      <div className="mt-[20px]">
        <div>
          <h1 className="font-[700] text-[40px]">All</h1>
        </div>
      </div>

      <div className="h-[460px] overflow-y-auto no-scrollbar ">
        <ul>
          {dates
            .sort((a, b) => new Date(a.event_date) - new Date(b.event_date)) // Sort the array based on the date
            .map((date) => (
              <div
                key={date.id}
                className="bg-[#fff] mt-[20px] p-[18px] rounded-[10px] flex justify-between"
              >
                {/* Name&Date */}
                <div className="e">
                  <li className="font-bold mb-[5px]">{date.name}</li>
                  <li className="text-[#9c9c9c]">
                    {formatDate(date.event_date)}
                  </li>
                </div>

                {/* Event type and button */}
                <div className="text-right">
                  <li className="text-[#9c9c9c] mb-[5px]">{date.event_type}</li>
                  <a href={`tel:${date.mobile_number}`}>
                    <button className="bg-[#2CBA8D] px-[10px] rounded-[5px] font-bold mr-[5px] text-[14px]">
                      Call
                    </button>
                  </a>
                  <a href={`sms:${date.mobile_number}`}>
                    <button className="bg-[#2CBA8D] px-[10px] rounded-[5px] font-bold text-[14px]">
                      Msg
                    </button>
                  </a>
                </div>
              </div>
            ))}
        </ul>
      </div>

      <div className="absolute bottom-0 mb-[20px] mx-[6%]">
        <Menu />
      </div>
    </div>
  );
}
