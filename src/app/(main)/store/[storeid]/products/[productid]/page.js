import React from "react";
import { double_decks } from "../../../../../../../public/assets";
import Image from "next/image";
import {
  HistoryOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

export default function ProductPage() {
  return (
    <main className="p-2 px-3">
      <h1 className="text-3xl font-mono font-semibold">Product Summary</h1>
      <h4 className="text-black/80">Id: 72202282</h4>
      {/* product overview */}
      <div className="flex flex-col rounded-md border bg-gray-50 shadow p-3  mt-2">
        {/* top */}
        <div className="flex items-center gap-4 w-full">
          <Image
            src={double_decks}
            alt="img"
            className="rounded-full w-14 h-14 "
          />
          <div>
            <p className="font-semibold">Double Deckers</p>
            <p className="text-sm text-black/70">
              Last Updated On Apr 21, 2024
            </p>
          </div>
        </div>

        {/* metrics */}
        <div className="flex items-center justify-between mt-3 px-2">
          {[
            { label: "Price", num: 120, attr: "₦" },
            { label: "In Stock", num: 11, attr: "Items " },
            { label: "Total Amount", num: 1500, attr: "₦" },
          ].map(({ label, num, attr }) => (
            <div className="" key={label}>
              <p className="font-semibold text-xl">
                {attr}
                {num}
              </p>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* actions - update product,sales history, set reminder */}
      <div className="flex flex-col gap-y-4 mt-5">
        {[
          { icon: "", text: "Update Product", desc: "Last update 3/12/24" },
          { icon: "", text: "Sales History", desc: "Track sales record" },
          {
            icon: "",
            text: "Set Reminder",
            desc: "Update price and inventory reminder",
          },
        ].map(({ icon, text, desc }) => (
          <div
            key={text}
            className="flex items-center justify-between border-2 border-blue-200 bg-gray-50 p-2 text-black/80"
          >
            <div className="flex gap-3 items-center">
              <HistoryOutlined className="text-xl" />
              <div>
                <h4 className="font-semibold">{text}</h4>
                <p className="text-sm">{desc}</p>
              </div>
            </div>
            <RightOutlined />
          </div>
        ))}
      </div>

      {/* delete */}
      <div className="flex items-center justify-between border-2 bg-red-50 p-2 text-red-600 mt-10">
        <div className="flex gap-3 items-center">
          <HistoryOutlined className="text-xl" />
          <div>
            <h4 className="font-semibold">Suspend Proudct</h4>
            <p className="text-sm">Temporarily remove product from store</p>
          </div>
        </div>
        <RightOutlined />
      </div>
    </main>
  );
}
