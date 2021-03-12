import { Box, Typography, Container } from "@material-ui/core";
import React from "react";
import useStyles from "./footer.style";
import logo from "../../assets/logo/logo-eoa-white-2.png";
import youtubeFill from "@iconify-icons/akar-icons/youtube-fill";
import instagramFilled from "@iconify-icons/ant-design/instagram-filled";
import facebookFill from "@iconify-icons/akar-icons/facebook-fill";
import linkedinFill from "@iconify-icons/akar-icons/linkedin-fill";
import mapMarkerLine from "@iconify-icons/clarity/map-marker-line";
import gmailIcon from "@iconify-icons/cib/gmail";
import { Icon } from "@iconify/react";
import { useTranslation, Trans } from "react-i18next";

export const FooterComponent = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <>
      <Box className={classes.footerPaper}>
        <Box className={classes.overlay}></Box>
        <Container>
          <Box p={1} paddingTop={5} className={classes.footerSpace}>
            <Box className={classes.footerItems}>
              <img
                src={logo}
                alt="Logo EOA"
                className={classes.footerLogoEOA}
              />
              <Box marginTop={4}>
                <Typography className={classes.footerText}>
                  <Trans count={1}>{t("FooterDescriptionText.1")}</Trans>
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
                  <Trans count={1}>{t("AddressText.1")}</Trans>
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
                    EOA Business Center, Peto Junction JL Puri Beta Town Center
                    LT 2 No. 29, Larangan, Ciledug, Tangerang 15154
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className={classes.footerItems}>
              <Box>
                <Typography className={classes.footerTextHeader}>
                  <Trans count={1}>{t("ContactText.1")}</Trans>
                </Typography>
              </Box>
              <Box display="flex" marginTop={4}>
                <Box>
                  <Icon className={classes.footerIcon} icon={gmailIcon} />
                </Box>
                <Box>
                  <Typography
                    className={classes.footerText}
                    style={{ marginLeft: "40px" }}
                  >
                    it.helpdesk@eoagroup.id
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box p={3} className={classes.footerCopyright}>
          <Typography className={classes.footerTextCopyright}>
            Copyright by EOA Technology International 2021 All Right Reserved
          </Typography>
        </Box>
      </Box>
    </>
  );
};
