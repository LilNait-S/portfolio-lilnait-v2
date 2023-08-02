"use client";

import { useState } from "react";
import InputRadio from "./FormComponents/InputRadio";

const FilterByTag = () => {
  const [Tag, setTag] = useState("All Projects");

  const handleFilterTag = (e) => {
    setTag(e.target.value);
  };
  return (
    <div className="relative -mx-4 overflow-x-auto px-4 pb-2">
      <fieldset className="flex gap-3">
        <legend className="hidden">Filter by Tag</legend>
        <InputRadio
          title="Todos"
          value="All Projects"
          name="Tag Filter"
          checked={Tag}
          handleChange={handleFilterTag}
        />
        <InputRadio
          title="Independiente"
          value="Freelance"
          name="Tag Filter"
          checked={Tag}
          handleChange={handleFilterTag}
        />
        <InputRadio
          title="Empresas"
          value="Business"
          name="Tag Filter"
          checked={Tag}
          handleChange={handleFilterTag}
        />
      </fieldset>
    </div>
  );
};

export default FilterByTag;
