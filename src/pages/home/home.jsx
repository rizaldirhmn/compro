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
import { useTranslation } from "react-i18next";

export const HomePage = React.memo(() => {
  const classes = useStyles();

  const { t } = useTranslation();

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
              <Grid item md={5} sm={6} xs={12}>
                <Box>
                  <Typography className={classes.header} variant="h2">
                    {t("HeaderJumbotron.1")}
                  </Typography>
                </Box>
                <Box>
                  <Typography className={classes.body}>
                    {t("JumbotronDescription.1")}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={7} sm={6} xs={12}>
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
      <IntroductionSection t={t} />
      <ServiceSection t={t} />
      <Box className={classes.container}>
        <Box marginTop={10}>
          <Paper className={classes.paper}>
            <Box className={classes.flex}>
              <Box className={classes.sloganContainer}>
                <Typography variant="h4" className={classes.sloganText}>
                  {t("SloganText.1")}
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
      <PlatformSection t={t} />
      <Box className={classes.container}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box marginTop={10} textAlign="center">
            <SubtitleText text={`${t("ClientText.1")}`} />
          </Box>
          <Box marginTop={3}>
            <HeaderText text={`${t("ClientHeader.1")}`} />
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
            <SubtitleText text={`${t("DevelopmentText.1")}`} />
          </Box>
          <Box marginTop={3} textAlign="center">
            <HeaderText text={`${t("DevelopmentHeader.1")}`} />
          </Box>
        </Box>
      </Box>
    </>
  );
});
