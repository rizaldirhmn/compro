import React from "react";
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
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
  const theme = useTheme();
  const matchXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <Box className={classes.introductions}>
        <Grid
          container
          justify="space-between"
          alignItems="flex-start"
          spacing={4}
        >
          <Grid item md={6} sm={12} xs={12}>
            <Box>
              <SubtitleText text={`${t("IntroductionText.1")}`} />
            </Box>
            <Box marginTop={3}>
              <HeaderText text={`${t("IntroductionHeader.1")}`} />
            </Box>
            <Box className={classes.descriptionText}>
              <DescriptionText text={`${t("IntroductionDescription.1")}`} />
            </Box>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="baseline"
              spacing={matchXS ? 0 : 6}
            >
              <Grid item md={6} sm={6} xs={12}>
                <Box className={classes.firstBox}>
                  <Box className={classes.circle}>
                    <Icon icon={bookReader} className={classes.icon} />
                  </Box>
                  <Box marginTop={2}>
                    <Typography variant="h5" className={classes.text}>
                      {t("IntroductionContent.1")}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
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
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
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
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <Box className={classes.lastBox}>
                  <Box className={classes.circle}>
                    <Icon icon={laptopCode} className={classes.icon} />
                  </Box>
                  <Box marginTop={2}>
                    <Typography variant="h5" className={classes.text}>
                      {t("IntroductionContent.4")}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
