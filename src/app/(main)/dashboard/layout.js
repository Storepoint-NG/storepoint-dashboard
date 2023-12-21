import Header from "@/components/Header";
import Script from "next/script";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      {/* <Script src="https://checkout.squadco.com/widget/squad.min.js" /> */}
    </>
  );
}
