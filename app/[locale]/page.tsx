import BentoContainer from "@/components/Bento-container";
import dynamic from "next/dynamic";

export default function Home() {
  const Practice = dynamic(() => import("@/components/Sections/Practice"), {
    ssr: false,
  });
  return (
    <div className="max-w-[1300px] mx-auto mt-20">
      <BentoContainer />
      <Practice />
    </div>
  );
}
