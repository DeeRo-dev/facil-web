import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface Props{
  title:string;
  parrafo: string;
}
export default function AccordionInput({title, parrafo} : Props) {
  return (
    <div className='mb-1'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
         {parrafo}
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}