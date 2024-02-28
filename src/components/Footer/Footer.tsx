import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary h-auto md:h-96 py-10 w-full flex flex-col md:flex-row justify-around items-center text-whiteColor">
      <div className="flex flex-col mb-5 md:mb-0">
        <img src='LogoFacil.svg' alt='img not found' width={100} height={100}/>
        <span>Seguinos en redes</span>
        <span>@facilargentina</span>
      </div>
      <hr className="md:hidden" />
      <div className="border-x-2 px-10 flex flex-col ">
        <h2 className="text-lg font-bold mb-5 md:mr-10 md:mb-0">Contacto</h2>
        <div className="flex flex-col md:flex-row">
          <div className="text-base w-full md:w-1/2 mr-0 md:mr-5 mb-5 md:mb-0">
            <ul className="md:bg-primary bg-whiteColor text-primary md:text-whiteColor p-10 md:p-0">
              <h3 className="font-bold">San Juan</h3>
              <li>Tel: 0000000000</li>
              <li>WhatsApp: +54 9 264-622-0000</li>
              <li>Dirección: Av. Libertador San Martín Oeste 2442, San Juan</li>
              <li>Email: sanjuan@facilrentacar.com.ar</li>
              <li>Horarios Oficina: 9:00 a 13:00 y17:00 a 21:00</li>
            </ul>
          </div>
          <div className="text-base w-full  md:w-1/2 ml-0 md:ml-5">
            <ul className="md:bg-primary bg-whiteColor text-primary md:text-whiteColor p-10 md:p-0">
              <h3 className="font-bold">La Rioja</h3>
              <li>Tel: 02645639900</li>
              <li>WhatsApp: +54 9 264-622-0000</li>
              <li>Dirección: 9 de Julio 555, La Rioja</li>
              <li>Email: larioja@facilrentacar.com.ar</li>
              <li>Horarios Oficina: 9:00 a 13:00 y17:00 a 21:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <ul className="text-base md:text-lg mt-10 md:mt-0">
          <li className="mb-2 md:mb-0">
            <Link to='/'>Inicio</Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/flota">Flota</Link>
          </li>
          <li>
            <Link to="/Faqs">Preguntas frecuentes</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
