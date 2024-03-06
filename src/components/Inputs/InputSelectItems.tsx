"use client";
import React from "react";
import Select from "react-select";

interface Data {
  value: string;
  label: string;
}

const countrys: Data[] = [
  {
    value: "1",
    label: "100 Km",
  },
  {
    value: "2",
    label: "200km",
  },
];

const InputSelectItems: React.FC = () => {
  return (
    <div>
      <div className="bg-whiteColor h-10 flex rounded-lg items-center px-2">
      
        <Select
          options={countrys}
          className="w-full outline-none"
          styles={{
            control: (provided) => ({
              ...provided,
              border: "none",
              boxShadow: "none",
              "&:hover": {
                border: "none",
              },
            }),
          }}
        />
      </div>
    </div>
  );
};

export default InputSelectItems;
