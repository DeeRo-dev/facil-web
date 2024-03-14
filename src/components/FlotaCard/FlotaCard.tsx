
import { Link } from "react-router-dom";
import { BtnForm } from "../Btns/BtnForm";

export const FlotaCard = () => {
  return (
    <div className="flex justify-between w-11/12 h-56 bg-whiteColor rounded-lg text-colorText">
      <div className="w-1/4 justify-center items-center flex">
        <img src="carImg.svg" alt="Img not found" />
      </div>
      <div className="w-1/2  flex flex-col justify-around">
        <div>
          <h4 className="text-xl  font-bold ">Chevrolet - Cobalt</h4>
          <p className="text-sm  font-semibold ">categoría Autos Grandes</p>
        </div>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full">
            <li>Automatico</li>
            <li>Aire</li>
            <li>5 puertas</li>
            <li>Direccion</li>
            <li>Radio</li>
          </ul>
        </div>
        <div>
          <p className="text-xs text-colorText">
            Entrega: Personal de Facil Rent a car en aeropuerto en Aeropuerto
            “xxxx”
          </p>
          <p className="text-xs text-colorText">
            Ahorrá con tu código de descuento | Ingresá a
            https://facilrentacar.com.ar/
          </p>
        </div>
      </div>
      <div className="w-1/4 flex flex-col justify-between">
        <div className="flex justify-center bg-primary py-3 rounded-tr-lg">
          <h4 className="text-sm text-whiteColor font-semibold">Recomendado</h4>{" "}
        </div>
        <div className="flex justify-center">
          {" "}
          <p className="text-base font-semibold">
            Precio final por día <br />
            $41.000
            <br />
            Precio final por “x” días
            <br />$ 533.000
          </p>
        </div>
        <div className="flex justify-center mb-2">
            <Link to="/flota/ids/addoptions" className="w-full">
                <BtnForm name="Seleccionar"/>
            </Link>
          
        </div>
      </div>
    </div>
  );
};
