import Image from "next/image";
import React from "react";
import { home_icon } from "../../public/assets";
import cn from "classnames";

function Section({ title, icon, color, setSelect }) {
  return (
    <div
      onClick={() => setSelect(title)}
      className={cn(
        "flex flex-row gap-3 items-center  py-3 border-l-4 cursor-pointer",
        color && "bg-gray-200/20  border-teal-600",
        !color && "border-transparent"
      )}
    >
      {/* <Image src={home_icon} className="ml-3" alt="icon" /> */}
      <p className={cn(color, "font-semibold text-[1.1rem] ml-3")}>{title}</p>
    </div>
  );
}

export default Section;
