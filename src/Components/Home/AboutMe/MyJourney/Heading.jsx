import { useMediaQuery, useTheme } from "@mui/material";
import SectionHeader from "../../../Common/SectionHeader";

const Heading = () => {

  const theme = useTheme();
  const greaterThanMid = useMediaQuery(theme.breakpoints.up('md'));

  if (!greaterThanMid) {
    return null;
  }

  return (
    <div
      style={{
        position: 'sticky',
        top: 65,
        boxShadow: 'none',
        zIndex: 4,
      }}
      className='dark-bg'
    >
      <SectionHeader text={'My Journey'} sx = {{
        marginTop: 5,
        marginBottom: 20,
        paddingBottom: 2,
      }} />
    </div>
  );
};

export default Heading;