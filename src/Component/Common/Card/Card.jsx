import React from "react";

const Card = ({ num, title, description, numBgColor, cardWidth }) => {
  return (
    <div
      className={`main border-2 border-gray-200 rounded-lg p-7 space-y-6 ${cardWidth}`}
    >
      <div className="top flex items-center gap-2">
        <div
          className={`num rounded-lg px-3 py-1 text-white font-bold ${numBgColor}`}
        >
          {num}
        </div>
        <div className="text text-xl font-semibold text-gray-700">{title}</div>
      </div>
      <div className="bottom text-gray-500">{description}</div>
    </div>
  );
};

export default Card;
