import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import bg from "../../assets/home/bg-1.png";
import illustration1 from "../../assets/illustrations/Jumbroton-Illustration.png";
import { IntroductionSection } from "../../components/introduction-section/introduction-section";
import { ServiceSection } from "../../components/service-section/service-section";
import marketingIllustration from "../../assets/illustrations/Marketing-Illustration.png";
import useStyles from "./home.style";
import { PlatformSection } from "../../components/platform-section/platform-section";
import { useTranslation } from "react-i18next";
import { ClientSection } from "../../components/client-section/client-section";
import { TechnologySection } from "../../components/technology-section/technology-section";

export const HomePage = React.memo(() => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const { t } = useTranslation();

  return (
    <>
      <Box position="relative">
        <img src={bg} alt="Background" className={classes.image} />
        <Box className={classes.overlay}>
          <Container>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.spacing}
            >
              <Grid item md={5} sm={12} xs={12}>
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
              <Grid item md={7} sm={12} xs={12}>
                <Grid
                  container
                  direction="row"
                  justify={matches ? "center" : "flex-end"}
                  alignItems={matches ? "center" : "flex-end"}
                >
                  <img
                    src={illustration1}
                    alt="Jumbotron Illustration"
                    className={classes.jumbotronIllustration}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Container>
        <IntroductionSection t={t} />
        <ServiceSection t={t} />
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
        <PlatformSection t={t} />
        <ClientSection t={t} />
        <TechnologySection t={t} />
      </Container>
    </>
  );
});
