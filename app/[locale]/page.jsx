import Practice from "@/components/Sections/Practice";
import Work from "@/components/Sections/Work";
import DesktopView from "@/components/BentoViews/DesktopView";
import MovileView from "@/components/BentoViews/MovileView";

export default function Home() {
  return (
    <div className="max-w-[1300px] mx-auto">
      <DesktopView />
      <MovileView />

      <Work />
      <Practice />
    </div>
  );
}
