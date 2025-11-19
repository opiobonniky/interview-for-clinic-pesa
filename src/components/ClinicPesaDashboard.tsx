import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  ChevronLeft,
  X,
  Receipt,
  DollarSign,
  Users,
  CheckCircle,
  Wallet,
  Send,
} from "lucide-react";

const ClinicPesaDashboard = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [activeTab, setActiveTab] = useState("account");

  const PRIMARY_COLOR = "#004465";
  const YELLOW_ACTIVE = "#ffcb05";
  const GRAY_TEXT = "#646464";
  const GRAY_LIGHT = "#737373";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        className="px-5 py-4 flex items-center justify-between"
        style={{ backgroundColor: PRIMARY_COLOR }}
      >
        <button
          className="hover:opacity-80 transition-opacity"
          style={{ color: YELLOW_ACTIVE }}
        >
          <ChevronLeft size={26} strokeWidth={2.5} />
        </button>
        <h1 className="text-white text-xl font-bold tracking-wide">
          clinicPesa
        </h1>
        {/* Greeting */}
        <div className="text-center pt-6 pb-4">
          <h2 className="text-base font-normal" style={{ color: GRAY_TEXT }}>
            Good Morning, Robert
          </h2>
        </div>
        <button
          className="hover:opacity-80 transition-opacity"
          style={{ color: YELLOW_ACTIVE }}
        >
          <X size={26} strokeWidth={2.5} />
        </button>
      </header>

      {/* Main Content */}
      <div className="px-4 pb-6">
        {/* Cards Container - Horizontal Scroll */}
        <div
          className="flex gap-3 overflow-x-auto mb-5 pb-2 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Savings Card */}
          <div className="bg-white rounded-3xl shadow-lg p-5 min-w-[320px] flex-shrink-0">
            <div className="flex items-center justify-start mb-5">
              <span
                className="px-5 py-1.5 rounded-full text-sm font-medium"
                style={{ backgroundColor: "#e6f2f8", color: PRIMARY_COLOR }}
              >
                Savings
              </span>
            </div>

            <div className="text-center mb-5">
              <p className="text-sm mb-1.5" style={{ color: PRIMARY_COLOR }}>
                Balance
              </p>
              <div className="flex items-center justify-center gap-3">
                <h3
                  className="text-4xl font-bold"
                  style={{ color: PRIMARY_COLOR }}
                >
                  {balanceVisible ? "UGX 50,000" : "UGX ••••••"}
                </h3>
                <button
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  className="hover:bg-gray-100 rounded-full p-1 transition-colors"
                  style={{ color: PRIMARY_COLOR }}
                >
                  {balanceVisible ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>
            </div>

            <div
              className="flex justify-between text-xs mb-5 px-1"
              style={{ color: GRAY_LIGHT }}
            >
              <div>
                <span>Frequency: </span>
                <span className="font-semibold" style={{ color: GRAY_TEXT }}>
                  Monthly
                </span>
              </div>
              <div>
                <span>AutoSave amount:</span>
                <span className="font-semibold" style={{ color: GRAY_TEXT }}>
                  UGX 1,000
                </span>
              </div>
            </div>

            {/* Deposit & Share Medical - Single Container with Yellow Divider */}
            <div className="bg-white rounded-2xl shadow-lg grid grid-cols-2 overflow-hidden">
              <button className="flex flex-col items-center gap-1.5 py-4 hover:bg-gray-50 transition-colors">
                <Wallet
                  size={24}
                  strokeWidth={1.5}
                  style={{ color: PRIMARY_COLOR }}
                />
                <span
                  className="font-semibold text-sm"
                  style={{ color: PRIMARY_COLOR }}
                >
                  Deposit
                </span>
              </button>

              {/* Yellow Divider */}
              <div className="relative">
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12"
                  style={{ backgroundColor: YELLOW_ACTIVE }}
                ></div>
                <button className="flex flex-col items-center gap-1.5 py-4 hover:bg-gray-50 transition-colors w-full">
                  <Send
                    size={24}
                    strokeWidth={1.5}
                    style={{ color: PRIMARY_COLOR }}
                  />
                  <span
                    className="font-semibold text-sm"
                    style={{ color: PRIMARY_COLOR }}
                  >
                    Share Medical
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* L Card (Green Background) */}
          <div className="bg-green-500 rounded-3xl shadow-lg p-8 min-w-[280px] flex-shrink-0 flex items-center justify-center">
            <div className="text-white text-7xl font-bold">L</div>
          </div>

          {/* Additional placeholder cards to show scrollability */}
          <div className="bg-white rounded-3xl shadow-lg p-8 min-w-[280px] flex-shrink-0 flex items-center justify-center">
            <p className="text-gray-400">Card 3</p>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-1.5 mb-5">
          <div
            className="w-6 h-1 rounded-full"
            style={{ backgroundColor: YELLOW_ACTIVE }}
          ></div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {/* Tabs - Horizontal Scroll */}
        <div
          className="flex mb-5 relative overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          <button
            onClick={() => setActiveTab("account")}
            className={`flex-shrink-0 py-3 px-4 font-bold text-xs tracking-wide transition-all relative ${
              activeTab === "account" ? "opacity-100" : "opacity-60"
            }`}
            style={{
              color: activeTab === "account" ? PRIMARY_COLOR : GRAY_LIGHT,
            }}
          >
            ACCOUNT OPTIONS
            {activeTab === "account" && (
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full"
                style={{ backgroundColor: YELLOW_ACTIVE }}
              ></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("invest")}
            className={`flex-shrink-0 py-3 px-4 font-bold text-xs tracking-wide transition-all relative ${
              activeTab === "invest" ? "opacity-100" : "opacity-60"
            }`}
            style={{
              color: activeTab === "invest" ? PRIMARY_COLOR : GRAY_LIGHT,
            }}
          >
            INVEST
            {activeTab === "invest" && (
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full"
                style={{ backgroundColor: YELLOW_ACTIVE }}
              ></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("transactions")}
            className={`flex-shrink-0 py-3 px-4 font-bold text-xs tracking-wide transition-all relative ${
              activeTab === "transactions" ? "opacity-100" : "opacity-60"
            }`}
            style={{
              color: activeTab === "transactions" ? PRIMARY_COLOR : GRAY_LIGHT,
            }}
          >
            TRANSACTIONS
            {activeTab === "transactions" && (
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full"
                style={{ backgroundColor: YELLOW_ACTIVE }}
              ></div>
            )}
          </button>
          <button
            className="flex-shrink-0 py-3 px-4 font-bold text-xs tracking-wide opacity-60"
            style={{ color: GRAY_LIGHT }}
          >
            PORTFOLIO
          </button>
          <button
            className="flex-shrink-0 py-3 px-4 font-bold text-xs tracking-wide opacity-60"
            style={{ color: GRAY_LIGHT }}
          >
            REPORTS
          </button>
        </div>

        {/* Action Cards - Horizontal Scroll */}
        {activeTab === "account" && (
          <div
            className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            <button className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 min-w-[150px] h-[140px] flex-shrink-0 active:scale-95">
              <div
                className="p-3.5 rounded-2xl"
                style={{ backgroundColor: "#e6f2f8" }}
              >
                <Receipt
                  size={32}
                  strokeWidth={1.5}
                  style={{ color: PRIMARY_COLOR }}
                />
              </div>
              <span
                className="font-semibold text-sm text-center leading-tight"
                style={{ color: GRAY_TEXT }}
              >
                Pay Medical Bill
              </span>
            </button>

            <button className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 min-w-[150px] h-[140px] flex-shrink-0 active:scale-95">
              <div
                className="p-3.5 rounded-2xl"
                style={{ backgroundColor: "#e6f2f8" }}
              >
                <DollarSign
                  size={32}
                  strokeWidth={1.5}
                  style={{ color: PRIMARY_COLOR }}
                />
              </div>
              <span
                className="font-semibold text-sm text-center leading-tight"
                style={{ color: GRAY_TEXT }}
              >
                Get Loan
              </span>
            </button>

            <button className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 min-w-[150px] h-[140px] flex-shrink-0 active:scale-95">
              <div
                className="p-3.5 rounded-2xl"
                style={{ backgroundColor: "#e6f2f8" }}
              >
                <Users
                  size={32}
                  strokeWidth={1.5}
                  style={{ color: PRIMARY_COLOR }}
                />
              </div>
              <span
                className="font-semibold text-sm text-center leading-tight"
                style={{ color: GRAY_TEXT }}
              >
                Join MaMas
              </span>
            </button>

            <button className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 min-w-[150px] h-[140px] flex-shrink-0 active:scale-95">
              <div
                className="p-3.5 rounded-2xl"
                style={{ backgroundColor: "#e6f2f8" }}
              >
                <CheckCircle
                  size={32}
                  strokeWidth={1.5}
                  style={{ color: PRIMARY_COLOR }}
                />
              </div>
              <span
                className="font-semibold text-sm text-center leading-tight"
                style={{ color: GRAY_TEXT }}
              >
                My Approvals
              </span>
            </button>

            <button className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 min-w-[150px] h-[140px] flex-shrink-0 active:scale-95">
              <div
                className="p-3.5 rounded-2xl"
                style={{ backgroundColor: "#e6f2f8" }}
              >
                <Receipt
                  size={32}
                  strokeWidth={1.5}
                  style={{ color: PRIMARY_COLOR }}
                />
              </div>
              <span
                className="font-semibold text-sm text-center leading-tight"
                style={{ color: GRAY_TEXT }}
              >
                More Options
              </span>
            </button>
          </div>
        )}

        {activeTab === "invest" && (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
            <p className="text-sm" style={{ color: GRAY_LIGHT }}>
              Investment options coming soon...
            </p>
          </div>
        )}

        {activeTab === "transactions" && (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
            <p className="text-sm" style={{ color: GRAY_LIGHT }}>
              No transactions yet
            </p>
          </div>
        )}

        {/* Footer */}
        <div
          className="text-center mt-12 text-sm"
          style={{ color: GRAY_LIGHT }}
        >
          clinicPesa{" "}
          <span className="font-semibold" style={{ color: PRIMARY_COLOR }}>
            T&Cs
          </span>{" "}
          apply.
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ClinicPesaDashboard;
