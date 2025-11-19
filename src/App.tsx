/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import ActionGrid from "./components/ActionGrid";
import SavingsCard from "./components/SavingCard";

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto min-h-screen flex flex-col bg-gray-100 lg:max-w-4xl lg:h-screen">
      <Header appName="clinicPesa" greetingName="Boniface" />

      <div className="px-4 shadow-lg bg-white h-auto">
        <SavingsCard savings="savings" />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <ActionGrid activeTab={activeTab} />

      <footer className="bg-gray-100 text-center py-6 text-sm mt-auto">
        <span className="font-medium">clinicPesa</span>{" "}
        <a
          href="#"
          className="font-semibold text-[--primary-color] px-1 rounded-md no-underline"
        >
          T&Cs
        </a>{" "}
        apply.
      </footer>
    </div>
  );
}
