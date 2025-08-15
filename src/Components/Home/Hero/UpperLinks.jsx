import { Button, Stack } from '@mui/material';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const UpperLinks = ({ handleSnackbarOpen }) => {

  const UpperLinkStyle={
    fontSize:'1.2em',
    minWidth:40,
    minHeight:40,
    background:'rgba(144, 138, 170, 0.15)',
    color:'rgb(193 182 245)',
    borderRadius:'50%',
    padding:0,
    marginBottom:3
  };

  return <Stack direction="row"
    justifyContent="center"
    alignItems="flex-start"
    spacing={4}>
    <Button sx={{ ...UpperLinkStyle }} className='linkedin-button'
      href = 'https://www.linkedin.com/in/agnidipto-sinha/'>
      <FaLinkedinIn/>
    </Button>
    <Button sx={{ ...UpperLinkStyle }} className='gmail-button'
      href='mailto:agnidipto12.25@gmail.com'
      onClick={handleSnackbarOpen}>
      <SiGmail/>
    </Button>
    <Button sx={{ ...UpperLinkStyle }} className='github-button'
      href='https://github.com/Agnidipto'>
      <FaGithub/>
    </Button>
  </Stack>;
};

export default UpperLinks;
