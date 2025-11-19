import React from "react";

const ActiveMenuIndicator = ({ activeIndex = 1 }) => {
  return (
    <div className="flex justify-center mt-4 gap-4 mb-2">
      {[0, 1, 2].map((idx) => (
        <span
          key={idx}
          className={`h-1 rounded-full ${idx === activeIndex ? "w-6" : "w-2"}`}
          style={{
            backgroundColor: idx === activeIndex ? "#ffcb05" : "gray",
          }}
        />
      ))}
    </div>
  );
};

export default ActiveMenuIndicator;
