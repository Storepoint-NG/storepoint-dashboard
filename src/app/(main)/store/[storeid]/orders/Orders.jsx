"use client";
import React, { useState } from "react";
import cn from "classnames";
import Pending from "./Pending";
import Fulfilled from "./Fulfilled";

export default function Orders({ pending, fulfilled }) {
  const [sec, setSec] = useState("pending");
  return (
    <>
      {/* switch */}
      <div className="flex justify-between w-full text-left mt-3 text-[1.1rem] font-medium ">
        <p
          onClick={() => setSec("pending")}
          className={cn(
            "border-b-4 border-purple-600 flex-[0.5] pb-2 transition-colors duration-150",
            sec !== "pending" && "border-purple-600/50"
          )}
        >
          Pending Orders
        </p>
        <p
          onClick={() => setSec("fulfilled")}
          className={cn(
            "border-b-4 border-purple-600 flex-[0.5] w-full transition-colors duration-150",
            sec !== "fulfilled" && "border-purple-600/50"
          )}
        >
          Fulfiled Orders
        </p>
      </div>
      {sec === "pending" ? (
        <Pending pending={pending} />
      ) : (
        <Fulfilled fulfilled={fulfilled} />
      )}
    </>
  );
}
