import React from "react";
import cn from "classnames";
import Link from "next/link";

function Section({ title, icon, selected, setSelect, link }) {
  return (
    <Link
      href={link}
      onClick={() => setSelect(title)}
      className={cn(
        "flex gap-5 items-center font-semibold p-2 py-3 border-[0.2px]  border-opacity-20 rounded-md",
        selected && "bg-white"
      )}
    >
      {icon}
      <p className={cn("")}>{title}</p>
    </Link>
  );
}

export default Section;
