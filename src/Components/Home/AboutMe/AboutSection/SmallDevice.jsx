import { Typography, Box } from "@mui/material";
import { timeDiff } from '../../../Utils/timeDiff';
import Heading from "./Heading";

export const SmallDevice = () => {
  return (
    <>
      <Heading/>
      <Box sx={{ textAlign: 'left', maxWidth: '800px', marginBottom: 10 }}>
        <Typography variant='p'>
          Hi! As you already might’ve guessed, I’m a Full-Stack Developer. I have been a Software Developer for {timeDiff()} years, and you can take a look at my experiences below! I am really passionate about everything Tech, and my goals in life are to provide to this community as much as I can. I want to work in, and with, products that are inspiring and essential. <br/> <br/>
          Besides my life as a Developer, you can find me on the lonely street grabbing a picture of things fascinating, or producing music that soothe the soul. Or, you can just find me by my table, hacking away into things! <br/> <br/>

          Happy hacking, folks!
        </Typography>
      </Box>
    </>
  );
};