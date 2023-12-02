import BentoContainer from "@/components/Bento-container";
import FigmaDesigns from "@/components/Sections/Figma-designs";
import Works from "@/components/Sections/Works";

import dynamic from "next/dynamic";

export default function Home() {
  const Practice = dynamic(() => import("@/components/Sections/Projects"), {
    ssr: false,
  });
  return (
    <div className="max-w-[1300px] mx-auto mt-20">
      <BentoContainer />
      <FigmaDesigns />
      <Works />
      <Practice />
    </div>
  );
}
