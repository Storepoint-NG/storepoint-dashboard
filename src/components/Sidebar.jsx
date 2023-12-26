"use client";
import { sidebarItems } from "@/constant";
import { useState } from "react";
import Section from "./Section";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { toggle } from "@/redux/slices/sidebarSlice";

function Sidebar() {
  const sidebarToggle = useSelector((state) => state.sidebar);
  const [select, setSelect] = useState("Home");
  const dispatch = useDispatch();
  return (
    <div
      className={cn(
        "w-full fixed  top-12 blur-0 h-full backdrop-blur-s bg-black/30 flex gap-x-4",
        !sidebarToggle && "hidden"
      )}
      onClick={() => dispatch(toggle())}
    >
      <div className={cn("w-5/6 h-full shadow p-3 bg-gray-100 ")}>
        <div className="flex flex-col gap-2 first-letter:">
          {sidebarItems.map(({ title, icon, link }) => (
            <Section
              key={title}
              title={title}
              icon={icon}
              link={link}
              selected={title === select}
              setSelect={setSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
