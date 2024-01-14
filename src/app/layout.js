import "./globals.css";
import Providers from "./provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Storepoint",
  description: "Create an Ecommerce in Seconds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <Providers>
        <body>
          <Toaster />
          {children}
        </body>
      </Providers>
    </html>
  );
}
