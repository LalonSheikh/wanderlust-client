"use client";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

const ClientLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Toaster />
    </>
  );
};

export default ClientLayout;