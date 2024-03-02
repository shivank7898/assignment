import React from "react";
import Image from "next/image";
import image from "../../../Assets/ww.png";

const RevCard = ({ textPosition, heading, description, imageSrc }) => {
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto">
      {textPosition === "left" && (
        <>
          <div className="text w-2/5 flex flex-col gap-4">
            <div className="head text-4xl font-bold">{heading}</div>
            <div className="para text-gray-700 font-medium w-3/4">
              {description}
            </div>
          </div>
          <div className="image ml-4">
            <Image
              src={imageSrc}
              width={500}
              height={500}
              objectFit="contain"
            />
          </div>
        </>
      )}
      {textPosition === "right" && (
        <>
          <div className="image mr-4">
            <Image
              src={imageSrc}
              width={500}
              height={500}
              objectFit="contain"
            />
          </div>
          <div className="text w-2/5 flex flex-col gap-4">
            <div className="head text-4xl font-bold">{heading}</div>
            <div className="para text-gray-700 font-medium w-3/4">
              {description}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RevCard;
