import { Box } from "@mui/material";
import { useEffect, useState } from "react";

// const IMAGES = ['/images/initialLoad/react.png', 
// '/images/initialLoad/spring-boot.png',
// '/images/initialLoad/python.png',
// '/images/initialLoad/flask.png',
// '/images/initialLoad/redux.png']

// const IMAGES = [require('./images/react.png'), 
// require('./images/spring-boot.png'),
// require('./images/python.png'),
// require('./images/flask.png'),
// require('./images/redux.png')]

function TechStack({IMAGES}) {

  const [opacity, setOpacity] = useState(0)
  const [height, setHeight] = useState(150)
  const [index, setIndex] = useState(0)

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function change() {
    setOpacity(1)
    await timeout(5600)
    setOpacity(0)
  }

  async function changeHeight() {
    setHeight(240)
    // await timeout(1500)
    // setHeight(150)
  }

  useEffect(() => {
    setHeight(150)
    change()
    changeHeight()
  }, [])

  async function changePic() {
    await timeout(400)
    setIndex(prev => prev<IMAGES.length-1? prev+1 : 0)
  }

  useEffect(() => {
    changePic()
  }, [index])

  return <Box sx={{opacity, height:{xs : 0.55*height, sm:0.8*height, md:height}}} className="init-head-img">
    <img src={IMAGES[index]} alt='react' style={{height:'100%'}}/>
  </Box>
}

export default TechStack;