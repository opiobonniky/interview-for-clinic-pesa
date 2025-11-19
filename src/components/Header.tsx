import React from "react";
import { ArrowLeft, X } from "lucide-react";

type Props = {
  appName: string;
  greetingName?: string;
};

export default function Header({ appName, greetingName }: Props) {
  return (
    <header className="pt-6 pb-12 md:pt-10 md:pb-16 px-4 flex items-center justify-between text-white bg-[var(--primary-color)]">
      {/* Back Button */}
      <button
        aria-label="back"
        className="p-2 hover:opacity-80 transition-opacity"
      >
        <ArrowLeft
          size={22}
          strokeWidth={2}
          className="text-[var(--yellow-active)]"
        />
      </button>

      {/* Center Text */}
      <div className="text-center">
        <div className="text-xl font-bold tracking-wide">{appName}</div>
        <div className="text-sm mt-1">
          Good Morning{greetingName ? `, ${greetingName}` : ""}
        </div>
      </div>

      {/* Close / Exit Button */}
      <button
        aria-label="close"
        className="p-2 hover:opacity-80 transition-opacity"
      >
        <X size={22} strokeWidth={2} className="text-[var(--yellow-active)]" />
      </button>
    </header>
  );
}
