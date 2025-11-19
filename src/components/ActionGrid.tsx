import {
  Users,
  CheckCircle,
  LucideCircleDollarSign,
  HandCoinsIcon,
} from "lucide-react";

function ActionGrid({ activeTab }: { activeTab: number }) {
  const accountCards = [
    {
      title: "Pay Medical Bill",
      icon: (
        <LucideCircleDollarSign size={32} strokeWidth={1.5} color="#004465" />
      ),
    },
    {
      title: "Get Loan",
      icon: <HandCoinsIcon size={32} strokeWidth={1.5} color="#004465" />,
    },
    {
      title: "Join MaMas",
      icon: <Users size={32} strokeWidth={1.5} color="#004465" />,
    },
    {
      title: "My Approvals",
      icon: <CheckCircle size={32} strokeWidth={1.5} color="#004465" />,
    },
  ];

  //  If activeTab is NOT 0 → show placeholder box for this interview
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

  // Default visible card grid (always 2 columns)
  return (
    <section className="mt-6 grid grid-cols-2 gap-4 bg-gray-100 px-4 pb-6">
      {accountCards.map((c) => (
        <button
          key={c.title}
          className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all active:scale-95 min-h-[140px]"
        >
          <div className="p-3.5 rounded-2xl bg-transparent">{c.icon}</div>
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
