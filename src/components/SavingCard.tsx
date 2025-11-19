import { Eye, EyeOff, Send, Wallet } from "lucide-react";
import React, { useState } from "react";
import ActiveMenuIndicator from "./Reusable/ActiveMenuIndicator";

export default function SavingsCard({ savings }: { savings?: string }) {
  const [hidden, setHidden] = useState(false);
  const balanceText = "UGX 50,000";

  return (
    <section className="relative -mt-8 mb-6 z-10 px-2 md:px-6 lg:px-10">
      {/* Top Ribbon */}
      <div className="absolute bg-blue-200 p-1 rounded-br-lg rounded-tl-lg text-sm font-medium z-20 text-[var(--primary-color)]">
        {savings}
      </div>

      <div className="bg-white rounded-3xl shadow-2xl pt-4">
        <h4 className="text-center text-lg font-extrabold mt-2 text-[--primary-color]">
          Balance
        </h4>

        {/* Balance Display */}
        <div className="flex items-center justify-center gap-3 mt-1">
          <div className="font-extrabold text-5xl text-[var(--primary-color)]">
            {hidden ? "••••••" : balanceText}
          </div>

          <button
            aria-label="toggle balance"
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setHidden((h) => !h)}
          >
            {hidden ? (
              <Eye size={24} className="text-[var(--primary-color)]" />
            ) : (
              <EyeOff size={24} className="text-[var(--primary-color)]" />
            )}
          </button>
        </div>

        {/* Info Row */}
        <div className="flex justify-evenly text-sm mt-5 p-2 text-[var(--gray-light)]">
          <span>
            Frequency:{" "}
            <span className="font-semibold text-[var(--gray-text)]">
              Monthly
            </span>
          </span>
          <div className="h-4 w-px bg-gray-200" />
          <span>
            AutoSave amount:
            <span className="font-semibold text-[var(--gray-text)]">
              {" "}
              UGX 1,000
            </span>
          </span>
        </div>

        <div className="border-t border-gray-100 my-5" />

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-10 px-4 pb-6">
          {/* Deposit */}
          <button className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity text-[var(--primary-color)]">
            <Wallet
              size={24}
              strokeWidth={1.6}
              className="text-[var(--primary-color)]"
            />
            <span className="text-sm font-semibold">Deposit</span>
          </button>

          {/* Divider */}
          <div className="h-8 w-px bg-[var(--yellow-active)]" />

          {/* Share Medical */}
          <button className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity text-[var(--primary-color)]">
            <Send
              size={24}
              strokeWidth={1.6}
              className="text-[var(--primary-color)]"
            />
            <span className="text-sm font-semibold">Share Medical</span>
          </button>
        </div>
      </div>

      {/* Bottom Ribbon three o*/}
      <ActiveMenuIndicator activeIndex={0} />
    </section>
  );
}
