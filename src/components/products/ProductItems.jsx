"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLink } from "@/lib";

export default function ProductItems({
  product_id,
  title,
  quantity,
  images,
  price,
}) {
  const { storeid } = useParams();
  return (
    <Link
      href={`/store/${storeid}/products/${product_id}`}
      className="flex justify-between items-center gap-3 border border-blac/40 shadow rounded-md p-2 bg-white/50"
    >
      <Image
        className="rounded-full w-14 h-14 "
        src={getLink(images[0])}
        alt="pi"
        width={200}
        height={200}
      />
      <div className="flex flex-col ">
        <p className="font-semibold">{title}</p>
        <p>
          <span className="font-medium">₦{price}</span> per item
        </p>
      </div>
      <div>
        <p className="font-semibold text-xl">{quantity}</p>
        <p className="text-sm -mt-1 font-light">In Stock</p>
      </div>
    </Link>
  );
}
