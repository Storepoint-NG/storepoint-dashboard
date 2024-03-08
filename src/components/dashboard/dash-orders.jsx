import Link from "next/link";
import React from "react";

const DashboardOrders = ({ storeid, pending }) => {
  return (
    <>
      {pending.length > 0 && (
        <div className="flex items-center justify-between w-full mt-3 p-2 px-3 gap-3 rounded-md ">
          <div className="flex items-center gap-2">
            <p className="text-xl font-medium break-all">{pending.length}</p>
            <p>Pending orders</p>
          </div>
          <Link
            href={`/store/${storeid}/orders`}
            className="rounded-full whitespace-nowrap text-white p-2 bg-purple-700 font-medium text-sm"
          >
            Track Orders
          </Link>
        </div>
      )}
    </>
  );
};

export default DashboardOrders;
