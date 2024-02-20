import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary h-96 w-full flex flex-row justify-around items-center text-whiteColor">
      <div className="flex flex-col ">
        <img src='LogoFacil.svg' alt='img not found' width={100} height={100}/>
        <span>Seguinos en redes</span>
        <span>@facilargentina</span>
      </div>
      <hr />
      <div className="border-x-2 px-10">
        <h2 className="text-lg font-bold">Contacto</h2>
        <div className="flex flex-row ">
        <div className="text-base w-1/2 mr-5">
            <ul>
                <h3 className="font-bold">San Juan</h3>
                <li>Tel: 0000000000</li>
                <li>WhatsApp: +54 9 264-622-0000</li>
                <li>Dirección: Av. Libertador San Martín Oeste 2442, San Juan</li>
                <li>Email: sanjuan@facilrentacar.com.ar</li>
                <li>Horarios Oficina: 9:00 a 13:00 y17:00 a 21:00</li>
            </ul>
        </div>
        <div  className="text-base w-1/2 ml-5">
            <ul>
            <h3 className="font-bold">La Rioja</h3>
                <li>Tel: 02645639900</li>
                <li>WhatsApp: +54 9 264-622-0000</li>
                <li>Dirección:  9 de Julio 555, La Rioja</li>
                <li>Email: larioja@facilrentacar.com.ar</li>
                <li>Horarios Oficina: 9:00 a 13:00 y17:00 a 21:00</li>
            </ul>
        </div>
        </div>
      </div>
      <div>
        <h1>
          <ul>
            <li>
              <Link to='/'>
              Inicio
              </Link>
              </li>
            <li>Flota</li>
       
            <li>
            <Link  to="/Faqs">
              Preguntas frecuentes
                 </Link>
              </li>
          </ul>
        </h1>
      </div>
    </footer>
  );
}
