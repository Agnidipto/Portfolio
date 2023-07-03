import { useState, useEffect } from 'react';
import {Typography} from '@mui/material';
import { ParallaxBanner } from 'react-scroll-parallax';

function Banner(props) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ParallaxBanner 
        layers={[
          { image: require('./BannerImages/back.png'), speed: -20 },
          {
            speed: -10,
            children: (
              <div className="absolute inset-0 flex items-center justify-center background-down"
              style={{ width:'100%', marginTop:300, height:'550px'}}
              >
                {/* <img src={require('./BannerImages/xyz.png')} alt='' 
                style={{minWidth:'1500px', width:'100%', display:'block', margin:'auto'}}/> */}
              </div>
            ),
          },
          {
            speed: -30,
            children: (
              <div className="absolute inset-0 flex items-center justify-center background-up"
              style={{ width:'100%', marginTop:-300, height:750}}
              >
                {/* <img src={require('./BannerImages/xyz.png')} alt='' 
                style={{minWidth:'1500px', width:'100%', display:'block', margin:'auto'}}/> */}
              </div>
            ),
          },
          {
            speed: -35,
            children: (
              <div className="absolute inset-0 flex items-center justify-center centered"
              style={{marginTop:-100}}
              >
                <Typography variant = 'h1' color='#aaa' sx={{textShadow : '4px 4px 8px #222;'}}>
                  {props.skill? props.skill.charAt(0).toUpperCase() + props.skill.slice(1)+' ' : ''}Projects
                </Typography>
              </div>
            ),
          },
        ]}
        style={{minHeight:'520px', height:'60vh'}}
      />
  )
}

export default Banner;