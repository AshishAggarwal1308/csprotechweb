import type { Metadata } from "next";
import "./globals.css";
import { NavbarWithMegaMenu } from "./Components/Navbar";
import Footer from "@/app/Components/Footer"
import Provider from "./Provider";


export const metadata: Metadata = {
  title: "csprotechnology",
  description: "A It Service Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    

      <body >
        <Provider>
          <NavbarWithMegaMenu />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
