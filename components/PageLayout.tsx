"use client";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleButtonClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <TopBar onClick={handleButtonClick} showSidebar={showSidebar} />
      <div className="flex flex-1 mt-16">
        <Sidebar showSidebar={showSidebar} />
        <main className="flex-1 h-full p-4 overflow-auto">{children}</main>
      </div>
    </>
  );
}
