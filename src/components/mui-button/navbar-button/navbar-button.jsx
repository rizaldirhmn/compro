import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./navbar-button.style";
import USIcon from "../../../assets/icons/united-states-of-america.svg";
import indonesianIcon from "../../../assets/icons/indonesia.svg";

export const NavbarButton = ({ condition, ...props }) => {
  const classes = useStyles();
  return (
    <Button
      {...props}
      className={condition ? classes.buttonActive : classes.button}
      disableElevation={true}
    >
      {props.lang === "en" ? (
        <img src={USIcon} alt="icons" className={classes.icon} />
      ) : (
        <img src={indonesianIcon} alt="icons" className={classes.icon} />
      )}
    </Button>
  );
};
