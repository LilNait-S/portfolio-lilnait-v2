import Practice from "@/components/Sections/Practice";
import Work from "@/components/Sections/Work";
import DesktopView from "@/components/Views/DesktopView";
import MovileView from "@/components/Views/MovileView";


export default function Home() {
  return (
    <div className="py-4 sm:py-16 max-w-[1300px] mx-auto">
      <DesktopView />
      <MovileView />

      <Work />
      <Practice />
    </div>
  );
}
