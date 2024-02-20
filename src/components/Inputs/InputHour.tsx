import React from "react";

const InputHour: React.FC = () => {
  return (
    <div>
      <h3 className="text-whiteColor text-sm">Fijar horas</h3>
      <div className="bg-whiteColor h-10 flex rounded-lg items-center px-2">
        <div className="bg-whiteColor h-10 flex rounded-lg items-center px-2">
          <input
            type="time"
            className="w-full outline-none border-none focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
export default InputHour;
