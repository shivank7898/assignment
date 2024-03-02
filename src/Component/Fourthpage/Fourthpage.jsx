import React from "react";
import image from "../../Assets/qq.png";
import Image from "next/image";
import BigCard from "../Common/BigCard/BigCard";

const Fourthpage = () => {
  const steps = {
    title: "How to create English subtitles for a French video?",
    items: [
      {
        heading: "Upload your file.",
        description:
          "With our uploader, you can import your file from anywhere, whether it's on your laptop, Google Drive, Youtube, or Dropbox.",
      },
      {
        heading: "Select 'French'.",
        description: "Determine the language of the audio of your video.",
      },
      {
        heading: "Select 'Human made'.",
        description:
          "With our Human-Made service, the original (French) subtitles will be created by a native subtitler and proofread by an experienced reviewer.",
      },
      {
        heading: "Toggle 'Translate subtitles to another language'.",
        description:
          "Select 'English' to determine the target language for the subtitle translation process.",
      },
      {
        heading:
          "Get notified when your French and English subtitles are ready.",
        description:
          "Receive an email when the subtitles have been created within 24 hours for the French subtitles and 3-5 days for English subtitles.",
      },
      {
        heading: "Receive your subtitles.",
        description: "Access your subtitles from the dashboard.",
      },
      {
        heading: "Click on 'Export' and choose your preferred file format.",
        description:
          "You can export to SRT, VTT, and many more. It's that easy to have your video professionally subtitled!",
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "70px",
        marginTop: "100px",
      }}
    >
      <div style={{ width: "550px", height: "500px" }}>
        <Image src={image} layout="responsive" objectFit="contain" />
      </div>
      <div>
        <BigCard steps={steps} />
      </div>
    </div>
  );
};

export default Fourthpage;
