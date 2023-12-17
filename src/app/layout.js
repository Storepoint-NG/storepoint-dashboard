import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./dashboard/provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Store",
  description: "Create an Ecommerce in Seconds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Header />
          {children}
          <Script src="https://checkout.squadco.com/widget/squad.min.js" />
        </body>
      </Providers>
    </html>
  );
}
