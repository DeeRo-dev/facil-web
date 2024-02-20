import React from "react";
import { RiCoupon3Line } from "react-icons/ri";



const Input: React.FC = () => {
  return (
<div>
<h3 className="text-whiteColor text-sm">Código promocional</h3>

    <div className="bg-whiteColor h-10 flex rounded-lg items-center px-2">
   
      <RiCoupon3Line className="text-lg mr-2"/>

      <input type='text' placeholder="Ingresar codigo" className="w-full focus:outline-none"/>
       
    </div>
</div>

  );
}

export default Input;
