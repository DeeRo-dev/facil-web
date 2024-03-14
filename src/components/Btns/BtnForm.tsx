

import React from "react";

interface Props {
  color?: string;
  size?: string;
  name: string;
}

export const BtnForm: React.FC<Props> = ({ color, size, name }: Props) => {
  return (
    <button className={` ${size ? `${size}` : 'w-full'}  ${color ? `${color}` : 'bg-terciary'} h-10 font-bold text-whiteColor rounded-lg mt-4 px-12`}>
     {name}
    </button>
  );
}