"use client";
import { EyeOutlined, ShareAltOutlined } from "@ant-design/icons";
import { addComma, getDelivered } from "@/lib";
import toast from "react-hot-toast";
import DashboardOrders from "./dash-orders";
import DashboardProducts from "./dash-product";

export default function Dashboard({ data, storeid }) {
  if (!data) {
    toast.error("unable to fetch");
    return;
  }

  function getTotal(values) {
    let total = 0;
    values.forEach((value) => {
      total += value.amount;
    });
    return total;
  }

  const copyStoreLink = () => {
    navigator.clipboard.writeText(`https://${storeid}.storepoint.online`);
    toast.success("Store link copied.");
  };

  const pending = getDelivered(data?.orders, "false");

  return (
    <main className="p-2">
      <div className="w-full bg-purple-600 text-white rounded-md p-4 py-6 mt-3 flex flex-col gap-2 relative">
        <div className="flex items-center gap-3">
          <p>Current Balance</p>
          <EyeOutlined className="text-xl mb-1 cursor-pointer" />
        </div>
        <h2 className="text-4xl font-medium">
          ₦{addComma(getTotal(data.orders))}
          <span className="text-3xl">.00</span>
        </h2>
        <p className="mt-3 border border-white rounded-full p-1 px-3 w-fit">
          <span className="font-medium">{data.orders.length}</span> sales
        </p>

        <button
          href="#"
          // target="_blank"
          onClick={() => copyStoreLink()}
          className="absolute right-4 flex items-center gap-2 top-6 p-2 text-sm bg-purple-700 rounded-full font-mono"
        >
          <ShareAltOutlined fontSize={30} /> Share
        </button>
      </div>

      {/* orders */}
      <DashboardOrders storeid={storeid} pending={pending} />

      {/* products */}
      <DashboardProducts storeid={storeid} data={data} />
    </main>
  );
}
