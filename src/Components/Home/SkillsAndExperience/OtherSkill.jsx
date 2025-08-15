import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

const OtherSkill = ({
  head,
  image,
}) => {

  const [expand, setExpand] = useState(false);

  const avatarStyleExpanded = {
    transition: 'all .5s',
  };

  const avatarStyleHidden = {
    width: '1px !important',
    height: '1px !important',
    opacity: 0,
    transition: 'all .5s',
  };

  const avatarStyle = expand ? avatarStyleExpanded : avatarStyleHidden;

  const onMouseEnter = () => {
    setExpand(true);
  };

  const onMouseLeave = () => {
    setExpand(false);
  };

  return (
    <Grid item>
      <Chip
        avatar={
          <Avatar
            sx={avatarStyle}
            src={image}
          />
        }
        label={head}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </Grid>
  );
};

export default OtherSkill;