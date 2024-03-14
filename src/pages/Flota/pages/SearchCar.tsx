import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import FormHome from "../../../components/FormHome/FormHome";
import { FlotaCard } from "../../../components/FlotaCard/FlotaCard";

import FormSide from "../../../components/Forms/FormSide";
// import { FlotaCardProps } from "../../../components/FlotaCard/FlotaCard";

interface SearchCarProps {
  // Define los tipos de props si es necesario
}

const SearchCar: React.FC<SearchCarProps> = () => {
  return (
    <div className="w-full m-auto mt-5 flex ">

         <div className="w-96 px-2 h-full flex ">
             <FormSide />
        </div>


        <div className="flex flex-col w-full m-auto items-center gap-5 mb-10">
        <div className="flex w-full flex-col my-5 gap-5">
          {/* <div>
            <p>/Flota</p>
          </div> */}
        </div>
        <FlotaCard />
        <FlotaCard />
        <FlotaCard />
        <FlotaCard />
        <FlotaCard />
      </div>
    

        {/* <div className="w-96 px-2 h-auto bg-terciary flex ">
     
      
    </div> */}
    </div>
  );
};

export default SearchCar;
