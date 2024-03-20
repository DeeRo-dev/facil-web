import { Link, Outlet } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function LayoutFlota() {
  return (
    <>
      <div className="w-11/12 m-auto mt-5 flex flex-col">
        <div className="flex  items-center">
        <div className="pl-15 ml-5 text-colorText">
          <Link to="/" className="flex items-center">
            <FaArrowLeftLong />
            <p className="ml-2">Volver</p>
          </Link>
        </div>
        <h2 className="text-xl ml-15 font-semibold text-colorText m-auto ">
          Nueva Reserva
        </h2>
        </div>
        <Outlet />
      </div>
    </>
  );
}
