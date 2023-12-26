"use client";

import { BellOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { toggle } from "@/redux/slices/sidebarSlice";
import { useUser } from "@supabase/auth-helpers-react";
import { redirect } from "next/navigation";

export default function Header() {
  const dispatch = useDispatch();
  const user = useUser();

  if (!user) redirect("/login");

  return (
    <header className="flex justify-between bg-black/90 text-white p-2 items-center px-3 sticky top-0 gap-3 z-10">
      <MenuOutlined
        style={{ fontSize: "larger", color: "white" }}
        onClick={() => dispatch(toggle())}
      />
      {/* Search */}
      <div className="flex items-center bg-gray-800/50 border border-slate-50 border-opacity-30  p-1 rounded-md gap-2 pl-2 w-full">
        <SearchOutlined className="opacity-50" />
        <input
          type="text text-xs"
          className="ouline-none focus:outline-none border-none bg-transparent"
          placeholder="search"
        />
      </div>
      {/* right */}
      <div className="flex gap-3 items-center">
        <BellOutlined style={{ fontSize: "larger" }} />
        <p className="p-2 text-xs rounded-md bg-green-500 text-white">MS</p>
      </div>
    </header>
  );
}
