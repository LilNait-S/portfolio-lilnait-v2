"use client";

import { Practices, tagsPractice } from "@/constant";
import FilterByTagCopy from "../FilterByTagCopy";
import { useState } from "react";
import PracticeCard from "../PracticeCard";

const Practice = () => {
  const [Tag, setTag] = useState("All Projects");

  const handleFilterTag = (e) => {
    setTag(e.target.value);
  };

  return (
    <section className="flex flex-col mt-10 bg-[#0D0D0E] p-12 rounded-xl gap-5">
      <header className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Practicas personales</h2>
        <FilterByTagCopy
          tags={tagsPractice}
          checked={Tag}
          handleChange={handleFilterTag}
        />
      </header>
      <div className="grid grid-cols-2 auto-rows-[300px] place-items-center">
        {Practices.map(
          ({
            Project: {
              title,
              paragraph,
              date,
              src,
              alt,
              LinkGithub,
              LinkProject,
              icons,
            },
          }) => (
            <PracticeCard
              key={title}
              title={title}
              src={src}
              alt={alt}
              LinkGithub={LinkGithub}
              LinkProject={LinkProject}
              paragraph={paragraph}
              iconsTec={icons}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Practice;
