"use client";
import { addComma } from "@/lib";
import React from "react";
import toast from "react-hot-toast";
import supabase from "@/supabase";
import { useRouter } from "next/navigation";

export default function Order({
  customer_details,
  order_id,
  amount,
  products_ordered,
  status,
}) {
  const router = useRouter();
  async function changeDelivered(value) {
    const { error } = await supabase
      .from("orders")
      .update({
        delivered: value,
      })
      .eq("order_id", order_id);

    if (error) {
      console.log("error", error);
      toast.error("unable to update. try again");
      return;
    }
    toast.success("delivered");
    router.refresh();
  }
  return (
    <div className="flex justify-between items-center gap-3 border border-blac/40 shadow rounded-md p-3 bg-white/50">
      {/* custoer */}
      <div className="flex flex-col">
        <p className="font-semibold">{customer_details.name}</p>
        <p className="text-sm">
          {"#"}
          {order_id.substring(0, 5)}
        </p>
      </div>
      {/* items */}
      <div className="-ml-10">
        <p className="font-semibold text-xl">₦{addComma(amount)}</p>
        <p className="text-sm -mt-1 font-light">
          {products_ordered.length} product
        </p>
      </div>
      {/* button */}
      <button
        onClick={() => changeDelivered(status)}
        className="p-2 bg-purple-500 rounded-md text-white font-semibold"
      >
        {status !== "false" ? "Delivered" : "Restore"}
      </button>
    </div>
  );
}
