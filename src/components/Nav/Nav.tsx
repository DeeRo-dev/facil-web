import { NavLink, Link } from "react-router-dom";
import { BsTelephoneForward } from "react-icons/bs";
import { routes } from "../../routes/routes";
export default function Nav() {
  return (
    <nav className="bg-primary h-20 flex flex-row justify-around text-3xl items-center text-whiteColor">
    <div >
    <img src="/logoFacil.png" alt="" />
    </div>
      <ul className="flex flex-row justify-center gap-10  w-1/2">
        {routes.map((route) => (
          <li className="text-xl">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? "font-bold" : isPending ? "underline" : ""
              }
              to={route.path}
            >
              {" "}
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
       <Link to="/">
      <div className="bg-terciary h-14 flex items-center justify-around gap-2 px-8 rounded-full  hover:bg-terciaryHover transition duration-300 ease-in-out">
       <BsTelephoneForward className="text-xl"/>
        <p className="text-xl mr-2 py-5 font-medium">
             +54 9 264 622-0000
        </p>
      </div>
      </Link>
    </nav>
  );
}
