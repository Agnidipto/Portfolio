import { Box, CircularProgress } from "@mui/material";

function LazyLoading(props) {
  return <Box sx={{ display: 'flex' }}>
  <CircularProgress />
  </Box>
}

export default LazyLoading;

export {default as LazyLoadingFull} from './LazyLoadingFull';