"use client";

import { BellOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { toggle } from "@/redux/slices/sidebarSlice";
import { useUser } from "@supabase/auth-helpers-react";
import { redirect } from "next/navigation";

export default function Header() {
  const dispatch = useDispatch();
  const user = useUser();

  // TODO: Turn this off
  // if (!user) redirect("/login");

  return (
    <header className="flex justify-between bg-white text-black p-2 items-center px-3 sticky top-0 gap-3 z-10">
      <MenuOutlined
        style={{ fontSize: "larger", color: "black" }}
        onClick={() => dispatch(toggle())}
      />
      {/* Search */}
      <div className="flex items-center bg-gra-800/50 border border-black border-opacity-30  p-1 rounded-md gap-2 pl-2 w-full">
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
