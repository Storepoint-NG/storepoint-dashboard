import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <main className="relative">
      <Sidebar />
      <div className="p-2">
        <div className="w-full  font-semibold text-center">
          Welcome To Kemist
        </div>
        <h1>Hello</h1>
      </div>
    </main>
  );
}
