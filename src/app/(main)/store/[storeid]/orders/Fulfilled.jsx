import { addComma, getTotal } from "@/lib";
import Order from "./Order";

export default function Fulfilled({ fulfilled }) {
  return (
    <>
      {/* overview */}
      <div className="flex items-center justify-between w-full mt-3 p-2 px-3 gap-3 rounded-md bg-gray-200">
        <div>
          <p>Total orders fulfilled</p>
          <p className="text-2xl font-medium break-all">
            ₦{addComma(getTotal(fulfilled))}.<span className="text-xl">00</span>
          </p>
        </div>
        <p className="rounded-full whitespace-nowrap text-white p-3 px-3 bg-purple-700 font-semibold">
          Restore All <span className=" font-medium">({fulfilled.length})</span>
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
          {fulfilled.map((order) => (
            <Order key={order.order_id} {...order} status={"false"} />
          ))}
        </div>
      </div>
    </>
  );
}
