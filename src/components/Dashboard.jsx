"use client";
import { double_decks } from "../../public/assets";
import { EyeOutlined } from "@ant-design/icons";
import Image from "next/image";

export default function Dashboard() {
  return (
    <main className="p-2">
      <div className="w-full bg-purple-600 text-white rounded-md p-4 py-6 mt-3 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <p>Current Balance</p>
          <EyeOutlined className="text-xl mb-1" />
        </div>
        <h2 className="text-4xl font-medium">
          ₦20,423<span className="text-3xl">.00</span>
        </h2>
        <p className="mt-3 border border-white rounded-full p-1 px-3 w-fit">
          <span className="font-medium">24</span> sales today
        </p>
      </div>
      {/* orders */}
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
      {/* products */}
      <div className=" h-full mt-3 p-1">
        <div className="flex items-center justify-between text-xl">
          <p className="font-semibold">My Products</p>
          <p className="text-sm">View All</p>
        </div>
        {/* items */}
        <div className="flex flex-col gap-3 rounded-md mt-3">
          {[1, 2, 3, 4].map((num) => (
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
                <p className="font-semibold">Double Deckers</p>
                <p className="w-2 h-2 rounded-full bg-green-600"></p>
                {/* <p>-------····</p> */}
              </div>
              <div>
                <p className="font-semibold text-xl">20</p>
                <p className="text-sm -mt-1 font-light">Items left</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
