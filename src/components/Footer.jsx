"use client";
import React from "react";
import { Package, BookUser, Home, Tag, CircleEllipsis } from "lucide-react";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Footer() {
  const { storeid } = useParams();

  const bottom_links = [
    { title: "Home", icon: <Home />, link: "" },
    { title: "Orders", icon: <Tag />, link: "orders" },
    { title: "Products", icon: <Package />, link: "products" },
    { title: "Customers", icon: <BookUser />, link: "customers" },
    { title: "More", icon: <CircleEllipsis />, link: "more-options" },
  ];
  return (
    <footer className="fixed bottom-0 bg-white z-10 left-0 w-full sm:hidden">
      <div className="flex justify-around items-center px-4 p-2 max-w-sm mx-auto  gap-x-3">
        {bottom_links.map(({ icon, title, link }) => (
          <Link
            href={`/store/${storeid}/${link}`}
            className="flex flex-col items-center text-sm"
            key={title}
          >
            {icon}
            <p className="font-mo text-xs">{title}</p>
          </Link>
        ))}
      </div>
    </footer>
  );
}
