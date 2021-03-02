import React, { useState } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Box, ListItemText, Typography } from "@material-ui/core";
import { NavbarButton } from "../navbar-button/navbar-button";
import { useHistory, useLocation } from "react-router-dom";
import {
  useStyles,
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from "./mui-drawer.style";
import { useTranslation, Trans } from "react-i18next";

export const MuiDrawerComponent = ({ ...props }) => {
  const {
    open,
    toggleDrawer,
    handleChangeLanguage,
    setLanguage,
    language,
  } = props;
  const [expanded, setExpanded] = useState("panel1");
  const classes = useStyles();
  const { t } = useTranslation();
  const location = useLocation();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const currentPage = (path, active, inactive) => {
    return location.pathname === path ? active : inactive;
  };

  const history = useHistory();

  return (
    <>
      <div className={classes.root}>
        <Drawer
          anchor="top"
          open={open}
          disableScrollLock={true}
          onClose={toggleDrawer}
          className={classes.drawerPosition}
          classes={{ paper: classes.paper }}
          BackdropProps={{ invisible: true }}
        >
          <div className={classes.toolbarmixins} />
          <div className={clsx(classes.list, classes.fullList)}>
            <List className={classes.listItem}>
              <ListItem button>
                <Box
                  width="100%"
                  onClick={() => {
                    toggleDrawer();
                    history.push("/");
                  }}
                >
                  <ListItemText
                    primary={`${t("NavbarItems.1")}`}
                    className={currentPage(
                      "/",
                      classes.menuTextActive,
                      classes.menuText
                    )}
                  />
                </Box>
              </ListItem>
              <ListItem button>
                <Box
                  width="100%"
                  onClick={() => {
                    toggleDrawer();
                    history.push("/company");
                  }}
                >
                  <ListItemText
                    primary={`${t("NavbarItems.2")}`}
                    className={currentPage(
                      "/company",
                      classes.menuTextActive,
                      classes.menuText
                    )}
                  />
                </Box>
              </ListItem>
              <ListItem button>
                <Box
                  width="100%"
                  onClick={() => {
                    toggleDrawer();
                    history.push("/project");
                  }}
                >
                  <ListItemText
                    primary={`${t("NavbarItems.3")}`}
                    className={currentPage(
                      "/project",
                      classes.menuTextActive,
                      classes.menuText
                    )}
                  />
                </Box>
              </ListItem>
              <Accordion
                square
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  className={classes.menuText}
                >
                  <Typography className={classes.menuText}>
                    <Trans count={1}>{`${t("NavbarItems.4")}`}</Trans>
                  </Typography>
                  <Box ml={1}>
                    {expanded === "panel1" ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box className={classes.accordionSpace}>
                    <NavbarButton
                      onClick={() => {
                        handleChangeLanguage("en");
                        setLanguage("en");
                      }}
                      lang="en"
                      condition={language === "en"}
                    />
                    <NavbarButton
                      onClick={() => {
                        handleChangeLanguage("id");
                        setLanguage("id");
                      }}
                      lang="id"
                      condition={language === "id"}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            </List>
          </div>
        </Drawer>
      </div>
    </>
  );
};
