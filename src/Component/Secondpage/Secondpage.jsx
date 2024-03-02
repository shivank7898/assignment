import React from "react";
import Image from "next/image";
import spoti from "../../Assets/ss.png";
import Card from "../Common/Card/Card";

const Secondpage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 md:gap-20">
      <div className="text-center">
        <p className="text-base font-normal text-gray-600">
          Trusted by 100,000+ users and teams of all sizes.
        </p>
        <div className="flex justify-center gap-10 md:gap-20">
          <Image src={spoti} className="w-[9%] object-cover" />
          <Image src={spoti} className="w-[9%] object-cover" />
          <Image src={spoti} className="w-[9%] object-cover" />
          <Image src={spoti} className="w-[9%] object-cover" />
          <Image src={spoti} className="w-[9%] object-cover" />
          <Image src={spoti} className="w-[9%] object-cover" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="text-4xl font-bold text-center">How does it work?</div>
        <div className="flex justify-center gap-10 w-4/5 md:w-4/4 lg:w-3/3">
          <Card
            num={1}
            title="Upload."
            description="Upload your French videos, your URLs, or pull from Youtube, Vimeo, Drive, and more."
            numBgColor="bg-pink-400"
            cardWidth="w-1/3"
          />
          <Card
            num={2}
            title="Create & Translate."
            description="A subtitler will create the original (French) subtitles. A English subtitle translator will translate the subtitles."
            numBgColor="bg-blue-700"
            cardWidth="w-1/3"
          />
          <Card
            num={3}
            title="Download."
            description="Your file will appear on your dashboard with the perfect English subtitles."
            numBgColor="bg-blue-900"
            cardWidth="w-1/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
