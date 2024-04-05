import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="bg-zinc-100 relative pb-20 h-screen">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </>
  );
}
