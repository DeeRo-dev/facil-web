import { Link } from "react-router-dom";
export default function Nav(){
    return(
        <nav className="bg-black h-20 text-white  text-3xl">
            <ul className="flex flex-row justify-around">
                <li>
                <Link to="/"> Inicio</Link>
                   
                </li>
                <li>
                <Link to="/faqs">  Preguntas frecuentes</Link>
                   
                </li>
            </ul>
        </nav>
    )
}