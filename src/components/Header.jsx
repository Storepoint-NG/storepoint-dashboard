"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { toggle } from "@/redux/slices/sidebarSlice";
import { add_new, back_icon, menu_icon, profile } from "../../public/assets";
import { useUser } from "@supabase/auth-helpers-react";
import { redirect } from "next/navigation";

function Header() {
  const dispatch = useDispatch();
  const user = useUser();

  if (!user) {
    redirect("/login", "replace");
  }
  return (
    <header className="sticky top-0 left-0 bg-white">
      <div className="flex flex-row items-center justify-between p-2">
        <Image
          className="w-10 h-12 ml-1"
          src={menu_icon}
          alt="menu"
          onClick={() => dispatch(toggle())}
        />
        <div className="flex flex-row items-center">
          <p className="text-xl font-semibold">Hi, Haruna</p>
          <Image className="w-12 h-12 ml-1" src={profile} alt="profile" />
        </div>
      </div>

      {/* Second head */}
      <div className="flex flex-row items-center justify-between bg-blue-900">
        {/* left */}
        <div className="flex flex-row gap-3 items-center p-2">
          <Image src={back_icon} alt="back" className="w-7 h-7" />
          <div className="bg-blue-400 p-0.5 rounded-md">
            <Image className="w-7 h-7" src={add_new} alt="new" />
          </div>
        </div>

        {/* right */}
        <div className="flex flex-row text-white items-center">
          <p className="bg-white/20 p-3">View Store</p>
          <p className="bg-teal-500 p-3">Publish</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
