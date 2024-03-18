import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileFilled } from "@ant-design/icons";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const MoreOptions = () => {
  return (
    <main className="p-4">
      <div className="flex gap-1 items-center text-xl">
        <ChevronLeft />
        <h1 className=" font-medium">Settings</h1>
      </div>

      <div className="flex items-center gap-5 my-5 border-b border-black/20 pb-7">
        <Avatar className="w-14 h-14 ml-2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-xl font-medium">Haruna Faruk</h1>
          <p className="text-sm">harunafaruk2004@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {[0, 1, 2].map((item) => (
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <ProfileFilled />
              <p>Manage Account</p>
            </div>
            <ChevronRight />
          </div>
        ))}
      </div>
    </main>
  );
};

export default MoreOptions;
