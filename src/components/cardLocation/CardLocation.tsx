
// import { BtnForm } from '../Btns/BtnForm'

// export default function CardLocation() {
//   return (
//     <div className="w-64 h-auto py-5 gap-5 flex flex-col text-colorText group">
//         <div>
//             <img src="https://t.ctcdn.com.br/h_v2yoy_Rjf_sPKlEB-ML0OC-9M=/768x432/smart/i381158.jpeg" alt=" not found" />
//         </div>
//         <div className='flex justify-between '>
//             <div>
//                 <h4 className='font-semibold'>San Juan</h4>
//                 <p>Calle xxxx</p>
//             </div>
//             <div>
//                <BtnForm/>
//             </div>
//         </div>
//     </div>
//   )
// }


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://t.ctcdn.com.br/h_v2yoy_Rjf_sPKlEB-ML0OC-9M=/768x432/smart/i381158.jpeg',
    title: 'San Juan',
    width: '30%',
  },
  {
    url: 'https://t.ctcdn.com.br/h_v2yoy_Rjf_sPKlEB-ML0OC-9M=/768x432/smart/i381158.jpeg',
    title: 'La Rioja',
    width: '30%',
  },
  {
    url: 'https://t.ctcdn.com.br/h_v2yoy_Rjf_sPKlEB-ML0OC-9M=/768x432/smart/i381158.jpeg',
    title: 'Mendoza',
    width: '30%',
  },

  
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {
  return (
  <div className='w-full'>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }} className="justify-between gap-5">
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  </div>
  );
}