import { Button, Grid, Box, Typography } from "@mui/material";
import UpperLinks from "./UpperLinks";

const RightContent = ({
  projectRef,
  skillsAndExperienceRef,
  handleSnackbarOpen,
}) => {
  const ProjectButtonOnClick = (event) => {
    event.preventDefault();
    projectRef.current.scrollIntoView({
      // behavior: 'smooth'
    });
  };

  const SkillsAndExperienceOnClick = (event) => {
    event.preventDefault();
    skillsAndExperienceRef.current.scrollIntoView({
      // behavior:'smooth'
    });
  };

  return (
    <Box className="container" sx={{ height: { xs: "90%", md: "90%" } }}>
      <Box
        className="centered glass-effect"
        sx={{
          width: { xs: "90%", lg: "80%", xl: "70%" },
          height: { xs: "100%", sm: "100%", md: "85%", lg: "80%" },
        }}
      >
        <Typography
          variant={"h1"}
          color="primary.light"
          gutterBottom
          sx={{
            display: { xs: "block", lg: "block" },
            fontSize: { xs: "45px", sm: "70px", md: "70px", lg: "90px" },
            fontFamily: "Playfair Display, serif",
            marginTop: { xs: 3, sm: 2, md: 0 },
          }}
        >
          Engineering
          <Typography
            sx={{
              display: { xs: "block", lg: "block" },
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              color: "#ffed97",
              fontSize: { xs: "30px", sm: "35px", md: "40px", lg: "55px" },
              marginTop: 2,
              marginLeft: 2,
              marginRight: 2,
            }}
          >
            beyond
          </Typography>
          Algorithms
        </Typography>
        <div
          style={{ marginBottom: 10, width: "100%", left: 0, bottom: 0 }}
          className="bottom-left"
        >
          <UpperLinks handleSnackbarOpen={handleSnackbarOpen} />

          <Grid container columnSpacing={1} style={{ padding: "10px" }}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                onClick={ProjectButtonOnClick}
                className="header-button"
              >
                Projects
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                onClick={SkillsAndExperienceOnClick}
                className="header-button"
              >
                Skills
              </Button>
            </Grid>
            <Grid item xs={4}>
              <a href="/files/Agnidipto_Sinha_Resume.pdf" download>
                <Button variant="contained" className="header-button">
                  Resume
                </Button>
              </a>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default RightContent;
