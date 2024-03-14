import React from "react";

import { FlotaCard } from "../../../components/FlotaCard/FlotaCard";

import FormSide from "../../../components/Forms/FormSide";


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
