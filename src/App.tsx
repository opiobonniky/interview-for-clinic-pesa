/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import ActionGrid from "./components/ActionGrid";
import SavingsCard from "./components/SavingCard";

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto min-h-screen flex flex-col bg-gray-100">
      <Header appName="clinicPesa" greetingName="Boniface" />

      {/* Make this section expand to push footer down */}
      <div className="flex-1">
        <div className="px-4 shadow-lg bg-white h-auto">
          <SavingsCard savings="Savings" />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <ActionGrid activeTab={activeTab} />
      </div>

      {/* Footer stays pinned at bottom */}
      <footer className="text-center py-6 text-sm">
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
