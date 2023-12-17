"use client";
import { sidebarItems } from "@/constant";
import { useState } from "react";
import Section from "./Section";
import { useSelector } from "react-redux";
import cn from "classnames";

function Sidebar() {
  const sidebarToggle = useSelector((state) => state.sidebar);
  const [select, setSelect] = useState("Dashboard");
  return (
    <div
      className={cn(
        "absolute w-2/3 shadow p-3 pl-0",
        !sidebarToggle && "hidden"
      )}
    >
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
  );
}

export default Sidebar;
