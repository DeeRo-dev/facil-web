import { BtnForm } from "../../../components/Btns/BtnForm";
import { GiPathDistance } from "react-icons/gi";
import { BiPlusCircle } from "react-icons/bi";
import CustomizedCheckbox from "../../../components/Btns/CheckBox/CheckBox";

import InputSelectItems from "../../../components/Inputs/InputSelectItems";
import { Link } from "react-router-dom";
import ReservationData from "../../../components/reservationData/ReservationData";

const AddOptions: React.FC = () => {
  return (
    <div className="w-full m-auto mt-5 flex ">
      <div className="w-96 px-2 h-full  flex ">
       <ReservationData/>
      </div>

      <div className="flex w-full  items-center justify-center">
        <div className="w-11/12 bg-whiteColor rounded-lg">
          <div className="p-5 flex flex-col gap-4">
            <h4 className="text-xl	font-semibold text-colorText mt-4">
              Coberturas y Protecciones
            </h4>
            {/* Empieza el items */}
            <div className="flex items-center p-4 border-b-2 border-grey justify-between">
              <div className="flex items-center">
                <div className="bg-terciary p-3 rounded-full">
                  <GiPathDistance className=" text-whiteColor text-2xl " />
                </div>
                <p className="text-lg font-normal text-colorText ml-5">
                  Km libre
                </p>
              </div>
              <div className="flex">
                <span className="text-2xl font-bold text-colorText">$9999</span>
                <CustomizedCheckbox />
              </div>
            </div>
            {/* Termina el itemr */}
            {/* Empieza el items */}
            <div className="flex items-center p-4 border-b-2 border-grey justify-between">
              <div className="flex items-center">
                <div className="bg-terciary p-3 rounded-full">
                  <BiPlusCircle className=" text-whiteColor text-2xl " />
                </div>
                <p className="text-lg font-normal text-colorText ml-5">
                  Km Extra
                </p>
              </div>
              <div className="flex">
                <InputSelectItems/>
                <span className="text-2xl font-bold text-colorText">$9999</span>
                <CustomizedCheckbox />
              </div>
            </div>
            {/* Termina el itemr */}
          </div>
          <div className="p-5">
            <h4 className="text-xl	font-semibold text-colorText mt-4">
              Equipos y Servicios
            </h4>
            {/* Empieza el items */}
            <div className="flex items-center p-4 border-b-2 border-grey justify-between">
              <div className="flex items-center">
                <div className="bg-terciary p-3 rounded-full">
                  <GiPathDistance className=" text-whiteColor text-2xl " />
                </div>
                <p className="text-lg font-normal text-colorText ml-5">
                  Tanque lleno (Devuelve sin reponer combustible)
                </p>
              </div>
              <div className="flex">
                <span className="text-2xl font-bold text-colorText">$9999</span>
                <CustomizedCheckbox />
              </div>
            </div>
            {/* Termina el itemr */}
            {/* Empieza el items */}
            <div className="flex items-center p-4 border-b-2 border-grey justify-between">
              <div className="flex items-center">
                <div className="bg-terciary p-3 rounded-full">
                  <GiPathDistance className=" text-whiteColor text-2xl " />
                </div>
                <p className="text-lg font-normal text-colorText ml-5">
                Entrega en hotel hasta 5km
                </p>
              </div>
              <div className="flex">
                <span className="text-2xl font-bold text-colorText">$9999</span>
                <CustomizedCheckbox />
              </div>
            </div>
            {/* Termina el itemr */}
            {/* Empieza el items */}
            <div className="flex items-center p-4 border-b-2 border-grey justify-between">
              <div className="flex items-center">
                <div className="bg-terciary p-3 rounded-full">
                  <GiPathDistance className=" text-whiteColor text-2xl " />
                </div>
                <p className="text-lg font-normal text-colorText ml-5">
                 Devolucion en hotel hasta 5km
                </p>
              </div>
              <div className="flex">
                <span className="text-2xl font-bold text-colorText">$9999</span>
                <CustomizedCheckbox />
              </div>
            </div>
            {/* Termina el itemr */}
            {/* Empieza el items */}
            <div className="flex items-center p-4 border-b-2 border-grey justify-between">
              <div className="flex items-center">
                <div className="bg-terciary p-3 rounded-full">
                  <GiPathDistance className=" text-whiteColor text-2xl " />
                </div>
                <p className="text-lg font-normal text-colorText ml-5">
                  Permiso Chile
                </p>
              </div>
              <div className="flex">
                <span className="text-2xl font-bold text-colorText">$9999</span>
                <CustomizedCheckbox />
              </div>
            </div>
            {/* Termina el itemr */}
            {/* Empieza el items */}
            <div className="flex items-center p-4 border-b-2 border-grey justify-between">
              <div className="flex items-center">
                <div className="bg-terciary p-3 rounded-full">
                  <GiPathDistance className=" text-whiteColor text-2xl " />
                </div>
                <p className="text-lg font-normal text-colorText ml-5">
                Asiento Infantil (valor diario)
                </p>
              </div>
              <div className="flex">
              <InputSelectItems/>
                <span className="text-2xl font-bold text-colorText">$9999</span>
                <CustomizedCheckbox />
              </div>
            </div>
            {/* Termina el itemr */}
            {/* Empieza el items */}
            <div className="flex items-center p-4 border-b-2 border-grey justify-between">
              <div className="flex items-center">
                <div className="bg-terciary p-3 rounded-full">
                  <GiPathDistance className=" text-whiteColor text-2xl " />
                </div>
                <p className="text-lg font-normal text-colorText ml-5">
                Conductor Adicional (valor diario)
                </p>
              </div>
              <div className="flex">
              <InputSelectItems/>
                <span className="text-2xl font-bold text-colorText">$9999</span>
                <CustomizedCheckbox />
              </div>
            </div>
            {/* Termina el itemr */}
          </div>
          <div className="flex justify-between w-full p-5">
            <Link to="/flota/ids">
            <BtnForm name="Canecelar" color="bg-colorDanger" size="w-auto"/>
            </Link>
            <Link to="/flota/ids/addoptions/datauser">
            <BtnForm size="w-auto" name="Continuar"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOptions;
