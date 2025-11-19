import react from "react";

function ActionGrid({ activeTab }: { activeTab: number }) {
  const accountCards = [
    {
      title: "Pay Medical Bill",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 7h6"
            stroke="#004465"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="#004465"
            strokeWidth="1.4"
          />
          <path
            d="M9 16v-3"
            stroke="#004465"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Get Loan",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#004465" strokeWidth="1.4" />
          <path
            d="M12 8v8M8 12h8"
            stroke="#004465"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Join MaMas",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 12a3 3 0 100-6 3 3 0 000 6z"
            stroke="#004465"
            strokeWidth="1.4"
          />
          <path
            d="M4 20v-1a4 4 0 014-4h8a4 4 0 014 4v1"
            stroke="#004465"
            strokeWidth="1.4"
          />
        </svg>
      ),
    },
    {
      title: "My Approvals",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#004465" strokeWidth="1.4" />
          <path
            d="M9 12l2 2 4-4"
            stroke="#004465"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  // 🔥 If activeTab is NOT 0 → return Coming Soon
  if (activeTab !== 0) {
    return (
      <section className="mt-6 px-4 pb-6">
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-md min-h-[160px] text-center">
          <div className="text-lg font-semibold" style={{ color: "#004465" }}>
            Coming Soon After Interview
          </div>
          <p className="text-sm" style={{ color: "#646464" }}>
            This feature will be available after the interview stage.
          </p>
        </div>
      </section>
    );
  }

  // 🔥 Default: return real cards
  return (
    <section className="mt-6 grid grid-cols-2 gap-4 bg-gray-100 px-4 pb-6">
      {accountCards.map((c) => (
        <button
          key={c.title}
          className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all active:scale-95 min-h-[140px]"
        >
          <div className="p-3.5 rounded-2xl bg-blue-50">{c.icon}</div>
          <div
            className="text-sm font-semibold text-center"
            style={{ color: "#646464" }}
          >
            {c.title}
          </div>
        </button>
      ))}
    </section>
  );
}

export default ActionGrid;
