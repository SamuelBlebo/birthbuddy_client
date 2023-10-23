import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import Menu from "../Components/Menu";

export default function AddNew() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [event_date, setEvent_date] = useState("");
  const [event_type, setEvent_type] = useState("");
  const [mobile_number, setMobile_number] = useState("");

  const event_types = [
    "Birthday",
    "Wedding",
    "Anniversary",
    "Conference",
    "Other",
  ];

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      event_date.trim() === "" ||
      event_type.trim() === "" ||
      mobile_number.trim() === ""
    ) {
      return;
    }

    try {
      const data = {
        name,
        event_date,
        event_type,
        mobile_number,
      };

      const response = await axios.post(
        "https://birthbuddy-server.vercel.app/dates",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        // Clear the form fields
        setName("");
        setEvent_date("");
        setEvent_type("");
        setMobile_number("");
        console.log("Posted");
        // Call the callback function to notify the parent component about the new entry
      } else {
        // Handle errors and provide user feedback
        console.error("Failed to post data");
        // You can display an error message to the user here
      }
    } catch (err) {
      console.error(err.message);
      // Handle network errors and provide user feedback
      // You can display an error message to the user here
    }
  };

  return (
    <div className="h-[700px] w-[380px] bg-[#D9D9D9] rounded-[18px] px-[35px] pt-[30px] pb-[70px] relative">
      {/* text and add new */}
      <div className="text-and-add flex flex-row justify-between items-center">
        <div>
          <h1 className="font-bold text-[22px] ">Add New Date</h1>
          <p className="text-[14px]">Enter details of this special day.</p>
        </div>
        <div>
          <AiOutlineClose onClick={() => navigate(-1)} />
        </div>
      </div>

      <div>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date"
            value={event_date}
            onChange={(e) => setEvent_date(e.target.value)}
          />
          <select
            value={event_type}
            onChange={(e) => setEvent_type(e.target.value)}
          >
            <option value="" disabled>
              Select Event Type
            </option>
            {event_types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Mobile Number"
            value={mobile_number}
            onChange={(e) => setMobile_number(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="absolute bottom-0 mb-[20px] mx-[6%]">
        <Menu />
      </div>
    </div>
  );
}
