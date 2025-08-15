import { Box, Typography } from '@mui/material';

const LeftContent = () => {
  return (
    <div className="container" style={{ height: '90%' }}>
      <Box
        className="centered"
        sx={{
          width: { xs: '70%', sm: '55%', md: '40%', lg: '70%', xl: '60%' }
        }}
      >
        <img
          alt="Agnidipto Sinha"
          src='/images/home/hero/profile.png'
          style={{ maxHeight: '50%', maxWidth: '90%', marginTop: '20px' }}
        />
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <Box
            className="glass-effect"
            sx={{
              marginTop: '-5px',
              width: { xs: '100%' }
            }}
          >
            {/* <RotatingHeader /> */}
            <Typography
              variant={'h2'}
              color="primary.light"
              sx={{
                fontSize: { xs: '40px', sm: '45px', md: '50px' },
                marginTop: '10px',
                marginBottom: '10px'
              }}
            >
              Agnidipto
            </Typography>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default LeftContent;
