import { Link, Outlet} from 'react-router-dom';
// import { CarCard } from "../../components/CarCard/CarCard";
import FormHome from "../../components/FormHome/FormHome";

// import { FlotaCard } from "../../components/FlotaCard/FlotaCard";

export default function LayoutFlota() {
  return (
    <>
      <div className="w-11/12 m-auto mt-5 flex flex-col">
    <h1 className='m-auto'>Nueva Resva</h1>
      <Outlet />
        
      </div>
    </>
  );
}
