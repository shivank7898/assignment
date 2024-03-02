import React from "react";
import france from "../../Assets/france.png";
import usa from "../../Assets/us.png";
import svg1 from "../../Assets/ee.svg";
import svg2 from "../../Assets/ff.svg";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import Button from "../Common/Button/Button";

const Landingpage = () => {
  return (
    <div className="section mx-auto my-20">
      <div className="main mx-auto mt-10 w-3/5 h-3/5 flex flex-col items-center gap-10">
        <div className="top w-full bg-white flex justify-center items-center gap-5">
          <Image src={france} alt="flag" width="60" height="60" />
          <HiArrowLongRight />
          <Image src={usa} alt="flag" width="60" height="60" />
        </div>
        <div className="middle text-6xl font-bold text-center">
          <h1> French video with English subtitles </h1>
        </div>
        <div className="bottom flex flex-col items-center gap-10">
          <div className="bottom-top w-4/5 text-center text-gray-600">
            Want your videos to reach a wider audience who speaks English? This
            service is ideal for your audiovisual content - from online videos,
            television shows, films, documentaries, marketing content and more!
          </div>
          <div className="bottom-btm flex flex-col items-center gap-5">
            <div className="btm-top flex flex-col gap-8     ">
              <Button text={"Get Started"} className={"text-2xl"} />
              <div className="flex justify-center">
                <Image src={svg1} width="90" height="60" />
                <Image src={svg2} width="90" height="40" />
              </div>
            </div>
            <div className="btm-bottom text-sm text-gray-600">
              Rated<b>4.8/5</b> based on 850+ reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
