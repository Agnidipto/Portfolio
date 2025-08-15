import './InitialLoad.css'
import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { loadPage } from '../../reducers/initloadSlice'

import TechStack from './TechStack'

const SLIDES = ['Hi there!', '', 'This is Agnidipto.']

const IMAGES = [require('./images/react.png'), 
require('./images/nextjs.png'),
require('./images/tensorflow.png'),
require('./images/pytorch.png'),
require('./images/spring-boot.png'),
require('./images/python.png'),
require('./images/flask.png'),
// require('./images/redux.png'),
]

function InitialLoad(props) {

  const [show,setShow] = useState(-1)
  const [opacity, setOpacity] = useState(0)
  const [display, setDisplay] = useState('none')
  const [height, setHeight] = useState(120)
  const changeTime = 250

  const dispatch = useDispatch()

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function change() {
    var flag = false
    if(show < SLIDES.length) {
      if(show === SLIDES.length - 1) flag = true
      await timeout(1000)
      setOpacity(1)
      setShow(prev => prev+1)
      if(!flag) {
        if(show===0) 
        await timeout(3000)
        else
        await timeout(2000)

        setOpacity(0)
      }
      else dispatch(loadPage())
    }
  }

  useEffect(() => {
    if(opacity===0)
    change()
  },  [opacity])

  useEffect(() => {
    // changeSize()
    if(show===1)
    setDisplay('block')
  }, [show])

  ///////////////////////////////////// for pics

  const [picOpacity, setPicOpacity] = useState(0)
  // const [height, setHeight] = useState(150)
  const [index, setIndex] = useState(0)

  async function picOpacityChange() {
    // await timeout(1000)
    setPicOpacity(1)
    await timeout(2800)
    setPicOpacity(0)
  }

  async function changeHeight() {
    setHeight(200)
    // await timeout(1500)
    // setHeight(150)
  }

  useEffect(() => {
    if(show===1) {
      // setIndex(0)
      setHeight(120)
      picOpacityChange()
      changeHeight()
    }
  }, [show])

  async function changePic() {
    await timeout(changeTime)
    setIndex(prev => prev<IMAGES.length-1? prev+1 : 0)
  }

  useEffect(() => {
    changePic()
  }, [index])

  return <>
    <Box style={{height:'100vh'}} className='container'>
      <Box className = 'centered'>
          <Typography variant='h1' 
          className='init-head'
          sx={{opacity : opacity, 
            // fontSize:{xs : '2em', sm:'3em', md:'3.75em'},
            fontSize:{xs : 40, sm:60, md:3.75*20}
            }}
            >
            {SLIDES[show]}
          </Typography> 
          <div style={{opacity : picOpacity}} className="init-head-img">
          <Box sx={{display:show===1?'block':'none', height:{xs : 0.55*height, sm:0.8*height, md:height}}} className="init-head-img">
            <img src={IMAGES[index]} alt='react' style={{height:'100%'}}/>
          </Box>
          </div>
      </Box>
    </Box>
  </>
}

export default InitialLoad