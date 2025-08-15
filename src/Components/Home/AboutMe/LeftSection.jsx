import Box from '@mui/material/Box';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const LeftSection = ({ inView }) => {

  const imageControls = useAnimation();

  const imageVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -1000, transition: { duration: 1 } },
  };

  useEffect(() => {
    if(inView) {
      imageControls.start('visible');
    }
    else {
      imageControls.start('hidden');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (<>
    <Box sx={{ display: { md: 'block', xs: 'none' }, position: 'sticky', top: 65 }}>
      <motion.div
        animate={imageControls}
        initial="hidden"
        variants={imageVariants}
        className="square">
        <img
          src='images/profile.jpeg'
          alt='pofile'
          className='profile-img'
        />

      </motion.div>
    </Box>
    <Box
      sx={{
        display: {
          md: 'none',
          xs: 'block',
        },
        width: '100%',
        textAlign: 'center',
      }}
    >
      <img
        src='images/profile.jpeg'
        alt='pofile'
        style={{
          width: '100%',
          maxWidth: 600,
          margin: 'auto',
        }}
      />
    </Box>
  </>);
};

export default LeftSection;