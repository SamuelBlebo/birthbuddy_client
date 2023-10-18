import React from "react";
import { Link } from "react-router-dom";

import { BsFillCalendarDateFill } from "react-icons/bs";
import { RiFileList2Fill, RiAccountCircleFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

export default function Menu() {
  return (
    <div className="">
      <div className="flex justify-between w-[260px] items-center">
        <div className="text-[30px]">
          <Link to="/">
            <BsFillCalendarDateFill />
          </Link>
        </div>
        <div className="text-[35px]">
          <Link to="/all">
            <RiFileList2Fill />
          </Link>
        </div>
        <div className="text-[32px]">
          <Link to="/calender">
            <FaCalendarAlt />
          </Link>
        </div>
        <div className="text-[40px]">
          <Link to="/Account">
            <RiAccountCircleFill />
          </Link>
        </div>
      </div>
    </div>
  );
}
