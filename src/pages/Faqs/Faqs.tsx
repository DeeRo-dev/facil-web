import AccordionInput from "../../components/AccordionInput/AcordeonInput";



export default function Faqs() {

  // const defaultContent =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="h-auto b-10 flex flex-col items-center ">
      <div className="bg-primary w-full text-center ">
        <div className="m-auto text-whiteColor w-4/5">
        <h1  className="text-4xl font-medium mb-5">Fácil rent car comodidad y confort en alquiler de autos</h1>
        <p className="text-lg font-normal">
          Con más de tres décadas de experiencia en el mercado, nos destacamos
          como una de las principales empresas de alquiler de vehículos en
          Argentina. Día tras día, somos la elección predilecta de miles de
          personas de todo el mundo que buscan vivir sus viajes con la máxima
          comodidad y confort. Con FÁCIL, la experiencia de alquilar un auto en
          Argentina se convierte en algo único e inigualable. Además, nuestra
          flota de autos para alquilar es amplia y diversa, brindándote opciones
          que se adaptan a cada una de tus necesidades y preferencias. Así que
          no esperes más, atrévete a vivir una experiencia de alquiler de autos
          que trascienda lo ordinario. No solo descubras tu destino, recórrelo
          de la mano de FÁCIL. Confía en nosotros y permítenos ser el
          protagonista silencioso pero esencial de tu próximo viaje inolvidable.
        </p>
        </div>
      </div>
      <div className="flex flex-col items-center  w-5/6">
        <h2 className="text-xl	font-bold mb-5 text-colorText mt-24">Preguntas frecuentes sobre el alquiler de autos en <span className="text-primary">FACIL</span></h2>
       <div className="flex flex-row w-5/6">
       <div className="w-1/2">
        <AccordionInput/>
        </div>
       </div>
      </div>
      
    </div>
  );
}
