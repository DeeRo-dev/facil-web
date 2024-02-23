import React from "react";
import { CarCard } from "../../components/CarCard/CarCard";
import FormHome from "../../components/FormHome/FormHome";
import { Carrousel } from "../../components/Carrousel/Carrousel";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="items-center flex flex-col text-colorText">
      <div className="w-full bg-terciary relative">
        <div className="flex flex-col ml-20 w-1/2 my-10 absolute z-10">
          <h1 className="text-4xl font-bold text-whiteColor">
            Buscando alquilar un vehículo?
          </h1>
          <div className="flex">
            <img
              alt="Img not found"
              src="Line1.svg"
              width={30}
              height={30}
              className="mt-1"
            />
            <p className="text-xl ml-2 text-whiteColor">
              Busca tu sucursal, y reserva hoy!
            </p>
          </div>
          <div className="mt-5">
            <FormHome />
          </div>
        </div>
        <div>
          <Carrousel sizeCarrousel={800}/>
        </div>
      </div>

      <div className="w-5/6  mt-10">
        {/* Otro contenido */}
        <div className="flex">
          <div>
            <img
              width={1000}
              height={600}
              alt="Img not found"
              src="autoImg.svg"
              className="max-w-lg max-h-lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-medium mb-5">Acerca de nosotros</h2>
            <p className="text-lg font-normal text-center">
              Bienvenido a FACIL, tu mejor opción para el alquiler de vehículos.
              Nos destacamos por brindar un servicio centrado en el cliente,
              donde tu satisfacción es nuestra prioridad número uno.
              <br />
              <br />
              En FACIL, no solo alquilas un auto, sino que experimentas la
              comodidad, la confianza y la excelencia en cada kilómetro. Con
              oficinas convenientemente ubicadas en el Aeropuerto de San Juan y
              en el corazón de la Ciudad, facilitamos tu acceso a la movilidad
              que necesitas.
              <br />
              <br />
              Nuestro compromiso es hacer que tu experiencia de alquiler sea tan
              placentera como conducir nuestros autos. Descubre la diferencia
              con FACIL y convierte cada viaje en una aventura inolvidable.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col text-center">
          <h2 className="text-4xl	font-bold mb-5">
            Le aseguramos la mejor <br /> experiencia al cliente
          </h2>
          <p className="mb-10 text-lg ">
            Alquila con nosotros y convierte cada viaje en una experiencia
            inolvidable. <br />
            Tu aventura comienza aquí
          </p>
          <img
            width={1000}
            height={600}
            alt="Img not found"
            src="CarItems.svg"
            className="max-w-lg max-h-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center my-20">
          <h2 className="text-4xl	font-medium mb-5">
          Contamos con una amplia flota de autos en alquiler 
          </h2>
          <p className="text-lg w-1/2 text-center mb-10">Elige lo que mejor se ajuste a tus necesidades y expectativas.<br/> En Facil, te garantizamos calidad y seguridad al mejor precio, para que disfrutes de tu viaje sin preocupaciones.</p>
          
          <div className="grid grid-cols-3 gap-10">
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          
          </div>
       <div className="flex justify-center text-xl mt-5">
       <Link to="/flota" className="flex  flex-col justify-center items-center">
        <p className="underline">Ver mas</p>
          <IoIosArrowDown />
        </Link>
       </div>

        </div>
      </div>
      <div>
        <h1>Comentarios de google</h1>
      </div>
    </div>
  );
};

export default Home;
