import { Eye, EyeOff, Send, Wallet } from "lucide-react";
import React, { useState } from "react";

export default function SavingsCard({ savings }: { savings?: string }) {
  const [hidden, setHidden] = useState(false);
  const balanceText = "UGX 50,000";

  return (
    <section className="relative -mt-8 mb-6 z-10 px-2 md:px-6 lg:px-10">
      <div
        className="absolute bg-blue-200 p-1 rounded-br-lg rounded-tl-lg text-sm font-medium z-20"
        style={{ color: "#004465" }}
      >
        {savings}
      </div>

      <div className="bg-white rounded-3xl shadow-2xl pt-4">
        <h4
          className="text-center text-sm font-semibold mt-2"
          style={{ color: "#004465" }}
        >
          Balance
        </h4>

        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="font-extrabold text-5xl" style={{ color: "#004465" }}>
            {hidden ? "••••••" : balanceText}
          </div>
          <button
            aria-label="toggle balance"
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setHidden((h) => !h)}
          >
            {hidden ? (
              <Eye size={24} style={{ color: "#004465" }} />
            ) : (
              <EyeOff size={24} style={{ color: "#004465" }} />
            )}
          </button>
        </div>

        <div
          className="flex justify-evenly text-sm mt-5 px-4"
          style={{ color: "#737373" }}
        >
          <div>
            Frequency:{" "}
            <span className="font-semibold" style={{ color: "#646464" }}>
              Monthly
            </span>
          </div>
          <div>
            AutoSave amount:
            <span className="font-semibold" style={{ color: "#646464" }}>
              {" "}
              UGX 1,000
            </span>
          </div>
        </div>

        <div className="border-t border-gray-100 my-5" />

        <div className="flex items-center justify-center gap-10 px-4 pb-6">
          {/* Deposit */}
          <button
            className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
            style={{ color: "#004465" }}
          >
            <Wallet size={24} strokeWidth={1.6} color="#004465" />
            <span className="text-sm font-semibold">Deposit</span>
          </button>

          {/* Divider */}
          <div className="h-8 w-px" style={{ backgroundColor: "#ffcb05" }} />

          {/* Share Medical */}
          <button
            className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
            style={{ color: "#004465" }}
          >
            <Send size={24} strokeWidth={1.6} color="#004465" />
            <span className="text-sm font-semibold">Share Medical</span>
          </button>
        </div>
      </div>

      {/* Green L Card next to Savings */}
    </section>
  );
}
