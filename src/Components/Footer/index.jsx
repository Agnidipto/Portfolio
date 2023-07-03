import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Footer(props) {

  return (
    <Box sx={{background:'#303030', marginTop:10, color:'#787878', paddingTop:'15px', paddingBottom:'15px'}}>
        <Typography>
          <a href='https://www.instagram.com/__agni_/'><InstagramIcon className='footer-link'/></a>
          <a href='https://www.linkedin.com/in/agnidipto-sinha'><LinkedInIcon className='footer-link'/></a>
          <a href='https://www.facebook.com/agnidipto.sinha/'><FacebookIcon className='footer-link'/></a>
          <a href='mailto:agnidipto12.25@gmail.com'><EmailIcon className='footer-link'/></a>
          <a href='tel:+919836240044'><LocalPhoneIcon className='footer-link'/></a>
        </Typography>
        <Typography sx={{marginTop:'10px', width:'90%', margin:'auto'}}>
          Website (and all Related properties) is designed and owned by Agnidipto Sinha, unless stated otherwise.
        </Typography>
      </Box>
  )
}

export default Footer;