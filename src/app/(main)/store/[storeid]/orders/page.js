import Image from "next/image";
import React from "react";
import { double_decks } from "../../../../../../public/assets";

export default function Orders() {
  return (
    <main className="p-2">
      <h1 className="text-3xl font-mono font-semibold">Orders</h1>
      {/* switch */}
      <div className="flex justify-between w-full text-left mt-3 text-[1.1rem] font-medium ">
        <p className="border-b-4 border-purple-600 flex-[0.5] pb-2">
          Pending Orders
        </p>
        <p className="border-b-4 border-purple-600/50 flex-[0.5] w-full">
          Fulfiled Orders
        </p>
      </div>
      {/* overview */}
      <div className="flex items-center justify-between w-full mt-3 p-2 px-3 gap-3 rounded-md bg-gray-200">
        <div>
          <p>All pending orders</p>
          <p className="text-2xl font-medium break-all">
            ₦20,000.<span className="text-xl">00</span>
          </p>
        </div>
        <p className="rounded-full whitespace-nowrap text-white p-3 px-3 bg-purple-700 font-semibold">
          Track Orders <span className=" font-medium">(36)</span>
        </p>
      </div>
      {/* orders */}
      <div className=" h-full mt-5 p-1">
        <div className="flex items-center justify-between text-xl">
          <p className="font-semibold"></p>
          <p className="text-sm"></p>
        </div>
        {/* items */}
        <div className="flex flex-col gap-3 rounded-md mt-3">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <div
              className="flex justify-between items-center gap-3 border border-blac/40 shadow rounded-md p-2 bg-white/50"
              key={num}
            >
              <Image
                className="rounded-full w-14 h-14 "
                src={double_decks}
                alt="pi"
              />
              <div className="flex items-center gap-2">
                <p className="font-semibold">Haruna Faruk</p>
                <p className="w-2 h-2 rounded-full bg-green-600"></p>
                {/* <p>-------····</p> */}
              </div>
              <div>
                <p className="font-semibold text-xl">20</p>
                <p className="text-sm -mt-1 font-light">Products</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
