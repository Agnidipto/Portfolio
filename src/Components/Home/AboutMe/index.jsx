import {useState} from 'react';
import {Grid, Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius:'4px',
  boxShadow: 24,
  p: 4,
  color: 'white',
  textAlign: 'center',
  width:{xs:300, md:400}
};

function AboutMe(props) { 

  const [open,setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const timeDiff = (() => {
    var date1 = new Date("07/13/2021");
    var date2 = new Date();
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Years = Difference_In_Time / (1000 * 3600 * 24* 365);
    if (Difference_In_Years>Math.floor(Difference_In_Years))
      return Math.floor(Difference_In_Years).toString().concat('+')
    else return Difference_In_Years
  })

  return (
    <div>
      <Box sx={{paddingLeft:{md: 10, xs:5}, paddingRight:{md: 10, xs:5}}}>
        
        <Grid container justifyContent="center" alignItems="center" rowSpacing={5} sx={{marginTop : 5, paddingBottom:5}}>
          <Grid item lg={6}>
            <img src={require('./me.jpg')} style={{borderRadius:'100%', height: 'auto', maxWidth:'70%'}}/>
          </Grid>
          <Grid item lg={6}>
            <Typography variant = 'h1' color='primary.light' sx={{marginBottom:5, }}>
              About Me
            </Typography>
            <Box sx={{textAlign:'left', maxWidth:'800px'}}>
            <Typography variant='p'>
            Hi! As you already might’ve guessed, I’m a Full-Stack Developer. I have been a Software Developer for {timeDiff()} years, and you can take a look at my experiences below! I am really passionate about everything Tech, and my goals in life are to provide to this community as much as I can. I want to work in, and with, products that are inspiring and essential. <br/> <br/>
            Besides my life as a Developer, you can find me on the lonely street grabbing a picture of things fascinating, or producing music that soothe the soul. Or, you can just find me by my table, hacking away into things! <br/> <br/>
            Find my contact information below if you do need to contact me for working together, hire me, or just have any inquiry! <br/> <br/>
            Happy hacking, folks!
            </Typography>
            <Grid container columnSpacing={2} sx={{marginTop:2}}>
              <Grid item xs={6}>
                <Button variant="contained" color='primary' sx={{background:'#303030', color:'white', width:'100%', marginTop:'10px'}} onClick={handleOpen}>Contact</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color='primary' sx={{background:'#303030', color:'white', width:'100%', marginTop:'10px'}} href='mailto:agnidipto12.25@gmail.com'>Email</Button>
              </Grid>
            </Grid>
            </Box>
          </Grid>
        </Grid>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button variant="contained" color='primary' sx={{background:'#303030', color:'white', width:'100%', marginTop:'10px', textTransform:'none'}} href='https://www.linkedin.com/in/agnidipto-sinha' >
            <LinkedInIcon sx={{marginRight:'5px'}}/>LinkedIn
          </Button>
          <Button variant="contained" color='primary' sx={{background:'#303030', color:'white', width:'100%', marginTop:'10px', textTransform:'none'}} href="https://wa.me/9836240044?text=Hey,%20I%20checked%20your%20Portfolio!" id="modal-modal-description">
            <WhatsAppIcon sx={{marginRight:'5px'}}/>
            WhatsApp
          </Button>
          <a href='mailto:agnidipto12.25@gmail.com'>
          <Button variant="contained" color='primary' sx={{background:'#303030', color:'white', width:'100%', marginTop:'10px', textTransform:'none'}}  id="modal-modal-description">
            <EmailIcon sx={{marginRight:'5px'}}/>
            Email
          </Button>
          </a>
        </Box>
      </Modal>

      </Box>
    </div>
  )
}

export default AboutMe;