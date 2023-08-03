import Aboutme from "../Bento/Aboutme";
import Tec from "../Bento/Tec";
import LargeDate from "../Bento/LargeDate";
import Hour from "../Bento/Hour";
import Twitter from "../Bento/Twitter";
import Country from "../Bento/Country";
import Knowledge from "../Bento/Knowledge";

const DesktopView = () => {
  return (
    <div className="auto-rows-[100px] grid-cols-2 lg:auto-rows-[150px] lg:grid-cols-8 gap-5 hidden lg:grid">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className={`${
            i === 0 ? "row-span-4 col-span-2 lg:row-span-2 lg:col-span-6" : ""
          }
            ${
              i === 1 || i === 6 || i === 8
                ? "col-span-2 lg:row-span-1 lg:col-span-2"
                : ""
            } 
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
            rounded-xl  border-slate-400/10  ${i !== 2 && i !== 5 ? "p-4" : ""} 
            bg-[#0D0D0E]
           `}
        >
          {i === 0 && <Aboutme />}
          {i === 1 && <Country />}
          {i === 2 && (
            <img
              src="/china.webp"
              className="object-cover h-full w-full rounded-xl hidden lg:block"
            />
          )}
          {i === 3 && <Knowledge />}
          {i === 4 && <Tec />}
          {i === 5 && (
            <img
              src="/sudio.gif"
              className="object-cover h-full w-full rounded-xl hidden lg:block"
            />
          )}
          {i === 6 && <Hour />}
          {i === 7 && <Twitter />}
          {i === 8 && <LargeDate />}
        </div>
      ))}
    </div>
  );
};

export default DesktopView;
