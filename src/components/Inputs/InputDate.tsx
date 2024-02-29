import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const InputDate: React.FC = () => {
  return (
    <div className="w-full md:w-1/2">
      <h3 className="text-whiteColor text-sm">
        Fecha de entrega / devolucioin
      </h3>
      <div className="bg-whiteColor h-10 flex rounded-lg items-center px-2">
        <input
          type="date"
          className="w-full outline-none border-none focus:outline-none bg-transparent"
        />
        <RiArrowRightSLine className="text-xl w-10 " />

        <input
          type="date"
          className="w-full outline-none border-none focus:outline-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default InputDate;
