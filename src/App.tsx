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
        <SavingsCard savings="Savings"/> 
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <ActionGrid activeTab={activeTab} />

      <footer className="text-center py-6 text-sm" style={{ color: "#737373" }}>
        <span className="font-medium" style={{ color: "#004465" }}>
          clinicPesa
        </span>{" "}
        <a
          href="#"
          className="font-semibold underline"
          style={{ color: "#004465" }}
        >
          T&Cs
        </a>{" "}
        apply.
      </footer>
    </div>
  );
}