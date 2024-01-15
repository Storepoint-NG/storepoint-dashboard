"use client";
import Image from "next/image";
import React from "react";
import { double_decks } from "../../../public/assets";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductItems() {
  const { storeid } = useParams();
  const product_id = 1;
  return (
    <Link
      href={`/store/${storeid}/products/${product_id}`}
      className="flex justify-between items-center gap-3 border border-blac/40 shadow rounded-md p-2 bg-white/50"
    >
      <Image className="rounded-full w-14 h-14 " src={double_decks} alt="pi" />
      <div className="flex items-center gap-2">
        <p className="font-semibold">Double Deckers</p>
        <p className="w-2 h-2 rounded-full bg-green-600"></p>
        {/* <p>-------····</p> */}
      </div>
      <div>
        <p className="font-semibold text-xl">20</p>
        <p className="text-sm -mt-1 font-light">In Stock</p>
      </div>
    </Link>
  );
}
