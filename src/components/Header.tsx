import React from "react";

type Props = {
  appName: string;
  greetingName?: string;
};

export default function Header({ appName, greetingName }: Props) {
  return (
    <header
      className="pt-6 pb-12 px-4 flex items-center justify-between text-white"
      style={{ backgroundColor: "#004465" }}
    >
      <button
        aria-label="back"
        className="p-2 hover:opacity-80 transition-opacity"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M15 18L9 12l6-6"
            stroke="#ffcb05"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="text-center">
        <div className="text-xl font-bold tracking-wide">{appName}</div>
        <div className="text-sm mt-1">
          Good Morning{greetingName ? `, ${greetingName}` : ""}
        </div>
      </div>

      <button
        aria-label="close"
        className="p-2 hover:opacity-80 transition-opacity"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M18 6L6 18M6 6l12 12"
            stroke="#ffcb05"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </header>
  );
}
