import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import bookReader from "@iconify-icons/la/book-reader";
import { Icon } from "@iconify/react";
import portraitIcon from "@iconify-icons/la/portrait";
import fileContract from "@iconify-icons/la/file-contract";
import laptopCode from "@iconify-icons/la/laptop-code";
import { DescriptionText } from "../mui-typography/description-text/description-text";
import { HeaderText } from "../mui-typography/header-text/header-text";
import { SubtitleText } from "../mui-typography/subtitle-text/subtitle-text";
import useStyles from "./introduction-section.style";

export const IntroductionSection = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.introductions}>
          <Box flex={1.5}>
            <Box marginTop={6}>
              <SubtitleText text="Introduction" />
            </Box>
            <Box marginTop={3}>
              <HeaderText text="How We Work" />
            </Box>
            <Box className={classes.descriptionText}>
              <DescriptionText text="We always provide the best services and solutions to our clents requirements. We give you good quality software development through a better understanding of your bussiness and future" />
            </Box>
          </Box>
          <Box flex={1}>
            <Grid container direction="row" justify="flex-end">
              <Grid item sm={6} xs={12}>
                <Box marginTop={6}>
                  <Box className={classes.box}>
                    <Box className={classes.circle}>
                      <Icon icon={bookReader} className={classes.icon} />
                    </Box>
                    <Box marginTop={2}>
                      <Typography variant="h5" className={classes.text}>
                        Discover Project Goal
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box marginTop={6}>
                  <Box className={classes.box}>
                    <Box className={classes.circle}>
                      <Icon icon={portraitIcon} className={classes.icon} />
                    </Box>
                    <Box marginTop={2}>
                      <Typography variant="h5" className={classes.text}>
                        Get a Proposal from Us
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box marginTop={6}>
                  <Box className={classes.box}>
                    <Box className={classes.circle}>
                      <Icon icon={fileContract} className={classes.icon} />
                    </Box>
                    <Box marginTop={2}>
                      <Typography variant="h5" className={classes.text}>
                        Taken the Contract
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box marginTop={6}>
                  <Box className={classes.box}>
                    <Box className={classes.circle}>
                      <Icon icon={laptopCode} className={classes.icon} />
                    </Box>
                    <Box marginTop={2}>
                      <Typography variant="h5" className={classes.text}>
                        Project Implementation
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
