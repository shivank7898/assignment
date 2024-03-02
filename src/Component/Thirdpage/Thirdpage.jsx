import React from "react";
import Image from "next/image";
import image from "../../Assets/qq.png";
import RevCard from "../Common/ReverseCard/RevCard";
import image2 from "../../Assets/ww.png";
import image3 from "../../Assets/rr.png";
import image4 from "../../Assets/tt.png";
import Button from "../Common/Button/Button";
const Thirdpage = () => {
  return (
    <div className="main flex flex-col items-center mt-20 gap-10 spacey-10">
      <p className="text-4xl font-bold mb-5">Features</p>
      <div>
        <Image src={image} className="mb-20" />
      </div>

      <RevCard
        textPosition="left"
        heading="100% Human Translation Customization"
        description="All your translations are done by one of our French to English subtitle translators to ensure the absolute highest quality. No machines are used here, just the talents and abilities of our translators."
        imageSrc={image2}
      />
      <RevCard
        textPosition="right"
        heading="100% Human Translation Customization"
        description="All your translations are done by one of our French to English subtitle translators to ensure the absolute highest quality. No machines are used here, just the talents and abilities of our translators."
        imageSrc={image4}
      />
      <RevCard
        textPosition="left"
        heading="100% Human Translation Customization"
        description="All your translations are done by one of our French to English subtitle translators to ensure the absolute highest quality. No machines are used here, just the talents and abilities of our translators."
        imageSrc={image3}
      />
      <div className="mt-10">
        <Button text={"Get Started"} />
      </div>
    </div>
  );
};

export default Thirdpage;
