import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { RiFileList2Fill, RiAccountCircleFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

export default function Menu() {
  return (
    <div className="">
      <div className="flex justify-between w-[260px] items-center">
        <div className="text-[30px]">
          <BsFillCalendarDateFill />
        </div>
        <div className="text-[35px]">
          <RiFileList2Fill />
        </div>
        <div className="text-[32px]">
          <FaCalendarAlt />
        </div>
        <div className="text-[40px]">
          <RiAccountCircleFill />
        </div>
      </div>
    </div>
  );
}
