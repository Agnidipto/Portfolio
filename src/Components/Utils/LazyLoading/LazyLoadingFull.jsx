import { Box, CircularProgress } from "@mui/material";

function LazyLoadingFull(props) {
  return <Box sx={{height:'100vh', marginTop:'-65px' }} className='container'>
  <div className='container' style={{height:'100%'}}>
    <div className='centered'>
      <CircularProgress/>
    </div>
  </div>
</Box>
}

export default LazyLoadingFull