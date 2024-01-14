import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Script from "next/script";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="bg-zinc-100 relative">
        <Sidebar />
        {children}
      </div>
      <Footer />
      {/* <Script src="https://checkout.squadco.com/widget/squad.min.js" /> */}
    </>
  );
}
