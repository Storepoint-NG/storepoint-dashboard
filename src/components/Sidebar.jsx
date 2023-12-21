"use client";
import { sidebarItems } from "@/constant";
import { useState } from "react";
import Section from "./Section";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { toggle } from "@/redux/slices/sidebarSlice";

function Sidebar() {
  const sidebarToggle = useSelector((state) => state.sidebar);
  const [select, setSelect] = useState("Dashboard");
  const dispatch = useDispatch();
  return (
    <div
      className={cn(
        "w-full absolute top-0 blur-0 h-full backdrop-blur-sm flex gap-x-4 z-10",
        !sidebarToggle && "hidden"
      )}
      onClick={() => dispatch(toggle())}
    >
      <div className={cn("w-2/3 h-full shadow p-3 pl-0 bg-white")}>
        <div className="flex flex-col gap-2">
          {sidebarItems.map(({ title, icon }) => (
            <Section
              key={title}
              title={title}
              icon={icon}
              color={title == select && "text-teal-600"}
              setSelect={setSelect}
            />
          ))}
        </div>
      </div>
      <p className="mt-2  font-semibold rounded-full bg-black text-white p-1 px-2 h-fit">
        X
      </p>
    </div>
  );
}

export default Sidebar;
