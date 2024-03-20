import { Link } from "react-router-dom";
import { BtnForm } from "../../../components/Btns/BtnForm";
import Input from "../../../components/Inputs/Input";
import ReservationData from "../../../components/reservationData/ReservationData";

export default function DataExtraUser() {
  return (
    <div className="w-full m-auto mt-5 flex mb-10">
      <div className="w-96 px-2 h-full  flex ">
       <ReservationData/>
      </div>

      <div className="flex w-full  items-center justify-center">
        <div className="w-11/12 bg-whiteColor rounded-lg p-10">


          <div>
            <h2 className="text-xl	font-semibold text-colorText mt-2">
              Ya es usted cliente?
            </h2>
            <div className="flex justify-around mt-4 gap-4">
              <Input
                title="Número de Licencia de Conducir"
                titlePLaceHolder="0000 0000 00000 00000"
              />
              <Input
                title="Número de Licencia de Conducir"
                titlePLaceHolder="0000 0000 00000 00000"
              />
            </div>
            <BtnForm name="Buscar mis datos"/>
          </div>
          
          <div>
            <h2 className="text-xl	font-semibold text-colorText mt-4">
              General
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ">
              <Input
                title="Nombre completo"
                titlePLaceHolder="Nombre completo"
              />
              <Input title="Apellido" titlePLaceHolder="Apellido" />
              <Input
                title="Correo Electrónico"
                titlePLaceHolder="example@example.com"
              />
              <Input
                title="Teléfono"
                titlePLaceHolder="0000 0000 00000 00000"
              />
              <Input
                title="Dirección"
                titlePLaceHolder="Calle xxx  Numero xxxx"
              />
              <Input
                title=" Código Postal / Provincia"
                titlePLaceHolder="0000"
              />
              <Input title="País" titlePLaceHolder="País" />
              <Input
                title="Fecha de Nacimiento"
                titlePLaceHolder="00-00-0000"
              />
            </div>
          </div>
          <div>
            {" "}
            <h2 className="text-xl	font-semibold text-colorText mt-4">
              Informacion adicional
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ">
              <Input
                title="Data extra"
                titlePLaceHolder="Nombre completo"
              />
              <Input  title="Data extra" titlePLaceHolder="Apellido" />
              <Input
                 title="Data extra"
                 titlePLaceHolder="Nombre completo"
              />
              <Input
                title="Data extra"
                titlePLaceHolder="Nombre completo"
              />
           
            </div>
          </div>

          <div className="flex justify-between w-full mt-5">
            <Link to="/flota/ids">
            <BtnForm name="Canecelar" color="bg-colorDanger" size="w-auto"/>
            </Link>
            <Link to="/flota/ids/addoptions/datauser">
            <BtnForm size="w-auto" name="Continuar"/>
            </Link>
          </div>
        </div>
          {/* una antes */}
      </div>

    </div>
  );
}
