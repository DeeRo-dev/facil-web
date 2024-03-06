import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FormHome from "../../../components/FormHome/FormHome";
import { FlotaCard } from "../../../components/FlotaCard/FlotaCard";
// import { FlotaCardProps } from "../../../components/FlotaCard/FlotaCard";

interface SearchCarProps {
  // Define los tipos de props si es necesario
}

const SearchCar: React.FC<SearchCarProps> = () => {
  return (
    <div className="w-full m-auto mt-5 flex ">

         <div className="w-96 px-2 h-auto bg-terciary flex ">
             {/* <FormHome /> */}
        </div>


        <div className="flex flex-col w-full m-auto items-center">
        <div className="flex w-full flex-col my-5">
          <div className="flex">
            <div className="pl-15">
              <Link to="/" className="flex items-center">
                <FaArrowLeftLong />
                <p className="ml-2">Volver</p>
              </Link>
            </div>
            <h2 className="text-xl ml-15 font-semibold text-colorText m-auto">
              Nueva Reserva
            </h2>
          </div>
          <div>
            <p>/Flota</p>
          </div>
        </div>
        <FlotaCard />
      </div>
    

        {/* <div className="w-96 px-2 h-auto bg-terciary flex ">
     
      
    </div> */}
    </div>
  );
};

export default SearchCar;
