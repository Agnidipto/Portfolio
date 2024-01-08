import { useState } from "react";
import {Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import Drawer from '@mui/material/Drawer';
import { SkillList as skills } from "../../Information";
import { useDispatch } from "react-redux";
import { unloadPage } from "../../reducers/initloadSlice";

function SideDrawer({drawer, setDrawer, toggleDrawer, skillsAndExperienceRef, projectRef, aboutMeRef}) {

  const location = useLocation();
  const [homeOpen, setHomeOpen] = useState(true);
  const [projectOpen, setProjectOpen] = useState(false);

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const homeNavigations = [ 'Projects', 'Skills','About Me']

  const homeNavigationOnClick = (page) => {
    if(page==='Skills') {
      if(skillsAndExperienceRef.current !== undefined ) {
        skillsAndExperienceRef.current.scrollIntoView({
          // behavior: 'smooth'
        })
      }
    }
    if(page==='Projects') {
      if(projectRef.current !== undefined ) {
        projectRef.current.scrollIntoView({
          // behavior: 'smooth'
        })
      }
    }
    if(page==='About Me') {
      if(aboutMeRef.current !== undefined ) {
        aboutMeRef.current.scrollIntoView({
          // behavior: 'smooth'
        })
      }
    }
  }

  const list = () => (
    <Box
      width={250}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
      
    >
      <List sx={{width:'100%'}}>
      {location.pathname !== '/' ?
      <ListItemButton onClick={() => {
        setDrawer(false)
        setHomeOpen(true)
        navigate('/')}}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      : <>
      <ListItemButton onClick={() => setHomeOpen(!homeOpen)}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
        {homeOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={homeOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {homeNavigations.map((page, index) => (
          <div key={page}>
          <ListItem disablePadding  >
            <ListItemButton sx={{ pl: 4 }} onClick={e=> {
              e.preventDefault()
              homeNavigationOnClick(page)
              setDrawer(false);
              }}>
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
          </div>
        ))}
        {/* <ListItem disablePadding>
          <ListItemButton onClick={e => dispatch(unloadPage())}>
              <ListItemText primary={'InitLoad'} />
          </ListItemButton>
        </ListItem> */}
        </List> 
      </Collapse>
      </>}
      <Divider sx={{borderColor : 'rgb(255 255 255 / 77%)', marginTop:'10px', marginBottom:'10px'}}/>

      <ListItemButton onClick={() => setProjectOpen(!projectOpen)}>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
        {projectOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={projectOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {skills.map((text) => (
          <div key={text}>
          <ListItem  disablePadding >
            <ListItemButton sx={{ pl: 4 }} onClick={e=> {
              e.preventDefault()
              setDrawer(false);
              text==='All'? navigate('/projects') : navigate(`/projects/${text}`)}}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          {text === 'All' ? <Divider sx={{borderColor : 'rgb(255 255 255 / 77%)', width:'90%', margin:'auto'}}/>:<></>}
          </div>
        ))}
      </List> 
      </Collapse>
      </List>
    </Box>
  );

  return <Drawer
    anchor={'left'}
    open={drawer}
    onClose={toggleDrawer(false)}
    sx={{width:'50%'}}
    id='boardslist'
    >
      {list()}
    </Drawer>
}

export default SideDrawer