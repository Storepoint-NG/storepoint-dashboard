import React from "react";
import cn from "classnames";
import Link from "next/link";
import { useParams } from "next/navigation";

function Section({ title, icon, selected, setSelect, link }) {
  const { storeid } = useParams();
  return (
    <Link
      href={`/store/${storeid}/${link}`}
      onClick={() => setSelect(title)}
      className={cn(
        "flex gap-5 items-center font-semibold p-2 py-3 border-[0.2px]  border-opacity-20 rounded-md",
        selected && "bg-white"
      )}
    >
      {icon}
      <p className={cn("text-sm")}>{title}</p>
    </Link>
  );
}

export default Section;
