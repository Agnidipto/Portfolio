import { Typography } from '@mui/material';
import Fade from 'react-reveal/Fade';

const SectionHeader = ({ text, fade = true, sx = {} }) => {

  const defaultStyle = {
    fontFamily: "Playfair Display, serif",
    marginTop: 0,
    marginBottom: 5,
  };

  const header =
    (<>
      <Typography
        variant="h1"
        color="primary.light"
        sx={{
          ...defaultStyle,
          ...sx,
        }}
      >
        {text}
      </Typography>
    </>
    );

  return (fade ? <Fade>{header}</Fade> : header);
};

export default SectionHeader;