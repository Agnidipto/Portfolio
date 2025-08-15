import { Box, Typography } from '@mui/material';
import './Banner.css';
import TypeWriter from '../Utils/TypeWriter';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Banner(props) {

  const [text, setText] = useState([(props.skill ? props.skill.charAt(0).toUpperCase() + props.skill.slice(1) + ' ' : 'All ' ) + '\nProjects']);
  const location = useLocation();

  useEffect(() => {
    setText([(props.skill ? props.skill.charAt(0).toUpperCase() + props.skill.slice(1) + ' ' : 'All ' ) + '\nProjects']);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (<>
    <div className="container" >
      <img src="/images/project/back.png" alt='background'
        style={{ width: '100%', height: '50vh', objectFit: 'cover', marginTop: '-65px' }}
        onLoad={props.onLoad}/>
      <div className = 'left' style={{ minWidth: '40%', margin: 'auto', maxWidth: '90%' }}>
        <Box sx={{ width: '100%', padding: '10px', textAlign: 'left', paddingTop: { sm: '10px', xs: '10vh' } }}>
          <Typography variant = 'h2' color='#aaa' sx={{ fontSize: { sm: '3.75em', xs: '2.5em' }, textShadow: '4px 4px 8px #222;', height: 160 }}>
            <code>
              <TypeWriter
                content={text}
                writeSpeed = {50} deleteSpeed = {50} waitTime = {2000}/>
            </code>
          </Typography>
        </Box>
      </div>
    </div>
  </>
  );
}

export default Banner;