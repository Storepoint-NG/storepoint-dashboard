import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Storepoint",
  description: "Create an Ecommerce in Seconds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Toaster />
          {children}
        </body>
      </Providers>
    </html>
  );
}
