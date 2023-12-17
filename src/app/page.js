import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="relative">
      <Sidebar />
      <div className="p-2">
        <div className="w-full  font-semibold text-center">
          Welcome To Kemist
        </div>
      </div>
    </main>
  );
}
