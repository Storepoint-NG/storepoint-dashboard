import Image from "next/image";
import React from "react";

export default function Order() {
  return (
    <div className="flex justify-between items-center gap-3 border border-blac/40 shadow rounded-md p-2 bg-white/50">
      {/* custoer */}
      <div className="flex flex-col">
        <p className="font-semibold">Haruna Faruk</p>
        <p className="text-sm">#38283</p>
      </div>
      {/* items */}
      <div className="-ml-10">
        <p className="font-semibold text-xl">₦200</p>
        <p className="text-sm -mt-1 font-light">2 Items</p>
      </div>
      {/* button */}
      <button className="p-2 bg-purple-500 rounded-md text-white font-semibold">
        Delivered
      </button>
    </div>
  );
}
