import React, { useRef, useState } from "react";

type prop = {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  tabs?: string[];
};

export default function Tabs({ activeTab, setActiveTab, tabs = [] }: prop) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // scroll speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="mt-6 py-2 max-h-fit">
      <div
        ref={containerRef}
        className="flex border-b border-gray-200 overflow-x-auto scrollbar-none cursor-grab"
        style={{ WebkitOverflowScrolling: "touch" }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActiveTab(i)}
            className={`flex-shrink-0 w-1/3 font-bold pb-3 relative transition-colors uppercase whitespace-nowrap ${
              i === activeTab ? "text-[--primary-color]" : "text-[--gray-text] "
            }`}
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
