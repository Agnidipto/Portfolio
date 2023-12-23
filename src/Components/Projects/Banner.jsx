import { useState, useEffect, useRef } from 'react';
import {Typography} from '@mui/material';
import { ParallaxBanner } from 'react-scroll-parallax';
import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "@mui/material/styles";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [0, 500]);
}

function Banner(props) {

  const ref= useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const distancey1 = 100 + ((props.length-1) * 200)

  const y1 = useTransform(scrollYProgress, [0, 1], [0, distancey1]);

  const distancey2 = 100 + ((props.length-1) * 100)

  const y2 = useTransform(scrollYProgress, [0, 1], [0, distancey2]);

  const distancey3 = 100 + ((props.length-1) * 200)

  const y3 = useTransform(scrollYProgress, [0, 1], [-100, distancey3]);

  return (<>
    <ParallaxBanner ref={ref}
        layers={[
          {
            children: (
            <div style={{background: 'linear-gradient(to right, #180d3c, #2d093d)', width:'100%', height:'100%'}}/>
          )},
          {
            children: (
              <motion.div className="background-down"
              style={{y:y2, minWidth:'2000px', width:'100%', marginTop:300, height:550,}}
              >
                {/* <img src={require('./BannerImages/xyz.png')} alt='' 
                style={{minWidth:'1500px', width:'100%', display:'block', margin:'auto'}}/> */}
              </motion.div>
            ),
          },
          {
            children: (
              <motion.div className="background-up"
              style={{y:y3, minWidth:'2000px', width:'100%', marginTop:-400, height:750}}
              >
                {/* <img src={require('./BannerImages/xyz.png')} alt='' 
                style={{minWidth:'1500px', width:'100%', display:'block', margin:'auto'}}/> */}
              </motion.div>
            ),
          },
          {
            // translateY:[-60, 20],
            children: (
              <motion.div
              style={{y:y1, height:'100%'}}
              >
                <div className='centered' style={{marginTop:''}}>
                {props.skill? <Typography variant = 'h2' color='#aaa' sx={{textShadow : '4px 4px 8px #222;'}}>
                  {props.skill.charAt(0).toUpperCase() + props.skill.slice(1)+' '}
                </Typography> : <></>}
                <Typography variant = 'h1' color='#aaa' sx={{textShadow : '4px 4px 8px #222;'}}>
                Projects
                </Typography> 
              </div>
              </motion.div>
            ),
          },
        ]}
        style={{minHeight:'520px', height:'60vh'}}
        className='container'
      />
      {/* <section>
        <div className='framer-container' ref={ref}>
          <motion.div className="box" style={{ y: y1 }} />
          <motion.h2
            className="box"
            style={{ y: y2}}
          >Hello</motion.h2>
          <div className="absolute inset-0 flex items-center justify-center"
          style={{ width:'100%', zIndex:-100}}>
            <img src={require('./BannerImages/down.png')} style={{zIndex:-1,  width:'100%', zIndex:1, height:'10%'}}/>
          </div>
          <motion.div className="absolute inset-0 flex items-center justify-center background-up"
          style={{ width:'100%', marginTop:-300, height:750}}
          />
        </div>
      </section> */}
    </>
  )
}

export default Banner;