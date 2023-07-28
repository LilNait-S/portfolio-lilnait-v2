import Hour from "./components/Hour";
import Twitter from "./components/Twitter";
import LargeDate from "./components/LargeDate";
import Tec from "./components/Tec";
import Aboutme from "./components/Aboutme";
import TecMovile from "./components/TecMovile";
import HourMovile from "./components/HourMovile";
import DesktopView from "./components/DesktopView";
import TwitterMovile from "./components/TwitterMovile";

export default function Home() {
  return (
    <div className="py-16 max-w-[1180px] mx-auto">
      <DesktopView />
      <div className="grid auto-rows-[100px] grid-cols-2 sm:grid-cols-4 lg:auto-rows-[150px] lg:grid-cols-8 gap-5 lg:hidden">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`${
              i === 0 ? "row-span-4 col-span-2 lg:row-span-2 lg:col-span-6" : ""
            }
            ${i === 1 ? "col-span-2 lg:row-span-1 lg:col-span-2" : ""} 
            ${
              i === 2
                ? "row-span-2 fd:row-span-3 col-span-2 lg:row-span-3 lg:col-span-2"
                : ""
            } 
            ${
              i === 3 || i === 7
                ? "row-span-5 fd:row-span-4 col-span-2 lg:row-span-2 lg:col-span-2"
                : ""
            } 
            ${
              i === 4 || i === 5 ? "col-span-2 lg:row-span-2 lg:col-span-4" : ""
            }
            ${i === 6 ? "row-span-3 col-span-2" : ""}
            rounded-xl  border-slate-400/10  ${i !== 2 && i !== 5 ? "p-4" : ""} 
            bg-[#0D0D0E]
           `}
          >
            {i === 0 && <Aboutme />}
            {i === 1 && (
              <div className="relative flex justify-center items-center h-full ">
                <div className="relative">
                  <h2 className="relative text-2xl lg:text-4xl font-bold purple_gradient">
                    Perú
                  </h2>
                  <img
                    src="/peru.svg"
                    className="absolute top-[-5px] right-[-25px] lg:top-6 h-[20px] w-[20px]"
                  />
                </div>
              </div>
            )}
            {i === 2 && (
              <>
                {/* Card Desktop */}
                <img
                  src="/china.png"
                  className="object-cover h-full w-full rounded-xl hidden lg:block"
                />
                {/* Card Movile */}
                <div className="flex flex-col justify-center items-center h-full gap-3">
                  <h2 className="text-xl purple_gradient font-bold">
                    Desarrollador web
                  </h2>
                  <h2 className="text-xl purple_gradient font-bold">UX/UI</h2>
                  <h2 className="text-xl purple_gradient font-bold">
                    Frontend
                  </h2>
                </div>
              </>
            )}
            {i === 3 && (
              <>
                {/* Card Desktop */}
                <div className="flex-col justify-center items-center h-full gap-3 hidden lg:flex">
                  <h2 className="text-xl purple_gradient font-bold">
                    Desarrollador web
                  </h2>
                  <h2 className="text-xl purple_gradient font-bold">UX/UI</h2>
                  <h2 className="text-xl purple_gradient font-bold">
                    Frontend
                  </h2>
                </div>
                {/* Card Movile */}
                <TecMovile />
              </>
            )}
            {i === 4 && (
              <>
                {/* Card Desktop */}
                <Tec />
                {/* Card Movile */}
                <HourMovile />
              </>
            )}
            {i === 5 && (
              <>
                {/* Card Desktop */}
                <img
                  src="/sudio.gif"
                  className="object-cover h-full w-full rounded-xl hidden lg:block"
                />
                {/* Card Movile */}
                <LargeDate />
              </>
            )}
            {i === 6 && (
              <>
                <TwitterMovile />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
