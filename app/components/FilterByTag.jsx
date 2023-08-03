'use client'

import InputRadio from "./FormComponents/InputRadio";

const FilterByTag = ({ tags, checked, handleChange }) => {
  return (
    <div className="relative -mx-4 overflow-x-auto px-4 pb-2">
      <fieldset className="flex gap-3">
        <legend className="sr-only">Filter by Tag</legend>
        {tags.map(({ title, value, named }) => (
          <InputRadio
            key={title}
            title={title}
            value={value}
            name={named}
            checked={checked}
            handleChange={handleChange}
          />
        ))}
      </fieldset>
    </div>
  );
};

export default FilterByTag;
