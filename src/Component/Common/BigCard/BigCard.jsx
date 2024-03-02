import React from "react";

const BigCard = ({ steps }) => {
  return (
    <div className="max-w-lg mx-auto bg-white border-2 border-gray-200 rounded-lg p-6">
      <div className="text-3xl font-semibold mb-6">{steps.title}</div>
      <div className="space-y-6">
        {steps.items.map((item, index) => (
          <div key={index}>
            <div className="flex items-center">
              <div className="text-lg font-medium mr-2">{`${index + 1}.`}</div>
              <div className="text-lg font-medium">{item.heading}</div>
            </div>
            <div className="text-base">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigCard;
