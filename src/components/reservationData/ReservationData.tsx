import React from "react";

const ReservationData: React.FC = () => {
  return (
    <div className="bg-primary h-full w-80 rounded-lg px-10 py-5 text-whiteColor flex flex-col justify-around mb-10">
      <div className="flex flex-col gap-4 mt-2">
        <h4 className="font-bold text-base  border-b ">Detalle de la reserva</h4>
        <img width={1000} height={600} src="/carImg.svg" alt="Img not found" className="bg-whiteColor rounded-lg"/>
        <p className="font-bold text-base">Chevrolet - Cobalt</p>
        <p className="text-sm font-semibold ">categoría Autos Grandes</p>
      </div>
      <div className="flex flex-col gap-4 border-y my-5 py-5 text-xs">
        <p>Entrega</p>
        <p>San Juan - 24/01/2024 13:30 hs</p>
        <p>Devolucion</p>
        <p>San Juan - 04/02/2024 15:30 hs</p>
      </div>
      <div className="flex flex-col gap-4 text-xs">
        <h4 className="font-bold text-base ">Detalles de adicionales</h4>
        <p className="text-sm font-semibold ">Coberturas y Protecciones</p>
        <ul>
          <li>100 Km Diarios: AR$ 9999</li>
        </ul>
        <h4 className="text-sm font-semibold ">Equipos y servicios</h4>
        <ul>
          <li className="my-2">Limpieza: AR$ 9999</li>
          <li className="my-2">Ent. Aeropuerto: AR$ 9999</li>
          <li className="my-2">Recargo 24 horas: AR$ 9999</li>
          <li className="my-2">Drop off Mendoza: AR$ 9999</li>
          <li className="my-2">2x Asiento Infantil: AR$ 9999</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 border-t mt-5 py-5">
        <h4 className="text-sm font-semibold ">Misceláneos</h4>
        <ul>
          <li className="text-xs"> IVA (21%): AR$ 35.897</li>
        </ul>
        <h4 className="text-sm font-semibold ">Distancia Incluida</h4>
        <ul>
          <li className="text-xs"> 400 km</li>
        </ul>
        <div className="bg-whiteColor w-full h-auto p-5 rounded-lg flex flex-col">
          <span className="text-sm font-semibold text-colorText">Total a pagar:</span>
          <h4 className="font-bold text-2xl text-primary m-auto">$9999999</h4>
        </div>
      </div>
    </div>
  );
};

export default ReservationData;
