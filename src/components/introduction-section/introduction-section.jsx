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

export const IntroductionSection = ({ t }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.introductions}>
        <Box flex={1.5}>
          <Box marginTop={10}>
            <SubtitleText text={`${t("IntroductionText.1")}`} />
          </Box>
          <Box marginTop={3}>
            <HeaderText text={`${t("IntroductionHeader.1")}`} />
          </Box>
          <Box className={classes.descriptionText}>
            <DescriptionText text={`${t("IntroductionDescription.1")}`} />
          </Box>
        </Box>
        <Box flex={1} marginTop={10}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="baseline"
          >
            <Grid item sm={6} xs={12}>
              <Box marginTop={6}>
                <Box className={classes.box}>
                  <Box className={classes.circle}>
                    <Icon icon={bookReader} className={classes.icon} />
                  </Box>
                  <Box marginTop={2}>
                    <Typography variant="h5" className={classes.text}>
                      {t("IntroductionContent.1")}
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
                      {t("IntroductionContent.2")}
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
                      {t("IntroductionContent.3")}
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
                      {t("IntroductionContent.4")}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
