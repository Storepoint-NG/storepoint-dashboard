"use client";
import { EyeOutlined } from "@ant-design/icons";
import Link from "next/link";
import ProductItems from "./products/ProductItems";
import { addComma, getDelivered } from "@/lib";
import toast from "react-hot-toast";

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
          <span className="font-medium">{data.orders.length}</span> sales today
        </p>
        <Link
          href={`https://onstp.vercel.app/${storeid}`}
          target="_blank"
          className="absolute right-4 top-6 p-2 text-sm bg-purple-700 rounded-full font-mono"
        >
          View Store
        </Link>
      </div>
      {/* orders */}
      <div className="flex items-center justify-between w-full mt-3 p-2 px-3 gap-3 rounded-md ">
        <div>
          <p>All pending orders</p>
          <p className="text-2xl font-medium break-all">
            ₦{addComma(getTotal(pending))}.<span className="text-xl">00</span>
          </p>
        </div>
        <Link
          href={`/store/${storeid}/orders`}
          className="rounded-full whitespace-nowrap text-white p-3 px-3 bg-purple-700 font-semibold"
        >
          Track Orders <span className=" font-medium">({pending.length})</span>
        </Link>
      </div>
      {/* products */}
      <div className=" h-full mt-3 p-1">
        <div className="flex items-center justify-between text-xl">
          <p className="font-semibold">My Products</p>
          <Link href={`/store/${storeid}/products`} className="text-sm pl-1">
            View All
          </Link>
        </div>
        {/* items */}
        <div className="flex flex-col gap-3 rounded-md mt-3">
          {data.products.slice(0, 5).map((product) => (
            <ProductItems key={product.product_id} {...product} />
          ))}
        </div>
      </div>
    </main>
  );
}
