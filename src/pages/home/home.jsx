import { Box, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import bg from "../../assets/home/bg-1.png";
import illustration1 from "../../assets/illustrations/Jumbroton-Illustration.png";
import { IntroductionSection } from "../../components/introduction-section/introduction-section";
import { ServiceSection } from "../../components/service-section/service-section";
import marketingIllustration from "../../assets/illustrations/Marketing-Illustration.png";
import useStyles from "./home.style";
import { PlatformSection } from "../../components/platform-section/platform-section";
import { SubtitleText } from "../../components/mui-typography/subtitle-text/subtitle-text";
import { HeaderText } from "../../components/mui-typography/header-text/header-text";

export const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Box position="relative">
        <img src={bg} alt="Background" className={classes.image} />
        <Box className={classes.overlay}>
          <Box className={classes.container}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item md={4} sm={6} xs={12}>
                <Box>
                  <Typography className={classes.header} variant="h2">
                    We Code With High Quality
                  </Typography>
                </Box>
                <Box>
                  <Typography className={classes.body}>
                    EOA Tech is a software development company that specializes
                    in software development or apps. EOA Tech has been a lot
                    involved helping clients solve their problems. As it grows,
                    it wants to be know more and it brings in new clients
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={8} sm={6} xs={12}>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="flex-end"
                >
                  <img
                    src={illustration1}
                    alt="Jumbotron Illustration"
                    className={classes.jumbotronIllustration}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <IntroductionSection />
      <ServiceSection />
      <Box className={classes.container}>
        <Box marginTop={10}>
          <Paper className={classes.paper}>
            <Box className={classes.flex}>
              <Box className={classes.sloganContainer}>
                <Typography variant="h4" className={classes.sloganText}>
                  We share our ideas, knowledge and experiences. So let’s see
                  how you can improve your business with EOA Tech now
                </Typography>
              </Box>
              <Box p={1}>
                <img
                  src={marketingIllustration}
                  alt="Marketing Illustration"
                  className={classes.marketingIllustration}
                />
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
      <PlatformSection />
      <Box className={classes.container}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box marginTop={10} textAlign="center">
            <SubtitleText text="Client" />
          </Box>
          <Box marginTop={3}>
            <HeaderText text="Our Clients" />
          </Box>
        </Box>
      </Box>
      <Box className={classes.container}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginBottom={10}
        >
          <Box marginTop={10}>
            <SubtitleText text="Development" />
          </Box>
          <Box marginTop={3} textAlign="center">
            <HeaderText text="Language & Framework" />
          </Box>
        </Box>
      </Box>
    </>
  );
};
