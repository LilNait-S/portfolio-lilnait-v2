import Aboutme from "./Bento/Aboutme";
import Tec from "./Bento/Tec";
import LargeDate from "./Bento/LargeDate";
import Hour from "./Bento/Hour";
import Twitter from "./Bento/Twitter";
import Country from "./Bento/Country";
import Knowledge from "./Bento/Knowledge";
import Tiktok from "./Bento/Tiktok";

const BentoContainer = () => {
  return (
    <div
      id="about-me"
      className="auto-rows-[100px] grid grid-cols-2 sm:grid-cols-4 lg:auto-rows-[150px] lg:grid-cols-8 gap-5"
    >
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={`${
            i === 0
              ? "row-span-3 sm:row-span-4 col-span-2 lg:row-span-2 lg:col-span-4"
              : ""
          }
            ${
              i === 2
                ? "col-span-1 row-span-2 sm:col-span-2 lg:row-span-1 lg:col-span-2"
                : ""
            } 
            ${
              i === 7 || i === 9
                ? "col-span-2 row-span-2 sm:col-span-2 lg:row-span-1 lg:col-span-2"
                : ""
            }
            ${
              i === 3
                ? "row-span-4 col-span-1 fd:row-span-3 sm:col-span-2 lg:row-span-3 lg:col-span-2"
                : ""
            } 
            ${
              i === 1 || i === 8
                ? "row-span-2 col-span-2 fd:row-span-4 lg:row-span-2 lg:col-span-2"
                : ""
            } 
            ${
              i === 4
                ? "col-span-1 row-span-2 sm:col-span-2 fd:row-span-4 lg:row-span-2 lg:col-span-2"
                : ""
            }
            ${
              i === 5 ? "row-span-5 col-span-2 lg:row-span-2 lg:col-span-4" : ""
            }
            ${
              i === 6 ? "row-span-2 col-span-2 lg:row-span-2 lg:col-span-4" : ""
            }
            rounded-xl border-slate-400/10  ${i !== 3 && i !== 6 ? "p-4" : ""} 
            bg-[#18111f8a] border-2 border-slate-400/10 bg-radial-gradient-farthest
           `}
        >
          {i === 0 && <Aboutme />}
          {i === 1 && <Knowledge />}
          {i === 2 && <Country />}
          {i === 3 && (
            <video
              className="object-cover h-full w-full rounded-xl lg:block"
              src="darkpokes.mp4"
              autoPlay={true}
              muted={true}
              loop={true}
            ></video>
          )}
          {i === 4 && <Tiktok />}
          {i === 5 && <Tec />}
          {i === 6 && (
            <video
              className="object-cover h-full w-full rounded-xl lg:block"
              src="hollow.mp4"
              autoPlay={true}
              muted={true}
              loop={true}
            ></video>
          )}
          {i === 7 && <Hour />}
          {i === 8 && <Twitter />}
          {i === 9 && <LargeDate />}
        </div>
      ))}
    </div>
  );
};

export default BentoContainer;
