import Fourthpage from "@/Component/Fourthpage/Fourthpage";
import Landingpage from "@/Component/Landingpage/Landingpage";
import Secondpage from "@/Component/Secondpage/Secondpage";
import Thirdpage from "@/Component/Thirdpage/Thirdpage";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Landingpage />
      <Secondpage />
      <Thirdpage />
      <Fourthpage />
    </main>
  );
}
