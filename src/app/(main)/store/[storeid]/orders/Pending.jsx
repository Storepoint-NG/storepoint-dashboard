import Order from "./Order";
import { addComma, getTotal } from "@/lib";

export default function Pending({ pending }) {
  return (
    <>
      {/* overview */}
      <div className="flex items-center justify-between w-full mt-3 p-2 px-3 gap-3 rounded-md bg-gray-200">
        <div>
          <p>Total orders pending</p>
          <p className="text-2xl font-medium break-all">
            ₦{addComma(getTotal(pending))}.<span className="text-xl">00</span>
          </p>
        </div>
        <p className="rounded-full whitespace-nowrap text-white p-3 px-3 bg-purple-700 font-semibold">
          Deliver All <span className=" font-medium">({pending.length})</span>
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
          {pending.map((order) => (
            <Order key={order.order_id} {...order} status={"true"} />
          ))}
        </div>
      </div>
    </>
  );
}
