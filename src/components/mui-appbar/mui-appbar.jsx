import React, { useEffect, useState } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles, StyledMenu, StyledMenuItem } from "./mui-appbar.style";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo/logo-eoa-main.png";
import {
  Box,
  Container,
  Fade,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { MuiDrawerComponent } from "../mui-drawer/mui-drawer";
import uiEarthEast from "@iconify-icons/geo/ui-earth-east";
import uiEarthWest from "@iconify-icons/geo/ui-earth-west";
import i18next from "i18next";
import { useTranslation, Trans } from "react-i18next";
import { FooterComponent } from "../footer/footer";

export const MuiAppbar = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState("en");
  const { t } = useTranslation();
  const location = useLocation();

  const currentPage = (path, active, inactive) => {
    return location.pathname === path ? active : inactive;
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  return (
    <>
      <AppBar position="sticky" className={classes.Appbar}>
        <Container>
          <Box className={classes.toolbar}>
            <Box>
              <img src={logo} className={classes.logo} />
            </Box>
            <Box className={classes.menuItems}>
              <Box onClick={() => history.push("/")}>
                <Typography
                  className={currentPage(
                    "/",
                    classes.menuTextActive,
                    classes.menuText
                  )}
                >
                  <Trans count={1}>{t("NavbarItems.1")}</Trans>
                </Typography>
              </Box>
              <Box onClick={() => history.push("/company")}>
                <Typography
                  className={currentPage(
                    "/company",
                    classes.menuTextActive,
                    classes.menuText
                  )}
                >
                  <Trans count={1}>{t("NavbarItems.2")}</Trans>
                </Typography>
              </Box>
              <Box onClick={() => history.push("/project")}>
                <Typography
                  className={currentPage(
                    "/project",
                    classes.menuTextActive,
                    classes.menuText
                  )}
                >
                  <Trans count={1}>{t("NavbarItems.3")}</Trans>
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={handleClick}
                className={classes.menuText}
              >
                <Box>
                  <Typography className={classes.menuText}>
                    <Trans count={1}>{t("NavbarItems.4")}</Trans>
                  </Typography>
                </Box>
                <Box marginTop={1}>
                  {Boolean(anchorEl) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </Box>
              </Box>
            </Box>
            <IconButton
              className={classes.menuButton}
              color="primary"
              onClick={() => toggleDrawer()}
              aria-label="menu"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
          <MuiDrawerComponent
            open={open}
            toggleDrawer={toggleDrawer}
            handleChangeLanguage={handleChangeLanguage}
            setLanguage={setLanguage}
            language={language}
            t={t}
          />
        </Container>
      </AppBar>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <StyledMenuItem
          onClick={() => {
            handleChangeLanguage("en");
            setLanguage("en");
          }}
        >
          <ListItemIcon>
            <Icon
              color={language === "en" ? "#16A1E0" : "#C4C4C4"}
              icon={uiEarthWest}
              className={classes.icon}
              width="1.5em"
              height="1.5em"
            />
          </ListItemIcon>
          <ListItemText
            primary={`${t("Languages.1")}`}
            className={language === "en" ? classes.active : ""}
          />
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            handleChangeLanguage("id");
            setLanguage("id");
          }}
        >
          <ListItemIcon>
            <Icon
              color={language === "id" ? "#16A1E0" : "#C4C4C4"}
              icon={uiEarthEast}
              className={classes.icon}
              width="1.5em"
              height="1.5em"
            />
          </ListItemIcon>
          <ListItemText
            primary={`${t("Languages.2")}`}
            className={language === "id" ? classes.active : ""}
          />
        </StyledMenuItem>
      </StyledMenu>
      {children}
      <FooterComponent />
    </>
  );
};
