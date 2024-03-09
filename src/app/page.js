"use client";
import { useRouter } from "next/navigation";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import { useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { getFirstName, getShortName } from "@/constant/utils";

export default function Home() {
  const supabase = createClientComponentClient();
  const user = useUser();
  const router = useRouter();
  const [shops, setShops] = useState([]);
  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }

    const fetchShops = async () => {
      const { data, error } = await supabase
        .from("stores")
        .select(`id, store_name, store_id`)
        .eq("store_owner_id", user.id);

      if (error) {
        // console.log("error", error);
        return;
      }

      if (data) {
        // console.log("shops", data);
        setShops(data);
      }
    };

    fetchShops();
  }, []);

  return (
    <div className="py-7 pt-12 px-5">
      <div className="flex justify-between items-center w-full mb-8">
        <h1 className="text-lg font-black  text-black/80">Storepoint.</h1>
        <Link href={"/logout"}>
          <p className="p-1 rounded-md border border-purple-600  bg-pin-500 text-purple-500 font-bold">
            {getShortName(user?.user_metadata.username) || "HF"}
          </p>
        </Link>
      </div>

      {/* main */}
      <div className="flex flex-col sm:flex-row  sm:items-center justify-between gap-3 mt-5">
        <h1 className="font-semibold text-[1.4rem]">
          Welcome back, {getFirstName(user)}
        </h1>
        <Link
          href="/create-store"
          className="flex gap-2  items-center justify-center font-semibold p-2 w-full sm:w-fit px-4 rounded-md bg-blac/80 bg-purple-800/80 text-sm text-white shadow-black"
        >
          <PlusOutlined />
          <p>Create store</p>
        </Link>
      </div>

      {/* stores */}
      <div className="flex flex-col w-full  gap-3 mt-7 ">
        <h2 className="text-xl font-semibold mt-3 ">All stores</h2>
        {shops.map(({ id, store_name, store_id }) => (
          <Link
            href={`/store/${store_id}`}
            key={id}
            className="flex items-center justify-between group hover:bg-black/5 rounded-md py-2 px-2 cursor-pointer"
          >
            <div className="flex gap-3">
              <p className="p-2 rounded-full bg-gree-500 text-green-500 border-green-500 border">
                MS
              </p>
              <div className="text-sm">
                <p className="font-semibold">{store_name}</p>
                <p className="text-black/60 text-xs">
                  {store_id}.storepoint.online
                </p>
              </div>
            </div>
            <RightOutlined className="mr-2 hidden group-hover:flex" />
          </Link>
        ))}
      </div>
    </div>
  );
}
