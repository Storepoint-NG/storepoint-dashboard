import Image from "next/image";
import React from "react";
import { home_icon } from "../../public/assets";

function Card({ title, desc, linkText, icon }) {
  return (
    <div className=" shadow-md p-7 flex flex-col gap-y-3 items-start bg-white  rounded-md">
      {/* <Image src={home_icon} alt="icon" className="h-7 w-7" /> */}
      <h3 className="font-bold">{title}</h3>
      <p className="text-xs leading-loose">{desc}</p>
      <button className="text-xs font-semibold flex items-center gap-2">
        <p>{linkText}</p>
        <p className="font-bold text-[15px]">{">"}</p>
        {/* <Image src={} alt="arrow" /> */}
      </button>
    </div>
  );
}

export default Card;
