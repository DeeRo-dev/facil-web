import React from "react";
import { RiCoupon3Line } from "react-icons/ri";

interface Props {
  title: string,
  titlePLaceHolder: string,
}

const Input: React.FC<Props> = ({ title,titlePLaceHolder }: Props) => {
  return (
    <div className=" w-full">
      <h3 className={`${title !== 'Codigo Promocional' ? 'text-colorText' : 'text-whiteColor'}  text-sm`}>{title}</h3>
      <div className={`bg-whiteColor h-10 flex rounded-lg items-center px-2 ${title !== 'Codigo Promocional' && 'border border-1 border-grey'}`}>
        {title === 'Codigo Promocional' && <RiCoupon3Line className="text-lg mr-2" />}
        <input type='text' placeholder={titlePLaceHolder} className='w-full focus:outline-none'/>
      </div>
    </div>
  );
}

export default Input;

