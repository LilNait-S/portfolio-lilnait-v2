"use client";

import { IconsPromptopia, tagsPractice } from "@/constant";
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

      <PracticeCard
        title="Promptopia"
        src="/promptopia.png"
        alt="Promptopia logo"
        LinkGithub="/"
        LinkProject="/"
        paragraph="Sitio donde puedes compartir tus mejores prompt con la comunidad, puedes registrarte con tu gmail, crea, edita o comparte tus prompt."
        iconsTec={IconsPromptopia}
      />
    </section>
  );
};

export default Practice;
