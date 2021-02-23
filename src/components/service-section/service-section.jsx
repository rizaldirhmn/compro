import React from "react";
import webIllustration from "../../assets/illustrations/Web-Development-Illustration2.png";
import mobileIllustration from "../../assets/illustrations/Mobile-App-Illustration2.png";
import erpIllustration from "../../assets/illustrations/ERP-Illustration2.png";
import { HeaderText } from "../mui-typography/header-text/header-text";
import { DescriptionText } from "../mui-typography/description-text/description-text";
import { SubtitleText } from "../mui-typography/subtitle-text/subtitle-text";
import useStyles from "./service-section.style";
import { Box, Typography } from "@material-ui/core";

export const ServiceSection = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.consBox}>
          <Box flex={1}>
            <Box marginTop={10}>
              <SubtitleText text="Service" />
            </Box>
            <Box marginTop={3}>
              <HeaderText text="Our Services" />
            </Box>
          </Box>
          <Box flex={1}>
            <Box marginTop={3}>
              <DescriptionText text="We are very aware and meticulous in producing high-quality software for our clients, flexible team with high experiences developers and produce software with minimal invesments" />
            </Box>
          </Box>
        </Box>
        <Box className={classes.boxPosition}>
          <Box className={classes.box}>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={webIllustration}
                alt="Web Development Illustration"
                className={classes.illustrations}
              />
            </Box>
            <Box marginTop={2}>
              <Typography variant="h5" className={classes.text}>
                Web Development
              </Typography>
            </Box>
            <Box marginTop={2} className={classes.descriptionText}>
              <DescriptionText
                textAlignLeft={true}
                text="We Developing a simple single static page of plain text to complex Web Site - based Internet applications, businesses, and social network Services"
              />
            </Box>
          </Box>
          <Box className={classes.box}>
            <Box>
              <img
                src={mobileIllustration}
                alt="Mobile App Illustration"
                className={classes.illustrations}
              />
            </Box>
            <Box marginTop={2}>
              <Typography variant="h5" className={classes.text}>
                Mobile App
              </Typography>
            </Box>
            <Box marginTop={2} className={classes.descriptionText}>
              <DescriptionText
                textAlignLeft={true}
                text="We Developing a Mobile app for mobile device, such as personal digital assistants, enterprise digital assistants or mobile phones"
              />
            </Box>
          </Box>
          <Box className={classes.box}>
            <Box>
              <img
                src={erpIllustration}
                alt="ERP Illustration"
                className={classes.illustrations}
              />
            </Box>
            <Box marginTop={2}>
              <Typography variant="h5" className={classes.text}>
                ERP
              </Typography>
            </Box>
            <Box marginTop={2} className={classes.descriptionText}>
              <DescriptionText
                textAlignLeft={true}
                text="We Developing a ERP solution based on your business requirements and to help you grow your business exponentially"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
