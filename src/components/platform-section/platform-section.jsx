import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import useStyles from "./platform-section.style";
import { SubtitleText } from "../mui-typography/subtitle-text/subtitle-text";
import { DescriptionText } from "../mui-typography/description-text/description-text";
import { HeaderText } from "../mui-typography/header-text/header-text";
import webIcon from "@iconify-icons/mdi/web";
import androidAlt from "@iconify-icons/cib/android-alt";
import appleFilled from "@iconify-icons/ant-design/apple-filled";
import { Icon } from "@iconify/react";

export const PlatformSection = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.flex}>
          <Box flex={1}>
            <Box marginTop={10}>
              <SubtitleText text="Develop" />
            </Box>
            <Box marginTop={3}>
              <HeaderText text="Platforms" />
            </Box>
          </Box>
          <Box flex={1}>
            <Box marginTop={3}>
              <DescriptionText text="We know what platforms our clients need, with the most advanced and reliable technology. So clients can trust us entirely according to the spesifications that have been given" />
            </Box>
          </Box>
        </Box>
        <Box className={classes.position}>
          <Box marginTop={4}>
            <Paper className={classes.platformPaper}>
              <Box className={classes.platformSpace}>
                <Box className={classes.iconBox}>
                  <Icon icon={webIcon} className={classes.iconPlatform} />
                </Box>
                <Box marginLeft={6}>
                  <Typography className={classes.platformContent}>
                    www
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box marginTop={4}>
            <Paper className={classes.platformPaper}>
              <Box className={classes.platformSpace}>
                <Box className={classes.iconBox}>
                  <Icon icon={androidAlt} className={classes.iconPlatform} />
                </Box>
                <Box marginLeft={6}>
                  <Typography className={classes.platformContent}>
                    Android
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box marginTop={4}>
            <Paper className={classes.platformPaper}>
              <Box className={classes.platformSpace}>
                <Box className={classes.iconBox}>
                  <Icon icon={appleFilled} className={classes.iconPlatform} />
                </Box>
                <Box marginLeft={6}>
                  <Typography className={classes.platformContent}>
                    iOS
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
};
