


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
        {/* <Accordion
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      <AccordionItem key="1" aria-label="Accordion 1" title="Cuales son los requisitos para alquilar?">
        <p>Debe presentar documento, licencia de conducir vigente y una tarjeta de crédito visa, mastercard, american express, dinners, con un cupo disponible del monto de la franquicia.</p>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="¿Puedo pagar en cuotas?">
        <p>Para el pago de su reserva en cuotas es necesario le enviemos un link de pago vía whatsapp, por favor haga su reserva y antes de abonar envienos un mensaje para que le enviemos el link de pago.</p>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="¿Caules son los medios de pago habilitados?">
        <p>Tarjetas de Crédito, Transferencias Bancarias, Mercado Pago, Paypal.</p>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="¿Cual es el limite de kilometros?">
       <p>Sistema Smart, un precio para cada necesidad!
Las tarifas mínimas incluyen 100 km. diarios y puede agregar de a 100 km. por día extra.
De esta forma solo abona por el uso que le de al vehículo.</p>
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="¿Exiten servicios de Aeropuerto?">
       <p>Contamos con oficinas en el Aeropuerto de San Juan.
También hacemos entregas y recepciones en los aeropuertos de Mendoza y La Rioja</p>
      </AccordionItem>
    </Accordion>
  
        </div>
        <div className="w-1/2 ">
        <Accordion
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      <AccordionItem key="1" aria-label="Accordion 1" title="¿Que es la franquicia?">
        <p>Cuanto usted alquila con nosotros automáticamente obtiene un seguro todo riesgo con franquicia, la franquicia es el monto máximo que abona en caso de siniestro que varia según el modelo que alquile.</p>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Limpieza del vehículo">
        <p>Luego de cada alquiler, nuestras unidades ademas de pasar por el lavadero, son verificados todos los fluidos y presión de neumáticos.</p>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="¿Caul es la Política de Cancelación?">
        <p>Reembolso Total:Para obtener un reembolso total del precio abonado, la cancelación debe realizarse en un plazo de 24 horas desde que se hace la reserva y al menos 45 días completos antes de la hora local de entrega del vehículo.
Reembolso 50%:Para obtener un reembolso del 50% del precio abonado, la cancelación debe realizarse al menos 30 días completos antes de la hora local de entrega del vehículo.
Recuerde que puede abonar una seña del 30% para realizar su reserva y que la misma no es reembolsable bajo ninguna circunstancia</p>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="¿Puedo devolver el auto en otra ciudad?">
        <p>Si puede devolverlo en las ciudades que tenemos oficina pero abonando un costo extra que varia según la ciudad.</p>
      </AccordionItem>
     
    </Accordion> */}
  
        </div>
       </div>
      </div>
      {/* <div className="flex flex-col items-center w-5/6 my-10 bg-gradient-to-b from-transparent to-yellow-400">
        <h2 className="text-xl	font-bold mb-5 text-colorText mt-24">¿TIENE ALGUNA PREGUNTA? SIÉNTETE LIBRE DE PREGUNTAR...</h2>
        <div className="flex flex-row w-1/2 justify-between ">
        <Button color="primary" variant="ghost">
        Email
      </Button>  
      <Button color="primary" variant="ghost">
      +54 9 264 622-0000
      </Button>  
      <Button color="primary" variant="ghost">
      @facilargentina

      </Button>  
        </div> 
      </div>*/}
    </div>
  );
}
