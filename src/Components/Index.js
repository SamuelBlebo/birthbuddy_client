import React from "react";
import Menu from "../Components/Menu";

export default function Index() {
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
          <button className="bg-[#2CBA8D] px-[6px] py-[3px] text-[14px] font-bold rounded-[5px]">
            + Add New
          </button>
        </div>
      </div>

      {/* Heading and List */}
      <div className="mt-[30px]">
        <div>
          <h1 className="font-[700] text-[40px]">Upcoming</h1>
        </div>
      </div>
      <div className="absolute bottom-0 mb-[20px] mx-[6%]">
        <Menu />
      </div>
    </div>
  );
}
