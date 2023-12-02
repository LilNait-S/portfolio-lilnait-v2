import { imgsDesigns } from "@/constant/designs";
import React from "react";

const FigmaDesigns = () => {
  return (
    <section id="figma" className="flex flex-col mt-28 rounded-xl gap-5">
      <h2 className="text-3xl font-bold">Figma Designs</h2>
      <div className="columns-2 lg:columns-3 sm:gap-8 mt-8">
        {imgsDesigns.map((entry) => (
          <img
            key={entry.src}
            src={entry.src}
            alt={entry.alt}
            className="rounded-lg mb-4 sm:mb-8"
          />
        ))}
      </div>
    </section>
  );
};

export default FigmaDesigns;
