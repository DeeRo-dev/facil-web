import InputSelect from '../Inputs/InputSelect'
import { BtnForm } from '../Btns/BtnForm'
import Input from '../Inputs/Input';
import InputDate from '../Inputs/InputDate';
import InputHour from '../Inputs/InputHour';

export default function FormHome()  {
  return (
    <div  className='bg-primary backdrop-blur-lg bg-opacity-50 h-auto w-auto rounded-lg px-10 py-10'>
        <form action="" >
            <div className=' m-auto flex flex-col  gap-2'>
            <h2 className='text-lg text-whiteColor  border-b mb-1 border-whiteColor pb-2'>Reserve su vehículo</h2>
            <InputSelect/>
      
            <div className=' w-full flex justify-between flex-col md:flex-row gap-5'>
                <InputDate/>
           <div className='flex justify-between w-full gap-5'>
           <InputHour/>
            <InputHour/>
           </div>
            </div>
            <Input title='Codigo Promocional' titlePLaceHolder='Ingresar codigo'/>
          
            <BtnForm name="Buscar"/>
            </div>
   
        </form>
    </div>
  )
}
