import React from "react";
import webIllustration from "../../assets/illustrations/Web-Development-Illustration2.png";
import mobileIllustration from "../../assets/illustrations/Mobile-App-Illustration2.png";
import erpIllustration from "../../assets/illustrations/ERP-Illustration2.png";
import { HeaderText } from "../mui-typography/header-text/header-text";
import { DescriptionText } from "../mui-typography/description-text/description-text";
import { SubtitleText } from "../mui-typography/subtitle-text/subtitle-text";
import useStyles from "./service-section.style";
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

export const ServiceSection = ({ t }) => {
  const classes = useStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box className={classes.consBox}>
        <Box flex={1}>
          <Box marginTop={10}>
            <SubtitleText text={`${t("ServiceText.1")}`} />
          </Box>
          <Box marginTop={3}>
            <HeaderText text={`${t("ServiceHeader.1")}`} />
          </Box>
        </Box>
        <Box flex={1}>
          <Box marginTop={3}>
            <DescriptionText text={`${t("ServiceDescription.1")}`} />
          </Box>
        </Box>
      </Box>
      <Box marginTop={10} className={classes.position}>
        <Grid
          container
          justify={match ? "flex-start" : "space-between"}
          spacing={4}
        >
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Box>
              <img
                src={webIllustration}
                alt="Web Development Illustration"
                className={classes.illustrations}
              />
            </Box>
            <Box marginTop={2}>
              <Typography variant="h5" className={classes.text}>
                {t("ServiceContent.ServiceContentHeader.1")}
              </Typography>
            </Box>
            <Box marginTop={2} className={classes.descriptionText}>
              <DescriptionText
                textAlignLeft={true}
                text={`${t("ServiceContent.ServiceContentDescription.1")}`}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Box>
              <img
                src={mobileIllustration}
                alt="Mobile App Illustration"
                className={classes.illustrations}
              />
            </Box>
            <Box marginTop={2}>
              <Typography variant="h5" className={classes.text}>
                {t("ServiceContent.ServiceContentHeader.2")}
              </Typography>
            </Box>
            <Box marginTop={2} className={classes.descriptionText}>
              <DescriptionText
                textAlignLeft={true}
                text={`${t("ServiceContent.ServiceContentDescription.2")}`}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Box>
              <img
                src={erpIllustration}
                alt="ERP Illustration"
                className={classes.illustrations}
              />
            </Box>
            <Box marginTop={2}>
              <Typography variant="h5" className={classes.text}>
                {t("ServiceContent.ServiceContentHeader.3")}
              </Typography>
            </Box>
            <Box marginTop={2} className={classes.descriptionText}>
              <DescriptionText
                textAlignLeft={true}
                text={`${t("ServiceContent.ServiceContentDescription.3")}`}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
