import React, { useState } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import {
  useStyles,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "./mui-appbar.style";
import logo from "../../assets/logo/logo-eoa-main.png";
import { Box, Typography } from "@material-ui/core";
import { NavbarButton } from "../navbar-button/navbar-button";

export const MuiAppbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="sticky" className={classes.Appbar}>
        <Toolbar className={classes.toolbar}>
          <Box>
            <img src={logo} className={classes.logo} />
          </Box>
          <Box className={classes.menuItems}>
            <Box>
              <Typography className={classes.menuText}>Home</Typography>
            </Box>
            <Box>
              <Typography className={classes.menuText}>Company</Typography>
            </Box>
            <Box>
              <Typography className={classes.menuText}>Project</Typography>
            </Box>
            <Box>
              <Typography className={classes.menuText}>Languange</Typography>
            </Box>
          </Box>
          <IconButton
            className={classes.menuButton}
            color="primary"
            onClick={() => toggleDrawer("top", true)}
            aria-label="menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
        <Drawer
          anchor="top"
          open={open}
          onClose={toggleDrawer}
          className={classes.drawerPosition}
          classes={{ paper: classes.paper }}
          BackdropProps={{ invisible: true }}
        >
          <div className={classes.toolbarmixins} />
          <div className={clsx(classes.list, classes.fullList)}>
            <List className={classes.listItem}>
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Company" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Project" />
              </ListItem>
              <Accordion
                square
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Language</Typography>
                  <Box ml={1}>
                    {expanded === "panel1" ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    margin="0 auto"
                    display="flex"
                    width="100%"
                    justifyContent="space-between"
                  >
                    <NavbarButton
                      text="English"
                      color="primary"
                      variant="contained"
                    />
                    <NavbarButton
                      text="Indonesia"
                      color="primary"
                      variant="outlined"
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
