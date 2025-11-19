import React, { useState } from "react";

const tabs = ["ACCOUNT OPTIONS", "INVEST", "TRANSACTIONS"];

type prop = {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

export default function Tabs({ activeTab, setActiveTab }: prop) {
  return (
    <div className="mt-6 py-2 max-h-fit">
      <div className="flex border-gray-200 showdow-lg shadow-white">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActiveTab(i)}
            className="flex-1 text-xs font-bold pb-3 relative transition-colors whitespace-nowrap"
            style={{ color: i === activeTab ? "#004465" : "#737373" }}
          >
            {t}
            {i === activeTab && (
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full"
                style={{ backgroundColor: "#ffcb05" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
