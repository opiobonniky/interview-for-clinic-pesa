/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Header from "./Header";
import SavingsCard from "./SavingCard";
import ActionGrid from "./ActionGrid";
import Tabs from "./Tabs";

const ClinicPesaDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "ACCOUNT OPTIONS",
    "INVEST",
    "TRANSACTIONS",
    "test 1",
    "test 2",
  ];

  return (
    <div className="mx-auto min-h-screen flex flex-col bg-gray-100 lg:max-w-2xl lg:h-screen">
      <Header appName="clinicPesa" greetingName="Boniface" />

      <div className="px-4 shadow-md bg-white h-auto">
        <SavingsCard savings="savings" />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
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
};

export default ClinicPesaDashboard;
