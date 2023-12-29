"use client";
import Card from "@/components/Card";
import { dash_cards } from "@/constant";

export default function Dashboard() {
  return (
    <main className=" ">
      <div className="p-2 px-8 flex flex-col items-center ">
        <div className="w-full mt-3  font-semibold text-center">
          Welcome To Kemist
        </div>

        {/* cards */}
        <div className="mt-5 flex flex-col gap-y-5">
          {dash_cards.map(({ title, desc, linkText, icon }) => (
            <Card
              key={title}
              title={title}
              desc={desc}
              linkText={linkText}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
