import React, { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import ActionGrid from "./components/ActionGrid";
import SavingsCard from "./components/SavingCard";

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-gray-50">
      <Header appName="clinicPesa" greetingName="Boniface" />

      <div className="px-4 shadow-lg bg-white h-auto">
        <SavingsCard savings="savings" />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <ActionGrid activeTab={activeTab} />

      <footer className="text-center py-6 text-sm">
        <span className="font-medium">clinicPesa</span>{" "}
        <a
          href="#"
          className="font-semibold underline text-[--primary-color] text-white px-1 rounded-md"
        >
          T&Cs
        </a>{" "}
        apply.
      </footer>
    </div>
  );
}
