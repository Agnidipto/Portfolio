import Slide from '@mui/material/Slide';
import { Grid, Box, CardActionArea, useMediaQuery, useTheme  } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { useNavigation } from '../../Utils/hooks/navigation';
import Rating from '@mui/material/Rating';

const Skill = ({
  isSkillsVisible = false,
  zIndex = 0,
  index = 0,
  image,
  head,
  rating,
}) => {

  const [hasImageLoaded, setHasImageLoaded] = useState(false);
  const { navigateToSkill } = useNavigation();

  const theme = useTheme();
  const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));

  const timeout = {
    enter: greaterThanMid ? 300 * (4 - index) : 0,
  };

  return (
    <Slide
      in={isSkillsVisible}
      mountOnEnter
      unmountOnExit
      direction='right'
      style={{
        transformOrigin: `0 0 0`,
        zIndex,
      }}
      timeout={timeout}
    >
      <Grid
        item
        md={3}
        xs={6}
        sx={{ justifyContent: 'center' }}>
        <Card
          sx={{
            maxWidth: 345,
            margin: 'auto',
            marginBottom: 2,
            width: '100%',
          }}
          onClick={() => navigateToSkill(head)}>
          <CardActionArea sx={{ padding: 0 }}>
            <CardMedia
              children = {<>
                <Box
                  sx={{
                    display: hasImageLoaded ? 'none' : 'flex',
                    height: 125,
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#2a2057',
                  }}>
                  <CircularProgress />
                </Box>
                <img
                  src={image}
                  style={{
                    display: hasImageLoaded ? '' : 'none', width: '100%',
                  }}
                  alt={head}
                  onLoad={() => setHasImageLoaded(true)}/>
              </>}
            />
            <CardContent  >
              <Box >
                <Typography gutterBottom variant="h5" component="div">
                  {head}
                </Typography>
                <Rating name="read-only" value={rating} readOnly precision={0.5}/>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Slide>
  );
};

export default Skill;