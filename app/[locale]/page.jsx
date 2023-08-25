import Work from "@/components/Sections/Work";
import DesktopView from "@/components/BentoViews/DesktopView";
import MovileView from "@/components/BentoViews/MovileView";
import dynamic from "next/dynamic";

export default function Home() {
  const Practice = dynamic(() => import("@/components/Sections/Practice"), {
    ssr: false,
  });
  return (
    <div className="max-w-[1300px] mx-auto">
      <DesktopView />
      <MovileView />

      <Work />
      <Practice />
    </div>
  );
}
