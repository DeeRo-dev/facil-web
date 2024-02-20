
export const CarCard = () => {
  return (
    <div className="w-80 h-96  flex flex-col text-colorText group hover:text-whiteColor bg-whiteColor cursor-pointer hover:bg-primary shadow  shadow-slate-50">
    <div className="flex flex-row h-1/2 justify-around py-5">
      <div>
        <h2 className="text-3xl font-bold mt-1">Deportivo</h2>
        <h3 className="text-xl mt-2">Citroen C4</h3>
        <div className="group-hover:bg-terciary bg-primary p-3 mt-2"> 
          <span className="text-base font-bold text-whiteColor">Desde <br/> $2.200.254 / Dia</span>
        </div>
      </div>
      <div>
        <ul>
          <li>Automatico</li>
          <li>Aire</li>
          <li>5 puertas</li>
          <li>Direccion</li>
          <li>Radio</li>
        </ul>
      </div>
    </div>
    <div className="h-1/2"> 
      <img width={1000} height={600} src='carImg.svg' alt="Img not found"/>
    </div>
  </div>
  
  );
};
