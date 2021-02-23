import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./footer.style";
import logo from "../../assets/logo/logo-eoa-white-2.png";
import youtubeFill from "@iconify-icons/akar-icons/youtube-fill";
import instagramFilled from "@iconify-icons/ant-design/instagram-filled";
import facebookFill from "@iconify-icons/akar-icons/facebook-fill";
import linkedinFill from "@iconify-icons/akar-icons/linkedin-fill";
import mapMarkerLine from "@iconify-icons/clarity/map-marker-line";
import phoneIcon from "@iconify-icons/akar-icons/phone";
import { Icon } from "@iconify/react";

export const FooterComponent = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.footerPaper}>
        <Box className={classes.overlay}></Box>
        <Box className={classes.container}>
          {/* <Box p={1} paddingTop={5}></Box> */}
          <Box p={1} paddingTop={5} className={classes.footerSpace}>
            <Box className={classes.footerItems}>
              <img
                src={logo}
                alt="Logo EOA"
                className={classes.footerLogoEOA}
              />
              <Box marginTop={4}>
                <Typography className={classes.footerText}>
                  The software house company, a software development company
                  company that specializes in software development apps
                </Typography>
              </Box>
              <Box
                display="flex"
                marginTop={4}
                justifyContent="space-between"
                width="220px"
              >
                <Box>
                  <Icon className={classes.footerIcon} icon={youtubeFill} />
                </Box>
                <Box>
                  <Icon className={classes.footerIcon} icon={instagramFilled} />
                </Box>
                <Box>
                  <Icon className={classes.footerIcon} icon={facebookFill} />
                </Box>
                <Box>
                  <Icon className={classes.footerIcon} icon={linkedinFill} />
                </Box>
              </Box>
            </Box>
            <Box className={classes.footerItems}>
              <Box>
                <Typography className={classes.footerTextHeader}>
                  Address
                </Typography>
              </Box>
              <Box display="flex" marginTop={4}>
                <Box>
                  <Icon className={classes.footerIcon} icon={mapMarkerLine} />
                </Box>
                <Box>
                  <Typography
                    className={classes.footerText}
                    style={{ marginLeft: "40px" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    Nullam erat sed porta nibh Sed cursus gravida mattis posuere
                    sapien turpis ut
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className={classes.footerItems}>
              <Box>
                <Typography className={classes.footerTextHeader}>
                  Contact
                </Typography>
              </Box>
              <Box display="flex" marginTop={4}>
                <Box>
                  <Icon className={classes.footerIcon} icon={phoneIcon} />
                </Box>
                <Box>
                  <Typography
                    className={classes.footerText}
                    style={{ marginLeft: "40px" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    Nullam erat sed porta nibh Sed cursus gravida mattis posuere
                    sapien turpis ut
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box p={3} className={classes.footerCopyright}>
          <Typography className={classes.footerTextCopyright}>
            Copyright by EOA Technology International 2021 All Right Reserved
          </Typography>
        </Box>
      </Box>
    </>
  );
};
