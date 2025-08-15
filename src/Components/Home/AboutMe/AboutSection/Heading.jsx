import { useMediaQuery, useTheme } from "@mui/material";
import SectionHeader from "../../../Common/SectionHeader";

const BigScreenHeading = () => ( <SectionHeader text={'About Me'}/> );

const SmallScreenHeading = () => (
  <SectionHeader
    text={'About Me'}
    sx={{ fontSize: 70, marginTop: 3 }}
  />
);

const Heading = () => {

  const theme = useTheme();
  const greaterThanMid = useMediaQuery(theme.breakpoints.up('md'));

  return greaterThanMid ? <BigScreenHeading/> : <SmallScreenHeading/>;
};

export default Heading;