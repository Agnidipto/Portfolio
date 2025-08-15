import { useEffect } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { motion, useAnimation } from 'framer-motion';
import { timeDiff } from '../../../Utils/timeDiff';
import Heading from './Heading';

const textVariants = (delay1, delay2) => {
  return {
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: delay1 } },
    hidden: { opacity: 0, x: 1000, transition: { duration: 1, delay: delay2 } },
  };
};

const BigDevice = ({ aboutInView, secondInView }) => {

  const textControls1 = useAnimation();
  const textControls2 = useAnimation();
  const textControls3 = useAnimation();
  const textControls4 = useAnimation();

  useEffect(() => {
    if(aboutInView) {
      textControls1.start('visible');
      textControls2.start('visible');
      textControls3.start('visible');
      textControls4.start('visible');
    }
    else {
      textControls1.start('hidden');
      textControls2.start('hidden');
      textControls3.start('hidden');
      textControls4.start('hidden');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aboutInView]);

  useEffect(() => {
    if (aboutInView)
    {if(!secondInView) {
      textControls1.start('visible');
      textControls2.start('visible');
      textControls3.start('visible');
      textControls4.start('visible');
    }
    else {
      textControls1.start('hidden');
      textControls2.start('hidden');
      textControls3.start('hidden');
      textControls4.start('hidden');
    }}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondInView]);

  return (
    <div
      style={{ position: 'sticky', top: 65, zIndex: 1, boxShadow: 'none' }} className='full-height dark-bg'>
      <div className='centered' style={{ width: '100%', overflow: 'hidden' }}>

        <div style={{ margin: 'auto', overflow: 'hidden', width: '100%' }}>
          <div style={{ width: '30vw', margin: 'auto', textAlign: 'left', lineHeight: '1.5em' }} >
            <motion.div variants={textVariants(0, 0.6)}
              initial={'hidden'}
              animate={textControls1}>
              <Heading/>
            </motion.div>
            <Box sx={{ textAlign: 'left', maxWidth: '800px', marginBottom: 10 }}>
              <motion.div variants={textVariants(0.2, 0.4)}
                initial={'hidden'}
                animate={textControls2}>
                Hi! As you already might’ve guessed, I’m a Full-Stack Developer. I have been a Software Developer for {timeDiff()} years, and you can take a look at my experiences below! I am really passionate about everything Tech, and my goals in life are to provide to this community as much as I can. I want to work in, and with, products that are inspiring and essential.
              </motion.div>
              <br/> <br/>
              <motion.div variants={textVariants(0.4, 0.2)}
                initial={'hidden'}
                animate={textControls3}>
                Besides my life as a Developer, you can find me on the lonely street grabbing a picture of things fascinating, or producing music that soothe the soul. Or, you can just find me by my table, hacking away into things!
              </motion.div>
              <br/> <br/>
              <motion.div variants={textVariants(0.6, 0)}
                initial={'hidden'}
                animate={textControls4}>
                Happy hacking, folks!
              </motion.div>
            </Box>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BigDevice;