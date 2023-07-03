import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import { useNavigate } from "react-router-dom";

const pages = ['Projects'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar(props) {
  const [anchorElProjects, setAnchorElProjects] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElProjects(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElProjects(null);
  };

  const HomeButtonOnClick = (event) => {
    if(props.location!=='/') navigate('/')   
  }

  const ProjectButtonOnClick = (event) => {
    if(props.projectRef.current !== undefined ) {
      props.projectRef.current.scrollIntoView({
        // behavior: 'smooth'
      })
    }
  }

  const SkillButtonOnClick = (event) => {
    if(props.skillsAndExperienceRef.current !== undefined ) {
      props.skillsAndExperienceRef.current.scrollIntoView({
        // behavior: 'smooth'
      })
    }
  }

  const AboutButtonOnClick = (event) => {
    if(props.aboutMeRef.current !== undefined ) {
      props.aboutMeRef.current.scrollIntoView({
        // behavior: 'smooth'
      })
    }
  }


  var color = Math.min(props.positionTop/150,1)

  var shadow1opacity = Math.min(props.positionTop/750, 0.2)
  var shadow2opacity = Math.min(props.positionTop/1071.42, 0.14)
  var shadow3opacity = Math.min(props.positionTop/1250, 0.12)
  var boxShadow= `0px 2px 4px -1px rgba(0,0,0,${shadow1opacity}), 0px 4px 5px 0px rgba(0,0,0,${shadow2opacity}), 0px 1px 10px 0px rgba(0,0,0,${shadow3opacity})`;

  return (
    <AppBar position="sticky" sx ={{height:65, minHeight:'63px', background: `rgba(18, 18, 18, ${color})`, boxShadow:boxShadow}}>
      <Container maxWidth="xl">
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              // height:'5vh',
              textDecoration: 'none',
            }}
          >
            Agnidipto Sinha
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, marginTop:1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={props.toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              marginTop:1,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Agnidipto Sinha 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {props.location !== '/' ?
              <Button
              onClick={(e) => HomeButtonOnClick(e)}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Home
            </Button>: 
            <>
              <Button
              onClick={(e) => SkillButtonOnClick(e)}
              sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Skills
              </Button>
              <Button
              onClick={(e) => ProjectButtonOnClick(e)}
              sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Projects
              </Button>
              <Button
              onClick={(e) => AboutButtonOnClick(e)}
              sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About Me
              </Button>
            </>}
            <Divider orientation="vertical" flexItem sx={{marginLeft:'1%', marginRight:'2%'}}/>
            <Button
              onClick={handleOpenNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              View Projects
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorElProjects}
              open={Boolean(anchorElProjects)}
              onClose={handleCloseNavMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
                {props.skills.map((text, index) => (
                  <>
                  <MenuItem key={index} disablePadding onClick={e=> {
                    e.preventDefault()
                    setAnchorElProjects(null);
                    text==='All'? navigate('/projects') : navigate(`/projects/${text}`)}}>
                    {text}
                  </MenuItem>
                  {text === 'All' ? <Divider sx={{borderColor : 'rgb(255 255 255 / 77%)'}}/>:<></>}
                  </>
                ))}
            </Menu>
            
          </Box>

          <Box sx={{ flexGrow: 0.3 }}>
            {'    '}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;