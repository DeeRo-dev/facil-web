import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
export default function Nav() {
  return (
    <nav className="bg-primary h-20 text-white  text-3xl">
      <ul className="flex flex-row justify-around">
        {routes.map((route) => (
          <li>
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
    </nav>
  );
}
