import React from "react";
import Image from "next/image";
import { HistoryOutlined, RightOutlined } from "@ant-design/icons";
import supabase from "@/supabase";
import { getLink } from "@/lib";
import DeleteProduct from "@/components/products/DeleteProduct";
import Link from "next/link";
import cn from "classnames";

export default async function ProductPage({ params }) {
  const { productid } = params;
  if (!productid) return;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("product_id", productid)
    .single();

  if (error) {
    console.log("error", error);
    return;
  }

  const { title, images, quantity, price, created_at } = data;

  const productActions = [
    {
      icon: "",
      text: "Update Product",
      desc: "Last update 3/12/24",
      link: `${productid}/update-product`,
    },
    { icon: "", text: "Sales History", desc: "Track sales record", link: `#` },
    {
      icon: "",
      text: "Set Reminder",
      desc: "Update price and inventory reminder",
      link: "#",
    },
  ];

  return (
    <main className="p-2 px-3">
      <h1 className="text-3xl font-mono font-semibold">Product Summary</h1>
      <h4 className="text-black/80 uppercase">Id: {productid.slice(0, 8)}</h4>
      {/* product overview */}
      <div className="flex flex-col rounded-md border bg-gray-50 shadow p-3  mt-2">
        {/* top */}
        <div className="flex items-center gap-4 w-full">
          <Image
            src={getLink(images[0])}
            alt="img"
            className="rounded-full w-14 h-14 "
            width={200}
            height={200}
          />
          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-black/70">
              Last Updated On Apr 21, 2024
            </p>
          </div>
        </div>

        {/* metrics */}
        <div className="flex items-center justify-between mt-3 px-2">
          {[
            { label: "Price", num: price, attr: "₦" },
            { label: "In Stock", num: quantity, attr: "Items " },
            { label: "Total Amount", num: price * quantity, attr: "₦" },
          ].map(({ label, num, attr }) => (
            <div className="" key={label}>
              <p className="font-semibold text-xl">
                {attr}
                {num}
              </p>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* actions - update product,sales history, set reminder */}
      <div className="flex flex-col gap-y-4 mt-5">
        {productActions.map(({ icon, text, desc, link }) => (
          <Link
            key={text}
            href={link}
            className={cn(link === "#" && "opacity-50")}
          >
            <div className="flex items-center justify-between border-2 border-blue-200 bg-gray-50 p-2 text-black/80">
              <div className="flex gap-3 items-center">
                <HistoryOutlined className="text-xl" />
                <div>
                  <h4 className="font-semibold">{text}</h4>
                  <p className="text-sm">{desc}</p>
                </div>
              </div>
              <RightOutlined />
            </div>
          </Link>
        ))}
      </div>

      <DeleteProduct productid={productid} />
    </main>
  );
}
