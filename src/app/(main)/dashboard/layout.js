import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Script from "next/script";

export default function MainLayout({ children }) {
  return (
    <>
      <Sidebar />
      <Header />
      {children}
      {/* <Script src="https://checkout.squadco.com/widget/squad.min.js" /> */}
    </>
  );
}
