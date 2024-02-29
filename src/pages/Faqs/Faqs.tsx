import AccordionInput from "../../components/AccordionInput/AcordeonInput";
import { Carrousel } from "../../components/Carrousel/Carrousel";
import CardLocation from "../../components/cardLocation/CardLocation";

export default function Faqs() {
  // const defaultContent =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="h-auto b-10 flex flex-col items-center gap-10">
      <div className=" w-full text-center relative ">
        <div className="text-whiteColor absolute z-10  flex justify-center  w-full mt-8">
          <div className="w-3/4">
            <h1 className="text-4xl font-medium mb-5">
              Fácil rent car comodidad y confort en alquiler de autos
            </h1>
            <p className="text-lg font-normal">
              Con más de tres décadas de experiencia en el mercado, nos
              destacamos como una de las principales empresas de alquiler de
              vehículos en Argentina. Día tras día, somos la elección predilecta
              de miles de personas de todo el mundo que buscan vivir sus viajes
              con la máxima comodidad y confort. Con FÁCIL, la experiencia de
              alquilar un auto en Argentina se convierte en algo único e
              inigualable. Además, nuestra flota de autos para alquilar es
              amplia y diversa, brindándote opciones que se adaptan a cada una
              de tus necesidades y preferencias. Así que no esperes más,
              atrévete a vivir una experiencia de alquiler de autos que
              trascienda lo ordinario. No solo descubras tu destino, recórrelo
              de la mano de FÁCIL. Confía en nosotros y permítenos ser el
              protagonista silencioso pero esencial de tu próximo viaje
              inolvidable.
            </p>
          </div>
        </div>
        <div className="w-full h-96">
          <Carrousel sizeCarrousel={500} />
        </div>
      </div>
      <div className="flex flex-col items-center  w-5/6">
        <h2 className="text-xl	font-bold mb-5 text-colorText mt-4">
          Preguntas frecuentes sobre el alquiler de autos en{" "}
          <span className="text-primary">FACIL</span>
        </h2>
        <div className="flex flex-row w-5/6 ">
          <div className="w-full my-5 grid grid-cols-2 gap-2">
            <div className="col-span-1">
              <AccordionInput
                title="¿Cuales son los requisitos para alquilar?"
                parrafo="Debe presentar documento, licencia de conducir vigente y una tarjeta de crédito visa, mastercard, american express, dinners, con un cupo disponible del monto de la franquicia."
              />
              <AccordionInput
                title="¿Puedo pagar en cuotas?"
                parrafo="Para el pago de su reserva en cuotas es necesario le enviemos un link de pago vía whatsapp, por favor haga su reserva y antes de abonar envíenos un mensaje para que le enviemos el link de pago."
              />
              <AccordionInput
                title="¿Caules son los medios de pago habilitados?"
                parrafo="Tarjetas de Crédito, Transferencias Bancarias, Mercado Pago, Paypal."
              />
              <AccordionInput
                title="¿Cual es el limite de kilometros?"
                parrafo="Sistema Smart, un precio para cada necesidad!. Las tarifas mínimas incluyen 100 km. diarios y puede agregar de a 100 km. por día extra. De esta forma solo abona por el uso que le de al vehículo."
              />
              <AccordionInput
                title="¿Exiten servicios de Aeropuerto?"
                parrafo="Contamos con oficinas en el Aeropuerto de San Juan. También hacemos entregas y recepciones en los aeropuertos de Mendoza y La Rioja."
              />
            </div>
            <div className="col-span-1">
              <AccordionInput
                title="¿Que es la franquicia?"
                parrafo="Cuando usted alquila con nosotros automáticamente obtiene un seguro todo riesgo con franquicia, la franquicia es el monto máximo que abona en caso de siniestro que varía según el modelo que alquile."
              />
              <AccordionInput
                title="Limpieza del vehículo"
                parrafo="Luego de cada alquiler, nuestras unidades además de pasar por el lavadero, son verificados todos los fluidos y presión de neumáticos."
              />
              <AccordionInput
                title="¿Cual es la Política de Cancelación?"
                parrafo="Reembolso Total: Para obtener un reembolso total del precio abonado, la cancelación debe realizarse en un plazo de 24 horas desde que se hace la reserva y al menos 45 días completos antes de la hora local de entrega del vehículo. Reembolso 50%: Para obtener un reembolso del 50% del precio abonado, la cancelación debe realizarse al menos 30 días completos antes de la hora local de entrega del vehículo. Recuerde que puede abonar una seña del 30% para realizar su reserva y que la misma no es reembolsable bajo ninguna circunstancia."
              />
              <AccordionInput
                title="¿Puedo devolver el auto en otra ciudad?"
                parrafo="Si puede devolverlo en las ciudades que tenemos oficina pero abonando un costo extra que varía según la ciudad."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/6 text-colorText flex flex-col items-center mt-8 md:mt-0">
        <h2 className="text-4xl font-medium mb-5">¿Donde nos encontramos? </h2>
        <p className="text-lg font-normal text-center">
          ¡Descubre Argentina con Facil! Con nuestras sucursales de renta de
          autos convenientemente ubicadas en San Juan, La Rioja y Mendoza, te
          brindamos acceso fácil y rápido a la movilidad que necesitas para
          explorar este hermoso país. Desde el momento en que llegas, nuestro
          proceso de check-in es ágil y sin complicaciones, con atención
          personalizada que te acompaña en cada paso, asegurándote una
          experiencia sin preocupaciones.
          <br />
          <br />
          Ya sea que estés planeando un viaje en familia, con amigos o en
          pareja, alquilar un auto con Facil te ofrece la tranquilidad y el
          respaldo que necesitas para disfrutar al máximo. Nuestra dedicación es
          garantizarte una experiencia de viaje excepcional, con vehículos de
          calidad y servicio al cliente de primera clase.
          <br />
          <br />
          Con Facil, tu aventura comienza desde el momento en que pisas nuestras
          sucursales. ¡Prepárate para descubrir Argentina con comodidad,
          confianza y la garantía de una experiencia inolvidable junto a
          nosotros!
        </p>
      </div>

      <div className="w-5/6 ">
        <CardLocation/>
      </div>
    </div>
  );
}
