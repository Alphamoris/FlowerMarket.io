"use client";
import Navbar from "../components/Navbar"
import Uppernavbar from "../components/Uppernavbar"
import "../styles/mainstyle.css"
import Footer from "@/components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Flower Market</title>
        <link rel="icon" href="/logo.png" id="tablogo"/>
      </head>
      <body>
        <Uppernavbar />
        <Navbar />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
