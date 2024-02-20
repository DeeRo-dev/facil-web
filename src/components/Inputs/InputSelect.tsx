"use client";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Select from "react-select";

interface Data {
  value: string;
  label: string;
}

const countrys: Data[] = [
  {
    value: "1",
    label: "Mendoza",
  },
  {
    value: "2",
    label: "San Juan",
  },
];

const InputSelect: React.FC = () => {
  return (
    <div>
      <h3 className="text-whiteColor text-sm">Seleccionar oficina</h3>
      <div className="bg-whiteColor h-10 flex rounded-lg items-center px-2">
        {/* <div className="w-5 h-5"></div> */}
        <CiLocationOn className="text-lg" />

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

export default InputSelect;
