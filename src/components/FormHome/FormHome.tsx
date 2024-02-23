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
      
            <div className='flex justify-between gap-2'>
                <InputDate/>
            <InputHour/>
            <InputHour/>
            </div>
            <Input/>
          
            <BtnForm/>
            </div>
   
        </form>
    </div>
  )
}
