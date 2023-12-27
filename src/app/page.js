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
        console.log("error", error);
        return;
      }

      if (data) {
        console.log("shops", data);
        setShops(data);
      }
    };

    fetchShops();
  }, []);

  return (
    <div className="py-7 pt-12 px-5">
      <div className="flex justify-between w-full">
        <h1 className="text-xl font-black text-black/80">Storepoint.</h1>
        <div>
          <p className="p-2 rounded-md bg-pink-500 text-white">
            {getShortName(user?.user_metadata.username) || "HF"}
          </p>
        </div>
      </div>

      {/* main */}
      <div className="flex flex-col gap-3 mt-5">
        <h1 className="font-semibold text-[1.4rem]">
          Welcome back, {getFirstName(user)}
        </h1>
        <Link
          href="/create-store"
          className="flex gap-2 items-center justify-center font-semibold p-2 w-full rounded-md bg-black/80 text-sm text-white shadow-black"
        >
          <PlusOutlined />
          <p>Create store</p>
        </Link>
      </div>

      {/* stores */}
      <div className="flex flex-col w-full  gap-3 mt-7 ">
        {shops.map(({ id, store_name, store_id }) => (
          <Link
            href={`/store/${store_id}`}
            key={id}
            className="flex items-center justify-between group hover:bg-black/5 rounded-md py-2 px-2 cursor-pointer"
          >
            <div className="flex gap-3">
              <p className="p-2 rounded-md bg-green-500 text-white">MS</p>
              <div className="text-sm">
                <p className="font-semibold">{store_name}</p>
                <div>{store_id}.onstp.com</div>
              </div>
            </div>
            <RightOutlined className="mr-2 hidden group-hover:flex" />
          </Link>
        ))}
      </div>
    </div>
  );
}
