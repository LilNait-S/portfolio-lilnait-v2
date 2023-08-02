import Aboutme from "../Bento/Aboutme";
import Country from "../Bento/Country";
import Knowledge from "../Bento/Knowledge";
import LargeDate from "../Bento/LargeDate";
import Tec from "../Bento/Tec";
import Twitter from "../Bento/Twitter";
import Hour from "../Bento/Hour";

const MovileView = () => {
  return (
    <div className="grid auto-rows-[100px] grid-cols-2 sm:grid-cols-4 lg:auto-rows-[150px] lg:grid-cols-8 gap-5 lg:hidden">
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className={`${
            i === 0 ? "row-span-4 col-span-2 lg:row-span-2 lg:col-span-6" : ""
          } ${i === 1 ? "col-span-2 lg:row-span-1 lg:col-span-2" : ""} 
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
        ${i === 4 || i === 5 ? "col-span-2 lg:row-span-2 lg:col-span-4" : ""}
        ${i === 6 ? "row-span-3 col-span-2" : ""}
        ${i !== 2 && i !== 5 ? "p-4" : ""} 
        rounded-xl  border-slate-400/10 bg-[#0D0D0E]
       `}
        >
          {i === 0 && <Aboutme />}
          {i === 1 && <Country />}
          {i === 2 && <Knowledge />}
          {i === 3 && <Tec />}
          {i === 4 && <Hour />}
          {i === 5 && <LargeDate />}
          {i === 6 && <Twitter />}
        </div>
      ))}
    </div>
  );
};

export default MovileView;
